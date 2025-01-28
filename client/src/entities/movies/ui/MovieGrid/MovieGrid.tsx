import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieGrid.module.scss';
import type { Films } from '@/shared/api/kinopoiskTypes';

type Props = {
  movies: Films;
};

const MovieGrid = ({ movies }: Props): React.JSX.Element => (
  <div className={styles.grid}>
    {movies.map((movie) => (
      <MovieCard key={movie.filmId} movie={movie} />
    ))}
  </div>
);

export default MovieGrid;
