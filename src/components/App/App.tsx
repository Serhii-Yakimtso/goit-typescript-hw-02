import { useState, useEffect } from 'react';
import { fetchImgGallery } from '../../api';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from '../ImageModal/ImageModal';
import { Img } from '../../types';
import './App.module.css';

function App() {
  const [query, setQuery] = useState<string>('');
  const [img, setImg] = useState<Img[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<string>('');

  const handleSearch = (value: string): void => {
    setQuery(value);
    setPage(1);
    setImg([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleToggleModal = (): void => {
    setIsModal(!isModal);
  };

  const handleGetSrcModalImg = (src: string): void => {
    setModalImg(src);
    handleToggleModal();
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImg() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImgGallery(query, page);
        setImg((prevImg): Img[] => {
          return [...prevImg, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImg();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {img.length > 0 && (
        <ImageGallery items={img} onClick={handleGetSrcModalImg} />
      )}
      {isLoading && <Loader />}
      {img.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {isModal && (
        <ImageModal
          srcValue={modalImg}
          isOpen={isModal}
          onToggle={handleToggleModal}
        />
      )}
    </>
  );
}

export default App;
