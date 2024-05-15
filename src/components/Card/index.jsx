import PropTypes from 'prop-types';
import './index.css';

function Card({ image, onClick }) {
  return (
    <div className="card" onClick={() => onClick(image)}>
      <img src={image.url} />
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.object,
  onClick: PropTypes.func,
};

export default Card;
