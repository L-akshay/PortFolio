import type { Metadata } from "next";
import { Hanken_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PortfolioChatbot } from "@/components/chatbot/PortfolioChatbot";
import { profile } from "@/data/profile";
import { professionalTitle } from "@/data/site-constants";
import { siteUrl } from "@/lib/site";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const seoDescription =
  "Software engineer building production backend, Android and applied-AI systems. Shipped a WireGuard VPN and contributed to a speech-to-text product serving 100K+ users.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lakshay Dawar - Backend, Android & AI Software Engineer",
    template: `%s - ${profile.name}`,
  },
  description: seoDescription,
  alternates: { canonical: "/" },
  applicationName: "Lakshay Dawar Portfolio",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title: "Lakshay Dawar - Backend, Android & AI Software Engineer",
    description: seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshay Dawar - Backend, Android & AI Software Engineer",
    description: seoDescription,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: professionalTitle,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  url: siteUrl,
  sameAs: [
    "https://github.com/L-akshay",
    "https://www.linkedin.com/in/lakshay-dawar-32153a32b",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lakshay Dawar Portfolio",
  url: siteUrl,
  author: { "@type": "Person", name: profile.name },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${profile.name} - ${professionalTitle}`,
  url: siteUrl,
  mainEntity: personJsonLd,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="bg-background text-foreground focus:ring-ring sr-only z-50 rounded-md px-3 py-2 text-sm focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:ring-2"
        >
          Skip to content
        </a>
        <div className="background-gradient" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd, profilePageJsonLd]),
          }}
        />
        <Providers>
          <SmoothScroll />
          <Navbar />
          <main id="main-content" className="relative z-10 flex-1">
            {children}
          </main>
          <Footer />
          <PortfolioChatbot />
        </Providers>
      </body>
    </html>
  );
}
