// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || process.env.SITE_URL;
const isBuildCommand = process.argv.includes('build');

if (isBuildCommand && !site) {
  console.warn(
    '[site] PUBLIC_SITE_URL or SITE_URL is not set. Canonical URLs, sitemap output, and full RSS metadata will be omitted from this build.',
  );
}

export default defineConfig({
  site,
  output: 'static',
  legacy: {
    collectionsBackwardsCompat: true,
  },
  integrations: [mdx(), ...(site ? [sitemap()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
