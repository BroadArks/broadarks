import { PageHero } from "@/components/sections/Shared";
import { PRIVACY_META, PRIVACY_SECTIONS } from "@/data/privacy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How BroadArks Technology Private Limited collects, uses, shares and protects personal information on broadarks.com and in its services.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        accent="Policy."
        lead="How BroadArks Technology Private Limited handles personal information when you visit broadarks.com, contact us, or take part in our services."
        meta={[
          { label: "Effective", value: PRIVACY_META.effective },
          { label: "Version", value: PRIVACY_META.version },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-4 lg:block">
            <nav aria-label="Policy sections" className="sticky top-32">
              <p className="eyebrow text-stone-soft">Contents</p>
              <ol className="mt-6 space-y-3 border-l border-line">
                {PRIVACY_SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px flex gap-3 border-l border-transparent pl-4 text-sm leading-snug text-stone transition-colors hover:border-ink hover:text-ink"
                    >
                      <span className="w-5 shrink-0 font-sans text-xs text-sky">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            {PRIVACY_SECTIONS.map((s, i) => (
              <article key={s.id} id={s.id} className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0">
                <p className="font-sans text-xs text-sky">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-sans text-[clamp(1.5rem,2.4vw,2rem)] leading-tight">{s.title}</h2>

                <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-stone">
                  {s.blocks.map((b, j) =>
                    typeof b === "string" ? (
                      <p key={j}>{b}</p>
                    ) : (
                      <ul key={j} className="space-y-3">
                        {b.list.map((item) => (
                          <li key={item} className="relative pl-6">
                            <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-sky" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  )}

                  {s.contact && (
                    <dl className="grid gap-x-8 gap-y-5 border border-line bg-shell p-6 sm:grid-cols-2 sm:p-8">
                      <div className="sm:col-span-2">
                        <dt className="eyebrow text-stone-soft">Organisation</dt>
                        <dd className="mt-2 text-ink">{s.contact.company}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="eyebrow text-stone-soft">Attention</dt>
                        <dd className="mt-2 text-ink">{s.contact.attention}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow text-stone-soft">Email</dt>
                        <dd className="mt-2">
                          <a href={`mailto:${s.contact.email}`} className="text-ink transition-colors hover:text-sky">
                            {s.contact.email}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="eyebrow text-stone-soft">Telephone</dt>
                        <dd className="mt-2">
                          <a href={s.contact.phone.href} className="text-ink transition-colors hover:text-sky">
                            {s.contact.phone.label}
                          </a>
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="eyebrow text-stone-soft">Postal address</dt>
                        <dd className="mt-2 text-ink">{s.contact.address}</dd>
                      </div>
                    </dl>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
