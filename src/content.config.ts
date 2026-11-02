import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts are Markdown files in src/content/blog.
// The admin page at /admin creates and edits these files for you.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().default("Notes"),
    summary: z.string(),
    readingTime: z.number().default(4),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
