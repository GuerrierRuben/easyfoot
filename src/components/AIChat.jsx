import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIChat({ onQuery, loading }) {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const submit = () => {
    if (!value.trim() || loading) return;
    onQuery(value.trim());
    setValue('');
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const suggestions = [
    'Show La Liga standings',
    'Premier League results',
    'Salah player profile',
    'Upcoming Bundesliga fixtures',
    'Live scores',
    'Real Madrid squad',
  ];

  return (
    <div className="chat-bar">
      <div style={{display:'flex',gap:6,marginBottom:8,flexWrap:'wrap'}}>
        {suggestions.map(s => (
          <button
            key={s}
            onClick={() => onQuery(s)}
            style={{
              fontSize:11,fontWeight:600,
              padding:'3px 10px',
              borderRadius:99,
              background:'rgba(59,130,246,0.08)',
              color:'var(--accent)',
              border:'1px solid rgba(59,130,246,0.2)',
              cursor:'pointer',
              transition:'background 0.15s',
              whiteSpace:'nowrap',
            }}
            onMouseEnter={e=>e.target.style.background='rgba(59,130,246,0.16)'}
            onMouseLeave={e=>e.target.style.background='rgba(59,130,246,0.08)'}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="chat-inner">
        <span className="chat-icon">🤖</span>
        <input
          ref={inputRef}
          className="chat-input"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask FootballAI anything… standings, results, squad, player profile"
          disabled={loading}
        />
        <button
          className="chat-send"
          onClick={submit}
          disabled={!value.trim() || loading}
        >
          {loading ? '⏳' : '➤'}
        </button>
      </div>
    </div>
  );
}
