import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { Comparatif } from "@/components/Comparatif";
import { HowItWorks } from "@/components/HowItWorks";
import { Platforms } from "@/components/Platforms";
import { BYOK } from "@/components/BYOK";
import { FAQ } from "@/components/FAQ";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Comparatif />
      <HowItWorks />
      <Platforms />
      <BYOK />
      <FAQ />
    </>
  );
}
