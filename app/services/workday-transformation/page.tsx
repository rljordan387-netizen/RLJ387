import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Workday Transformation Advisory & Assurance",
  description:
    "Independent Workday transformation guidance for executive sponsors and program leaders focused on governance, program health, readiness, recovery, and value realization.",
  alternates: { canonical: "/services/workday-transformation" },
};

const supportAreas = [
  "Transformation strategy and program mobilization",
  "Independent program health assessments",
  "Executive sponsorship and governance",
  "System integrator oversight and accountability",
  "Scope, design, data, testing, and readiness reviews",
  "Go live and cutover readiness",
  "Program stabilization and recovery",
  "Post launch value realization",
] as const;

const engagementMoments = [
  {
    number: "01",
    title: "Before the program begins",
    copy: "Clarify the transformation thesis, governance model, decision rights, partner expectations, and measures of success before delivery pressure takes over.",
  },
  {
    number: "02",
    title: "While delivery is underway",
    copy: "Establish an independent view of program health, resolve issues that reported status can obscure, and strengthen accountability across business and delivery teams.",
  },
  {
    number: "03",
    title: "Before go live",
    copy: "Assess whether data, testing, cutover, adoption, support, and executive decision making are ready for a responsible go live decision.",
  },
  {
    number: "04",
    title: "When recovery is required",
    copy: "Identify the structural causes behind missed milestones or weak outcomes and create a practical roadmap for stabilization and renewed confidence.",
  },
] as const;

export default function WorkdayTransformationPage() {
  return (
    <>
      <section className="border-b border-navy/10 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <Eyebrow>Workday Transformation Advisory &amp; Assurance</Eyebrow>
              <h1 className="max-w-5xl text-balance font-serif text-6xl leading-[.95] tracking-[-.045em] sm:text-8xl">
                Turn a complex Workday program into a transformation that <em className="font-normal text-teal">delivers.</em>
              </h1>
            </div>
            <p className="max-w-xl text-xl leading-9 text-navy/68">
              Independent guidance for organizations planning, implementing, stabilizing, or seeking greater value from a Workday transformation.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.62fr_1.38fr]">
            <div>
              <Eyebrow>Beyond the technology</Eyebrow>
              <p className="max-w-sm text-lg leading-8 text-navy/65">A Workday program succeeds when the enterprise is as ready as the platform.</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-balance font-serif text-5xl leading-[1.04] tracking-[-.035em] sm:text-7xl">
                Workday changes how the organization operates, decides, and serves its people.
              </h2>
              <div className="mt-10 grid gap-7 text-lg leading-8 text-navy/68 sm:grid-cols-2">
                <p>Workday transformations reshape operating models, processes, data, roles, decision rights, and the employee experience. Technology delivery alone cannot ensure those changes land.</p>
                <p>Ron works with executive sponsors and program leaders to identify risks early, strengthen governance, align stakeholders, and establish the conditions for adoption and measurable value.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-paper py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div><Eyebrow>Areas of support</Eyebrow><h2 className="font-serif text-5xl leading-[1.05] sm:text-6xl">Focused where program risk becomes enterprise risk.</h2></div>
            <ul className="grid gap-px border border-navy/15 bg-navy/15 sm:grid-cols-2">
              {supportAreas.map((area) => (
                <li key={area} className="flex min-h-28 gap-4 bg-paper p-6 text-base leading-7 text-navy/72">
                  <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24 text-ivory sm:py-32">
        <Container>
          <div className="mb-14 grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <Eyebrow className="text-gold">When to engage</Eyebrow>
            <h2 className="font-serif text-5xl leading-[1.05] sm:text-7xl">Independent perspective at pivotal moments.</h2>
          </div>
          <div className="grid gap-px bg-ivory/15 md:grid-cols-2">
            {engagementMoments.map((moment) => (
              <article key={moment.number} className="min-h-72 bg-navy p-8">
                <p className="text-xs font-bold tracking-[.2em] text-gold">{moment.number}</p>
                <h3 className="mt-10 font-serif text-3xl">{moment.title}</h3>
                <p className="mt-5 max-w-xl leading-7 text-ivory/65">{moment.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <Eyebrow>The diagnostic foundation</Eyebrow>
            <div>
              <h2 className="max-w-4xl text-balance font-serif text-5xl leading-[1.04] sm:text-7xl">Nine domains. One evidence based view of program health.</h2>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-navy/68">The Transformation Assurance Index&trade; provides a repeatable way to assess governance, scope, plan health, solution readiness, data, testing, adoption, cutover, and system integrator performance.</p>
              <Button asChild variant="outline" className="mt-9"><Link href="/transformation-assurance-index">Explore the Assurance Index <ArrowRight className="size-4" /></Link></Button>
            </div>
          </div>
        </Container>
      </section>

      <ConsultationCta />
    </>
  );
}
