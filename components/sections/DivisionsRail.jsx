"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { DIVISIONS } from "@/data/site";
import { HOME_COPY } from "@/data/homeCopy";
import { SectionLabel } from "@/components/Section";
import { Headline, Reveal } from "@/components/Motion";
import { ArrowLink } from "@/components/ArrowLink";

export default function DivisionsRail() {
  const { ecosystem } = HOME_COPY;
  // Homepage card copy overrides the canonical division copy used elsewhere.
  const cards = DIVISIONS.map((d) => ({ ...d, ...(ecosystem.divisions[d.slug] ?? {}) }));
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 96));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const rawX = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 120, damping: 30, mass: 0.4 });
  const progress = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  return (
    <>
      {/* Desktop: pinned horizontal rail */}
      <section
        ref={sectionRef}
        className="relative hidden bg-shell lg:block"
        style={{ height: `calc(100vh + ${Math.round(distance * 1.15)}px)` }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container-x flex items-end justify-between pb-10">
            <div>
              <SectionLabel>{ecosystem.label}</SectionLabel>
              <h2 className="display-2 mt-5 max-w-[22ch] font-sans">
                <Headline lines={ecosystem.headline} step={0.1} />
              </h2>
            </div>
            <div className="hidden max-w-sm pb-2 text-sm leading-relaxed text-stone xl:block">
              {ecosystem.subtext}
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-px w-40 bg-line">
                  <motion.div style={{ scaleX: progress }} className="absolute inset-0 origin-left bg-ink" />
                </div>
              </div>
            </div>
          </div>

          <motion.div ref={trackRef} style={{ x }} className="flex gap-8 pl-[3.5rem] pr-[3.5rem]">
            {cards.map((d) => (
              <RailCard key={d.slug} d={d} />
            ))}
            <ClosingCard copy={ecosystem.closing} />
          </motion.div>
        </div>
      </section>

      {/* Mobile: stacked */}
      <section className="bg-shell py-20 lg:hidden">
        <div className="container-x">
          <SectionLabel>{ecosystem.label}</SectionLabel>
          <h2 className="display-2 mt-5 font-sans">
            {ecosystem.headline.map((segments, i) => (
              <span key={i} className={`block ${i > 0 ? "text-stone-soft" : ""}`}>
                {segments.map((seg) => seg.text).join(" ")}
              </span>
            ))}
          </h2>
          <div className="mt-10 space-y-6">
            {cards.map((d) => (
              <Reveal key={d.slug}>
                <RailCard d={d} mobile />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <ClosingCard copy={ecosystem.closing} mobile />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function RailCard({ d, mobile = false }) {
  return (
    <Link
      href={`/divisions/${d.slug}`}
      className={`group relative flex shrink-0 flex-col justify-between overflow-hidden border border-line bg-white p-8 transition-colors duration-700 hover:border-ink/25 ${
        mobile ? "w-full" : "h-[58vh] w-[30rem]"
      }`}
    >
      <span className="absolute inset-x-0 bottom-0 h-0 bg-shell transition-[height] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:h-full" />

      <div className="relative flex items-start justify-between">
        <span className="eyebrow text-stone-soft">{d.category}</span>
        <span className="font-sans text-xs text-sky">{d.index}</span>
      </div>

      <div className="relative mt-10">
        <div className="mb-8 h-32 overflow-hidden bg-shell md:h-40">
          <img
            src={d.art}
            alt=""
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
          />
        </div>
        <h3 className="font-sans text-[2rem] leading-none tracking-tight text-ink">{d.name}</h3>
        <p className="mt-3 font-serif text-xl italic text-sky">{d.tagline}</p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">{d.summary}</p>
      </div>

      <div className="relative mt-8 flex items-center justify-between border-t border-line pt-5">
        <span className="mr-4 truncate text-[0.7rem] uppercase tracking-[0.16em] text-stone-soft">{d.site}</span>
        <span className="flex shrink-0 items-center gap-2 text-sm text-ink">
          Explore
          <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">→</span>
        </span>
      </div>
    </Link>
  );
}

function ClosingCard({ copy, mobile = false }) {
  return (
    <div
      className={`flex shrink-0 flex-col justify-between gap-10 bg-ink p-8 text-white ${
        mobile ? "w-full" : "h-[58vh] w-[26rem] gap-0"
      }`}
    >
      <span className="eyebrow text-white/50">{copy.eyebrow}</span>
      <div>
        <p className="font-sans text-3xl leading-tight">{copy.statement}</p>
        <p className="mt-5 text-sm leading-relaxed text-white/60">{copy.text}</p>
      </div>
      <ArrowLink href={copy.cta.href} light>
        {copy.cta.label}
      </ArrowLink>
    </div>
  );
}
