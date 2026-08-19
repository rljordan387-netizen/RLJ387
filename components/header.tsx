import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { getConsultationHref, isExternalHref, siteConfig } from "@/lib/site-config";

export function Header() {
  const consultationHref = getConsultationHref();
  return (
    <header className="relative z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex min-h-24 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/" className="flex items-center gap-3 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" aria-label="Ron Jordan home">
          <BrandMark />
          <span>
            <span className="block font-serif text-xl leading-none">Ron Jordan</span>
            <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.2em] text-teal">Transformation Advisor</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-navy/75 transition-colors hover:text-teal">{item.label}</Link>
          ))}
          <Button asChild size="sm">
            <Link href={consultationHref} target={isExternalHref(consultationHref) ? "_blank" : undefined} rel={consultationHref.startsWith("http") ? "noreferrer" : undefined}>
              Book a consultation <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </nav>

        <details className="group relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-navy/20 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" aria-label="Open navigation menu">
            <Menu className="size-5" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 top-14 w-[min(22rem,calc(100vw-2.5rem))] border border-navy/10 bg-ivory p-5 shadow-2xl">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href} className="border-b border-navy/10 py-4 font-serif text-2xl text-navy">{item.label}</Link>)}
              <Button asChild className="mt-5">
                <Link href={consultationHref}>Book a consultation <ArrowUpRight className="size-4" /></Link>
              </Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
