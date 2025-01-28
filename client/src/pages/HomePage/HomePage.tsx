import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { fetchTopMovies, searchMoviesAsync } from '@/entities/movies/lib/moviesThunk';
import MovieGrid from '@/entities/movies/ui/MovieGrid/MovieGrid';
import Search from '@/widgets/ui/Search/Search';
import styles from './HomePage.module.scss';
import { setSearchQuery } from '@/entities/movies/model/moviesSlice';

const HomePage = (): React.JSX.Element => {

	/* Release 1 */
  /* Здесь получить dispatch с помощью useAppDispatch */
  /* Здесь получить список фильмов и статус загрузки из стора */

	/* Release 5 */
  const handleSearch = (query: string): void => {
    /* Здесь обновить поисковый запрос в сторе */

    if (query.trim()) {
      /* Здесь вызвать асинхронный поиск */
    } else {
      /* Здесь запросить топ фильмов */
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Популярные фильмы</h1>

      <div className={styles.searchContainer}>
        <Search onSearch={handleSearch} initialValue={searchQuery} placeholder="Поиск фильмов..." />
      </div>

      {status === 'loading' ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        <MovieGrid movies={movies} />
      )}

      {status === 'succeeded' && movies.length === 0 && (
        <div className={styles.empty}>Ничего не найдено</div>
      )}
    </div>
  );
};

export default HomePage;
