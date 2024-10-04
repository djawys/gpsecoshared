import { z } from 'zod';

export const CountrySchema = z.enum(['usa', 'uk', 'india']);
