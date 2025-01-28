import { createSlice } from '@reduxjs/toolkit';
import type { FavoritesState } from '../types/favoritesType';

const initialState: FavoritesState = {
  items: [],
  status: 'idle',
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default favoritesSlice.reducer;

export const selectIsFavorite = (filmId: number) => (state) => {
  // Верни true, если фильм с filmId есть в избранном
};
