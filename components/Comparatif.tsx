"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export function Comparatif() {
  const t = useTranslations("comparatif");

  const items = [
    { label: t("unlikeGrok"), description: t("unlikeGrokDesc") },
    { label: t("unlikeCN"), description: t("unlikeCNDesc") },
    { label: t("unlikeManual"), description: t("unlikeManualDesc") },
  ];

  return (
    <section className="border-t border-border bg-bg-card px-6 py-20">
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-border bg-bg-primary p-6 text-center"
          >
            <p className="text-sm font-semibold text-accent">{item.label}</p>
            <p className="mt-2 text-sm text-text-secondary">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
