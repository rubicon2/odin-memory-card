import { useState } from 'react';

import './index.css';

export default function GameOver({
  score,
  highScore,
  active = false,
  onReset,
  topicErrorMsg,
}) {
  const [searchString, setSearchString] = useState('');
  console.log(searchString);

  let modalClass = 'game-over-modal';
  if (active) modalClass += ' game-over-modal-active';

  const scoreMessage =
    score > highScore ? (
      <div className="score-message">
        You scored {score} points... it's a new high score!
      </div>
    ) : (
      <div className="score-message">
        You scored {score} points. Better luck next time!
      </div>
    );

  return (
    <div className={modalClass}>
      <div className="modal-container">
        <h1>Game Over!</h1>
        {scoreMessage}
        <input
          placeholder="Search for new images..."
          value={searchString}
          onChange={(event) => setSearchString(event.currentTarget.value)}
        />
        {topicErrorMsg && (
          <div className="topic-error-msg">{topicErrorMsg}</div>
        )}
        <button
          className="game-over-button"
          type="button"
          onClick={() => onReset(searchString)}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
