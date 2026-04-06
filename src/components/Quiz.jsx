import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  {
    q: "Which nation won the first ever FIFA World Cup in 1930?",
    opts: ["Brazil", "Argentina", "Uruguay", "Italy"],
    a: "Uruguay"
  },
  {
    q: "Who is the all-time top scorer in the UEFA Champions League?",
    opts: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
    a: "Cristiano Ronaldo"
  },
  {
    q: "Which team holds the record for the most UEFA Champions League titles?",
    opts: ["AC Milan", "Bayern Munich", "Real Madrid", "Liverpool"],
    a: "Real Madrid"
  },
  {
    q: "In what year did the Premier League begin?",
    opts: ["1988", "1990", "1992", "1995"],
    a: "1992"
  },
  {
    q: "Which player has won the most Ballon d'Or awards?",
    opts: ["Cristiano Ronaldo", "Johan Cruyff", "Michel Platini", "Lionel Messi"],
    a: "Lionel Messi"
  }
];

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [curr, setCurr] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showRes, setShowRes] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setCurr(0);
    setScore(0);
    setFinished(false);
  };

  const handleSelect = (opt) => {
    if (selected) return; // Prevent double click
    setSelected(opt);
    setShowRes(true);
    if (opt === QUESTIONS[curr].a) {
      setScore(s => s + 1);
    }
    
    // Auto-advance after 1.5s
    setTimeout(() => {
      setSelected(null);
      setShowRes(false);
      if (curr + 1 < QUESTIONS.length) {
        setCurr(c => c + 1);
      } else {
        setFinished(true);
      }
    }, 1500);
  };

  if (!started) {
    return (
      <div className="quiz-container">
        <div className="quiz-hero">
          <h2>Ultimate Football Knowledge Quiz</h2>
          <p>Test your expertise on World Cup history, Champions League records, and legendary players.</p>
          <button className="red-btn quiz-btn" onClick={handleStart}>START QUIZ ⚽</button>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    let msg = "Keep watching more football!";
    if (pct === 100) msg = "Perfect! You are a true Football Historian!";
    else if (pct >= 80) msg = "Great job! You know your stuff.";
    else if (pct >= 60) msg = "Not bad, a solid mid-table finish.";

    return (
      <div className="quiz-container">
        <motion.div className="quiz-result-card" initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}}>
          <h2>Quiz Completed!</h2>
          <div className="quiz-score-circle">
            <span className="quiz-score-num">{score}</span>
            <span className="quiz-score-tot">/ {QUESTIONS.length}</span>
          </div>
          <p className="quiz-msg">{msg}</p>
          <button className="red-btn quiz-btn" onClick={handleStart}>TRY AGAIN 🔄</button>
        </motion.div>
      </div>
    );
  }

  const q = QUESTIONS[curr];

  return (
    <div className="quiz-container">
      <div className="quiz-header-bar">
        <span>Question {curr + 1} of {QUESTIONS.length}</span>
        <span>Score: {score}</span>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={curr}
          initial={{ opacity:0, x:20 }}
          animate={{ opacity:1, x:0 }}
          exit={{ opacity:0, x:-20 }}
          className="quiz-card"
        >
          <h3 className="quiz-question">{q.q}</h3>
          <div className="quiz-options">
            {q.opts.map(opt => {
              let btnClass = "quiz-opt-btn";
              if (showRes) {
                if (opt === q.a) btnClass += " opt-correct";
                else if (opt === selected) btnClass += " opt-wrong";
                else btnClass += " opt-disabled";
              }
              return (
                <button
                  key={opt}
                  className={btnClass}
                  onClick={() => handleSelect(opt)}
                  disabled={selected !== null}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
