import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '@/entities/movies/model/moviesSlice';
import favoritesReducer from '@/entities/favorites/model/favoritesSlice';
import ratingsReducer from '@/entities/ratings/model/ratingsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
    ratings: ratingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
