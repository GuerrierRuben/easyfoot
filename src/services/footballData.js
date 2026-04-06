const API_BASE_URL = import.meta.env.VITE_FOOTBALL_DATA_PROXY_URL || '/api/football-data';
const REQUEST_TIMEOUT_MS = 12000;
const CACHE_TTL_MS = 60_000;
const responseCache = new Map();
let rateLimitBlockedUntil = 0;

export const COMPETITIONS = [
  { code: 'PL', name: 'Premier League', country: 'England', shortName: 'PL' },
  { code: 'PD', name: 'La Liga', country: 'Spain', shortName: 'LAL' },
  { code: 'SA', name: 'Serie A', country: 'Italy', shortName: 'SA' },
  { code: 'BL1', name: 'Bundesliga', country: 'Germany', shortName: 'BL' },
  { code: 'FL1', name: 'Ligue 1', country: 'France', shortName: 'L1' },
];

function formatApiDate(date) {
  return date.toISOString().slice(0, 10);
}

function shiftDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return formatApiDate(date);
}

function buildQuery(params = {}) {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value));
    }
  });

  const query = searchParams.toString();
  return query ? `?${query}` : '';
}

function getRateLimitDelay(message) {
  const match = /wait\s+(\d+)\s+seconds?/i.exec(message || '');
  return match ? Number(match[1]) * 1000 : 0;
}

function getCacheKey(path, params) {
  return `${path}${buildQuery(params)}`;
}

async function apiRequest(path, params) {
  const cacheKey = getCacheKey(path, params);
  const now = Date.now();
  const cachedEntry = responseCache.get(cacheKey);

  if (cachedEntry && cachedEntry.expiresAt > now) {
    return cachedEntry.value;
  }

  if (cachedEntry?.promise) {
    return cachedEntry.promise;
  }

  if (rateLimitBlockedUntil > now) {
    const seconds = Math.ceil((rateLimitBlockedUntil - now) / 1000);
    throw new Error(`You reached your request limit. Wait ${seconds} seconds.`);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const requestPromise = (async () => {
    let response;
    let data;

    try {
      response = await fetch(`${API_BASE_URL}${cacheKey}`, {
        signal: controller.signal,
      });
      data = await response.json().catch(() => ({}));
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('The API took too long to respond.');
      }

      throw error;
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      const message = data.message || `The API request failed for ${path}.`;
      const rateLimitDelay = getRateLimitDelay(message);

      if (rateLimitDelay > 0) {
        rateLimitBlockedUntil = Date.now() + rateLimitDelay;
      }

      throw new Error(message);
    }

    responseCache.set(cacheKey, {
      value: data,
      expiresAt: Date.now() + CACHE_TTL_MS,
    });

    return data;
  })();

  responseCache.set(cacheKey, {
    promise: requestPromise,
    expiresAt: now + REQUEST_TIMEOUT_MS,
  });

  try {
    return await requestPromise;
  } catch (error) {
    responseCache.delete(cacheKey);
    throw error;
  }
}

function normalizeCompetition(code) {
  return COMPETITIONS.find((competition) => competition.code === code) || { code, name: code, country: '' };
}

function normalizeArea(area) {
  return area?.name || '';
}

function calculateAge(dateOfBirth) {
  if (!dateOfBirth) return null;

  const today = new Date();
  const birth = new Date(dateOfBirth);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age -= 1;
  }

  return age;
}

function normalizeStandingRow(row) {
  return {
    rank: row.position,
    team: {
      id: row.team.id,
      name: row.team.shortName || row.team.tla || row.team.name,
      fullName: row.team.name,
      logo: row.team.crest,
      source: 'football-data',
    },
    points: row.points,
    played: row.playedGames,
    won: row.won,
    drawn: row.draw,
    lost: row.lost,
    goalsFor: row.goalsFor,
    goalsAgainst: row.goalsAgainst,
    goalDiff: row.goalDifference,
    form: (row.form || '').replaceAll(',', ''),
  };
}

