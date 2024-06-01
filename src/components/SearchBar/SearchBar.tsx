import toast, { Toaster } from 'react-hot-toast';
import { FC, FormEvent } from 'react';
import css from './SearchBar.module.css';

interface SearchProps {
  onSearch: (value: string) => void;
}

export const SearchBar: FC<SearchProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement
    const value = (form.elements.namedItem("search") as HTMLInputElement).value.trim();
    if (value.length === 0) {
      toast.error('Please, type a tag');
      return;
    }
    onSearch(value);
  };
  return (
    <header className={css.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
