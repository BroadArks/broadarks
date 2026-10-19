import { notFound } from "next/navigation";
import { DIVISIONS } from "@/data/site";
import { CTABand } from "@/components/sections/Shared";
import {
  DivisionBody,
  DivisionClosing,
  DivisionHero,
  OtherDivisions,
} from "@/components/sections/DivisionSections";

export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = DIVISIONS.find((x) => x.slug === slug);
  if (!d) return {};
  return { title: d.name, description: d.summary };
}

export default async function DivisionPage({ params }) {
  const { slug } = await params;
  const d = DIVISIONS.find((x) => x.slug === slug);
  if (!d) notFound();

  // Text stays neutral black; the division's colour goes to fills, accents and tints only.
  const palette = {
    "--color-ink": "#15181D",
    "--color-fill": d.theme.fill,
    "--color-sky": d.theme.sky,
    "--color-sky-soft": d.theme.skySoft,
    "--color-tint": d.theme.tint,
  };

  return (
    <>
      <div style={palette}>
        <DivisionHero d={d} />
        <DivisionBody d={d} />
        <DivisionClosing d={d} />
        <OtherDivisions current={d.slug} />
      </div>
      {/* Outside the division palette so the closing CTA matches across every division page. */}
      <CTABand
        eyebrow={`Work with ${d.name}`}
        title="Start the conversation."
        text="Tell us what you are trying to build, and we will point you to the right people inside the division."
        primary={{ href: "/contact", label: "Contact us" }}
        secondary={{ href: "/divisions", label: "All divisions" }}
      />
    </>
  );
}
