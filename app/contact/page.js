import { PageHero } from "@/components/sections/Shared";
import {
  ContactForm,
  DivisionContacts,
  FAQ,
  VisitUs,
} from "@/components/sections/ContactSections";
import { CONTACT } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Start a conversation with BroadArks or any of its four divisions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a"
        accent="conversation."
        lead="Learners, institutions, industry partners, investors, funders and the simply curious. Every useful thing we have built began with somebody writing in."
        meta={[
          { label: "General", value: CONTACT.email },
          { label: "Phone", value: CONTACT.phones.map((ph) => ph.label.replace(/ /g, "\u00a0")).join(" · ") },
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
