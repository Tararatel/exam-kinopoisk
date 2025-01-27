import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { fetchTopMovies, searchMoviesAsync } from '@/entities/movies/lib/moviesThunk';
import MovieGrid from '@/entities/movies/ui/MovieGrid/MovieGrid';
import Search from '@/widgets/ui/Search/Search';
import styles from './HomePage.module.scss';
import { setSearchQuery } from '@/entities/movies/model/moviesSlice';

const HomePage = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { list: movies, status, searchQuery } = useAppSelector((state) => state.movies);

  useEffect(() => {
    if (movies.length === 0) {
      void dispatch(fetchTopMovies());
    }
  }, [dispatch, movies.length]);

  const handleSearch = (query: string): void => {
    dispatch(setSearchQuery(query));
    if (query.trim()) {
      void dispatch(searchMoviesAsync(query));
    } else {
      void dispatch(fetchTopMovies());
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
