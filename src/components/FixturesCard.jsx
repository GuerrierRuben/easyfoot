import { motion } from 'framer-motion';

function formatMatchDate(dateStr) {
  const d = new Date(dateStr);
  return {
    date: d.toLocaleDateString('en-GB', { weekday:'short', day:'numeric', month:'short' }),
    time: d.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' }),
  };
}

export default function FixturesCard({ data }) {
  if (!data?.matches?.length) return (
    <div className="empty-state">
      <div className="empty-icon">📅</div>
      <div className="empty-text">No upcoming fixtures</div>
    </div>
  );

  return (
    <motion.div className="cards-grid" initial={{opacity:0}} animate={{opacity:1}}>
      {data.matches.map((m, i) => {
        const { date, time } = formatMatchDate(m.date);
        return (
          <motion.div
            key={m.id}
            className="fixture-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="fixture-round">{m.round}</div>
            <div className="fixture-row">
              <div className="fixture-team">
                <img className="fixture-team-logo" src={m.homeTeam.logo} alt={m.homeTeam.name} onError={e=>e.target.style.display='none'} />
                <span className="fixture-team-name">{m.homeTeam.name}</span>
              </div>
              <div className="fixture-vs">
                <div className="fixture-vs-date">{date}</div>
                <div className="fixture-vs-time">{time}</div>
              </div>
              <div className="fixture-team away">
                <img className="fixture-team-logo" src={m.awayTeam.logo} alt={m.awayTeam.name} onError={e=>e.target.style.display='none'} />
                <span className="fixture-team-name">{m.awayTeam.name}</span>
              </div>
            </div>
            {m.venue && (
              <div className="fixture-venue">🏟️ {m.venue}</div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
