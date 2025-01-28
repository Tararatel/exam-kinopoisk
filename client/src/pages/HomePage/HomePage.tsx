import MovieGrid from '@/entities/movies/ui/MovieGrid/MovieGrid';
import Search from '@/widgets/ui/Search/Search';
import styles from './HomePage.module.scss';
import type { Movie } from '@/entities/movies/types/moviesType';

const HomePage = (): React.JSX.Element => {
  const status: 'loading' | 'succeeded' = 'succeeded';
  const movies: Movie[] = [];
  /* Release 1 */
  /* Получить список фильмов и статус загрузки из стора */

  /* Release 5 */
  const handleSearch = (query: string): void => {
    /* Здесь обновить поисковый запрос в сторе */
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Популярные фильмы</h1>

      <div className={styles.searchContainer}>
        <Search onSearch={handleSearch} initialValue="" placeholder="Поиск фильмов..." />
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
