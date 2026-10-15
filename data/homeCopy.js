/**
 * Homepage copy, kept out of the components so the two approved copy
 * directions can be swapped without touching layout or motion.
 *
 * Direction 1 — "The Institutional Leader"
 * Direction 2 — "The Action Driven"
 *
 * Switch with NEXT_PUBLIC_COPY_DIRECTION=1 | 2 (defaults to 2).
 *
 * Headline shape mirrors the design: an array of lines, each line an array of
 * segments. `tone` maps to the accent treatments already in the markup —
 * "sky" for the blue word, "serif" for the italic serif phrase, "soft" for the
 * muted second line of a two-tone section heading.
 */

const DIRECTION_1 = {
  hero: {
    eyebrow: "One World · Four Divisions · Since 2020",
    headline: [
      [{ text: "Building integrated" }],
      [{ text: "systems", tone: "sky" }],
      [{ text: "for long-term human", tone: "serif" }],
      [{ text: "progress." }],
    ],
    lead:
      "Guided by a philosophy, BroadArks unites technology, enterprise, and social development under a single ecosystem designed for enduring impact.",
    primary: { href: "/divisions", label: "Explore our divisions" },
    secondary: { href: "/about", label: "See our impact" },
    railLabel: "The divisions",
  },

  purpose: {
    eyebrow: "Our core purpose",
    statement: "Real progress occurs when innovation gives people the tools to advance.",
  },

  belief: {
    label: "Our model",
    note: "Established in March 2020 by Mr. Pankaj Dutta and Dr. Kaveri Dutta.",
    body:
      "Sustainable social and economic progress cannot happen in silos. BroadArks operates at the intersection of business strategy, digital tools, and workforce development to build scalable, repeatable models for growth across India.",
    pillars: [
      {
        k: "Enterprise",
        v: "Designing resilient operational systems built for multi-year stability and cross-regional expansion.",
      },
      {
        k: "Technology",
        v: "Developing custom, locally adaptive digital platforms that streamline delivery and maximize adoption.",
      },
      {
        k: "Human development",
        v: "Executing targeted skilling and livelihood programs that deliver direct, verifiable economic mobility.",
      },
    ],
  },

  ecosystem: {
    label: "Our ecosystem",
    headline: [
      [{ text: "Four core pillars." }],
      [{ text: "One integrated ecosystem.", tone: "soft" }],
    ],
    subtext:
      "Each division addresses a distinct layer of workforce development, digital infrastructure, and social impact. Together, they operate as a single system designed to deliver measurable, human-centric outcomes across India.",
    divisions: {
      "y-and-now": {
        category: "One World / Future Skills",
        tagline: "Skills for Evolving Industry Demands.",
        summary:
          "A specialized training platform bridging academic learning and workplace requirements to turn theoretical knowledge into job readiness.",
      },
      "vihanga-ai": {
        category: "One World / Advanced Technology",
        tagline: "Engineering Next-Generation Systems.",
        summary:
          "A deep-tech initiative developing core applications across artificial intelligence, robotics, autonomous systems, and advanced engineering.",
      },
      karigreen: {
        category: "One World / Responsible Commerce",
        tagline: "Traditional Craft for Modern Markets.",
        summary:
          "Connecting artisan heritage with contemporary design standards, sustainable production, and global market access.",
      },
      "broadarks-foundation": {
        category: "One World / Social Development",
        tagline: "Grassroots Impact and Inclusion.",
        summary:
          "Our non-profit arm executing targeted social development, economic inclusion, and community livelihood projects across India.",
      },
    },
    closing: {
      eyebrow: "One World",
      statement: "Diverse challenges. Focused execution. One metric for success.",
      text:
        "What tangible progress remains for a person, enterprise, or community after our work is complete?",
      cta: { href: "/divisions", label: "See all divisions" },
    },
  },

  principles: {
    label: "Our ecosystem",
    headline: [
      [{ text: "Our operational" }],
      [{ text: "principles behind every initiative.", tone: "soft" }],
    ],
    text:
      "These are not decorative statements. They serve as strict evaluation criteria across every division before project approval and resource allocation.",
    link: { href: "/about", label: "Read our full story" },
    items: [
      {
        no: "01",
        title: "People-Centric Outcomes",
        text:
          "Technology is simply a delivery mechanism. Our true standard of success is expanding real economic options for individuals who previously lacked them.",
      },
      {
        no: "02",
        title: "Multi-Year Value Creation",
        text:
          "We focus on systemic challenges requiring multi-year commitment. Sustainable depth creates compound returns that speed alone cannot replicate.",
      },
      {
        no: "03",
        title: "Indigenous Development",
        text:
          "The core technical competencies shaping India's growth should be designed, engineered, and managed within the country.",
      },
      {
        no: "04",
        title: "Rigorous Impact Verification",
        text:
          "Program reach is merely an input. Verifiable human and economic outcomes are the only true metrics, so we define measurement protocols before execution begins.",
      },
    ],
  },

  cta: {
    eyebrow: "Build with us",
    title: "Partner with BroadArks to scale high-impact programs.",
    text:
      "Whether you are deploying CSR capital, launching enterprise skilling programs, or scaling regional tech infrastructure, we bring the operational model to deliver verified outcomes.",
    primary: { href: "/contact", label: "Discuss a partnership" },
    secondary: { href: "/divisions", label: "Explore our divisions" },
  },
};

