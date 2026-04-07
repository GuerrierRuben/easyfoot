import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

import PlayerDrawer from './components/PlayerDrawer.jsx';
import Quiz from './components/Quiz.jsx';
import { TeamProfilePage, NewsPage, ScoresPage, TablesPage } from './components/Pages.jsx';
import {
  COMPETITIONS,
  getCompetitionFixtures,
  getCompetitionResults,
  getCompetitionStandings,
  getCompetitionTeams,
  getMatchDetails,
  getTeamProfile,
} from './services/footballData.js';
import { getLatestNews } from './services/news.js';

const FALLBACK_NEWS = [
  { id: 1, cat: 'Premier League', date: 'April 1, 2026', img: '/news_action.png', title: 'Salah reaches 30 goals in a single PL season', excerpt: "Mohamed Salah scored his 30th Premier League goal of the season in Liverpool's 2-1 win over Arsenal, equalling his own record set in 2017/18." },
  { id: 2, cat: 'Champions League', date: 'April 1, 2026', img: '/news_celebration.png', title: 'Real Madrid edge PSG in quarter-final first leg', excerpt: "Jude Bellingham's late header gave Real Madrid a narrow advantage after a tense first leg at the Bernabeu." },
  { id: 3, cat: 'La Liga', date: 'March 31, 2026', img: '/news_lineup.png', title: 'El Clasico draw keeps title race open', excerpt: "Barcelona and Real Madrid shared a dramatic draw, leaving the title race alive heading into the final stretch." },
  { id: 4, cat: 'Transfer', date: 'March 31, 2026', img: '/news_action.png', title: 'Bayern Munich open talks for Wirtz', excerpt: 'Bayer Leverkusen have reportedly received a formal approach as transfer speculation heats up.' },
  { id: 5, cat: 'Serie A', date: 'March 31, 2026', img: '/news_celebration.png', title: 'Lautaro leads Inter to derby win', excerpt: 'Inter moved one step closer to the summit with a composed derby performance.' },
  { id: 6, cat: 'Bundesliga', date: 'March 30, 2026', img: '/news_lineup.png', title: 'Kane hat-trick fires Bayern', excerpt: 'Harry Kane produced another headline performance as Bayern controlled Der Klassiker.' },
];
const NAV_MENU = ['Home', 'News', 'Scores', 'Tables', 'Quiz', 'About Us'];

