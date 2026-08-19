import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { Button } from "@/components/ui/button";
import { getAllInsights } from "@/lib/insights";
import { getConsultationHref, isExternalHref } from "@/lib/site-config";

const services = [
  { number: "01", title: "Business Transformation Consulting", copy: "Align the organization, operating model, and execution around meaningful change, without losing sight of the people responsible for making it real." },
  { number: "02", title: "Executive Guidance", copy: "Gain a confidential, objective perspective for high-stakes decisions, leadership transitions, and moments when the path forward is not yet clear." },
  { number: "03", title: "Strategic Planning", copy: "Translate ambition into focused priorities, clear ownership, practical operating rhythms, and measurable progress." },
  { number: "04", title: "Workday Transformation Advisory & Assurance", copy: "Strengthen governance, expose delivery risk, and prepare the organization to realize value from its Workday transformation." },
];

export default function HomePage() {
  const insights = getAllInsights().slice(0, 3);
  const consultationHref = getConsultationHref();
  return (
    <>
      <section className="overflow-hidden border-b border-navy/10">
        <Container>
          <div className="grid min-h-[calc(100vh-6rem)] gap-12 py-12 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:py-16">
            <div className="relative z-10 py-8 lg:py-16">
              <Eyebrow>Transformation advisor to executive leaders</Eyebrow>
              <h1 className="max-w-5xl text-balance font-serif text-[clamp(3.7rem,7.7vw,8.2rem)] leading-[.88] tracking-[-0.055em] text-navy">
                Transformation,<br />Led by <em className="font-normal text-teal">Clarity and Precision</em>
              </h1>
              <p className="mt-9 max-w-2xl text-lg leading-8 text-navy/70 sm:text-xl sm:leading-9">Ron Jordan advises CEOs and executive teams through business transformation, pivotal leadership decisions, and strategic planning, aligning people, priorities, and execution.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg"><Link href={consultationHref} target={isExternalHref(consultationHref) ? "_blank" : undefined}>Book a consultation <ArrowUpRight className="size-4" /></Link></Button>
                <Button asChild size="lg" variant="outline"><Link href="/services">Explore the work <ArrowRight className="size-4" /></Link></Button>
              </div>
            </div>
            <div className="relative lg:-mr-16">
              <PortraitPlaceholder
                photoSrc="/ron-jordan-portrait.jpg"
                alt="Ronald L. Jordan Jr. in an executive boardroom"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-navy/10 bg-paper py-8">
        <Container>
          <div className="grid gap-5 text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] text-navy/55 sm:grid-cols-3">
            <p>Clarity for pivotal decisions</p><p className="sm:border-x sm:border-navy/15">Alignment for complex change</p><p>Momentum that can be sustained</p>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.62fr_1.38fr]">
            <div><Eyebrow>How Ron helps</Eyebrow><p className="max-w-xs text-lg leading-8 text-navy/65">Focused advisory support for the moments that shape an organization’s future.</p></div>
            <div>
              <h2 className="max-w-4xl text-balance font-serif text-5xl leading-[1.04] tracking-[-0.035em] sm:text-7xl">Strategy matters. What leaders do <em className="font-normal text-teal">next</em> matters more.</h2>
              <div className="mt-16 divide-y divide-navy/15 border-y border-navy/15">
                {services.map((service) => (
                  <article key={service.number} className="grid gap-5 py-9 sm:grid-cols-[5rem_1fr_1fr] sm:gap-8">
                    <p className="text-xs font-bold tracking-[0.18em] text-gold">{service.number}</p>
                    <h3 className="font-serif text-3xl leading-tight">{service.title}</h3>
                    <p className="leading-7 text-navy/68">{service.copy}</p>
                  </article>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-8"><Link href="/services">View all services <ArrowRight className="size-4" /></Link></Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24 text-ivory sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div><Eyebrow className="text-gold">The advisory approach</Eyebrow><h2 className="max-w-xl text-balance font-serif text-5xl leading-[1.05] sm:text-6xl">Clear thinking. Candid dialogue. Practical movement.</h2></div>
            <div className="grid gap-px bg-ivory/15 sm:grid-cols-3">
              {[{n:"01",t:"Understand",c:"Surface the real issue, the context around it, and what is truly at stake."},{n:"02",t:"Align",c:"Create shared clarity around priorities, tradeoffs, ownership, and the path forward."},{n:"03",t:"Move",c:"Turn decisions into an operating cadence that builds momentum and accountability."}].map((step) => <article key={step.n} className="bg-navy p-7 sm:min-h-72"><p className="text-xs font-bold tracking-[.2em] text-gold">{step.n}</p><h3 className="mt-14 font-serif text-3xl">{step.t}</h3><p className="mt-4 leading-7 text-ivory/65">{step.c}</p></article>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><Eyebrow>Selected insights</Eyebrow><h2 className="font-serif text-5xl sm:text-6xl">Ideas for consequential moments.</h2></div><Link href="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-teal">View all insights <ArrowRight className="size-4" /></Link></div>
          <div className="grid gap-px bg-navy/15 border border-navy/15 lg:grid-cols-3">
            {insights.map((insight, index) => <Link href={`/insights/${insight.slug}`} key={insight.slug} className="group flex min-h-96 flex-col bg-ivory p-7 transition-colors hover:bg-paper"><div className="flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[.16em] text-teal"><span>{insight.category}</span><span>0{index+1}</span></div><h3 className="mt-auto font-serif text-3xl leading-[1.12] transition-transform group-hover:-translate-y-1">{insight.title}</h3><p className="mt-5 text-sm leading-6 text-navy/62">{insight.description}</p><div className="mt-7 flex items-center justify-between border-t border-navy/15 pt-5 text-xs text-navy/55"><span>{insight.readTime}</span><ArrowUpRight className="size-4 text-teal" /></div></Link>)}
          </div>
        </Container>
      </section>
      <ConsultationCta />
    </>
  );
}
