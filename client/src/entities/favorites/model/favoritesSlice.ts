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
    /* Release 4 */
    // Обработайте состояние загрузки
    // Обновите список избранных фильмов и статус
    // Обработать ошибку

    /* Release 3 */
    // Обработайте состояние загрузки
    // Добавьте фильм в стейт
    // Обработать ошибку

    /* Release 5 */
    // Обработайте состояние загрузки
    // Удалите фильм из стейта по filmId
    // Обработать ошибку
  },
});

export default favoritesSlice.reducer;

export const selectIsFavorite = (filmId: number) => (state) => {
	/* Release 4 */
  // Верните true, если фильм с filmId есть в избранном
};
