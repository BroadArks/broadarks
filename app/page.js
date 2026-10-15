import HeroHome from "@/components/sections/HeroHome";
import DivisionsRail from "@/components/sections/DivisionsRail";
import { FoundersStrip, Principles, Statement } from "@/components/sections/HomeSections";
import { CTABand, JournalTeaser, StatsBand } from "@/components/sections/Shared";
import { HOME_COPY } from "@/data/homeCopy";

export default function HomePage() {
  const { cta } = HOME_COPY;
  return (
    <>
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
