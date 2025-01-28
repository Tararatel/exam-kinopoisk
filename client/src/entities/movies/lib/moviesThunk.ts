import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopMovies = createAsyncThunk('movies/fetchTop', async () => {
  /* Release 1 */
  // Здесь вызовите API-метод getTopMovies и верните результат
});

export const searchMoviesAsync = createAsyncThunk('movies/search', async (query: string) => {
  /* Release 6 */
  // Здесь вызовите API-метод searchMovies и верните результат
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchDetails', async (filmId: number) => {
  /* Release 2 */
  // Выполните запрос к /films/{filmId} через kinopoiskApi
});
