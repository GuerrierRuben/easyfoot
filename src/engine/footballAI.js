// ============================================================
// FootballAI Engine — Intent parser + response builder
// ============================================================
import { LEAGUES, STANDINGS, RESULTS, LIVE_MATCHES, FIXTURES } from '../data/leaguesData.js';
import { SQUADS, getSquadFallback } from '../data/squadsData.js';
import { PLAYERS } from '../data/playersData.js';

// ── Intent keywords ─────────────────────────────────────────
const INTENT_MAP = [
  { intent: 'live',     keywords: ['live','en direct','en cours','playing now','scores live','live score'] },
  { intent: 'results',  keywords: ['result','score','résultat','derniers matchs','last match','played','full time','ft'] },
  { intent: 'fixtures', keywords: ['fixture','upcoming','next match','schedule','prochain','calendrier','when','prochains'] },
  { intent: 'squad',    keywords: ['squad','effectif','roster','team','équipe','joueurs','players','lineup'] },
  { intent: 'player',   keywords: ['player','joueur','profile','stats','goals','assists','buts','passes'] },
  { intent: 'standings',keywords: ['standing','classement','table','rank','league','ligue','points','position'] },
];

// ── League name matchers ─────────────────────────────────────
const LEAGUE_MAP = [
  { id:39,  patterns:['premier league','epl','england','pl','anglais','angleterre'] },
  { id:140, patterns:['la liga','laliga','spain','espagne','espagnol','liga'] },
  { id:135, patterns:['serie a','seriea','italy','italie','italien'] },
  { id:78,  patterns:['bundesliga','germany','allemagne','allemand','bund'] },
  { id:61,  patterns:['ligue 1','ligue1','france','français','ligue'] },
];

// ── Team name matchers ───────────────────────────────────────
const TEAM_PATTERNS = {
  40:  ['liverpool'], 42: ['arsenal'], 50: ['man city','manchester city','city'],
  49:  ['chelsea'],   47: ['tottenham','spurs'], 33: ['man united','manchester united','united'],
  541: ['real madrid','madrid','real'], 529: ['barcelona','barça','barca'],
  530: ['atletico','atlético'], 532: ['valencia'], 533: ['villarreal'],
  489: ['inter','inter milan'], 496: ['juventus','juve'], 488: ['napoli'],
  492: ['milan','ac milan'], 505: ['atalanta'],
  157: ['bayern','bayern munich'], 165: ['leverkusen','bayer leverkusen'],
  168: ['dortmund','borussia dortmund','bvb'], 173: ['rb leipzig','leipzig'],
  85:  ['psg','paris sg','paris saint-germain','paris'],
  91:  ['monaco'],    80: ['lyon'],   84: ['nice'],
};

// ── Player name matchers ─────────────────────────────────────
const PLAYER_PATTERNS = {
  284:  ['salah','mohamed salah'],
  711:  ['mbappe','mbappé','kylian'],
  708:  ['bellingham','jude'],
  709:  ['vinicius','vini jr','vinicius jr'],
  808:  ['yamal','lamine'],
  1107: ['musiala','jamal'],
  1207: ['wirtz','florian'],
  406:  ['odegaard','ødegaard','martin'],
  510:  ['haaland','erling'],
  909:  ['lautaro','martinez'],
  1010: ['vlahovic','dusan','dušan'],
  1308: ['dembele','dembélé','ousmane'],
};

// ── Helpers ─────────────────────────────────────────────────
function lower(s) { return (s||'').toLowerCase(); }

function detectLeague(msg) {
  for (const l of LEAGUE_MAP) {
    if (l.patterns.some(p => lower(msg).includes(p))) return l.id;
  }
  return 39; // default PL
}

function detectTeam(msg) {
  for (const [id, patterns] of Object.entries(TEAM_PATTERNS)) {
    if (patterns.some(p => lower(msg).includes(p))) return Number(id);
  }
  return null;
}

function detectPlayer(msg) {
  for (const [id, patterns] of Object.entries(PLAYER_PATTERNS)) {
    if (patterns.some(p => lower(msg).includes(p))) return Number(id);
  }
  return null;
}

function detectIntent(msg) {
  const m = lower(msg);
  for (const { intent, keywords } of INTENT_MAP) {
    if (keywords.some(k => m.includes(k))) return intent;
  }
  return 'standings';
}

// ── Main engine ──────────────────────────────────────────────
export function footballAI(userMessage) {
  const intent = detectIntent(userMessage);
  const leagueId = detectLeague(userMessage);
  const league = LEAGUES.find(l => l.id === leagueId);

  if (intent === 'standings') {
    return {
      intent: 'standings',
      league: { id: league.id, name: league.name, country: league.country },
      season: 2025,
      standings: STANDINGS[leagueId] || [],
    };
  }

  if (intent === 'results') {
    return {
      intent: 'results',
      league: { id: league.id, name: league.name },
      matches: RESULTS[leagueId] || [],
    };
  }

  if (intent === 'live') {
    return {
      intent: 'live',
      matches: LIVE_MATCHES,
    };
  }

  if (intent === 'fixtures') {
    return {
      intent: 'fixtures',
      league: { id: league.id, name: league.name },
      matches: FIXTURES[leagueId] || [],
    };
  }

  if (intent === 'squad') {
    const teamId = detectTeam(userMessage);
    if (teamId && SQUADS[teamId]) {
      return { intent: 'squad', ...SQUADS[teamId] };
    }
    // Try to find from standings
    const standing = (STANDINGS[leagueId]||[]).find(s =>
      patterns => lower(s.team.name) === lower(userMessage.trim())
    );
    const fallbackTeam = STANDINGS[leagueId]?.[0];
    if (fallbackTeam && SQUADS[fallbackTeam.team.id]) {
      return { intent: 'squad', ...SQUADS[fallbackTeam.team.id] };
    }
    return { intent: 'squad', ...getSquadFallback('Unknown Team', 0, league.name) };
  }

  if (intent === 'player') {
    const playerId = detectPlayer(userMessage);
    if (playerId && PLAYERS[playerId]) {
      return { intent: 'player_profile', player: PLAYERS[playerId] };
    }
    return { intent: 'player_profile', player: PLAYERS[284] }; // default Salah
  }

  return {
    intent: 'standings',
    league: { id: league.id, name: league.name, country: league.country },
    season: 2025,
    standings: STANDINGS[39],
  };
}

// ── Squad lookup by team ID (for click events) ───────────────
export function getSquadById(teamId, leagueId) {
  if (SQUADS[teamId]) return { intent: 'squad', ...SQUADS[teamId] };
  const leagueObj = LEAGUES.find(l => l.id === leagueId);
  const allStandings = Object.values(STANDINGS).flat();
  const team = allStandings.find(s => s.team.id === teamId)?.team;
  if (team) {
    return { intent: 'squad', ...getSquadFallback(team.name, team.id, leagueObj?.name || 'Unknown') };
  }
  return null;
}

export function getPlayerById(playerId) {
  if (PLAYERS[playerId]) return { intent: 'player_profile', player: PLAYERS[playerId] };
  return null;
}

export { LEAGUES, STANDINGS, RESULTS, LIVE_MATCHES, FIXTURES, SQUADS, PLAYERS };
