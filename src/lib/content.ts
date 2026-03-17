export function estimateReadingMinutes(input: string) {
  const words = input.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatDate(input: Date | string) {
  const value = typeof input === 'string' ? new Date(input) : input;
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(value);
}

export function sortByYear<T extends { data: { year?: number } }>(items: T[]) {
  return [...items].sort((a, b) => (b.data.year ?? -1) - (a.data.year ?? -1));
}

export function isPublishedStatus(status: string) {
  return /\bpublished\b/i.test(status);
}

export function isPublishedPaper<T extends { data: { status: string } }>(item: T) {
  return isPublishedStatus(item.data.status);
}

export function sortByDate<T extends { data: { date: Date } }>(items: T[]) {
  return [...items].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function collectTags<T extends { data: { tags: string[] } }>(items: T[]) {
  return [...new Set(items.flatMap((item) => item.data.tags))].sort((a, b) =>
    a.localeCompare(b),
  );
}

export function clampText(text: string, maxLength = 220) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export function contentSlug(id: string) {
  return id.replace(/\.(md|mdx)$/i, '');
}
