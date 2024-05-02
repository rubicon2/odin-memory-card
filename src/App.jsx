import InfoDisplay from './components/InfoDisplay';
import CardsDisplay from './components/CardsDisplay';
import SearchModal from './components/SearchModal';
import GameOverModal from './components/GameOverModal';

import { useState, useEffect } from 'react';
import { randomiseArray } from './random';
import getGifs from './apis/giphy';

import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);

  const [gameState, setGameState] = useState('game-running');
  const [searchErrorMsg, setSearchErrorMsg] = useState('');

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleCardClick(image) {
    if (clickedImages.includes(image)) handleGameOver();
    else {
      setClickedImages([...clickedImages, image]);
      setScore(score + 1);
      // Must check plus 1 as clickedImages won't be updated until next render
      if (clickedImages.length + 1 === images.length) handleRoundOver();
      else setImages(randomiseArray(images));
    }
  }

  function getNewGifs(searchString) {
    return new Promise((resolve, reject) => {
      const gifCount = 10;
      getGifs(searchString, gifCount).then((gifs) => {
        if (gifs.length < gifCount) {
          reject('Not enough gifs! Try another search term.');
        } else {
          resolve(gifs);
        }
      });
    });
  }

  function handleRoundOver() {
    setGameState('round-over');
  }

  function handleGameOver() {
    setGameState('game-over');
  }

  function startNewRound(newTopic) {
    setClickedImages([]);
    getNewGifs(newTopic)
      .then((gifs) => {
        setImages(randomiseArray(gifs));
        setSearchErrorMsg(null);
        setGameState('game-running');
      })
      .catch((message) => {
        setSearchErrorMsg(message);
      });
  }

  function startNewGame(newTopic) {
    if (score > highScore) setHighScore(score);
    setScore(0);
    startNewRound(newTopic);
  }

  // Run when app is first mounted
  useEffect(() => {
    startNewGame('cats');
  }, []);

  return (
    <>
      <div className="container">
        <InfoDisplay
          title="Memory Game"
          info="Click as many images as you can without clicking the same one twice!"
          score={score}
          highScore={highScore}
        />
      </div>
      <div className="container">
        <CardsDisplay images={images} onClick={handleCardClick} />
      </div>
      <GameOverModal
        score={score}
        highScore={highScore}
        active={gameState === 'game-over'}
        onReset={startNewGame}
        searchErrorMsg={searchErrorMsg}
      />
      <SearchModal
        active={gameState === 'round-over'}
        title={'Another Round!'}
        message={
          'Good job. Find some more images and see how high you can score!'
        }
        onSubmit={startNewRound}
        searchErrorMsg={searchErrorMsg}
      />
    </>
  );
}

export default App;
