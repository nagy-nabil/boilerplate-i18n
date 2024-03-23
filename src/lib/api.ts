import { Post } from "@/interfaces/post";
import { defaultLocale } from "@/navigation";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const defaultPostsDir = join(postsDirectory, defaultLocale)

/**
 * return slugs based on default locale `en`
 *
 * @Note will return the slug.md
 */
export function getPostSlugs() {
  return fs.readdirSync(defaultPostsDir);
}

/**
 * @param slug string expected to contains the extension `slug`.md
 * @default locale en
  */
export function getPostBySlug(slug: string, locale: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath =  join(postsDirectory, locale, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

/**
 * @default locale en
*/
export function getAllPosts(locale: string): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
