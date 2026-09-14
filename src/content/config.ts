import { defineCollection, z } from 'astro:content';

const docSchema = z.object({
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
});

// English (default) docs
const docs = defineCollection({
  type: 'content',
  schema: docSchema,
});

// Nepali translations (mirror the English slugs)
const docsNe = defineCollection({
  type: 'content',
  schema: docSchema,
});

export const collections = { docs, docsNe };
