import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FC } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface ImageModalProps { srcValue: string; isOpen: boolean; onToggle: () => void }

export const ImageModal: FC<ImageModalProps> = ({ srcValue, isOpen, onToggle }) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onToggle} style={customStyles}>
        <img className={css.img} src={srcValue} />
      </Modal>
    </>
  );
}
