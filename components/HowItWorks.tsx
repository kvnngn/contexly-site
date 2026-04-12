"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { MousePointerClick, Search, FileText } from "lucide-react";

const stepIcons = [MousePointerClick, Search, FileText];

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    { icon: stepIcons[0], title: t("step1Title"), description: t("step1Desc") },
    { icon: stepIcons[1], title: t("step2Title"), description: t("step2Desc") },
    { icon: stepIcons[2], title: t("step3Title"), description: t("step3Desc") },
  ];

  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          {t("title")}
        </motion.h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <step.icon className="h-7 w-7 text-accent" />
              </div>
              <span className="mt-2 text-xs font-medium text-text-secondary">
                {t("step", { number: i + 1 })}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
