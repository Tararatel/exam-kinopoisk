import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilmPageType, Movie, MoviesState } from '../types/moviesType';
import { fetchMovieDetails, fetchTopMovies, searchMoviesAsync } from '../lib/moviesThunk';

const initialState: MoviesState = {
  list: [],
  currentMovie: null,
  status: 'idle',
  searchQuery: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    /* Release 1 */
    // Обработайте состояние загрузки
    // Обновите список фильмов и статус
    // Обработайте ошибку

    /* Release 2 */
    // Обработайте состояние загрузки
    // Сохраните текущий фильм в стейт
    // Обработайте ошибку

    /* Release 6 */
    // Обновите список фильмов результатами поиска
    // Обработайте ошибку
  },
});

export const { setSearchQuery } = moviesSlice.actions;

export default moviesSlice.reducer;
