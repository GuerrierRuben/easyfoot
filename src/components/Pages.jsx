import { motion } from 'framer-motion';
import SquadPanel from './SquadPanel.jsx';
import StandingsTable from './StandingsTable.jsx';
import ResultsCard from './ResultsCard.jsx';
import FixturesCard from './FixturesCard.jsx';
import { getTeamHistory } from '../data/historyData.js';

export function TeamProfilePage({ squadData, onPlayerClick }) {
  if (!squadData) return null;
  const history = getTeamHistory(squadData.team.id, squadData.team.name);

  return (
    <motion.div
      className="page-container"
      initial={{opacity:0, y:12}}
      animate={{opacity:1, y:0}}
    >
      <div className="section-title-bar">
        <div className="stb-accent" />
        <h2>{squadData.team.name} Profile</h2>
      </div>

      <div className="team-profile-grid">
        <aside className="team-history-sidebar">
          <h3>Club History</h3>
          <p>{history}</p>
          <div className="team-stats-box">
            <div className="ts-stat"><span>Manager:</span> {squadData.team.coach || 'Unknown'}</div>
            <div className="ts-stat"><span>League:</span> {squadData.team.league || 'Unknown'}</div>
            {squadData.team.area && <div className="ts-stat"><span>Area:</span> {squadData.team.area}</div>}
            {squadData.team.venue && <div className="ts-stat"><span>Venue:</span> {squadData.team.venue}</div>}
            {squadData.team.founded && <div className="ts-stat"><span>Founded:</span> {squadData.team.founded}</div>}
          </div>
        </aside>
        
        <div className="team-squad-main">
          <h3>Current Squad</h3>
          <SquadPanel squadData={squadData} onPlayerClick={onPlayerClick} />
        </div>
      </div>
    </motion.div>
  );
}

export function NewsPage({ newsItems }) {
  return (
    <motion.div className="page-container" initial={{opacity:0}} animate={{opacity:1}}>
      <div className="section-title-bar">
        <div className="stb-accent" />
        <h2>All Football News</h2>
      </div>
      <div className="news-page-grid">
        {newsItems.map((n) => (
          <div key={n.id} className="news-card">
            <div className="news-card-img-wrap">
              <img className="news-card-img" src={n.img} alt={n.title} />
              <span className="news-card-cat">{n.cat}</span>
            </div>
            <div className="news-card-body">
              <div className="news-card-date">{n.date}</div>
              <h3 className="news-card-title">{n.title}</h3>
              <p className="news-card-excerpt">{n.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function ScoresPage({ results, fixtures, onMatchClick }) {
  return (
    <motion.div className="page-container" initial={{opacity:0}} animate={{opacity:1}}>
      <div className="section-title-bar">
        <div className="stb-accent" />
        <h2>Recent Results</h2>
      </div>
      <ResultsCard data={{ matches: results }} onMatchClick={onMatchClick} />

      <div className="section-title-bar" style={{marginTop:36}}>
        <div className="stb-accent" />
        <h2>Upcoming Fixtures</h2>
      </div>
      <FixturesCard data={{ matches: fixtures }} />
    </motion.div>
  );
}

export function TablesPage({ standingsData, leagues, onTeamClick }) {
  return (
    <motion.div className="page-container tables-page" initial={{opacity:0}} animate={{opacity:1}}>
      {leagues.map((league) => (
        <div key={league.code} className="table-block">
          <div className="section-title-bar">
            <div className="stb-accent" />
            <h2>{league.name}</h2>
          </div>
          <StandingsTable data={standingsData[league.code] || []} onTeamClick={onTeamClick} />
        </div>
      ))}
    </motion.div>
  );
}
