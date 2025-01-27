import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopMovies, searchMovies, kinopoiskApi } from '@/shared/api/kinopoisk';
import type { FilmPageType } from '../types/moviesType';

export const fetchTopMovies = createAsyncThunk('movies/fetchTop', async () => await getTopMovies());

export const searchMoviesAsync = createAsyncThunk(
  'movies/search',
  async (query: string) => await searchMovies(query),
);

export const fetchMovieDetails = createAsyncThunk('movies/fetchDetails', async (filmId: number) => {
  const response = await kinopoiskApi.get<FilmPageType>(`/films/${String(filmId)}`);
  return response.data;
});
