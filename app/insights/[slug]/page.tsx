import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";

export function generateStaticParams(){return getAllInsights().map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const insight=getInsightBySlug(slug);if(!insight)return{};return{title:insight.title,description:insight.description,alternates:{canonical:`/insights/${slug}`}};}

export default async function InsightPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const insight=getInsightBySlug(slug);if(!insight)notFound();return <><article><header className="border-b border-navy/10 py-16 sm:py-24"><Container><Link href="/insights" className="mb-14 inline-flex items-center gap-2 text-sm font-bold text-teal"><ArrowLeft className="size-4" /> All insights</Link><div className="mx-auto max-w-5xl text-center"><p className="text-[.68rem] font-bold uppercase tracking-[.2em] text-teal">{insight.category}</p><h1 className="mt-7 text-balance font-serif text-5xl leading-[1.02] tracking-[-.035em] sm:text-7xl lg:text-8xl">{insight.title}</h1><p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-navy/65">{insight.description}</p><p className="mt-7 text-xs font-semibold uppercase tracking-[.15em] text-navy/45">{new Date(insight.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})} · {insight.readTime}</p></div></Container></header><div className="py-16 sm:py-24"><Container><div className="prose-editorial mx-auto max-w-3xl"><MDXRemote source={insight.content} /></div></Container></div></article><ConsultationCta /></>}
