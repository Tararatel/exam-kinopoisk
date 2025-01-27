import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/shared/api/axiosInstance';
import type { Rating } from '../types/ratingsType';


export const fetchUserRating = createAsyncThunk(
  'ratings/fetchUserRating',
  async (filmId: number) => {
    const response = await axiosInstance.get<Rating>(`/ratings/${String(filmId)}`);
    return response.data;
  },
);

export const rateMovie = createAsyncThunk(
  'ratings/rateMovie',
  async (ratingData: Rating): Promise<Rating> => {
    const response = await axiosInstance.post<Rating>('/ratings', ratingData);
    return response.data;
  },
);
