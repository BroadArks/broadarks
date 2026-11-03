import { DIVISIONS, POSTS } from "@/data/site";
import { SITE_URL, isoDate } from "@/lib/seo";

export default function sitemap() {
  // Static pages carry no lastmod rather than a build timestamp Google would
  // learn to ignore; the journal index moves with its newest post.
  const postDates = POSTS.map((p) => isoDate(p.date)).filter(Boolean).sort();
  const latestPost = postDates[postDates.length - 1];

  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/divisions`, changeFrequency: "monthly", priority: 0.9 },
    ...DIVISIONS.map((d) => ({
      url: `${SITE_URL}/divisions/${d.slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestPost ? new Date(latestPost) : undefined,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...POSTS.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: isoDate(p.date) ? new Date(isoDate(p.date)) : undefined,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-conditions`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
