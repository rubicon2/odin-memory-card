import Modal from '../Modal';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './index.css';

function GameOverModal({
  score,
  highScore,
  active = false,
  onReset,
  searchErrorMsg,
}) {
  const [searchString, setSearchString] = useState('');
  const [scoreMessage, setScoreMessage] = useState('');

  // Only update score message if modal has just been set to active.
  // Do not change if the score or high score changes!
  // This will avoid score being changed after the modal has been displayed
  // (e.g. set to zero on new game before modal has had a chance to fade out).
  useEffect(() => {
    if (active) {
      setSearchString('');
      const scoreNoun = score === 1 ? 'point' : 'points';
      setScoreMessage(
        score > highScore
          ? `You scored ${score} ${scoreNoun}... it's a new high score!`
          : `You scored ${score} ${scoreNoun}. Better luck next time!`,
      );
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [active]);

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

GameOverModal.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onReset: PropTypes.func,
  searchErrorMsg: PropTypes.string,
};

export default GameOverModal;
