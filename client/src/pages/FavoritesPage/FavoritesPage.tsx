import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { fetchFavorites } from '@/entities/favorites/lib/favoritesThunk';
import MovieGrid from '@/entities/movies/ui/MovieGrid/MovieGrid';
import styles from './FavoritesPage.module.scss';

const FavoritesPage = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { items: movies, status } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    if (movies.length === 0) {
      void dispatch(fetchFavorites());
    }
  }, [dispatch, movies]);

  return (
    <div className={styles.page}>
      <h2>Избранные фильмы</h2>
      {status === 'succeeded' && movies.length === 0 && <p>Ничего не найдено</p>}
      {status === 'succeeded' && movies.length > 0 && <MovieGrid movies={movies} />}
    </div>
  );
};

export default FavoritesPage;
