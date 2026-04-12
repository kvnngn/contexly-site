"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";

const CHROME_STORE_URL = "#";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-bg-card">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <Logo className="h-8 w-auto" />
          <p className="text-sm text-text-secondary">{t("tagline")}</p>
          <a
            href={CHROME_STORE_URL}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-hover"
          >
            {t("install")}
          </a>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <Link
              href="/privacy"
              className="transition-colors hover:text-text-primary"
            >
              {t("privacy")}
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="transition-colors hover:text-text-primary"
            >
              {t("terms")}
            </Link>
            <span>·</span>
            <a
              href="https://github.com/kvnngn/contexly"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-primary"
            >
              {t("github")}
            </a>
          </div>
          <p className="text-xs text-text-secondary/60">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
