import { motion } from 'framer-motion';

function FormPill({ char }) {
  return <span className={`form-pill form-${char}`}>{char}</span>;
}

function zoneClass(rank, total) {
  if (rank <= 4) return 'tr-ucl';
  if (rank === 5 || rank === 6) return 'tr-uel';
  if (rank >= total - 2) return 'tr-rel';
  return '';
}

function rankClass(rank, total) {
  if (rank <= 4) return 'top4';
  if (rank === 5 || rank === 6) return 'euro';
  if (rank >= total - 2) return 'relegation';
  return '';
}

export default function StandingsTable({ data, onTeamClick }) {
  if (!data || data.length === 0) return <div className="empty-state"><div className="empty-icon">📋</div><div className="empty-text">No standings available</div></div>;

  const total = data.length;
  return (
    <motion.div
      className="standings-wrap"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <table className="standings-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr
              key={row.team.id}
              className={zoneClass(row.rank, total)}
              onClick={() => onTeamClick(row.team)}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.025 }}
            >
              <td className={`row-rank ${rankClass(row.rank, total)}`}>{row.rank}</td>
              <td>
                <div className="team-cell">
                  <img className="team-logo-sm" src={row.team.logo} alt={row.team.name} onError={e => e.target.style.display='none'} />
                  <span className="team-name-text">{row.team.name}</span>
                </div>
              </td>
              <td>{row.played}</td>
              <td>{row.won}</td>
              <td>{row.drawn}</td>
              <td>{row.lost}</td>
              <td>{row.goalsFor}</td>
              <td>{row.goalsAgainst}</td>
              <td className={`gd-cell ${row.goalDiff > 0 ? 'gd-pos' : row.goalDiff < 0 ? 'gd-neg' : ''}`}>
                {row.goalDiff > 0 ? '+' : ''}{row.goalDiff}
              </td>
              <td className="pts-cell">{row.points}</td>
              <td>
                <div className="form-wrap">
                  {(row.form || '').split('').map((c, j) => <FormPill key={j} char={c} />)}
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop:12,display:'flex',gap:16,fontSize:11,color:'var(--text3)'}}>
        <span style={{borderLeft:'3px solid var(--accent)',paddingLeft:6}}>Champions League</span>
        <span style={{borderLeft:'3px solid var(--orange)',paddingLeft:6}}>Europa League</span>
        <span style={{borderLeft:'3px solid var(--red)',paddingLeft:6}}>Relegation</span>
      </div>
    </motion.div>
  );
}
