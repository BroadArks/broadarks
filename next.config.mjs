/**
 * Addresses from the previous WordPress site that Google still lists. Each
 * goes to the page that now covers the same ground, permanently, so the old
 * result is replaced by the new page instead of decaying through a 404.
 */
const LEGACY_POSTS = [
  "digital-revolution-in-indian-healthcare",
  "from-tokens-to-technology-disruptions",
  "future-emerging-changes",
  "future-of-work-life-and-the-emerging-changes",
  "nep2020-step-in-the-right-direction",
  "protips-for-first-jobbers",
  "role-of-teachers-in-the-digital-era",
  "skilling-during-covid19",
  "technology-led-transformational-changes-in-education",
  "what-ails-the-msmes-regulation-or-productivity",
];

const LEGACY_REDIRECTS = [
  ["/our-offering", "/divisions"],
  ["/our-world", "/divisions"],
  // Skilling sectors and placements are Y&Now's ground now.
  ["/priority-sectors", "/divisions/y-and-now"],
  ["/job-placements", "/divisions/y-and-now"],
  ["/join-us", "/contact"],
  ["/contact-us", "/contact"],
  ["/about-us", "/about"],
  ["/privacy-and-policies", "/privacy"],
  ["/privacy-policy", "/privacy"],
  ["/sitemap", "/"],
  ["/home", "/"],
  ["/index.php", "/"],
  ["/blog/page/:n", "/blog"],
  ["/category/:path*", "/blog"],
  ["/tag/:path*", "/blog"],
  ["/author/:path*", "/blog"],
  ["/feed", "/blog"],
  ...LEGACY_POSTS.map((slug) => [`/${slug}`, "/blog"]),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // WordPress URLs end in "/"; Next strips that first (308), then these
    // apply. Two permanent hops, which crawlers follow and consolidate.
    return LEGACY_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
