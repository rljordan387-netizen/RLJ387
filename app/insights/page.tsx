import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = { title: "Insights", description: "Perspectives on business transformation, executive leadership, and strategic planning." };

export default function InsightsPage(){const insights=getAllInsights();return <><PageHero eyebrow="Insights" title="Perspective for the work that matters." description="Practical thinking for leaders navigating transformation, making informed decisions, and turning strategy into progress." /><section className="py-20 sm:py-28"><Container><div className="grid gap-px border border-navy/15 bg-navy/15 lg:grid-cols-3">{insights.map((insight,index)=><Link href={`/insights/${insight.slug}`} key={insight.slug} className="group flex min-h-[31rem] flex-col bg-ivory p-7 transition-colors hover:bg-paper"><div className="flex justify-between text-[.65rem] font-bold uppercase tracking-[.18em] text-teal"><span>{insight.category}</span><span>0{index+1}</span></div><div className="mt-auto"><p className="mb-4 text-xs text-navy/50">{new Date(insight.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})} · {insight.readTime}</p><h2 className="font-serif text-4xl leading-[1.08] transition-transform group-hover:-translate-y-1">{insight.title}</h2><p className="mt-5 leading-7 text-navy/65">{insight.description}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal">Read insight <ArrowUpRight className="size-4" /></span></div></Link>)}</div></Container></section><ConsultationCta /></>}
