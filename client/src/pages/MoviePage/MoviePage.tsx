import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './MoviePage.module.scss';
import type { Movie } from '@/entities/movies/types/moviesType';

const MoviePage = (): React.JSX.Element => {
  const navigate = useNavigate();
  /* Release 2 */
  /* Получить данные фильма из стора вместо моковых данных */
  const movie: Movie = {
    filmId: 1,
    title: 'название',
    year: '2025',
    posterUrl: '/no-img.jpeg',
    rating: 4,
    description: 'описание',
    ratingKinopoisk: 3,
    nameRu: 'название на русском',
  };
  const status: 'loading' | 'succeeded' = 'succeeded';
  const userRating = 2;

  /* Release 7 */
  const handleRatingChange = (newValue: number | null): void => {
    /* Здесь отправить оценку на сервер */
  };

  if (status === 'loading') {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (!movie) {
    return (
      <div className={styles.notFound}>
        <h2>Фильм не найден</h2>
        <button onClick={() => navigate(-1)}>Вернуться назад</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <ArrowBackIcon /> Назад
      </button>

      <div className={styles.header}>
        <div className={styles.poster}>
          <img src={movie.posterUrl} alt={movie.nameRu} />
        </div>

        <div className={styles.info}>
          <h1>
            {movie.nameRu} ({movie.year})
          </h1>

          <div className={styles.ratingSection}>
            <div className={styles.rating}>
              <span>Рейтинг Кинопоиска:</span>
              <Rating value={(movie.ratingKinopoisk || 0) / 2} max={5} precision={0.1} readOnly />
              <span>{movie.ratingKinopoisk}</span>
            </div>

            <div className={styles.userRating}>
              <span>Ваша оценка:</span>
              <Rating
                value={userRating}
                max={10}
                onChange={(_, value) => handleRatingChange(value)}
              />
            </div>
          </div>
          <div className={styles.content}>
            {movie.description && (
              <section className={styles.description}>
                <h3>Описание</h3>
                <p>{movie.description}</p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
