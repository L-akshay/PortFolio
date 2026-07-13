import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this portfolio handles your data.",
};

export default function PrivacyPage() {
  return (
    <PageContainer className="max-w-2xl pt-14 pb-24">
      <h1 className="text-2xl font-semibold tracking-tight">Privacy</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted">
        <p>
          This is a personal portfolio site. It collects as little data as possible.
        </p>
        <section>
          <h2 className="mb-1.5 font-semibold text-foreground">Chat assistant</h2>
          <p>
            Messages you send to the &quot;Ask about me&quot; assistant are forwarded to
            an AI provider to generate a reply and are not stored by this site. Please
            don&apos;t include personal or sensitive information in chat messages. Your
            conversation lives only in your browser and disappears when you reset it or
            leave the page.
          </p>
        </section>
        <section>
          <h2 className="mb-1.5 font-semibold text-foreground">Contact form</h2>
          <p>
            Messages sent through the contact form are delivered to my email inbox and
            used only to reply to you. They are not stored in any database by this
            site.
          </p>
        </section>
        <section>
          <h2 className="mb-1.5 font-semibold text-foreground">Cookies & analytics</h2>
          <p>
            This site does not set tracking cookies. Your theme preference and whether
            you&apos;ve seen the chat assistant are stored locally in your browser
            only.
          </p>
        </section>
        <section>
          <h2 className="mb-1.5 font-semibold text-foreground">Questions</h2>
          <p>
            Email{" "}
            <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
              {profile.email}
            </a>
            .
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
