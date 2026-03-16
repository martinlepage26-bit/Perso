import { siteMeta } from '../data/site';

export function GET() {
  const sitemapLine = siteMeta.siteUrl ? `Sitemap: ${siteMeta.siteUrl}/sitemap-index.xml\n` : '';

  return new Response(`User-agent: *\nAllow: /\n${sitemapLine}`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
