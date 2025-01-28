import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopMovies = createAsyncThunk('movies/fetchTop', async () => {
  // Здесь вызовите API-метод getTopMovies и верните результат
});

export const searchMoviesAsync = createAsyncThunk('movies/search', async (query: string) => {
  // Здесь вызовите API-метод searchMovies и верните результат
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchDetails', async (filmId: number) => {

  // Выполните запрос к /films/{filmId} через kinopoiskApi
});
