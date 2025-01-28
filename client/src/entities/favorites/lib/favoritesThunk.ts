import { type FavoriteInput } from '../types/favoritesType';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk('favorites/fetchAll', async () => {
  // Отправь GET-запрос к /favorites на получение списка избранных фильмов
});

export const addFavorite = createAsyncThunk('favorites/add', async (movie: FavoriteInput) => {
  // Отправьте POST-запрос к /favorites с валидацией через FavoriteSchema
});

export const removeFavorite = createAsyncThunk(
  'favorites/remove',
  async (filmId: number, { rejectWithValue }) => {
    // Здесь выполните DELETE-запрос к /favorites/{filmId}
  },
);
