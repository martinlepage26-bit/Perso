import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    venue: z.string(),
    status: z.string(),
    type: z.string(),
    abstract: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    citation: z.string(),
    links: z.array(linkSchema),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    year: z.number().int(),
    status: z.string(),
    description: z.string(),
    role: z.string(),
    outputs: z.array(z.string()),
    tags: z.array(z.string()),
    featured: z.boolean(),
    image: z.string(),
    imageAlt: z.string(),
    links: z.array(linkSchema),
  }),
});

const writings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    externalUrl: z.string().optional(),
    externalLabel: z.string().optional(),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string().optional(),
    location: z.string(),
    format: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    links: z.array(linkSchema),
  }),
});

export const collections = {
  papers,
  projects,
  writings,
  talks,
};
