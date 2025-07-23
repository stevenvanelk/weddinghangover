import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    spotifyUrl: z.string().optional(),
    embedUrl: z.string().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  episodes,
  blog,
};
