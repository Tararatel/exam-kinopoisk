import { z } from 'zod';

export const CountrySchema = z.object({
  country: z.string(),
});

export const GenreSchema = z.object({
  genre: z.string(),
});

export const FilmSchema = z.object({
  filmId: z.number(),
  title: z.string().nullable().optional(),
  nameRu: z.string().optional(),
  nameEn: z.string().nullable().optional(),
  year: z.string().optional(),
  filmLength: z.string().nullable().optional(),
  countries: z.array(CountrySchema).optional(),
  genres: z.array(GenreSchema).optional(),
  rating: z.string().nullable().optional().or(z.number().nullable().optional()),
  ratingVoteCount: z.number().optional(),
  posterUrl: z.string().url().optional(),
  posterUrlPreview: z.string().url().optional(),
  ratingChange: z.number().nullable().optional(),
  isRatingUp: z.boolean().nullable().optional(),
  isAfisha: z.number().optional(),
  description: z.string().nullable().optional(),
  ratingKinopoisk: z.string().nullable().optional().or(z.number().nullable().optional()),
});

export const SearchFilmSchema = z.object({
  filmId: z.number(),
  title: z.string().optional(),
  nameRu: z.string().optional(),
  nameEn: z.string().optional(),
  type: z.string().optional(),
  year: z.string().optional(),
  description: z.string().optional(),
  filmLength: z.string().optional(),
  countries: z.array(CountrySchema).optional(),
  genres: z.array(GenreSchema).optional(),
  rating: z.string().nullable().optional().or(z.number().nullable().optional()),
  ratingVoteCount: z.number().optional(),
  posterUrl: z.string().url().optional(),
  posterUrlPreview: z.string().url().optional(),
  ratingKinopoisk: z.string().nullable().optional().or(z.number().nullable().optional()),
});

export const FilmsSchema = z.array(FilmSchema);
export const SearchFilmsSchema = z.array(SearchFilmSchema);

export type Film = z.infer<typeof FilmSchema>;
export type Films = z.infer<typeof FilmsSchema>;
export type Search = z.infer<typeof SearchFilmsSchema>;
