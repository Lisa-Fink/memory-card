import React from 'react';
import '../styles/Cards.css';

import steiner from '../images/Adelbert_Steiner.webp';
import blank from '../images/Blank.webp';
import cinna from '../images/Cinna.webp';
import eiko from '../images/Eiko.webp';
import freya from '../images/Freya.webp';
import garnet from '../images/Garnet.webp';
import marcus from '../images/Marcus.webp';
import quina from '../images/Quina_Quen.webp';
import vivi from '../images/Vivi.webp';
import zidane from '../images/Zidane.webp';

function Cards() {
  const images = [
    steiner,
    blank,
    cinna,
    eiko,
    freya,
    garnet,
    marcus,
    quina,
    vivi,
    zidane,
  ];
  return (
    <div id="cards">
      {images.map((image) => {
        return (
          <div>
            <img src={image} alt="memory card" />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
