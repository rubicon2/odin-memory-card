import Card from '../Card';
import './index.css';

export default function CardsDisplay({ images = [], onClick }) {
  const cards = images.map((image) => {
    return <Card key={image.id} image={image} onClick={onClick} />;
  });
  return <div className="cards-display">{cards}</div>;
}
