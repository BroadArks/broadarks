import { notFound } from "next/navigation";
import { POSTS } from "@/data/site";
import { CTABand } from "@/components/sections/Shared";
import { ArticleBody, ArticleHero, NextPost } from "@/components/sections/BlogSections";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, isoDate, orgRef, pageMetadata, snippet } from "@/lib/seo";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title.replace(/\.$/, ""),
    description: snippet(post.excerpt),
    path: `/blog/${post.slug}`,
    image: `/og/blog-${post.slug}.png`,
    type: "article",
    article: { publishedTime: isoDate(post.date), authors: [post.author], section: post.category },
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const index = POSTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = POSTS[index];
  const next = POSTS[(index + 1) % POSTS.length];

  const url = absoluteUrl(`/blog/${post.slug}`);
  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(`/og/blog-${post.slug}.png`),
    datePublished: isoDate(post.date),
    dateModified: isoDate(post.date),
    articleSection: post.category,
    inLanguage: "en-IN",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: post.author },
    publisher: orgRef,
  };

  return (
    <>
      <JsonLd
        data={[
          postJsonLd,
          breadcrumbJsonLd([
            { label: "Home", href: "/" },
            { label: "Journal", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <ArticleHero post={post} />
      <ArticleBody post={post} />
      <NextPost post={next} />
      <CTABand
        eyebrow="Continue"
        title="More of this work happens off the page."
        text="If something here maps to what you are building, we would like to hear about it."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/blog", label: "Back to the journal" }}
      />
    </>
  );
}
