import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      test page
    </>
  );
};

export default Page;
