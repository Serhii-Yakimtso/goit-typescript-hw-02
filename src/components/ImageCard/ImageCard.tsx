import { FC } from 'react';
import { Img } from '../../types';
import css from './ImageCard.module.css';

interface ImageCardProps { card: Img; onClick: (src: string) => void }

export const ImageCard: FC<ImageCardProps> = ({ card, onClick }) => {
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