const DIRECTION_2 = {
  hero: {
    eyebrow: "One World · Four Divisions · Since 2020",
    headline: [
      [{ text: "Aligning" }, { text: "technology,", tone: "sky" }],
      [{ text: "enterprise, and" }],
      [{ text: "social impact under", tone: "serif" }],
      [{ text: "one shared vision." }],
    ],
    lead:
      "BroadArks serves as the foundation for multi-sector initiatives that expand human possibility and build sustainable futures across India.",
    primary: { href: "/divisions", label: "View our divisions" },
    secondary: { href: "/about#vision", label: "Our vision" },
    railLabel: "The divisions",
  },

  purpose: {
    eyebrow: "The driving goal",
    statement: "Technology creates true value when it opens practical doors for human potential.",
  },

  belief: {
    label: "Our foundation",
    note: "Established in March 2020 by Mr. Pankaj Dutta and Dr. Kaveri Dutta.",
    body:
      "Real impact occurs when technical innovation creates clear pathways for people to thrive. We combine business operations, technology systems, and community skilling into a single framework designed for nationwide execution.",
    pillars: [
      {
        k: "Enterprise",
        v: "Structuring sustainable business models that deliver lasting value over time.",
      },
      {
        k: "Technology",
        v: "Building robust digital infrastructure engineered for accessibility and immediate utility.",
      },
      {
        k: "Human development",
        v: "Unlocking practical skills and economic opportunities that directly improve lives.",
      },
    ],
  },

  ecosystem: {
    label: "What we build",
    headline: [
      [{ text: "Four focused solutions." }],
      [{ text: "One shared vision.", tone: "soft" }],
    ],
    subtext:
      "Every division solves a specific challenge in skill building, tech integration, or community growth. Each initiative is rooted in the same fundamental goal: turning structured execution into direct progress for real people.",
    divisions: {
      "y-and-now": {
        category: "One World / Workforce Skilling",
        tagline: "Practical Training for Modern Careers.",
        summary:
          "Connecting education directly with employment through hands-on technical skills and workplace readiness programs.",
      },
      "vihanga-ai": {
        category: "One World / Deep Tech & AI",
        tagline: "Building Tomorrow's Intelligent Tech.",
        summary:
          "Designing practical solutions at the intersection of AI, automated systems, robotics, and industrial engineering.",
      },
      karigreen: {
        category: "One World / Sustainable Commerce",
        tagline: "Artisan Craftsmanship Reimagined.",
        summary:
          "Bringing traditional artisan skills into modern enterprise by combining sustainable design with commercial reach.",
      },
      "broadarks-foundation": {
        category: "One World / Community Impact",
        tagline: "Community Progress in Action.",
        summary:
          "Driving grassroots initiatives that empower local populations with sustainable livelihoods and financial independence.",
      },
    },
    closing: {
      eyebrow: "One World",
      statement: "Different initiatives. Distinct timelines. One clear result.",
      text:
        "How effectively have we improved prospects for individuals, local businesses, and regional communities?",
      cta: { href: "/divisions", label: "Explore all divisions" },
    },
  },

  principles: {
    label: "Our standards",
    headline: [
      [{ text: "Four non-negotiable" }],
      [{ text: "standards for real impact.", tone: "soft" }],
    ],
    text:
      "Every project must meet these core criteria before we build, partner, or commit long-term resources.",
    link: { href: "/about", label: "Our story" },
    items: [
      {
        no: "01",
        title: "Human Mobility First",
        text:
          "Tools are only useful if they open concrete doors. We judge our success by what a person can achieve today that was out of reach yesterday.",
      },
      {
        no: "02",
        title: "Building for Long-Term Scale",
        text:
          "We address fundamental problems that demand persistent execution. Deep operational roots yield results that quick fixes never deliver.",
      },
      {
        no: "03",
        title: "Locally Owned Solutions",
        text:
          "Essential tools for regional and national development must be built from the ground up to fit local contexts.",
      },
      {
        no: "04",
        title: "Measurable Field Results",
        text:
          "Participation rates do not equal success. We build evaluation systems into our programs from day one to guarantee clear, trackable progress.",
      },
    ],
  },

  cta: {
    eyebrow: "Work with us",
    title: "Let's turn human potential into economic progress.",
    text:
      "We partner with companies, institutions, and community leaders to build practical training models and digital systems that work on the ground.",
    primary: { href: "/contact", label: "Start a conversation" },
    secondary: { href: "/divisions", label: "View our divisions" },
  },
};

export const COPY_DIRECTIONS = { 1: DIRECTION_1, 2: DIRECTION_2 };

export const COPY_DIRECTION =
  process.env.NEXT_PUBLIC_COPY_DIRECTION === "1" ? "1" : "2";

export const HOME_COPY = COPY_DIRECTIONS[COPY_DIRECTION];
