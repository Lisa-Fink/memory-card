import Cards from './components/Cards';
import Heading from './components/Heading';
import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const restart = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  };

  return (
    <div>
      <Heading
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Cards score={score} setScore={setScore} restart={restart} />
    </div>
  );
}
export default App;
