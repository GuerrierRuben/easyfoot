import { motion, AnimatePresence } from 'framer-motion';

const getPlayerPhoto = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e2e8f0&color=0a1628&size=200&bold=true`;

export default function PlayerDrawer({ playerData, onClose }) {
  if (!playerData) return null;

  const player = playerData.player || playerData;
  const playerNumber = player.number ?? '--';

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
          className="drawer"
          initial={{ x: 420 }}
          animate={{ x: 0 }}
          exit={{ x: 420 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button className="drawer-close" onClick={onClose}>×</button>

          <div className="drawer-player-header">
            <div className="drawer-photo-wrap">
              <img className="drawer-photo" src={getPlayerPhoto(player.name)} alt={player.name} />
            </div>
            <div className="drawer-header-info">
              <div className="drawer-team-league">{player.team || 'Team'} · {player.league || 'Competition'}</div>
              <div className="drawer-name">{player.name}</div>
              <div className="drawer-sub">
                {playerNumber} · {player.position || 'Unknown'} · {player.nationality || 'Unknown'} {player.age ? `· Age ${player.age}` : ''}
              </div>
            </div>
            <div className="drawer-rating-big">{playerNumber}</div>
          </div>

          {player.season && (
            <div>
              <div className="side-card-title">Season Stats</div>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-val">{player.season.goals}</div>
                  <div className="stat-label">Goals</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">{player.season.assists}</div>
                  <div className="stat-label">Assists</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">{player.season.appearances}</div>
                  <div className="stat-label">Apps</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">{player.season.minutesPlayed?.toLocaleString()}</div>
                  <div className="stat-label">Minutes</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">{player.season.yellowCards}</div>
                  <div className="stat-label">Yellows</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">{player.season.redCards}</div>
                  <div className="stat-label">Reds</div>
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="side-card-title">Profile</div>
            {player.age && <div className="info-row"><span className="info-key">Age</span><span className="info-val">{player.age}</span></div>}
            {player.position && <div className="info-row"><span className="info-key">Position</span><span className="info-val">{player.position}</span></div>}
            {player.nationality && <div className="info-row"><span className="info-key">Nationality</span><span className="info-val">{player.nationality}</span></div>}
            {player.coach && <div className="info-row"><span className="info-key">Coach</span><span className="info-val">{player.coach}</span></div>}
          </div>

          {!player.season && !player.height && !player.marketValue && !player.contractUntil && (
            <div className="playing-style-box">
              This profile comes from the team squad endpoint, so only official roster fields are available right now.
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
