import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Header from "@/app/_components/header";
import { unstable_setRequestLocale } from "next-intl/server";

type Params = {
  params: {
    slug: string;
    locale: string
  };
};

export default async function Post({ params }: Params) {
  // Enable static rendering
  unstable_setRequestLocale(params.locale);

  const post = getPostBySlug(params.slug, params.locale);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}


export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug, params.locale);

  if (!post) {
    return notFound();
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL?? "http://localhost:3000"),
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage.url],
      siteName: 'Next.js',
    },
  };
}

export async function generateStaticParams({params}: Params) {
  const posts = getAllPosts(params.locale);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
