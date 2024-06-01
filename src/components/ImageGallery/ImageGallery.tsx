import { FC } from 'react';
import { Img } from '../../types';
import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps { items: Img[]; onClick: (src: string) => void }

export const ImageGallery: FC<ImageGalleryProps> = ({ items, onClick }) => {
  return (
    <ul className={css.list}>
      {items.map(item => {
        return (
          <li key={item.id}>
            <ImageCard card={item} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}
