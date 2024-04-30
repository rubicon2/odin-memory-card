import InfoDisplay from './components/InfoDisplay';
import CardsDisplay from './components/CardsDisplay';
import { useState, useEffect } from 'react';

import { randomiseArray } from './random';
import getGifs from './apis/giphy';

import './App.css';
import GameOver from './components/GameOver';

function App() {
  const [images, setImages] = useState([]);
  // Can get score from length of clickedImages array
  const [clickedImages, setClickedImages] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  function handleCardClick(image) {
    if (clickedImages.includes(image)) setIsGameOver(true);
    else {
      setClickedImages([...clickedImages, image]);
      setImages(randomiseArray(images));
    }
  }

  function handleReset() {
    if (clickedImages.length > highScore) setHighScore(clickedImages.length);
    setClickedImages([]);
    setImages(randomiseArray(images));
    setIsGameOver(false);
  }

  useEffect(() => {
    getGifs('cats', 10).then((gifs) => {
      setImages(randomiseArray(gifs));
    });
  }, []);

  return (
    <>
      <div className="container">
        <InfoDisplay
          title="Memory Game"
          info="Click as many images as you can without clicking the same one twice!"
          score={clickedImages.length}
          highScore={highScore}
        />
      </div>
      <CardsDisplay images={images} onClick={handleCardClick} />
      <GameOver
        score={clickedImages.length}
        highScore={highScore}
        active={isGameOver}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
