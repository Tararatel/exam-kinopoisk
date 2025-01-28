import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Rating } from '../types/ratingsType';
import { fetchUserRating, rateMovie } from "../lib/ratingsThunk"



type RatingsState = {
  ratings: Record<number, number>;
};

const initialState: RatingsState = {
  ratings: {},
};

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    /* Release 7 */
    // обработайте экшен rateMovie
    // Обработайте ошибку
  },
});

export default ratingsSlice.reducer;
