import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { fetchMovieDetails } from '@/entities/movies/lib/moviesThunk';
import { rateMovie, fetchUserRating } from '@/entities/ratings/lib/ratingsThunk';
import Rating from '@mui/material/Rating';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './MoviePage.module.scss';

const MoviePage = (): React.JSX.Element => {
  const navigate = useNavigate();

	/* Release 2 */
  /* Здесь получить filmId из URL параметров */
  /* Здесь получить dispatch */
  /* Здесь получить данные фильма из стора */

	/* Release 6 */
  /* Здесь получить оценку из стора */

  useEffect(() => {
    if (id) {
      /* Release 2 */
      /* Здесь запросить детали фильма */

      /* Release 6 */
      /* Здесь запросить оценку пользователя */
    }
  }, [id]);

  const handleRatingChange = (newValue: number | null): void => {
    /* Release 6 */
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
