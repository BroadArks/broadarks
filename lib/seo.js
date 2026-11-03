import { CONTACT, DIVISIONS, FOUNDERS } from "@/data/site";
import { SOCIALS } from "@/components/Social";

/* ──────────────────────────────────────────────────────────
   Search & social metadata

   One origin for every absolute URL the site emits. broadarks.com is the
   host Google has indexed; www serves the same pages, so every page names
   the apex as canonical to keep the two from competing.
   ────────────────────────────────────────────────────────── */
export const SITE_URL = "https://broadarks.com";
export const BRAND = "BroadArks";
export const LEGAL_NAME = "BroadArks Technology Private Limited";

export const HOME_TITLE = "BroadArks | Enterprise, Technology & Human Development";
export const HOME_DESCRIPTION =
  "Founded in 2020, BroadArks unites technology, enterprise and social development across four divisions: Y&Now, Vihanga.ai, Karigreen and BroadArks Foundation.";

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

/**
 * Per-page metadata with canonical, Open Graph and X card filled in.
 *
 * Next merges metadata shallowly: a page that sets `openGraph` replaces the
 * layout's whole object, and one that doesn't inherits the homepage's title
 * and card. Every page goes through here so each preview is its own.
 */
export function pageMetadata({ title, description, path, image, absoluteTitle = false, type = "website", article }) {
  const shareTitle = absoluteTitle ? title : `${title} | ${BRAND}`;
  const images = [{ url: image, width: 1200, height: 630, alt: shareTitle }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: BRAND,
      locale: "en_IN",
      url: path,
      title: shareTitle,
      description,
      images,
      ...article,
    },
    twitter: {
      card: "summary_large_image",
      site: "@BroadarksTech",
      title: shareTitle,
      description,
      images,
    },
  };
}

/** Search titles and descriptions for the division pages, from each
 *  division's own copy; the on-page name alone is too thin to rank. */
export const DIVISION_SEO = {
  "y-and-now": {
    title: "Y&Now: Future Skills & Industry Readiness",
    description:
      "Y&Now, the BroadArks skills division, connects education with employment through hands-on technical skills, emerging technology and workplace readiness.",
  },
  "vihanga-ai": {
    title: "Vihanga.ai: AI, Robotics & Autonomous Systems",
    description:
      "Vihanga.ai, the BroadArks technology division, designs practical solutions across AI, robotics, autonomous systems, UAVs and industrial engineering.",
  },
  karigreen: {
    title: "Karigreen: Sustainable Craft & Artisan Enterprise",
    description:
      "Karigreen brings traditional artisan skills into modern enterprise, combining sustainable design with market reach and lasting livelihoods for artisans.",
  },
  "broadarks-foundation": {
    title: "BroadArks Foundation: Livelihoods & Social Impact",
    description:
      "BroadArks Foundation drives grassroots initiatives for sustainable livelihoods and financial independence, with inclusive access and measurable impact.",
  },
};

/** Clip to what Google shows: the first sentence if it fits, else whole words. */
export function snippet(text, max = 158) {
  if (text.length <= max) return text;
  const sentence = text.match(/^.+?[.!?](?=\s|$)/)?.[0];
  if (sentence && sentence.length <= max && sentence.length >= 80) return sentence;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

/** "12 August 2026" → "2026-08-12", for schema and article metadata. */
export function isoDate(human) {
  const d = new Date(`${human} 12:00 UTC`);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

/* ──────────────────────────────────────────────────────────
   Structured data (schema.org JSON-LD)
   ────────────────────────────────────────────────────────── */
const ORG_ID = `${SITE_URL}/#organization`;
export const orgRef = { "@id": ORG_ID };

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND,
  legalName: LEGAL_NAME,
  alternateName: ["BroadArks Technology", "Broadarks", "BroadArks One World"],
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: absoluteUrl("/icon-512.png"), width: 512, height: 512 },
  image: absoluteUrl("/og/home.png"),
  description: HOME_DESCRIPTION,
  slogan: "Innovation & Beyond",
  foundingDate: "2020-03-20",
  founders: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name.replace(/^(Mr|Dr)\.\s*/, ""), jobTitle: f.role })),
  email: CONTACT.email,
  telephone: CONTACT.phones.map((p) => p.href.replace("tel:", "")),
  address: {
    "@type": "PostalAddress",
    streetAddress: "CP-02, 7th Floor, Block C1, Sagar Premium Tower Phase-1, JK Hospital Road, Kolar",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462042",
    addressCountry: "IN",
  },
  hasMap: CONTACT.mapsUrl,
  contactPoint: [
    { "@type": "ContactPoint", contactType: "customer support", email: CONTACT.email, telephone: CONTACT.phones[0].href.replace("tel:", ""), areaServed: "IN", availableLanguage: ["en", "hi"] },
    { "@type": "ContactPoint", contactType: "careers", email: CONTACT.careersEmail },
  ],
  sameAs: SOCIALS.map((s) => s.href.split("?")[0].replace(/\/posts\/$/, "/")),
  subOrganization: DIVISIONS.map((d) => ({ "@type": "Organization", name: d.name, url: d.href })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BRAND,
  alternateName: ["BroadArks Technology", "Broadarks"],
  url: `${SITE_URL}/`,
  inLanguage: "en-IN",
  publisher: orgRef,
};

export const breadcrumbJsonLd = (trail) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: b.label,
    item: absoluteUrl(b.href),
  })),
});
