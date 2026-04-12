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
    title: t("privacyTitle"),
    description: t("privacyDescription"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-bold sm:text-4xl">{t("title")}</h1>
      <p className="mt-2 text-sm text-text-secondary">{t("lastUpdated")}</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("introTitle")}
          </h2>
          <p className="mt-3">{t("introText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("dataTitle")}
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-3">
            <li>
              <strong className="text-text-primary">{t("dataApiKeys")}</strong>{" "}
              — {t("dataApiKeysDesc")}
            </li>
            <li>
              <strong className="text-text-primary">
                {t("dataPostContent")}
              </strong>{" "}
              — {t("dataPostContentDesc")}
            </li>
            <li>
              <strong className="text-text-primary">{t("dataCache")}</strong> —{" "}
              {t("dataCacheDesc")}
            </li>
            <li>
              <strong className="text-text-primary">
                {t("dataNoTracking")}
              </strong>{" "}
              — {t("dataNoTrackingDesc")}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("thirdPartyTitle")}
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-3">
            <li>
              <strong className="text-text-primary">
                {t("thirdPartyLLM")}
              </strong>{" "}
              — {t("thirdPartyLLMDesc")}
            </li>
            <li>
              <strong className="text-text-primary">
                {t("thirdPartyTavily")}
              </strong>{" "}
              — {t("thirdPartyTavilyDesc")}
            </li>
            <li>
              <strong className="text-text-primary">
                {t("thirdPartyCF")}
              </strong>{" "}
              — {t("thirdPartyCFDesc")}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("storageTitle")}
          </h2>
          <p className="mt-3">{t("storageText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("rightsTitle")}
          </h2>
          <p className="mt-3">{t("rightsText")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            {t("changesTitle")}
          </h2>
          <p className="mt-3">{t("changesText")}</p>
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
