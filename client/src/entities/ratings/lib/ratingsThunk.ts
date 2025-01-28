import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/shared/api/axiosInstance';
import type { Rating } from '../types/ratingsType';


export const fetchUserRating = createAsyncThunk(
  'ratings/fetchUserRating',
  async (filmId: number) => {
    /* Release 7 */
    // Отправьте GET-запрос к /favorites/:filmId
  },
);

export const rateMovie = createAsyncThunk(
  'ratings/rateMovie',
  async (ratingData: Rating): Promise<Rating> => {
    /* Release 7 */
    // Отправьте POST-запрос к /ratings 
  },
);
