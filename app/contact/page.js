import { PageHero } from "@/components/sections/Shared";
import {
  ContactForm,
  DivisionContacts,
  FAQ,
  VisitUs,
} from "@/components/sections/ContactSections";
import { CONTACT } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Start a conversation with BroadArks or any of its four divisions: learners, institutions, industry partners and investors. We reply within 2 working days.",
  path: "/contact",
  image: "/og/contact.png",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a"
        accent="conversation."
        lead="Learners, institutions, industry partners, investors, funders and the simply curious. Every useful thing we have built began with somebody writing in."
        meta={[
          { label: "General", links: [{ label: CONTACT.email, href: `mailto:${CONTACT.email}` }] },
          { label: "Phone", links: CONTACT.phones },
          { label: "Head office", value: CONTACT.city },
          { label: "Response time", value: "Within 2 working days" },
        ]}
      />
      <ContactForm />
      <DivisionContacts />
      <VisitUs />
      <FAQ />
    </>
  );
}
