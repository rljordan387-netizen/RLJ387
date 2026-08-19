import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-navy/10 py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
          <Eyebrow className="mb-0 lg:mb-3">{eyebrow}</Eyebrow>
          <div>
            <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-navy sm:text-6xl lg:text-8xl">{title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-navy/68 sm:text-xl">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
