import { z } from 'zod';

const baseMovieSchema = z.object({
  filmId: z.number(),
  title: z.string(),
  year: z.string(),
  posterUrl: z.string().url(),
  rating: z.number(),
  description: z.string(),
  ratingKinopoisk: z.number(),
  nameRu: z.string(),
});

export const filmPageSchema = baseMovieSchema.extend({
});

export type Movie = z.infer<typeof baseMovieSchema>;
export type FilmPageType = z.infer<typeof filmPageSchema>;

export type MoviesState = {
  list: Movie[];
  currentMovie: FilmPageType | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  searchQuery: string;
};
