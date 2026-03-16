import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteMeta } from '../data/site';
import { contentSlug } from '../lib/content';

export async function GET(context) {
  const writings = await getCollection('writings');

  return rss({
    title: `${siteMeta.name} - Writing`,
    description: 'Essays, reflections, and public-facing writing by Martin Lepage.',
    site: context.site,
    items: writings
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((writing) => ({
        title: writing.data.title,
        description: writing.data.description,
        pubDate: writing.data.date,
        link: `/writing/${contentSlug(writing.id)}/`,
      })),
  });
}
