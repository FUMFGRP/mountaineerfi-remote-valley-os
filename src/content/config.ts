import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    category: z.enum([
      'blueprint',
      'modules',
      'program',
      'community',
      'strategy',
      'brand',
      'meta',
    ]),
    order: z.number().default(999),
  }),
});

export const collections = { docs };
