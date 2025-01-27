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
      .addCase(fetchUserRating.fulfilled, (state, action: PayloadAction<Rating>) => {
        state.ratings[action.payload.filmId] = action.payload.rating;
      })
      .addCase(rateMovie.fulfilled, (state, action: PayloadAction<Rating>) => {
        state.ratings[action.payload.filmId] = action.payload.rating;
      });
  },
});

export default ratingsSlice.reducer;
