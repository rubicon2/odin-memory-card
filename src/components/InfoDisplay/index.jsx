import ScoreDisplay from '../ScoreDisplay';
import PropTypes from 'prop-types';
import './index.css';

function InfoDisplay({ title = '', info = '', score = 0, highScore = 0 }) {
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

InfoDisplay.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  score: PropTypes.number,
  highScore: PropTypes.number,
};

export default InfoDisplay;
