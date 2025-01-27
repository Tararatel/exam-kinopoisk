import { z } from 'zod';

export const ratingSchema = z.object({
  filmId: z.number(),
  rating: z.number(),
});

export type Rating = z.infer<typeof ratingSchema>;
