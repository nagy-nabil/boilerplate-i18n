import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LocaleSwitcher from "../_components/localeSwitcher";
import { Link } from "@/navigation";
// import { locales} from '@/navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website example",
  description: "Description of the website",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html className={inter.className} lang={locale}>
      <body>
        <header className="w-full flex justify-between h-fit p-1 border-b-2 border-gray-700">
          <div className="flex gap-4 items-center">
            <Link href="/">
              <h1 className="text-xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">Website</h1>
            </Link>
            <Link href="/blog">Blog</Link>
          </div>
          <LocaleSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}

// export function generateStaticParams() {
//   return locales.map((locale) => ({locale}));
// }
