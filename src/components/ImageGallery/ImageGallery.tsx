import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onClick }) {
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
