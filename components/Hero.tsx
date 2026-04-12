"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { CHROME_STORE_URL } from "@/lib/config";

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
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-bg-primary shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:bg-accent-hover hover:shadow-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
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

      {/* Demo mockup */}
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
              {/* Mock tweet with real content */}
              <div className="rounded-lg border border-border bg-bg-primary p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-elevated text-xs font-bold text-text-primary">
                    {t("demoAuthor").charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {t("demoAuthor")}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {t("demoHandle")}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-text-primary">
                  {t("demoTweet")}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-accent">
                    {t("contextButton")}
                  </div>
                </div>
              </div>
              {/* Mock context note — appears with delay */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
                className="rounded-lg border border-accent/30 bg-accent/5 p-4"
              >
                <p className="text-xs font-medium text-accent">
                  {t("contextNote")}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  {t("demoContextBody")}
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] text-accent">
                    [1] {t("demoSource1")}
                  </span>
                  <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] text-accent">
                    [2] {t("demoSource2")}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
