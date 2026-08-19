import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { getConsultationHref, isExternalHref } from "@/lib/site-config";

export function ConsultationCta() {
  const href = getConsultationHref();
  return (
    <section className="bg-teal py-20 text-ivory sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
          <div>
            <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-gold">A useful first conversation</p>
            <h2 className="max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-[-0.03em] sm:text-6xl">What becomes possible with a strategic perspective?</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="mb-6 max-w-md text-lg leading-8 text-ivory/75">Bring the question that matters most. We’ll explore the situation, the stakes, and whether working together is the right next move.</p>
            <Button asChild variant="light" size="lg">
              <Link href={href} target={isExternalHref(href) ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>Book a consultation <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
