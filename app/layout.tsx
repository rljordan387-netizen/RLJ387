import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Ron Jordan | Transformation Advisor", template: "%s | Ron Jordan" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: "Ron Jordan | Transformation Advisor",
    description: siteConfig.description,
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "Ron Jordan — Lead change with clarity" }],
  },
  twitter: { card: "summary_large_image", title: "Ron Jordan | Transformation Advisor", description: siteConfig.description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    jobTitle: siteConfig.role,
    ...(siteConfig.contactEmail ? { email: siteConfig.contactEmail } : {}),
    ...(siteConfig.linkedinUrl ? { sameAs: [siteConfig.linkedinUrl] } : {}),
  };

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
