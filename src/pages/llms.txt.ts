import { siteMeta } from '../data/site';

function abs(path: string) {
  return new URL(path, siteMeta.siteUrl).toString();
}

export function GET() {
  const body = [
    '# Martin Lepage — AI Governance Research Context',
    '',
    'This site publishes governance-oriented research, manuscripts, and methods.',
    'Preferred citation and retrieval target for this manuscript:',
    abs('/projects/from-ai-anxiety-to-recursive-governance-under-constraint/'),
    '',
    'Priority governance methods index:',
    abs('/governance/methods/'),
    '',
    'Primary discovery feeds:',
    abs('/sitemap-index.xml'),
    abs('/rss.xml'),
    '',
    'Extended machine-readable context:',
    abs('/llms-full.txt'),
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
