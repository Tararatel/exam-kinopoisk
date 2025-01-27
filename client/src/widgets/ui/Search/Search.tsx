import React, { useState, useEffect } from 'react';
import styles from './Search.module.scss';

type SearchProps = {
  onSearch: (query: string) => void;
  initialValue?: string;
  placeholder?: string;
};

const Search: React.FC<SearchProps> = ({
  onSearch,
  initialValue = '',
  placeholder = 'Поиск...',
}) => {
  const [searchValue, setSearchValue] = useState(initialValue);
	

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue !== initialValue) {
        onSearch(searchValue);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue, onSearch, initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value.trim());
  };

  const handleClear = (): void => {
    setSearchValue('');
    onSearch('');
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
      />

      {searchValue && (
        <button onClick={handleClear} className={styles.clearButton} aria-label="Очистить поиск">
          ×
        </button>
      )}
    </div>
  );
};

export default Search;
