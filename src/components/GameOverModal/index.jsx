import Modal from '../Modal';
import { useEffect, useState } from 'react';

import './index.css';

export default function GameOverModal({
  score,
  highScore,
  active = false,
  onReset,
  searchErrorMsg,
}) {
  const [searchString, setSearchString] = useState('');

  // Want this to be set only when component is mounted
  const [displayedScore, setDisplayedScore] = useState(score);
  useEffect(() => {
    setDisplayedScore(score);
  }, []);

  const scoreMessage =
    score > highScore ? (
      <div className="score-message">
        You scored {displayedScore} points... it's a new high score!
      </div>
    ) : (
      <div className="score-message">
        You scored {displayedScore} points. Better luck next time!
      </div>
    );

  return (
    <Modal active={active}>
      <h1>Game Over!</h1>
      {scoreMessage}
      <input
        placeholder="Search for new images..."
        value={searchString}
        onChange={(event) => setSearchString(event.currentTarget.value)}
      />
      {searchErrorMsg && (
        <div className="topic-error-msg">{searchErrorMsg}</div>
      )}
      <button
        className="game-over-button"
        type="button"
        onClick={() => onReset(searchString)}
      >
        Play Again
      </button>
    </Modal>
  );
}
