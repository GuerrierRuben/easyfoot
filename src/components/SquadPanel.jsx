import { motion } from 'framer-motion';

const POS_LABEL = {
  Goalkeeper: 'Goalkeepers',
  'Right Back': 'Defenders',
  'Centre Back': 'Defenders',
  'Left Back': 'Defenders',
  'Defensive Midfielder': 'Midfielders',
  'Central Midfielder': 'Midfielders',
  'Left Midfielder': 'Midfielders',
  'Right Winger': 'Forwards',
  'Left Winger': 'Forwards',
  'Attacking Midfielder': 'Forwards',
  'Centre Forward': 'Forwards',
};

const GROUP_ORDER = ['Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'];

const getPlayerPhoto = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e2e8f0&color=0a1628&size=120&bold=true`;

export default function SquadPanel({ squadData, onPlayerClick }) {
  if (!squadData) return null;

  const grouped = {};

  for (const group of GROUP_ORDER) {
    grouped[group] = [];
  }

  for (const player of squadData.players) {
    const group = POS_LABEL[player.position] || 'Forwards';
    grouped[group].push(player);
  }

  return (
    <motion.div
      className="squad-panel"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {GROUP_ORDER.map((group) => {
        const list = grouped[group];

        if (!list.length) {
          return null;
        }

        return (
          <div key={group} className="position-group">
            <div className="position-label">{group}</div>
            <div className="players-grid">
              {list.map((player) => (
                <motion.div
                  key={player.id}
                  className="player-card has-photo"
                  onClick={() => onPlayerClick(player)}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="player-photo-wrap">
                    <img className="player-photo-img" src={getPlayerPhoto(player.name)} alt={player.name} />
                  </div>
                  <div className="player-num-small">{player.number ?? '--'}</div>
                  <div className="player-info-right">
                    <div className="player-name">{player.name}</div>
                    <div className="player-nat">{player.nationality || 'Unknown'} · {player.position || 'Unknown'}</div>
                    <div className="player-rating">{player.age ? `${player.age} yrs` : 'Squad member'}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
