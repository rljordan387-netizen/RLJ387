import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
};

const insightsDirectory = path.join(process.cwd(), "content", "insights");

export function getAllInsights(): Insight[] {
  return fs
    .readdirSync(insightsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getInsightBySlug(file.replace(/\.mdx$/, "")))
    .filter((insight): insight is Insight => insight !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getInsightBySlug(slug: string): Insight | null {
  const safeSlug = slug.replace(/[^a-z0-9-]/g, "");
  const fullPath = path.join(insightsDirectory, `${safeSlug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  return {
    slug: safeSlug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    readTime: String(data.readTime),
    category: String(data.category),
    content,
  };
}
