import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
            test page
    </>
  );
};

export default Page;
