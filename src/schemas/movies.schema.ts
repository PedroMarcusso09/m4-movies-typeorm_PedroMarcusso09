import { z } from 'zod';

export const movieSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string().max(50).nonempty(),
  description: z.string().optional().nullable(),
  duration: z.number().positive(),
  price: z.number().int().nonnegative(),
});

export const movieCreateSchema = movieSchema.omit({ id: true });
export const movieUpdateSchema = movieCreateSchema.partial();