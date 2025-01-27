import axiosInstance from '@/shared/api/axiosInstance';
import { FavoriteSchema, type Favorite, type FavoriteInput } from '../types/favoritesType';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<Favorite[]>('/favorites');
      return response.data;
    } catch (error) {
      return rejectWithValue(`Не удалось загрузить избранное - ${error as string}`);
    }
  },
);

export const addFavorite = createAsyncThunk(
  'favorites/add',
  async (movie: FavoriteInput, { rejectWithValue }) => {
    try {
      const validatedData = FavoriteSchema.parse(movie);
      const response = await axiosInstance.post<Favorite>('/favorites', validatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(`Не удалось добавить в избранное - ${error as string}`);
    }
  },
);

export const removeFavorite = createAsyncThunk(
  'favorites/remove',
  async (filmId: number, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/favorites/${String(filmId)}`);
      return filmId;
    } catch (error) {
      return rejectWithValue(`Не удалось удалить из избранного - ${error as string}`);
    }
  },
);
