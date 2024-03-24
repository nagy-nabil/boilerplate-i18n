import { Homepage } from "@/components/homepage";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/navigation";

export default function Index({ params }: { params: { locale: string; } }) {
  // Enable static rendering
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      <Homepage />
    </>
  );
}

export async function generateMetadata() {
  const languages: Record<string, string> = {}
  locales.forEach(languageCode => {
    languages[languageCode] = `/${languageCode}`;
  });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
    alternates: {
      canonical: '/',
      languages,
    },
  }
}
