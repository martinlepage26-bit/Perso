import { siteMeta } from '../data/site';

export function buildCanonical(pathname: string) {
  return new URL(pathname, siteMeta.siteUrl).toString();
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteMeta.name,
    jobTitle: siteMeta.jobTitle,
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    email: siteMeta.email,
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
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
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
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified ?? datePublished,
  };
}
