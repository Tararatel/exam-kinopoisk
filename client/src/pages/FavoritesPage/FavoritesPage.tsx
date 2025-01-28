import MovieGrid from '@/entities/movies/ui/MovieGrid/MovieGrid';
import styles from './FavoritesPage.module.scss';
import type { FavoriteInput } from '@/entities/favorites/types/favoritesType';

const FavoritesPage = (): React.JSX.Element => {
  /* Release 3 */
  /* Здесь получить список избранного из стора */
  const items: FavoriteInput[] = [];
  const status = 'succeeded';
  return (
    <div className={styles.page}>
      <h2>Избранные фильмы</h2>
      {status === 'succeeded' && items.length === 0 && <p>Ничего не найдено</p>}
      {status === 'succeeded' && items.length > 0 && <MovieGrid movies={items} />}
    </div>
  );
};

export default FavoritesPage;
