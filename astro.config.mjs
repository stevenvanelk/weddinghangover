import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://stevenvanelk.github.io/weddinghangover',
  base: '/',
  integrations: [mdx()],
});
