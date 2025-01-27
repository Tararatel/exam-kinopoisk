import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Favorite, FavoritesState } from '../types/favoritesType';
import { addFavorite, fetchFavorites, removeFavorite } from '../lib/favoritesThunk';

const initialState: FavoritesState = {
  items: [],
  status: 'idle',
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(addFavorite.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(removeFavorite.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(removeFavorite.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.filmId !== action.payload);
        state.status = 'succeeded';
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default favoritesSlice.reducer;

export const selectAllFavorites = (state: { favorites: FavoritesState }): Favorite[] =>
  state.favorites.items;
export const selectIsFavorite = (filmId: number) => (state: { favorites: FavoritesState }) =>
  state.favorites.items.some((item) => item.filmId === filmId);
