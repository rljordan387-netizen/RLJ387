import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Transformation Assurance Index",
  description:
    "Explore Ronald L. Jordan Jr.'s nine-domain framework for independently assessing whether an enterprise transformation is truly on track.",
  alternates: { canonical: "/transformation-assurance-index" },
};

const domains = [
  {
    number: "01",
    title: "Governance & Sponsorship",
    question:
      "Is there a single executive who owns the outcome, with authority over scope, budget, and go-live?",
    tell: "Watch how quickly cross-functional decisions get resolved. Strong governance clears them in days; weak governance lets them stall the work for weeks.",
  },
  {
    number: "02",
    title: "Scope & Requirements",
    question:
      "Is scope baselined and under real change control, or are small changes being absorbed until the plan no longer matches reality?",
    tell: "Every requirement should trace to a design and a test. When it cannot, the gap will return as rework.",
  },
  {
    number: "03",
    title: "Program & Plan Health",
    question:
      "Is there a genuine, dependency-linked critical path, or a list of milestones dressed up as a plan?",
    tell: "Ask the program to name its critical path. If it cannot, the schedule is decoration and green status is opinion.",
  },
  {
    number: "04",
    title: "Solution & Design Readiness",
    question:
      "Are design decisions stable and signed off by the business, or still churning while the build races ahead?",
    tell: "Confirm that the integration architecture has been tested at real volume. Everything else is a design on paper.",
  },
  {
    number: "05",
    title: "Data Readiness",
    question:
      "Has a full-volume mock conversion been run, reconciled to source, and signed off by named data owners?",
    tell: "If full-volume mock conversions have not been run and reconciled, you do not yet know whether the data is clean.",
  },
  {
    number: "06",
    title: "Testing & Quality",
    question:
      "Are critical defects trending down with controlled aging, and are stage-gate exit criteria actually enforced?",
    tell: "A program that has never failed a gate is not disciplined. Watch the defect curve and who controls the exit criteria.",
  },
  {
    number: "07",
    title: "Change, Adoption & Readiness",
    question:
      "Is readiness measured by role and the ability to perform on day one, or is training delivered being reported as readiness?",
    tell: "Determine whether super-users and process owners are confident, not merely trained. Those are not the same thing.",
  },
  {
    number: "08",
    title: "Cutover & Go-Live Readiness",
    question:
      "Has cutover been rehearsed end to end, with timings, a real go/no-go, and an empowered rollback decision point?",
    tell: "Confirm that hypercare is staffed and scoped beyond the first few days. A support model that disappears after week one guarantees a crisis in week two.",
  },
  {
    number: "09",
    title: "Vendor / SI Performance",
    question:
      "Does the system integrator's reported status hold up against independent evidence, and has key staffing remained stable?",
    tell: "Measure the gap between what the SI says and what the artifacts show. That gap is where real program health lives.",
  },
] as const;

const readinessScale = [
  { level: "1", name: "Absent / Ad hoc", description: "No defined approach; outcomes depend on individuals." },
  { level: "2", name: "Emerging / Inconsistent", description: "Some pieces exist, applied unevenly." },
  { level: "3", name: "Defined / Functional", description: "Documented and operating; a workable baseline." },
  { level: "4", name: "Managed / Proactive", description: "Measured and controlled; risks anticipated." },
  { level: "5", name: "Optimized / Assured", description: "Continuously improved and resilient." },
] as const;

