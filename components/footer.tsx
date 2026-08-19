import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { getConsultationHref, isExternalHref, siteConfig } from "@/lib/site-config";

export function Footer() {
  const consultationHref = getConsultationHref();
  return (
    <footer className="bg-navy py-14 text-ivory">
      <Container>
        <div className="grid gap-12 border-b border-ivory/15 pb-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="flex items-center gap-3"><BrandMark /><span className="font-serif text-2xl">Ron Jordan</span></div>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ivory/70">Helping executive teams create clarity, align around what matters, and sustain meaningful progress.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">Explore</p>
              <div className="grid gap-3">{siteConfig.navigation.map((item) => <Link key={item.href} href={item.href} className="text-ivory/70 hover:text-ivory">{item.label}</Link>)}</div>
            </div>
            <div>
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">Connect</p>
              <Link href={consultationHref} target={isExternalHref(consultationHref) ? "_blank" : undefined} className="inline-flex items-center gap-2 text-ivory/70 hover:text-ivory">Book a consultation <ArrowUpRight className="size-4" /></Link>
              {siteConfig.linkedinUrl && <Link href={siteConfig.linkedinUrl} target="_blank" className="mt-3 block text-ivory/70 hover:text-ivory">LinkedIn</Link>}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ron Jordan. All rights reserved.</p>
          <p>Strategy with clarity. Progress with purpose.</p>
        </div>
      </Container>
    </footer>
  );
}
