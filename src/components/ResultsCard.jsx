import { motion } from 'framer-motion';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

export default function ResultsCard({ data, onMatchClick }) {
  if (!data?.matches?.length) return <div className="empty-state"><div className="empty-icon">⚽</div><div className="empty-text">No recent results</div></div>;

  return (
    <motion.div className="cards-grid" initial={{opacity:0}} animate={{opacity:1}}>
      {data.matches.map((m, i) => (
        <motion.div
          key={m.id}
          className="match-card"
          onClick={() => onMatchClick?.(m)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
        >
          <div className="match-card-header">
            <span>{m.round}</span>
            <span>{formatDate(m.date)}</span>
            <span style={{color:'var(--green)',fontWeight:700}}>{m.status}</span>
          </div>
          <div className="match-score-row">
            <div className="match-team">
              <img className="match-team-logo" src={m.homeTeam.logo} alt={m.homeTeam.name} onError={e=>e.target.style.display='none'} />
              <div className="match-team-name">{m.homeTeam.name}</div>
            </div>
            <div className="match-score-box">
              <span className="match-score-num">{m.score.home}</span>
              <span className="match-score-sep">—</span>
              <span className="match-score-num">{m.score.away}</span>
            </div>
            <div className="match-team">
              <img className="match-team-logo" src={m.awayTeam.logo} alt={m.awayTeam.name} onError={e=>e.target.style.display='none'} />
              <div className="match-team-name">{m.awayTeam.name}</div>
            </div>
          </div>
          {m.scorers?.length > 0 && (
            <div className="match-scorers">
              {m.scorers.map((s, j) => (
                <div key={j} className="scorer-tag">
                  ⚽ <span>{s.name}</span>
                  <span className="scorer-min">{s.minute}'</span>
                  <span style={{color:'var(--text3)',fontSize:10}}>{s.team}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
