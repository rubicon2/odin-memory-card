import './index.css';

export default function GameOver({
  score,
  highScore,
  active = false,
  onReset,
}) {
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
        <button className="game-over-button" type="button" onClick={onReset}>
          Play Again
        </button>
      </div>
    </div>
  );
}
