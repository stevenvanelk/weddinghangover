import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function GET() {
  const episodes = await getCollection('episodes');

  return rss({
    title: 'Wedding Photo Hangover Podcast',
    description: 'Latest podcast episodes from Steve and Dustin',
    site: 'https://weddinghangover.com',
    items: episodes.map((post: CollectionEntry<'episodes'>) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      link: `/${post.slug}`,
      description: post.data.description,
      content: `
        <img src="${post.data.image}" alt="${post.data.title}" style="max-width:100%; height:auto;" />
        <p>${post.data.description}</p>
        <p><a href="https://weddinghangover.com/${post.slug}">Listen now →</a></p>
      `
    })),
  });
}
