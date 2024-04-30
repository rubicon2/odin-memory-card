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
      <h2>You scored {score} points... it's a new high score!</h2>
    ) : (
      <h2>You scored {score} points. Better luck next time!</h2>
    );

  return (
    <div className={modalClass}>
      <div className="modal-container">
        <h1>Game Over!</h1>
        {scoreMessage}
        <button type="button" onClick={onReset}>
          Play Again
        </button>
      </div>
    </div>
  );
}
