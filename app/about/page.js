import { PageHero, CTABand, StatsBand } from "@/components/sections/Shared";
import {
  AboutIntro,
  CultureGrid,
  Founders,
  Story,
  Timeline,
  VisionMission,
} from "@/components/sections/AboutSections";

export const metadata = {
  title: "About",
  description:
    "BroadArks was founded in March 2020 by Mr. Pankaj Dutta and Dr. Kaveri Dutta to bring enterprise, technology and human development under one shared ambition.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BroadArks"
        title="One company, four ways of asking"
        accent="the same question."
        lead="Founded in March 2020 by Mr. Pankaj Dutta and Dr. Kaveri Dutta, BroadArks brings enterprise, technology and human development under one shared ambition: to create meaningful progress for people, businesses and communities."
        meta={[
          { label: "Founded", value: "March 2020" },
          { label: "Headquarters", value: "Bhopal, India" },
          { label: "Structure", value: "Parent company" },
          { label: "Divisions", value: "Four, incl. a foundation" },
        ]}
      />
      <AboutIntro />
      <VisionMission />
      <Story />
      <StatsBand tone="shell" />
      <Founders />
      <Timeline />
      <CultureGrid />
      <CTABand
        eyebrow="Join us"
        title="If this sounds like your kind of work."
        text="We are always interested in collaborating with people, institutions, and partners who measure time in decades rather than quarters."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/blog", label: "Explore our journal" }}
      />
    </>
  );
}
