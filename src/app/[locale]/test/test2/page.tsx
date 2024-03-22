import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
    const t = useTranslations("Index");
    return (
        <>
            <h1>{t("title")}</h1>
            <p>test2</p>
        </>
    );
};

export default Page;
