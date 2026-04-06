import { motion } from 'framer-motion';

const EVENT_ICON = { goal: '⚽', yellow_card: '🟨', red_card: '🟥', substitution: '🔄' };

export default function LiveTicker({ data }) {
  if (!data?.matches?.length) return (
    <div className="empty-state">
      <div className="empty-icon">📺</div>
      <div className="empty-text">No live matches right now</div>
    </div>
  );

  return (
    <motion.div className="cards-grid" initial={{opacity:0}} animate={{opacity:1}}>
      {data.matches.map((m, i) => (
        <motion.div
          key={m.id}
          className="live-card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
        >
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
            <div className="live-badge"><div className="live-dot" />LIVE</div>
            <div className="live-league-badge">{m.league}</div>
            <div className="live-minute" style={{marginLeft:'auto'}}>{m.minute}'</div>
          </div>
          <div className="match-score-row">
            <div className="match-team">
              <img className="match-team-logo" src={m.homeTeam.logo} alt={m.homeTeam.name} onError={e=>e.target.style.display='none'} />
              <div className="match-team-name">{m.homeTeam.name}</div>
            </div>
            <div className="match-score-box" style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.2)'}}>
              <span className="match-score-num" style={{color:'#ff6b6b'}}>{m.score.home}</span>
              <span className="match-score-sep">—</span>
              <span className="match-score-num" style={{color:'#ff6b6b'}}>{m.score.away}</span>
            </div>
            <div className="match-team">
              <img className="match-team-logo" src={m.awayTeam.logo} alt={m.awayTeam.name} onError={e=>e.target.style.display='none'} />
              <div className="match-team-name">{m.awayTeam.name}</div>
            </div>
          </div>
          {m.events?.length > 0 && (
            <div className="live-events">
              {m.events.map((ev, j) => (
                <div key={j} className="live-event">
                  <span className="live-event-min">{ev.minute}'</span>
                  <span className="live-event-icon">{EVENT_ICON[ev.type] || '📌'}</span>
                  <span>{ev.player}</span>
                  <span style={{color:'var(--text3)',fontSize:11,marginLeft:'auto'}}>{ev.team}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
