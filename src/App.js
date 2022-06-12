import Cards from './components/Cards';
import Heading from './components/Heading';
import React, { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <Heading />
      <Cards />
    </div>
  );
}
export default App;
