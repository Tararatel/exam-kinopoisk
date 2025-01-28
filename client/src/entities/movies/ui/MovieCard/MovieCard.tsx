import React, { useState } from 'react';
import type { FilmPageType } from '@/entities/movies/types/moviesType';
import styles from './MovieCard.module.scss';
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

type Props = {
  movie: FilmPageType;
};

const MovieCard = ({ movie }: Props): React.JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  /* Release 4 */
  /* Здесь получить статус "в избранном" из стора вместо фиксированного статуса false */
  const isFavorite = false;

  const handleAddFavorite = (): void => {
    /* Release 3 */
    /* Здесь реализовать добавление в избранное */
  };

  const handleRemoveFavorite = (): void => {
    /* Release 5 */
    /* Здесь реализовать удаление из избранного */
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.posterUrl} alt={movie.nameRu} className={styles.poster} />

      {isHovered && (
        <div className={styles.overlay}>
          <button
            className={styles.favoriteButton}
            onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite}
          >
            {isFavorite ? (
              <FavoriteIcon fontSize="large" color="error" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </button>

          <div className={styles.info}>
            <h3>{movie.nameRu}</h3>
            <p>{movie.year}</p>
            <Link to={`/movies/${String(movie.filmId)}`} key={movie.filmId}>
              Подробнее
            </Link>
            <Rating value={+movie.rating || 0} max={10} readOnly precision={0.5} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
