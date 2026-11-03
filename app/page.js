import HeroHome from "@/components/sections/HeroHome";
import DivisionsRail from "@/components/sections/DivisionsRail";
import { FoundersStrip, Principles, Statement } from "@/components/sections/HomeSections";
import { CTABand, JournalTeaser, StatsBand } from "@/components/sections/Shared";
import { HOME_COPY } from "@/data/homeCopy";
import JsonLd from "@/components/JsonLd";
import { HOME_DESCRIPTION, HOME_TITLE, organizationJsonLd, pageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: HOME_TITLE,
  absoluteTitle: true,
  description: HOME_DESCRIPTION,
  path: "/",
  image: "/og/home.png",
});

export default function HomePage() {
  const { cta } = HOME_COPY;
  return (
    <>
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      <HeroHome />
      <Statement />
      <DivisionsRail />
      <StatsBand />
      <Principles />
      <FoundersStrip />
      <JournalTeaser />
      <CTABand
        eyebrow={cta.eyebrow}
        title={cta.title}
        text={cta.text}
        primary={cta.primary}
        secondary={cta.secondary}
      />
    </>
  );
}