function StatusCard({ title, message, actionLabel, onAction }) {
  return (
    <div className="status-card">
      <div className="status-card-title">{title}</div>
      <div className="status-card-text">{message}</div>
      {actionLabel && onAction && (
        <button className="red-btn" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

function SiteHeader({
  activeNav,
  setActiveNav,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  searchResults,
  searchLoading,
}) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-top">
          <div className="header-logo" onClick={() => setActiveNav('Home')} style={{ cursor: 'pointer' }}>
            <div className="header-logo-icon">L</div>
            EASYFOOT
          </div>
          <nav>
            <ul className="header-nav">
              {NAV_MENU.map((item) => (
                <li key={item}>
                  <button className={activeNav === item ? 'active' : ''} onClick={() => setActiveNav(item)}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-search search-box">
            <span className="header-search-icon">Data</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && searchResults.length) {
                  onSearchSubmit(searchResults[0]);
                }
              }}
              placeholder="Search a Big 5 team..."
            />
            {!!searchQuery && (
              <div className="search-dropdown">
                {searchLoading ? (
                  <div className="search-empty">Loading teams...</div>
                ) : searchResults.length ? (
                  searchResults.map((team) => (
                    <button
                      key={team.id}
                      className="search-result"
                      onClick={() => onSearchSubmit(team)}
                    >
                      <img className="search-result-logo" src={team.logo} alt={team.name} onError={(event) => { event.currentTarget.style.opacity = 0.35; }} />
                      <span className="search-result-name">{team.fullName}</span>
                      <span className="search-result-league">{team.league}</span>
                    </button>
                  ))
                ) : (
                  <div className="search-empty">No team found in the top 5 leagues.</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ setActiveNav }) {
  return (
    <footer className="site-footer" style={{ marginTop: 'auto' }}>
      <div className="container">
        <div className="footer-inner">
          <div className="header-logo">
            <div className="header-logo-icon">L</div>
            EASYFOOT
          </div>
          <ul className="footer-nav">
            {['Home', 'News', 'Scores', 'Tables'].map((item) => (
              <li key={item}>
                <button onClick={() => setActiveNav(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-copy">© 2026 EasyFoot · Live data powered by football-data.org</div>
      </div>
    </footer>
  );
}

function HeroSection() {
  return (
    <section>
      <div className="hero-section">
        <div className="hero-main">
          <img className="hero-img" src="/hero_stadium.png" alt="Hero" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-tag">Live Data Integration</div>
            <h1 className="hero-title">Live scores, tables and squads.</h1>
            <div className="hero-byline">
              <span>Powered by football-data.org v4</span>
              <span className="dot">·</span>
              <span>Big 5 leagues</span>
            </div>
            <div className="hero-pills">
              {COMPETITIONS.slice(0, 5).map((competition) => (
                <span key={competition.code} className="hero-pill">{competition.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreTicker({ matches, loading, error, onMatchClick }) {
  if (loading) {
    return <div className="info-banner">Loading the latest finished matches...</div>;
  }

  if (error) {
    return <div className="info-banner info-banner-error">{error}</div>;
  }

  if (!matches.length) {
    return <div className="info-banner">No recent results available yet.</div>;
  }

  return (
    <div className="score-ticker-shell">
      <div className="score-ticker">
        <div className="score-ticker-inner">
          {matches.map((match) => (
            <div key={match.id} className="score-item">
              <button
                className="score-item-inner score-item-btn"
                onClick={() => onMatchClick(match)}
                title="Open match details"
              >
                <div className="score-team-info">
                  <img className="score-team-logo" src={match.homeTeam.logo} alt={match.homeTeam.name} onError={(event) => { event.currentTarget.style.opacity = 0.4; }} />
                  <span className="score-team-name">{match.homeTeam.name}</span>
                </div>
                <div className="score-box">
                  <span className="score-label">{match.round}</span>
                  <span className="score-nums">{match.score.home} : {match.score.away}</span>
                  <span className="score-date">{new Date(match.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
                </div>
                <div className="score-team-info">
                  <img className="score-team-logo" src={match.awayTeam.logo} alt={match.awayTeam.name} onError={(event) => { event.currentTarget.style.opacity = 0.4; }} />
                  <span className="score-team-name">{match.awayTeam.name}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MatchDetailsModal({ match, loading, error, onClose }) {
  if (!loading && !error && !match) return null;

  const homeGoals = (match?.goals || []).filter((goal) => goal.team?.id === match?.homeTeam.id);
  const awayGoals = (match?.goals || []).filter((goal) => goal.team?.id === match?.awayTeam.id);

  const renderGoal = (goal, index) => {
    const minute = goal.injuryTime ? `${goal.minute}+${goal.injuryTime}'` : `${goal.minute}'`;
    return (
      <div key={`${goal.team?.id || 'goal'}-${index}`} className="match-detail-line">
        <strong>{minute}</strong> {goal.scorer?.name || 'Unknown scorer'}
        <span className="match-detail-assist">Assist: {goal.assist?.name || 'Not listed'}</span>
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="drawer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="drawer match-details-drawer"
          initial={{ x: 420 }}
          animate={{ x: 0 }}
          exit={{ x: 420 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button className="drawer-close" onClick={onClose}>×</button>

          {loading ? (
            <div className="status-card">
              <div className="status-card-title">Loading Match</div>
              <div className="status-card-text">Fetching scorers and assists from football-data.org.</div>
            </div>
          ) : error ? (
            <div className="status-card">
              <div className="status-card-title">Details Unavailable</div>
              <div className="status-card-text">{error}</div>
            </div>
          ) : match ? (
            <>
              <div className="drawer-player-header">
                <div className="drawer-header-info">
                  <div className="drawer-team-league">{match.round}</div>
                  <div className="drawer-name">{match.homeTeam.name} {match.score.home} - {match.score.away} {match.awayTeam.name}</div>
                  <div className="drawer-sub">
                    {match.status} · {new Date(match.date).toLocaleString('en-GB')} {match.venue ? `· ${match.venue}` : ''}
                  </div>
                </div>
              </div>

              <div>
                <div className="side-card-title">Scorers And Assists</div>
                <div className="match-detail-columns">
                  <div className="match-detail-card">
                    <div className="match-detail-teamhead">
                      <img className="feature-team-logo" src={match.homeTeam.logo} alt={match.homeTeam.name} />
                      <span>{match.homeTeam.name}</span>
                    </div>
                    {homeGoals.length ? homeGoals.map(renderGoal) : <div className="match-detail-empty">No goal details listed.</div>}
                  </div>
                  <div className="match-detail-card">
                    <div className="match-detail-teamhead">
                      <img className="feature-team-logo" src={match.awayTeam.logo} alt={match.awayTeam.name} />
                      <span>{match.awayTeam.name}</span>
                    </div>
                    {awayGoals.length ? awayGoals.map(renderGoal) : <div className="match-detail-empty">No goal details listed.</div>}
                  </div>
                </div>
              </div>

              {(match.referee || match.attendance) && (
                <div>
                  <div className="side-card-title">Match Info</div>
                  {match.referee && <div className="info-row"><span className="info-key">Referee</span><span className="info-val">{match.referee}</span></div>}
                  {match.attendance && <div className="info-row"><span className="info-key">Attendance</span><span className="info-val">{match.attendance.toLocaleString()}</span></div>}
                </div>
              )}
            </>
          ) : null}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function NewsGrid({ newsItems, onNewsClick }) {
  return (
    <div className="top-news-section" onClick={onNewsClick}>
      <div className="section-title-bar">
        <div className="stb-accent" />
        <h2>Top News</h2>
      </div>
      <div className="news-grid" style={{ paddingTop: 16 }}>
        {newsItems.map((item, index) => (
          <motion.div key={item.id} className="news-card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
            <div className="news-card-img-wrap">
              <img className="news-card-img" src={item.img} alt={item.title} />
              <span className="news-card-cat">{item.cat}</span>
            </div>
            <div className="news-card-body">
              <div className="news-card-date">{item.date}</div>
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-excerpt">{item.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getFeaturedTeamTeaser(team) {
  const clubName = team.fullName || team.name;
  const league = team.league || 'top-flight football';
  const country = team.country || 'European';

  return `${clubName} is part of the ${league} scene in ${country}. Open the club page to explore the squad, coach, venue and the key names behind the badge.`;
}

function FeaturedPanel({ featuredTeam, featuredMatch, loading, onTeamClick, onScoresClick }) {
  if (loading) {
    return (
      <div>
        <div className="section-title-bar">
          <div className="stb-accent" />
          <h2>Featured</h2>
        </div>
        <div className="feature-grid" style={{ marginTop: 16 }}>
          <div className="feature-card">
            <div className="feature-kicker">Loading</div>
            <h3 className="feature-title">Fetching featured team and match...</h3>
          </div>
        </div>
      </div>
    );
  }

  const featureItems = [];

  if (featuredTeam) {
    featureItems.push(
      <AnimatePresence mode="wait" key="team-slot">
        <motion.button
          key={featuredTeam.id}
          className="feature-card feature-team-card"
          onClick={() => onTeamClick(featuredTeam)}
          initial={{ opacity: 0, y: 10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.985 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="feature-kicker">Featured Team</div>
          <div className="feature-team-head">
            <img className="feature-team-logo" src={featuredTeam.logo} alt={featuredTeam.name} />
            <div>
              <h3 className="feature-title">{featuredTeam.fullName || featuredTeam.name}</h3>
              <div className="feature-meta">{featuredTeam.league || featuredTeam.country}</div>
            </div>
          </div>
          <div className="feature-badges">
            {featuredTeam.country ? <span className="feature-badge">{featuredTeam.country}</span> : null}
            {featuredTeam.competitionCode ? <span className="feature-badge">{featuredTeam.competitionCode}</span> : null}
            <span className="feature-badge">Squad Profile</span>
          </div>
          <p className="feature-copy">{getFeaturedTeamTeaser(featuredTeam)}</p>
          <div className="feature-cta">Click to open the full club profile</div>
        </motion.button>
      </AnimatePresence>,
    );
  }

  if (featuredMatch) {
    featureItems.push(
      <button key="match" className="feature-card feature-match-card" onClick={onScoresClick}>
        <div className="feature-kicker">Match Of The Day</div>
        <div className="feature-match-row">
          <div className="feature-match-team">
            <img className="feature-team-logo" src={featuredMatch.homeTeam.logo} alt={featuredMatch.homeTeam.name} />
            <span>{featuredMatch.homeTeam.name}</span>
          </div>
          <div className="feature-match-score">
            <span>{featuredMatch.score.home}</span>
            <small>{featuredMatch.status}</small>
            <span>{featuredMatch.score.away}</span>
          </div>
          <div className="feature-match-team">
            <img className="feature-team-logo" src={featuredMatch.awayTeam.logo} alt={featuredMatch.awayTeam.name} />
            <span>{featuredMatch.awayTeam.name}</span>
          </div>
        </div>
        <div className="feature-meta">{featuredMatch.round} · {new Date(featuredMatch.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
      </button>,
    );
  }

  return (
    <div>
      <div className="section-title-bar">
        <div className="stb-accent" />
        <h2>Featured</h2>
      </div>
      <div className={`feature-grid ${featureItems.length === 1 ? 'feature-grid-single' : ''}`} style={{ marginTop: 16 }}>
        {featureItems.length ? featureItems : (
          <div className="feature-card feature-card-empty">
            <div className="feature-kicker">Live Data</div>
            <h3 className="feature-title">Featured content is not available yet.</h3>
            <p className="feature-copy">This area fills automatically as soon as one of the live APIs returns a recent match or a club profile.</p>
          </div>
        )}
        {false && (
          <button className="feature-card feature-match-card" onClick={onScoresClick}>
            <div className="feature-kicker">Match Of The Day</div>
            <div className="feature-match-row">
              <div className="feature-match-team">
                <img className="feature-team-logo" src={featuredMatch.homeTeam.logo} alt={featuredMatch.homeTeam.name} />
                <span>{featuredMatch.homeTeam.name}</span>
              </div>
              <div className="feature-match-score">
                <span>{featuredMatch.score.home}</span>
                <small>{featuredMatch.status}</small>
                <span>{featuredMatch.score.away}</span>
              </div>
              <div className="feature-match-team">
                <img className="feature-team-logo" src={featuredMatch.awayTeam.logo} alt={featuredMatch.awayTeam.name} />
                <span>{featuredMatch.awayTeam.name}</span>
              </div>
            </div>
            <div className="feature-meta">{featuredMatch.round} · {new Date(featuredMatch.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
          </button>
        )}
      </div>
    </div>
  );
}

function StandingsWidget({ competitions, activeCompetition, rows, loading, error, onCompetitionChange, onTeamClick, onViewFull }) {
  const currentCompetition = competitions.find((competition) => competition.code === activeCompetition);

  return (
    <div className="widget">
      <div className="widget-header">
        <h3>{currentCompetition?.name || 'Standings'}</h3>
        <div className="widget-header-tabs">
          {competitions.slice(0, 3).map((competition) => (
            <button
              key={competition.code}
              className={`widget-header-tab ${activeCompetition === competition.code ? 'active' : ''}`}
              onClick={() => onCompetitionChange(competition.code)}
            >
              {competition.shortName}
            </button>
          ))}
        </div>
      </div>
      {loading ? (
        <div className="widget-body-message">Loading standings...</div>
      ) : error ? (
        <div className="widget-body-message widget-body-message-error">{error}</div>
      ) : !rows.length ? (
        <div className="widget-body-message">No standings available right now.</div>
      ) : (
        <>
          <table className="standings-widget-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th style={{ textAlign: 'left' }}>Team</th>
                <th>P</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              {rows.slice(0, 6).map((row) => (
                <tr key={row.team.id} onClick={() => onTeamClick(row.team)} style={{ cursor: 'pointer' }}>
                  <td>{row.rank}</td>
                  <td>
                    <div className="sw-team-cell">
                      <img className="sw-team-logo" src={row.team.logo} alt={row.team.name} onError={(event) => { event.currentTarget.style.opacity = 0.4; }} />
                      <span className="sw-team-name">{row.team.name}</span>
                    </div>
                  </td>
                  <td>{row.played}</td>
                  <td className="sw-pts">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="widget-footer">
            <button className="view-table-btn" onClick={onViewFull}>View Full Table</button>
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [widgetCompetition, setWidgetCompetition] = useState(COMPETITIONS[0].code);
  const [widgetStandings, setWidgetStandings] = useState({ rows: [], loading: true, error: '' });
  const [tickerState, setTickerState] = useState({ matches: [], loading: true, error: '' });
  const [scoresState, setScoresState] = useState({ results: [], fixtures: [], loading: false, error: '', loaded: false });
  const [tablesState, setTablesState] = useState({ data: {}, loading: false, error: '', loaded: false });
  const [searchState, setSearchState] = useState({ teams: [], loading: false });
  const [searchQuery, setSearchQuery] = useState('');
  const [scoresReloadKey, setScoresReloadKey] = useState(0);
  const [tablesReloadKey, setTablesReloadKey] = useState(0);
  const [selectedSquad, setSelectedSquad] = useState(null);
  const [teamProfileState, setTeamProfileState] = useState({ loading: false, error: '' });
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [matchDetailsState, setMatchDetailsState] = useState({ match: null, loading: false, error: '', open: false });
  const [newsState, setNewsState] = useState({ items: FALLBACK_NEWS, loading: true, error: '' });

  function retryScoresLoad() {
    setScoresState((current) => ({ ...current, loaded: false }));
    setScoresReloadKey((value) => value + 1);
  }

  function retryTablesLoad() {
    setTablesState({ data: {}, loading: false, error: '', loaded: false });
    setTablesReloadKey((value) => value + 1);
  }

  useEffect(() => {
    async function loadNews() {
      setNewsState((current) => ({ ...current, loading: true, error: '' }));

      try {
        const items = await getLatestNews(12);
        setNewsState({ items: items.length ? items : FALLBACK_NEWS, loading: false, error: '' });
      } catch (error) {
        setNewsState({
          items: FALLBACK_NEWS,
          loading: false,
          error: error instanceof Error ? error.message : 'Unable to load live news.',
        });
      }
    }

    loadNews();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim() || searchState.teams.length || searchState.loading) {
      return;
    }

    async function loadSearchTeams() {
      setSearchState({ teams: [], loading: true });

      try {
        const responses = await Promise.allSettled(
          COMPETITIONS.map((competition) => getCompetitionTeams(competition.code)),
        );

        const teams = responses
          .filter((response) => response.status === 'fulfilled')
          .flatMap((response) => response.value);

        const dedupedTeams = Array.from(new Map(teams.map((team) => [team.id, team])).values())
          .sort((a, b) => a.fullName.localeCompare(b.fullName));

        setSearchState({ teams: dedupedTeams, loading: false });
      } catch {
        setSearchState({ teams: [], loading: false });
      }
    }

    loadSearchTeams();
  }, [searchQuery, searchState.teams.length, searchState.loading]);

  useEffect(() => {
    async function loadTicker() {
      setTickerState({ matches: [], loading: true, error: '' });

      try {
        const matches = await Promise.all(
          COMPETITIONS.map(async (competition) => {
            const [latestMatch] = await getCompetitionResults(competition.code, 1);
            return latestMatch;
          }),
        );

        setTickerState({
          matches: matches.filter(Boolean).sort((a, b) => new Date(b.date) - new Date(a.date)),
          loading: false,
          error: '',
        });
      } catch (error) {
        setTickerState({
          matches: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Unable to load recent matches.',
        });
      }
    }

    loadTicker();
  }, []);

  useEffect(() => {
    async function loadStandings() {
      setWidgetStandings((current) => ({ ...current, loading: true, error: '' }));

      try {
        const standings = await getCompetitionStandings(widgetCompetition);
        setWidgetStandings({ rows: standings.rows, loading: false, error: '' });
      } catch (error) {
        setWidgetStandings({
          rows: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Unable to load standings.',
        });
      }
    }

    loadStandings();
  }, [widgetCompetition]);

  useEffect(() => {
    if (activeNav !== 'Scores' || scoresState.loaded || scoresState.loading) {
      return;
    }

    async function loadScoresPage() {
      setScoresState((current) => ({ ...current, loading: true, error: '' }));

      try {
        const bundles = await Promise.allSettled(
          COMPETITIONS.map(async (competition) => {
            const [results, fixtures] = await Promise.all([
              getCompetitionResults(competition.code, 4),
              getCompetitionFixtures(competition.code, 3),
            ]);

            return { results, fixtures };
          }),
        );

        const successfulBundles = bundles
          .filter((bundle) => bundle.status === 'fulfilled')
          .map((bundle) => bundle.value);

        const failedBundles = bundles.filter((bundle) => bundle.status === 'rejected');
        const results = successfulBundles.flatMap((bundle) => bundle.results).sort((a, b) => new Date(b.date) - new Date(a.date));
        const fixtures = successfulBundles.flatMap((bundle) => bundle.fixtures).sort((a, b) => new Date(a.date) - new Date(b.date));

        if (!successfulBundles.length) {
          throw new Error(failedBundles[0]?.reason?.message || 'Unable to load match data.');
        }

        setScoresState({
          results,
          fixtures,
          loading: false,
          error: failedBundles.length ? 'Some competitions could not be loaded with the current API access.' : '',
          loaded: true,
        });
      } catch (error) {
        setScoresState({
          results: [],
          fixtures: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Unable to load match data.',
          loaded: true,
        });
      }
    }

    loadScoresPage();
  }, [activeNav, scoresState.loaded, scoresState.loading, scoresReloadKey]);

  useEffect(() => {
    if (widgetStandings.rows.length) {
      setTablesState((current) => ({
        ...current,
        data: {
          ...current.data,
          [widgetCompetition]: widgetStandings.rows,
        },
      }));
    }
  }, [widgetCompetition, widgetStandings.rows]);

  useEffect(() => {
    if (activeNav !== 'Tables' || tablesState.loading || tablesState.loaded) {
      return;
    }

    async function loadTablesPage() {
      setTablesState((current) => ({ ...current, loading: true, error: '' }));

      try {
        const competitionsToLoad = COMPETITIONS.filter((competition) => !tablesState.data[competition.code]);
        const bundles = await Promise.allSettled(
          competitionsToLoad.map(async (competition) => {
            const standings = await getCompetitionStandings(competition.code);
            return [competition.code, standings.rows];
          }),
        );

        const successfulBundles = bundles
          .filter((bundle) => bundle.status === 'fulfilled')
          .map((bundle) => bundle.value);
        const failedBundles = bundles.filter((bundle) => bundle.status === 'rejected');

        setTablesState({
          data: {
            ...tablesState.data,
            ...Object.fromEntries(successfulBundles),
          },
          loading: false,
          error: failedBundles.length ? 'Some competitions could not be loaded with the current API access.' : '',
          loaded: true,
        });
      } catch (error) {
        setTablesState({
          data: tablesState.data,
          loading: false,
          error: error instanceof Error ? error.message : 'Unable to load tables.',
          loaded: true,
        });
      }
    }

    loadTablesPage();
  }, [activeNav, tablesState.data, tablesState.loaded, tablesState.loading, tablesReloadKey]);

  async function handleTeamClick(team) {
    setActiveNav('TeamProfile');
    setSearchQuery('');
    setSelectedSquad(null);
    setTeamProfileState({ loading: true, error: '' });

    try {
      const squad = await getTeamProfile(team);
      setSelectedSquad(squad);
      setTeamProfileState({ loading: false, error: '' });
    } catch (error) {
      setTeamProfileState({
        loading: false,
        error: error instanceof Error ? error.message : 'Unable to load team profile.',
      });
    }
  }

  function handlePlayerClick(player) {
    setSelectedPlayer({ intent: 'player_profile', player });
  }

  async function handleMatchClick(match) {
    setMatchDetailsState({ match: null, loading: true, error: '', open: true });

    try {
      const details = await getMatchDetails(match);
      setMatchDetailsState({ match: details, loading: false, error: '', open: true });
    } catch (error) {
      setMatchDetailsState({
        match: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Unable to load match details.',
        open: true,
      });
    }
  }

  const filteredTeams = searchQuery.trim()
    ? searchState.teams
      .filter((team) => {
        const query = searchQuery.trim().toLowerCase();
        return team.fullName.toLowerCase().includes(query) || team.name.toLowerCase().includes(query);
      })
      .slice(0, 8)
    : [];

  const featuredTeam = widgetStandings.rows[0]?.team || null;
  const featuredMatch = tickerState.matches[0] || null;
  const featuredLoading = tickerState.loading || widgetStandings.loading;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <SiteHeader
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleTeamClick}
        searchResults={filteredTeams}
        searchLoading={searchState.loading}
      />

      {activeNav === 'Home' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <HeroSection />
          <ScoreTicker
            matches={tickerState.matches}
            loading={tickerState.loading}
            error={tickerState.error}
            onMatchClick={handleMatchClick}
          />
          <div className="page-body">
            <div className="container">
              <NewsGrid newsItems={newsState.items.slice(0, 3)} onNewsClick={() => setActiveNav('News')} />
              <div className="main-grid" style={{ marginTop: 28 }}>
                <div>
                  <FeaturedPanel
                    featuredTeam={featuredTeam}
                    featuredMatch={featuredMatch}
                    loading={featuredLoading}
                    onTeamClick={handleTeamClick}
                    onScoresClick={() => setActiveNav('Scores')}
                  />
                </div>
                <div className="right-panel">
                  <StandingsWidget
                    competitions={COMPETITIONS}
                    activeCompetition={widgetCompetition}
                    rows={widgetStandings.rows}
                    loading={widgetStandings.loading}
                    error={widgetStandings.error}
                    onCompetitionChange={setWidgetCompetition}
                    onTeamClick={handleTeamClick}
                    onViewFull={() => setActiveNav('Tables')}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeNav === 'News' && (
        <div className="page-body">
          <div className="container">
            <NewsPage newsItems={newsState.items} />
          </div>
        </div>
      )}

      {activeNav === 'Scores' && (
        <div className="page-body">
          <div className="container">
            {scoresState.loading ? (
              <StatusCard title="Loading Matches" message="Fetching recent results and upcoming fixtures from football-data.org." />
            ) : scoresState.error ? (
              scoresState.results.length || scoresState.fixtures.length ? (
                <>
                  <StatusCard title="Partial Match Data" message={scoresState.error} actionLabel="Retry" onAction={retryScoresLoad} />
                  <ScoresPage results={scoresState.results} fixtures={scoresState.fixtures} onMatchClick={handleMatchClick} />
                </>
              ) : (
                <StatusCard title="Match Data Unavailable" message={scoresState.error} actionLabel="Retry" onAction={retryScoresLoad} />
              )
            ) : (
              <ScoresPage results={scoresState.results} fixtures={scoresState.fixtures} onMatchClick={handleMatchClick} />
            )}
          </div>
        </div>
      )}

      {activeNav === 'Tables' && (
        <div className="page-body">
          <div className="container">
            {tablesState.loading ? (
              <StatusCard title="Loading Tables" message="Fetching standings for the selected leagues." />
            ) : tablesState.error ? (
              Object.keys(tablesState.data).length ? (
                <>
                  <StatusCard title="Partial Tables" message={tablesState.error} actionLabel="Retry" onAction={retryTablesLoad} />
                  <TablesPage
                    standingsData={tablesState.data}
                    leagues={COMPETITIONS}
                    onTeamClick={handleTeamClick}
                  />
                </>
              ) : (
                <StatusCard title="Tables Unavailable" message={tablesState.error} actionLabel="Retry" onAction={retryTablesLoad} />
              )
            ) : (
              <TablesPage
                standingsData={tablesState.data}
                leagues={COMPETITIONS}
                onTeamClick={handleTeamClick}
              />
            )}
          </div>
        </div>
      )}

      {activeNav === 'Quiz' && (
        <div className="page-body">
          <div className="container">
            <Quiz />
          </div>
        </div>
      )}

      {activeNav === 'TeamProfile' && (
        <div className="page-body">
          <div className="container">
            <button className="red-btn" style={{ marginBottom: 16 }} onClick={() => setActiveNav('Tables')}>
              Back
            </button>
            {teamProfileState.loading ? (
              <StatusCard title="Loading Team" message="Fetching squad details from football-data.org." />
            ) : teamProfileState.error ? (
              <StatusCard title="Team Profile Unavailable" message={teamProfileState.error} />
            ) : (
              <TeamProfilePage squadData={selectedSquad} onPlayerClick={handlePlayerClick} />
            )}
          </div>
        </div>
      )}

      {(activeNav === 'About Us' || activeNav === 'Contact') && (
        <div className="page-body">
          <div className="container">
            <StatusCard title="Page Under Construction" message="The core live API integration is ready. We can wire the rest of the pages next." />
          </div>
        </div>
      )}

      <SiteFooter setActiveNav={setActiveNav} />

      <AnimatePresence>
        {selectedPlayer && <PlayerDrawer playerData={selectedPlayer} onClose={() => setSelectedPlayer(null)} />}
      </AnimatePresence>
      {matchDetailsState.open && (
        <MatchDetailsModal
          match={matchDetailsState.match}
          loading={matchDetailsState.loading}
          error={matchDetailsState.error}
          onClose={() => setMatchDetailsState({ match: null, loading: false, error: '', open: false })}
        />
      )}
    </div>
  );
}
