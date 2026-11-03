/**
 * Renders the social share cards (Open Graph / X / LinkedIn / WhatsApp
 * previews) into public/og, one per page, division and journal post.
 *
 *   node scripts/build-og.mjs
 *
 * Each card is 1200×630: the logo, the page's own eyebrow and headline, and
 * the page's artwork from public/img. Cards are committed as static files so
 * a preview never depends on a function at crawl time.
 *
 * Re-run after changing a page headline, a division or a journal post. Needs
 * network access once, to fetch Plus Jakarta Sans from Google Fonts.
 */
import { ImageResponse } from "next/dist/compiled/@vercel/og/index.node.js";
import sharp from "sharp";
import fs from "fs";

const OUT = "public/og";
fs.mkdirSync(OUT, { recursive: true });

const INK = "#2E3191";
const SKY = "#27AAE1";
const STONE = "#606161";

// data/site.js is an ES module in a CommonJS package; load it from source.
const siteSrc = fs.readFileSync("data/site.js", "utf8");
const { DIVISIONS, POSTS } = await import(`data:text/javascript,${encodeURIComponent(siteSrc)}`);

/* [file, eyebrow, headline, accent line, artwork] — copy matches each page hero. */
const CARDS = [
  ["home", "One World · Four Divisions · Since 2020", "Building integrated systems", "for long-term human progress.", "home-scope"],
  ["about", "About BroadArks", "One company, four ways of asking", "the same question.", "about-people"],
  ["divisions", "One World · Four Divisions", "Different problems.", "The same measure.", "about-field"],
  ["contact", "Contact", "Start a", "conversation.", "contact-map"],
  ["blog", "The Journal", "Foundational Insights", "on Strategic Endeavors", "blog-01"],
  ["privacy", "Legal", "Privacy", "Policy.", "about-studio"],
  ["terms-conditions", "Legal", "Terms &", "Conditions.", "about-studio"],
  ...DIVISIONS.map((d) => [
    `divisions-${d.slug}`,
    d.category,
    d.name,
    d.tagline,
    d.hero.replace(/^\/img\/|\.svg$/g, ""),
  ]),
  ...POSTS.map((p) => [
    `blog-${p.slug}`,
    `Journal · ${p.category}`,
    p.title,
    "",
    p.image.replace(/^\/img\/|\.svg$/g, ""),
  ]),
];

async function font(css) {
  const sheet = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${css}`, {
      headers: { "User-Agent": "Mozilla/4.0" }, // old UA → TTF, which satori reads
    })
  ).text();
  const url = sheet.match(/url\(([^)]+\.ttf)\)/)[1];
  return Buffer.from(await (await fetch(url)).arrayBuffer());
}

const png = async (path, pipe = (s) => s) =>
  `data:image/png;base64,${(await pipe(sharp(path)).png().toBuffer()).toString("base64")}`;

const fonts = [
  { name: "Jakarta", data: await font("Plus+Jakarta+Sans:wght@600"), weight: 600, style: "normal" },
  { name: "Jakarta", data: await font("Plus+Jakarta+Sans:wght@500"), weight: 500, style: "normal" },
];
const mark = await png("public/logo-mark.webp");
const type = await png("public/logo-type.webp");
const markMeta = await sharp("public/logo-mark.webp").metadata();
const typeMeta = await sharp("public/logo-type.webp").metadata();
const MARK_H = 62;
const TYPE_H = 50;

const h = (type, style, children) => ({ type, props: { style, children } });
const ART_W = 470;

for (const [file, eyebrow, title, accent, art] of CARDS) {
  const artUri = await png(`public/img/${art}.svg`, (s) => s.resize(ART_W, 630, { fit: "cover" }));
  const chars = title.length + accent.length;
  const size = chars > 70 ? 46 : chars > 44 ? 54 : 64;

  const tree = h("div", { display: "flex", width: "100%", height: "100%", background: "#ffffff", fontFamily: "Jakarta" }, [
    h("div", {
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      width: 1200 - ART_W, height: "100%", padding: "60px 56px 56px 72px",
    }, [
      h("div", { display: "flex", alignItems: "center" }, [
        { type: "img", props: { src: mark, height: MARK_H, width: Math.round((markMeta.width / markMeta.height) * MARK_H) } },
        { type: "img", props: { src: type, height: TYPE_H, width: Math.round((typeMeta.width / typeMeta.height) * TYPE_H), style: { marginLeft: 14 } } },
      ]),
      h("div", { display: "flex", flexDirection: "column" }, [
        h("div", { display: "flex", color: STONE, fontSize: 20, fontWeight: 600, letterSpacing: 2.4, textTransform: "uppercase" }, eyebrow),
        h("div", { display: "flex", flexDirection: "column", marginTop: 22, fontSize: size, fontWeight: 600, lineHeight: 1.08, letterSpacing: -1.2 }, [
          h("div", { display: "flex", color: INK }, title),
          ...(accent ? [h("div", { display: "flex", color: SKY, marginTop: 6 }, accent)] : []),
        ]),
      ]),
      h("div", { display: "flex", alignItems: "center", color: STONE, fontSize: 22, fontWeight: 500 }, [
        h("div", { display: "flex", width: 40, height: 4, background: SKY, marginRight: 18 }, []),
        "broadarks.com",
      ]),
    ]),
    { type: "img", props: { src: artUri, width: ART_W, height: 630 } },
  ]);

  const out = Buffer.from(await new ImageResponse(tree, { width: 1200, height: 630, fonts }).arrayBuffer());
  // Flat vector art compresses far better as PNG than JPEG.
  await sharp(out).png({ palette: true, quality: 90, effort: 10 }).toFile(`${OUT}/${file}.png`);
  console.log(`${OUT}/${file}.png`);
}
