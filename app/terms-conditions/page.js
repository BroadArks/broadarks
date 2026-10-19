import { PageHero } from "@/components/sections/Shared";
import { ArrowLink } from "@/components/ArrowLink";
import { TERMS_CLAUSES, TERMS_CLOSING, TERMS_DISCLAIMER, TERMS_INTRO } from "@/data/terms";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions for using the BroadArks Technology Private Limited website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms &"
        accent="Conditions."
        lead="The terms that apply when you use the BroadArks Technology Private Limited website."
        meta={[
          { label: "Governing law", value: "India" },
          { label: "Jurisdiction", value: "Courts of Bhopal" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-stone-soft">Related</p>
              <div className="mt-6 flex flex-col items-start gap-4">
                <ArrowLink href="/privacy">Privacy Policy</ArrowLink>
                <ArrowLink href="/contact">Contact us</ArrowLink>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9 lg:col-start-4 lg:pl-6">
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-stone lg:text-lg">
              {TERMS_INTRO.map((p, i) => (
                <p key={i} className={i === 0 ? "lead text-ink" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <ol className="mt-12">
              {TERMS_CLAUSES.map((c) => (
                <li key={c.no} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-8 sm:grid-cols-[4rem_1fr]">
                  <span className="font-sans text-sm text-sky">{c.no}</span>
                  <div className="space-y-4 text-[1.0625rem] leading-relaxed text-stone lg:text-lg">
                    {c.paras.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>

            <p className="border-t border-line pt-8 text-[1.0625rem] font-medium leading-relaxed text-ink lg:text-lg">
              {TERMS_CLOSING}
            </p>

            <div className="mt-14 border border-line bg-shell p-6 sm:p-8">
              <h2 className="font-sans text-[clamp(1.375rem,2.2vw,1.75rem)] leading-tight">{TERMS_DISCLAIMER.title}</h2>
              <p className="mt-5 text-sm uppercase leading-relaxed tracking-[0.02em] text-stone lg:text-[0.95rem]">{TERMS_DISCLAIMER.text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
