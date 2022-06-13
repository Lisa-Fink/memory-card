import React, { useState } from 'react';
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

function Cards(props) {
  const imageList = [
    { img: steiner, key: 1 },
    { img: blank, key: 2 },
    { img: cinna, key: 3 },
    { img: eiko, key: 4 },
    { img: freya, key: 5 },
    { img: garnet, key: 6 },
    { img: marcus, key: 7 },
    { img: quina, key: 8 },
    { img: vivi, key: 9 },
    { img: zidane, key: 10 },
  ];

  const [clicked, setClicked] = useState([]);
  const [images, setImages] = useState(imageList);

  const handleClick = (e) => {
    const id = e.target.id ? e.target.id : e.target.parentElement.id;
    setImages([...images].sort(() => Math.random() - 0.5));
    if (!clicked.includes(id)) {
      setClicked([...clicked, id]);
      props.setScore(props.score + 1);
    } else {
      setClicked([]);
      props.restart();
    }
  };

  let imagesDisplay = images.map((image) => {
    return (
      <div onClick={handleClick} key={image.key} id={image.key}>
        <img src={image.img} alt="memory card" />
      </div>
    );
  });

  return <div id="cards">{imagesDisplay}</div>;
}

export default Cards;
