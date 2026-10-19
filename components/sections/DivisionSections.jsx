"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/Section";
import { ArrowLink, ButtonLink } from "@/components/ArrowLink";
import { CurtainMedia, Parallax, Reveal, Rule, Words } from "@/components/Motion";
import { DIVISIONS } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];

/* ---------- Divisions index: alternating full blocks ---------- */
export function DivisionBlock({ d, i }) {
  const flip = i % 2 === 1;
  return (
    <section className={`${flip ? "bg-shell" : "bg-white"} py-20 lg:py-32`}>
      <div className="container-x">
        <div className="flex items-baseline justify-between border-t border-line pt-6">
          <span className="eyebrow text-stone-soft">{d.category}</span>
          <span className="font-sans text-sm text-sky">{d.index}</span>
        </div>

        <div className={`mt-12 grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${flip ? "lg:[direction:rtl]" : ""}`}>
          <div className="lg:col-span-6 lg:[direction:ltr]">
            <Parallax distance={30}>
              <CurtainMedia tone="gradient-drift border border-line" ratio="aspect-[5/4]">
                <img src={d.logo} alt={d.name} className="max-h-[36%] w-[60%] object-contain" />
              </CurtainMedia>
            </Parallax>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:[direction:ltr]">
            <h2 className="font-sans text-[clamp(2.25rem,4vw,3.5rem)] leading-none tracking-tight text-ink">
              <Words text={d.name} />
            </h2>
            <p className="mt-4 font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic text-sky">
              {d.tagline}
            </p>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[1.0625rem] leading-relaxed text-stone">{d.body[1]}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {d.disciplines.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3.5 py-1.5 text-[0.8125rem] uppercase tracking-[0.12em] text-stone">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
                <ButtonLink href={`/divisions/${d.slug}`}>Explore {d.name}</ButtonLink>
                <ArrowLink href={d.href} external>
                  {d.site}
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Detail page hero ---------- */
export function DivisionHero({ d }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="gradient-drift relative overflow-hidden border-b border-line">
      {/* Full-colour division logo over a drifting brand tint; it keeps to the space the copy leaves free. */}
      <motion.div
        style={{ y, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
        className="pointer-events-none absolute inset-x-[6vw] top-28 h-24 sm:h-32 lg:inset-x-auto lg:bottom-[30%] lg:right-[5vw] lg:top-32 lg:h-auto lg:w-[30%]"
        aria-hidden
      >
        <img src={d.logo} alt="" className="h-full w-full object-contain object-left lg:object-center" />
      </motion.div>

      <div className="container-x relative flex min-h-[80svh] flex-col justify-end pb-14 pt-64 sm:min-h-[86svh] sm:pt-72 lg:pb-24 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-3"
        >
          <Link href="/divisions" className="eyebrow text-stone-soft transition-colors hover:text-ink">
            Divisions
          </Link>
          <span className="text-line">/</span>
          <span className="eyebrow text-stone">{d.category.split("/")[1]}</span>
        </motion.div>

        <h1 className="display-1 mt-8 font-sans text-ink lg:max-w-[60%]">
          <Words text={d.name} />
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-[clamp(1.5rem,3vw,2.5rem)] italic leading-tight text-sky">
          {d.tagline}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          className="mt-10 flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:gap-x-10 lg:mt-12"
        >
          {d.kicker.length > 90 ? (
            <p className="max-w-2xl text-sm leading-relaxed text-stone">{d.kicker}</p>
          ) : (
            <span className="eyebrow text-stone">{d.kicker}</span>
          )}
          <span className="sm:ml-auto">
            <ArrowLink href={d.href} external>
              Visit {d.site}
            </ArrowLink>
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Detail body ---------- */
export function DivisionBody({ d }) {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel>{d.category}</SectionLabel>
            <h2 className="display-3 mt-5 max-w-[16ch] font-sans text-ink">
              <Words text={d.overviewTitle} />
            </h2>
            <div className="mt-8">
              <ArrowLink href={d.href} external>
                {d.site}
              </ArrowLink>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-8">
            {d.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={`leading-relaxed ${i === 0 ? "lead text-ink" : "text-[1.0625rem] text-stone"}`}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <SectionLabel>How we operate</SectionLabel>
            <h3 className="mt-5 font-sans text-[clamp(1.75rem,2.6vw,2.25rem)] leading-tight tracking-tight text-ink">
              <Words text={d.approachTitle} />
            </h3>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-lg text-[1.0625rem] leading-relaxed text-stone">{d.approachText}</p>
            </Reveal>
          </div>

          <div className="mt-10 space-y-px">
            {d.pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ duration: 0.85, delay: i * 0.06, ease: EASE }}
                className="group relative grid grid-cols-[3rem_1fr] gap-6 border-t border-line py-8"
              >
                <span className="font-sans text-xs text-sky">0{i + 1}</span>
                <div>
                  <h3 className="font-sans text-xl text-ink transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone">{p.text}</p>
                </div>
                <span className="absolute -top-px left-0 h-px w-0 bg-ink transition-[width] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing statement ---------- */
export function DivisionClosing({ d }) {
  return (
    <section className="bg-shell py-24 lg:py-36">
      <div className="container-x">
        <div className="flex h-[36vh] w-full items-center justify-center border border-line bg-white lg:h-[56vh]">
          <Reveal>
            <img src={d.logo} alt="" className="h-24 w-auto max-w-[70vw] object-contain sm:h-32 lg:h-40" />
          </Reveal>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <SectionLabel>In short</SectionLabel>
          </div>
          <div className="lg:col-span-9 lg:col-start-4">
            <h2 className="display-3 font-serif font-normal italic leading-[1.15] text-ink">
              <Words text={d.closingTitle} stagger={0.03} />
            </h2>
            <Reveal delay={0.2}>
              <p className="lead mt-8 max-w-2xl leading-relaxed text-stone">{d.closing}</p>
              <div className="mt-12">
                <ButtonLink href={d.href} external>
                  Visit {d.site}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Next divisions ---------- */
export function OtherDivisions({ current }) {
  const others = DIVISIONS.filter((d) => d.slug !== current);
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <h2 className="display-3 font-sans">
            <Words text="Elsewhere in BroadArks" />
          </h2>
          <ArrowLink href="/divisions">All divisions</ArrowLink>
        </div>

        <div className="mt-12 grid gap-12 border-t border-line pt-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {others.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.06}>
              <Link href={`/divisions/${d.slug}`} className="group block">
                <div className="mb-6 flex aspect-[16/10] items-center justify-center overflow-hidden border border-line bg-white">
                  <img
                    src={d.logo}
                    alt=""
                    className="max-h-[38%] w-[58%] object-contain transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-sans text-xl text-ink">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{d.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Rule };
