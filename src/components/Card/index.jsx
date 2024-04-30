import './index.css';

export default function Card({ image, onClick }) {
  return (
    <div className="card" onClick={() => onClick(image)}>
      <img src={image.url} />
    </div>
  );
}
