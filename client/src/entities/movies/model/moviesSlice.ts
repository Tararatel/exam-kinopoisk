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
      .addCase(fetchTopMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = 'loading';
        state.currentMovie = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action: PayloadAction<FilmPageType>) => {
        state.status = 'succeeded';
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchTopMovies.rejected, (state, action) => {
        state.status = 'failed';
        console.error('Failed to fetch top movies:', action.error);
      })
      .addCase(searchMoviesAsync.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(searchMoviesAsync.rejected, (state, action) => {
        state.status = 'failed';
        console.error('Failed to search movies:', action.error.message);
      });
  },
});

export const { setSearchQuery } = moviesSlice.actions;

export default moviesSlice.reducer;
