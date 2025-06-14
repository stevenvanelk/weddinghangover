import { getCollection } from 'astro:content';

export async function get({ site }) {
  const blogPosts = await getCollection('blog');
  const episodes = await getCollection('episodes');

  const urls = [...blogPosts, ...episodes].map(post => `
    <url>
      <loc>${site}/${post.collection === 'blog' ? 'blog' : 'episodes'}/${post.slug}/</loc>
      <lastmod>${new Date(post.data.pubDate).toISOString()}</lastmod>
    </url>`
  );

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>`, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
