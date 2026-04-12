import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";

const baseUrl = "https://contexly.io";

function getAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] =
      locale === defaultLocale
        ? `${baseUrl}${path}`
        : `${baseUrl}/${locale}${path}`;
  }
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/privacy", "/terms"];

  return paths.map((path) => ({
    url:
      path === "/"
        ? baseUrl
        : `${baseUrl}${path}`,
    lastModified: new Date(),
    alternates: getAlternates(path),
  }));
}
