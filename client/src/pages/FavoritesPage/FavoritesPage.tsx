import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { fetchFavorites } from '@/entities/favorites/lib/favoritesThunk';
import MovieGrid from '@/entities/movies/ui/MovieGrid/MovieGrid';
import styles from './FavoritesPage.module.scss';

const FavoritesPage = (): React.JSX.Element => {
	/* Release 4 */
  /* Здесь получить список избранного из стора */

  useEffect(() => {
    /* Release 4 */
    /* Здесь загрузить избранное при монтировании */
  }, []);

  return (
    <div className={styles.page}>
      <h2>Избранные фильмы</h2>
      {status === 'succeeded' && movies.length === 0 && <p>Ничего не найдено</p>}
      {status === 'succeeded' && movies.length > 0 && <MovieGrid movies={movies} />}
    </div>
  );
};

export default FavoritesPage;
