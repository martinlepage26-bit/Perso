import { siteMeta } from '../data/site';

export function buildCanonical(pathname: string) {
  if (!siteMeta.siteUrl) {
    return undefined;
  }

  return new URL(pathname, siteMeta.siteUrl).toString();
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteMeta.name,
    jobTitle: siteMeta.jobTitle,
    description: siteMeta.description,
    ...(siteMeta.siteUrl ? { url: siteMeta.siteUrl } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montreal',
      addressRegion: 'Quebec',
      addressCountry: 'CA',
    },
    sameAs: [
      siteMeta.linkedIn,
      siteMeta.github,
      siteMeta.orcid,
      siteMeta.academia,
      siteMeta.substack,
      siteMeta.instagram,
    ],
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  schemaType = 'Article',
}: {
  title: string;
  description: string;
  url?: string;
  datePublished: string;
  dateModified?: string;
  schemaType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: siteMeta.name,
    },
    publisher: {
      '@type': 'Person',
      name: siteMeta.name,
    },
    ...(url ? { mainEntityOfPage: url } : {}),
    datePublished,
    dateModified: dateModified ?? datePublished,
  };
}
