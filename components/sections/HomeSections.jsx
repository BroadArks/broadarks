"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/Section";
import { ArrowLink } from "@/components/ArrowLink";
import { CurtainMedia, Headline, HighlightParagraph, Parallax, Reveal, Rule, Words } from "@/components/Motion";
import { FOUNDERS } from "@/data/site";
import { HOME_COPY } from "@/data/homeCopy";

const EASE = [0.16, 1, 0.3, 1];

/* ---------- Scroll-lit statement ---------- */
export function Statement() {
  const { belief } = HOME_COPY;
  return (
    <section className="bg-white py-24 lg:py-40">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <SectionLabel>{belief.label}</SectionLabel>
            <p className="mt-5 max-w-[26ch] text-sm leading-relaxed text-stone-soft">
              {belief.note}
            </p>
          </div>
        </div>
        <div className="lg:col-span-9">
          <HighlightParagraph
            className="display-3 font-sans font-medium text-ink"
            text={belief.body}
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {belief.pillars.map((item, i) => (
              <Reveal key={item.k} delay={i * 0.08}>
                <p className="eyebrow text-sky">{item.k}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Principles: sticky left, scrolling right ---------- */
export function Principles() {
  const { principles } = HOME_COPY;
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-x">
        <Rule />
        <div className="grid gap-14 pt-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel>{principles.label}</SectionLabel>
              <h2 className="display-2 mt-5 max-w-[15ch] font-sans">
                <Headline lines={principles.headline} step={0.1} />
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
                {principles.text}
              </p>
              <div className="mt-8">
                <ArrowLink href={principles.link.href}>{principles.link.label}</ArrowLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-px">
              {principles.items.map((p, i) => (
                <motion.div
                  key={p.no}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}
                  className="group relative border-t border-line py-10"
                >
                  <div className="flex gap-8">
                    <span className="font-sans text-xs text-sky">{p.no}</span>
                    <div>
                      <h3 className="font-sans text-2xl leading-tight transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-2">
                        {p.title}
                      </h3>
                      <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-stone">{p.text}</p>
                    </div>
                  </div>
                  <span className="absolute -top-px left-0 h-px w-0 bg-ink transition-[width] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Founders strip ---------- */
export function FoundersStrip() {
  return (
    <section className="bg-shell py-20 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-5">
            {FOUNDERS.map((f, i) => (
              <Parallax key={f.name} distance={i === 0 ? 26 : -26}>
                <CurtainMedia src={f.image} alt={f.name} ratio="aspect-[4/5]" />
                <p className="mt-4 font-sans text-sm text-ink">{f.name}</p>
                <p className="text-xs text-stone-soft">{f.role}</p>
              </Parallax>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionLabel>The founders</SectionLabel>
          <blockquote className="mt-6">
            <p className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] italic leading-[1.2] text-ink">
              <Words text="“We did not set out to build four companies. We set out to answer one question in four places: what does progress actually feel like for a person?”" />
            </p>
          </blockquote>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-[0.95rem] leading-relaxed text-stone">
              Pankaj and Dr. Kaveri Dutta founded BroadArks in March 2020 — an unlikely month to
              begin anything. That timing shaped the company: patient, pragmatic, and unwilling to
              confuse activity with progress.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <ArrowLink href="/about">Meet the founders</ArrowLink>
              <ArrowLink href="/contact">Partner with us</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
