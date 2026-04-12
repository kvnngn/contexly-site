import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("termsTitle"),
    description: t("termsDescription"),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "terms" });

  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-bold sm:text-4xl">{t("title")}</h1>
      <p className="mt-2 text-sm text-text-secondary">{t("lastUpdated")}</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("acceptanceTitle")}
          </h2>
          <p className="mt-3">{t("acceptanceText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("descriptionTitle")}
          </h2>
          <p className="mt-3">{t("descriptionText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("responsibilitiesTitle")}
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-3">
            <li>{t("responsibility1")}</li>
            <li>{t("responsibility2")}</li>
            <li>{t("responsibility3")}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("warrantyTitle")}
          </h2>
          <p className="mt-3">{t("warrantyText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("liabilityTitle")}
          </h2>
          <p className="mt-3">{t("liabilityText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("ipTitle")}
          </h2>
          <p className="mt-3">{t("ipText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("terminationTitle")}
          </h2>
          <p className="mt-3">{t("terminationText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("changesTosTitle")}
          </h2>
          <p className="mt-3">{t("changesTosText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("lawTitle")}
          </h2>
          <p className="mt-3">{t("lawText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("contactTitle")}
          </h2>
          <p className="mt-3">
            {t("contactText")}{" "}
            <a
              href="mailto:hello@contexly.io"
              className="text-accent hover:text-accent-hover"
            >
              hello@contexly.io
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
