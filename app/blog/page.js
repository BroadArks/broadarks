import { POSTS } from "@/data/site";
import { CTABand, PageHero, PostCard } from "@/components/sections/Shared";
import { FeaturedPost } from "@/components/sections/BlogSections";

export const metadata = {
  title: "Journal",
  description:
    "Periodically curated perspectives from across the BroadArks divisions on advanced competencies, technology, artisanal mastery and long-term value creation.",
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Foundational Insights"
        accent="on Strategic Endeavors"
        lead="Periodically curated perspectives from our respective divisions, analyzing advanced competencies, pioneering technological applications, artisanal mastery, and the diligent execution required for long-term value creation."
        meta={[
          { label: "Published", value: `${POSTS.length} pieces` },
          { label: "Topics", value: "Skills · Tech · Craft" },
        ]}
      />
      <FeaturedPost post={featured} />
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-x">
          <div className="flex items-end justify-between border-t border-line pt-8">
            <h2 className="font-sans text-2xl text-ink">More reading</h2>
            <span className="text-xs text-stone-soft">{rest.length} pieces</span>
          </div>
          <div className="mt-2 grid items-stretch gap-12 md:grid-cols-2 md:gap-10">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <CTABand
        eyebrow="Say hello"
        title="Have something you would like us to write about?"
        text="We read everything that arrives, and occasionally it turns into the next piece."
        primary={{ href: "/contact", label: "Write to us" }}
        secondary={{ href: "/divisions", label: "Explore divisions" }}
      />
    </>
  );
}
