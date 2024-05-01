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
  const [currentTopic, setCurrentTopic] = useState('cats');
  const [topicErrorMsg, setTopicErrorMsg] = useState('');

  function handleCardClick(image) {
    if (clickedImages.includes(image)) setIsGameOver(true);
    else {
      setClickedImages([...clickedImages, image]);
      setImages(randomiseArray(images));
    }
  }

  function handleReset(newTopic) {
    if (clickedImages.length > highScore) setHighScore(clickedImages.length);
    setClickedImages([]);
    setCurrentTopic(newTopic);
  }

  useEffect(() => {
    getGifs(currentTopic, 10).then((gifs) => {
      // If the topic doesn't yield 10 gifs, then ask for another prompt
      if (gifs.length < 10) {
        // Do ! Some ! Thing!
        setTopicErrorMsg('Not enough gifs! Try another search term.');
      } else {
        setTopicErrorMsg(null);
        setImages(randomiseArray(gifs));
        setIsGameOver(false);
      }
    });
  }, [currentTopic]);

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
      <div className="container">
        <CardsDisplay images={images} onClick={handleCardClick} />
      </div>
      <GameOver
        score={clickedImages.length}
        highScore={highScore}
        active={true}
        onReset={handleReset}
        topicErrorMsg={topicErrorMsg}
      />
    </>
  );
}

export default App;
