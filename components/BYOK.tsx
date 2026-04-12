"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Key } from "lucide-react";

const CHROME_STORE_URL = "#";

export function BYOK() {
  const t = useTranslations("byok");

  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
          <Key className="h-7 w-7 text-accent" />
        </div>
        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-text-secondary">{t("description")}</p>
        <a
          href={CHROME_STORE_URL}
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg-primary transition-all hover:scale-[1.02] hover:bg-accent-hover"
        >
          {t("install")}
        </a>
      </motion.div>
    </section>
  );
}
