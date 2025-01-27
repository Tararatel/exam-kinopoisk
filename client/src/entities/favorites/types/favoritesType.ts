import { z } from 'zod';

export const FavoriteSchema = z.object({
  filmId: z.number(),
  title: z.string(),
  year: z.string(),
  posterUrl: z.string(),
});

const baseMovieSchema = z.object({
  filmId: z.number(),
  title: z.string(),
  year: z.string(),
  posterUrl: z.string().url(),
  rating: z.number(),
});

export const filmPageSchema = baseMovieSchema.extend({
	nameRu: z.string(),
	ratingKinopoisk: z.number(),
	description: z.string(),
});

export const favoriteSchema = filmPageSchema.extend({
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type FavoriteInput = z.infer<typeof FavoriteSchema>;
export type Favorite = z.infer<typeof favoriteSchema>;

export type FavoritesState = {
  items: Favorite[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
