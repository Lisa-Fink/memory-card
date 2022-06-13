import React from 'react';
import '../styles/Heading.css';

function Heading(props) {
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
        <div>Score: {props.score}</div>
        <div>Highest Score: {props.highScore}</div>
      </div>
    </div>
  );
}

export default Heading;
