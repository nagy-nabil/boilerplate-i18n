import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from '@/navigation'

type Params = {
  params: {
    locale: string
  };
};

export default function Index({ params }: Params) {
  // Enable static rendering
  unstable_setRequestLocale(params.locale);

  const allPosts = getAllPosts(params.locale);

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}

export async function generateMetadata() {
  const languages: Record<string, string> = {}
  locales.forEach(languageCode => {
    languages[languageCode] = `/${languageCode}/blog`;
  });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
    alternates: {
      canonical: '/',
      languages,
    },
  }
}
