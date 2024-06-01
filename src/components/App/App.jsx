import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchImgGallery } from '../../api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalImg, setModalImg] = useState([]);

  const handleSearch = value => {
    setQuery(value);
    setPage(1);
    setImg([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleToggleModal = () => {
    setIsModal(!isModal);
  };

  const handleGetSrcModalImg = src => {
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
        setImg(prevImg => {
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
