import axiosInstance from '@/shared/api/axiosInstance';
import { FavoriteSchema, type Favorite, type FavoriteInput } from '../types/favoritesType';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async () => {
    /* Release 4 */
    // Отправьте GET-запрос к /favorites на получение списка избранных фильмов
  },
);

export const addFavorite = createAsyncThunk('favorites/add', async (movie: FavoriteInput) => {
	/* Release 3 */
  // Отправьте POST-запрос к /favorites с валидацией через FavoriteSchema
});

export const removeFavorite = createAsyncThunk(
  'favorites/remove',
  async (filmId: number, { rejectWithValue }) => {
    /* Release 5 */
    // Здесь выполните DELETE-запрос к /favorites/{filmId}
  },
);
