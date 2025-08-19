import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaptionText: z.string().optional(),
    spotifyUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  episodes,
  blog,
};
