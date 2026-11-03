import { Inter, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, HOME_DESCRIPTION, HOME_TITLE, LEGAL_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

// Pages override title, description, canonical and share card through
// pageMetadata(); these are the fallbacks and the site-wide fields.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${BRAND}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: BRAND,
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: LEGAL_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  // Search engines and most crawlers want a plain, media-less icon (and
  // /favicon.ico) to pick up; browsers then switch to the navy mark on light
  // chrome and the white mark on dark.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-light.png", type: "image/png", sizes: "512x512", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", type: "image/png", sizes: "512x512", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: BRAND,
    locale: "en_IN",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: HOME_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BroadarksTech",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${instrument.variable}`}>
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <Cursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
