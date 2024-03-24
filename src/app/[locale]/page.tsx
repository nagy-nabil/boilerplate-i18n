import { Homepage } from "@/components/homepage";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Index({params} : {params: {locale: string;}}) {
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
