import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ReducedMotionProvider } from "@/components/ReducedMotionProvider";
import { locales, defaultLocale } from "@/i18n/config";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] =
      loc === defaultLocale
        ? "https://contexly.io"
        : `https://contexly.io/${loc}`;
  }

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://contexly.io"),
    alternates: {
      canonical:
        locale === defaultLocale
          ? "https://contexly.io"
          : `https://contexly.io/${locale}`,
      languages,
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://contexly.io",
      siteName: "Contexly",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
        <NextIntlClientProvider messages={messages}>
          <ReducedMotionProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg-primary"
            >
              Skip to main content
            </a>
            <Nav />
            <main id="main-content" className="flex-1 pt-16">{children}</main>
            <Footer />
          </ReducedMotionProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