export default function TransformationAssuranceIndexPage() {
  return (
    <>
      <section className="overflow-hidden bg-navy py-16 text-ivory sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <Eyebrow className="text-gold">Transformation Assurance Index&trade;</Eyebrow>
              <h1 className="max-w-4xl text-balance font-serif text-6xl leading-[.94] tracking-[-.045em] sm:text-7xl lg:text-[6.7rem]">
                Transformations fail in <em className="font-normal text-gold">plain sight.</em>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/70 sm:text-xl">
                A nine-domain field guide for reading whether a program will land before it does not. Created by Ronald L. Jordan Jr. to make an independent, evidence-based read of transformation health repeatable.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="light" size="lg">
                  <Link href="#domains">Explore the nine domains <ArrowDown className="size-4" /></Link>
                </Button>
                <Button asChild size="lg" className="border border-ivory/30 bg-transparent text-ivory hover:bg-ivory hover:text-navy">
                  <Link href="/transformation-assurance-index.pdf" target="_blank">
                    Download the Index <Download className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[34rem] lg:mr-0">
              <div className="absolute -inset-5 border border-gold/30" aria-hidden="true" />
              <Image
                src="/transformation-assurance-index-cover.png"
                alt="Cover of the Transformation Assurance Index by Ronald L. Jordan Jr."
                width={1280}
                height={1280}
                priority
                className="relative h-auto w-full shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-navy/10 bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <Eyebrow>The structural blind spot</Eyebrow>
            <div>
              <h2 className="max-w-4xl text-balance font-serif text-5xl leading-[1.04] tracking-[-.03em] sm:text-7xl">
                The inside view gets greener at every layer.
              </h2>
              <div className="mt-9 grid gap-7 text-lg leading-8 text-navy/68 sm:grid-cols-2">
                <p>Problems that sink a program are often visible for months: reconciliations nobody ran, designs still churning, and defect backlogs aging while the schedule keeps promising green.</p>
                <p>Status rolls uphill and becomes more comfortable at every layer. A qualified amber at the workstream can become “on track” by the time it reaches the board.</p>
              </div>
              <p className="mt-10 border-l-2 border-gold pl-6 font-serif text-3xl leading-tight text-navy">
                The remedy is not more status meetings. It is a different vantage point.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="domains" className="scroll-mt-24 py-24 sm:py-32">
        <Container>
          <div className="mb-16 grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <Eyebrow className="mb-0">The framework</Eyebrow>
            <div>
              <h2 className="font-serif text-5xl leading-[1.04] sm:text-7xl">Nine domains. One clear picture.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/65">Each domain is a place programs reliably fail. Each has a tell: observable evidence that cuts through the reported status.</p>
            </div>
          </div>
          <div className="grid gap-px border border-navy/15 bg-navy/15 lg:grid-cols-3">
            {domains.map((domain) => (
              <article key={domain.number} className="flex min-h-[31rem] flex-col bg-ivory p-7 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="max-w-xs font-serif text-3xl leading-[1.08]">{domain.title}</h3>
                  <span className="font-serif text-4xl text-gold">{domain.number}</span>
                </div>
                <p className="mt-8 leading-7 text-navy/68">{domain.question}</p>
                <div className="mt-auto border-t border-navy/15 pt-6">
                  <p className="mb-3 text-[.63rem] font-bold uppercase tracking-[.2em] text-teal">The tell</p>
                  <p className="font-serif text-xl italic leading-7 text-navy">{domain.tell}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24 text-ivory sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <Eyebrow className="text-gold">The scale</Eyebrow>
              <h2 className="text-balance font-serif text-5xl leading-[1.05] sm:text-6xl">A shared language for “how ready is ready.”</h2>
              <p className="mt-7 max-w-lg text-lg leading-8 text-ivory/65">The scale forces specificity that comfortable language avoids and makes evidence comparable across all nine domains.</p>
            </div>
            <ol className="divide-y divide-ivory/15 border-y border-ivory/15">
              {readinessScale.map((item) => (
                <li key={item.level} className="grid gap-3 py-6 sm:grid-cols-[3rem_.75fr_1.25fr] sm:items-center">
                  <span className="font-serif text-3xl text-gold">{item.level}</span>
                  <strong className="font-serif text-2xl font-normal">{item.name}</strong>
                  <span className="text-sm leading-6 text-ivory/60">{item.description}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <Eyebrow>The rule scorecards get wrong</Eyebrow>
            <div>
              <h2 className="max-w-4xl text-balance font-serif text-5xl leading-[1.04] sm:text-7xl">You cannot average your way to the truth.</h2>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-navy/68">Transformations do not fail on averages. They fail on their single weakest link. A program can be strong in seven domains and still be doomed by one. A blended score smooths exactly the gap that will sink the program and hands everyone a comfortable number that hides the one thing that matters.</p>
              <p className="mt-8 max-w-3xl font-serif text-3xl leading-tight text-teal">Do not ask what the average says. Ask where the one red is, and whether anyone has the runway to turn it green.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-paper py-20 sm:py-28">
        <Container>
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Original field guide</Eyebrow>
              <h2 className="font-serif text-5xl sm:text-6xl">Read the complete Index.</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/transformation-assurance-index.pdf" target="_blank">
                Download PDF <Download className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden border border-navy/15 bg-white shadow-sm">
            <object
              data="/transformation-assurance-index.pdf"
              type="application/pdf"
              className="h-[78vh] min-h-[42rem] w-full"
              aria-label="Transformation Assurance Index PDF"
            >
              <div className="grid min-h-[26rem] place-items-center p-8 text-center">
                <div>
                  <p className="font-serif text-3xl">Your browser cannot display the PDF inline.</p>
                  <Link href="/transformation-assurance-index.pdf" className="mt-5 inline-flex items-center gap-2 font-semibold text-teal">
                    Open the Transformation Assurance Index <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </object>
          </div>
        </Container>
      </section>

      <ConsultationCta />
    </>
  );
}
