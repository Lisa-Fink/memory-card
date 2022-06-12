import React from 'react';
import '../styles/Heading.css';

function Heading() {
  return (
    <div id="heading">
      <div>
        <h1>Final Fantasy Memory Card Game</h1>
        <p>
          Get points by clicking on an image, but don't click on any more than
          once!
        </p>
      </div>
      <div id="score-board">
        <div>Score: 0</div>
        <div>Highest Score: 0</div>
      </div>
    </div>
  );
}

export default Heading;
