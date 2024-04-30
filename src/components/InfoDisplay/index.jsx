import ScoreDisplay from '../ScoreDisplay';
import './index.css';

export default function InfoDisplay({
  title = '',
  info = '',
  score = 0,
  highScore = 0,
}) {
  return (
    <div className="info-display">
      <div className="col">
        <h1 className="info-display--title">{title}</h1>
        <div className="info-display--info">{info}</div>
      </div>
      <ScoreDisplay score={score} highScore={highScore} />
    </div>
  );
}
