export const siteConfig = {
  name: "Ron Jordan",
  role: "Transformation Advisor",
  description:
    "Ron Jordan advises CEOs and executive teams through business transformation, pivotal leadership decisions, and strategic planning.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ron.jordan@aurelianadvisorygroup.co",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/rljordan387",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  navigation: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/transformation-assurance-index", label: "Assurance Index" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export function getConsultationHref() {
  if (siteConfig.calendlyUrl) return siteConfig.calendlyUrl;
  if (siteConfig.contactEmail) return `mailto:${siteConfig.contactEmail}`;
  return "/contact";
}

export function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}
