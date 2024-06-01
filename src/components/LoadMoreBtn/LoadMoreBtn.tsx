import { FC } from 'react';
import css from './LoadMoreBtn.module.css';

interface ClickProps {
  onClick: () => void
}

export const LoadMoreBtn: FC<ClickProps> = ({ onClick }) => {
  return (
    <button className={css.btn} type="submit" onClick={onClick}>
      Load more
    </button>
  );
}
