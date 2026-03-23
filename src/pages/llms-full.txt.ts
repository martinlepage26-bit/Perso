import { siteMeta } from '../data/site';

function abs(path: string) {
  return new URL(path, siteMeta.siteUrl).toString();
}

export function GET() {
  const body = [
    '# Martin Lepage — Full LLM Discovery Context',
    '',
    '## Canonical site',
    siteMeta.siteUrl,
    '',
    '## High-priority manuscript route',
    abs('/projects/from-ai-anxiety-to-recursive-governance-under-constraint/'),
    '',
    '## Governance methods (index)',
    abs('/governance/methods/'),
    '',
    '## Governance methods (key records)',
    abs('/governance/methods/hephaistos-skill-operating-system/'),
    abs('/governance/methods/soft-post-control-post-experiment-implementation/'),
    abs('/governance/methods/recursive-governance-under-constraint/'),
    abs('/governance/methods/corpus-ingestion-and-governance-tree/'),
    abs('/governance/methods/authored-governance-tree-and-skill-ecosystem-maps/'),
    '',
    '## Sitewide discovery endpoints',
    abs('/sitemap-index.xml'),
    abs('/robots.txt'),
    abs('/rss.xml'),
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
