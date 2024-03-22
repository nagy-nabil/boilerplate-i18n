import { Homepage } from "@/components/homepage";
import { useTranslations } from "next-intl";

export default function Index() {
    const t = useTranslations("Index");
    return (
        <>
            <h1>{t("title")}</h1>
            <Homepage />
        </>
    );
}
