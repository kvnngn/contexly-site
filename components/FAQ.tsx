"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-base font-medium">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-text-secondary">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqCount = 7;

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section className="border-t border-border bg-bg-card px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>
        <div className="mt-12">
          {Array.from({ length: faqCount }, (_, i) => {
            const n = i + 1;
            return (
              <FAQItem
                key={n}
                q={t(`q${n}` as "q1")}
                a={t(`a${n}` as "a1")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
