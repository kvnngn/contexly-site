"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const CHROME_STORE_URL = "#";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-lg text-text-secondary sm:text-xl"
        >
          {t("subtitle")}
          <br />
          {t("subtitleLine2")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={CHROME_STORE_URL}
            className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-bg-primary shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:bg-accent-hover hover:shadow-accent/30"
          >
            {t("install")}
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
          >
            {t("seeHow")}
            <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Demo placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 mx-auto mt-16 w-full max-w-3xl"
      >
        <div className="overflow-hidden rounded-xl border border-border bg-bg-card shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-border" />
            <div className="h-3 w-3 rounded-full bg-border" />
            <div className="h-3 w-3 rounded-full bg-border" />
            <span className="ml-2 text-xs text-text-secondary">
              {t("browserBar")}
            </span>
          </div>
          <div className="flex min-h-[280px] items-center justify-center p-8 text-text-secondary">
            <div className="w-full max-w-md space-y-4">
              {/* Mock tweet */}
              <div className="rounded-lg border border-border bg-bg-primary p-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-bg-elevated" />
                  <div>
                    <div className="h-3 w-24 rounded bg-bg-elevated" />
                    <div className="mt-1 h-2 w-16 rounded bg-border" />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2.5 w-full rounded bg-bg-elevated" />
                  <div className="h-2.5 w-4/5 rounded bg-bg-elevated" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-accent">
                    {t("contextButton")}
                  </div>
                </div>
              </div>
              {/* Mock context note */}
              <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                <p className="text-xs font-medium text-accent">
                  {t("contextNote")}
                </p>
                <div className="mt-2 space-y-1.5">
                  <div className="h-2 w-full rounded bg-accent/20" />
                  <div className="h-2 w-5/6 rounded bg-accent/20" />
                  <div className="h-2 w-3/4 rounded bg-accent/20" />
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="rounded bg-accent/10 px-2 py-0.5 text-[10px] text-accent">
                    [1] reuters.com
                  </div>
                  <div className="rounded bg-accent/10 px-2 py-0.5 text-[10px] text-accent">
                    [2] apnews.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
