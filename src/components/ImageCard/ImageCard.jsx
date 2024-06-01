import css from './ImageCard.module.css';

export default function ImageCard({ card, onClick }) {
  return (
    <div>
      <img
        src={card.urls.small}
        alt={card.alt_description}
        onClick={() => onClick(card.urls.regular)}
      />
    </div>
  );
}
