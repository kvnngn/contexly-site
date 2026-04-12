"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const platforms = [
  { name: "X (Twitter)", domain: "x.com" },
  { name: "Bluesky", domain: "bsky.app" },
  { name: "LinkedIn", domain: "linkedin.com" },
];

export function Platforms() {
  const t = useTranslations("platforms");

  return (
    <section className="border-t border-border bg-bg-card px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {t("title")}
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-bg-primary p-8"
            >
              {/* Screenshot placeholder */}
              <div className="mx-auto flex h-40 items-center justify-center rounded-lg border border-border bg-bg-elevated/30">
                <span className="text-sm text-text-secondary">
                  {platform.domain}
                </span>
              </div>
              <p className="mt-4 text-lg font-semibold">{platform.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-sm text-text-secondary"
        >
          {t("comingSoon")}
        </motion.p>
      </div>
    </section>
  );
}