function normalizeFootballDataMatch(match, competitionOverride) {
  const competition = competitionOverride || match.competition || {};
  const statusMap = {
    TIMED: 'Scheduled',
    SCHEDULED: 'Scheduled',
    LIVE: 'Live',
    IN_PLAY: 'Live',
    PAUSED: 'Paused',
    FINISHED: 'FT',
    POSTPONED: 'Postponed',
    SUSPENDED: 'Suspended',
    CANCELLED: 'Cancelled',
  };

  return {
    id: match.id,
    sourceId: match.id,
    source: 'football-data',
    round: competition.name || 'Match',
    competitionCode: competition.code,
    date: match.utcDate,
    status: statusMap[match.status] || match.status,
    venue: match.venue || '',
    matchday: match.matchday,
    homeTeam: {
      id: match.homeTeam.id,
      name: match.homeTeam.shortName || match.homeTeam.tla || match.homeTeam.name,
      fullName: match.homeTeam.name,
      logo: match.homeTeam.crest,
      source: 'football-data',
    },
    awayTeam: {
      id: match.awayTeam.id,
      name: match.awayTeam.shortName || match.awayTeam.tla || match.awayTeam.name,
      fullName: match.awayTeam.name,
      logo: match.awayTeam.crest,
      source: 'football-data',
    },
    score: {
      home: match.score?.fullTime?.home ?? match.score?.halfTime?.home ?? 0,
      away: match.score?.fullTime?.away ?? match.score?.halfTime?.away ?? 0,
    },
    scorers: [],
  };
}

function normalizeFootballDataGoal(goal) {
  return {
    minute: goal.minute,
    injuryTime: goal.injuryTime,
    type: goal.type,
    team: {
      id: goal.team.id,
      name: goal.team.name,
    },
    scorer: goal.scorer
      ? {
          id: goal.scorer.id,
          name: goal.scorer.name,
        }
      : null,
    assist: goal.assist
      ? {
          id: goal.assist.id,
          name: goal.assist.name,
        }
      : null,
  };
}

function normalizeFootballDataTeam(team, competition) {
  return {
    id: team.id,
    name: team.shortName || team.tla || team.name,
    fullName: team.name,
    logo: team.crest,
    league: competition.name,
    competitionCode: competition.code,
    country: competition.country,
    source: 'football-data',
  };
}

export async function getCompetitionStandings(code) {
  const data = await apiRequest(`/competitions/${code}/standings`);
  const table = data.standings?.find((standing) => standing.type === 'TOTAL')?.table || [];

  return {
    competition: normalizeCompetition(code),
    season: data.season,
    rows: table.map(normalizeStandingRow),
  };
}

export async function getCompetitionResults(code, limit = 5) {
  const data = await apiRequest(`/competitions/${code}/matches`, {
    status: 'FINISHED',
    dateFrom: shiftDays(-14),
    dateTo: shiftDays(0),
  });

  return (data.matches || [])
    .map((match) => normalizeFootballDataMatch(match, data.competition))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export async function getCompetitionFixtures(code, limit = 5) {
  const data = await apiRequest(`/competitions/${code}/matches`, {
    status: 'SCHEDULED',
    dateFrom: shiftDays(0),
    dateTo: shiftDays(14),
  });

  return (data.matches || [])
    .map((match) => normalizeFootballDataMatch(match, data.competition))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
}

export async function getCompetitionTeams(code) {
  const data = await apiRequest(`/competitions/${code}/teams`);
  const competition = normalizeCompetition(code);

  return (data.teams || []).map((team) => normalizeFootballDataTeam(team, competition));
}

export async function getTeamProfile(team) {
  const data = await apiRequest(`/teams/${team.id}`);
  const competition = data.runningCompetitions?.[0];

  return {
    team: {
      id: data.id,
      name: data.shortName || data.tla || data.name,
      fullName: data.name,
      logo: data.crest,
      league: competition?.name || normalizeArea(data.area),
      coach: data.coach?.name || 'Unknown',
      venue: data.venue || '',
      founded: data.founded || '',
      clubColors: data.clubColors || '',
      website: data.website || '',
      area: normalizeArea(data.area),
      source: 'football-data',
    },
    players: (data.squad || []).map((player) => ({
      id: player.id,
      name: player.name,
      number: player.shirtNumber ?? '--',
      position: player.position || 'Unknown',
      nationality: player.nationality || 'Unknown',
      age: calculateAge(player.dateOfBirth),
      team: data.shortName || data.tla || data.name,
      league: competition?.name || normalizeArea(data.area),
      coach: data.coach?.name || 'Unknown',
    })),
  };
}

export async function getMatchDetails(match) {
  const data = await apiRequest(`/matches/${match.id}`);

  return {
    ...normalizeFootballDataMatch(data, data.competition),
    venue: data.venue || '',
    attendance: data.attendance || null,
    referee: data.referees?.find((referee) => referee.type === 'REFEREE')?.name || '',
    goals: (data.goals || []).map(normalizeFootballDataGoal),
    source: 'football-data',
  };
}
