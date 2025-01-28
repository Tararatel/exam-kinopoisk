import { createSlice } from '@reduxjs/toolkit';

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
  extraReducers: (builder) => {},
});

export default ratingsSlice.reducer;
