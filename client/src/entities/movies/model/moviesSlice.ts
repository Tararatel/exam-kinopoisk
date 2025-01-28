import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { MoviesState } from '../types/moviesType';

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
  extraReducers: (builder) => {},
});

export const { setSearchQuery } = moviesSlice.actions;

export default moviesSlice.reducer;
