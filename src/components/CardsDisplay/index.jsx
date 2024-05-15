import Card from '../Card';
import PropTypes from 'prop-types';
import './index.css';

function CardsDisplay({ images = [], onClick }) {
  const cards = images.map((image) => {
    return <Card key={image.id} image={image} onClick={onClick} />;
  });
  return <div className="cards-display">{cards}</div>;
}

CardsDisplay.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default CardsDisplay;
