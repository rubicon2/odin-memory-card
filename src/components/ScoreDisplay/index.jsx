import './index.css';

export default function ScoreDisplay({ score = 0, highScore = 0 }) {
  return (
    <div className="score-display">
      <div className="score-display-section">
        <span className="info-display--score-title">Score:</span>
        <span className="info-display--score">{score}</span>
      </div>
      <div className="score-display-section">
        <span className="info-display--score-title">Hi-score:</span>
        <span className="info-display--score">{highScore}</span>
      </div>
    </div>
  );
}
