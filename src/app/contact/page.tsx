import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { PageContainer } from "@/components/layout/PageContainer";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — open to internships, engineering roles and freelance projects.`,
};

export default function ContactPage() {
  return (
    <PageContainer className="pt-14 pb-24">
      <ContactSection />
    </PageContainer>
  );
}
