import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Rating } from '../types/ratingsType';


export const fetchUserRating = createAsyncThunk(
  'ratings/fetchUserRating',
  async (filmId: number) => {
    // Отправьте GET-запрос к /favorites/:filmId
  },
);

export const rateMovie = createAsyncThunk(
  'ratings/rateMovie',
  async (ratingData: Rating): Promise<Rating> => {
    // Отправьте POST-запрос к /ratings 
  },
);
