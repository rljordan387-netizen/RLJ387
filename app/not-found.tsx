import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound(){return <section className="grid min-h-[65vh] place-items-center py-24 text-center"><Container><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">404 / Page not found</p><h1 className="mt-6 font-serif text-6xl sm:text-8xl">Let’s find a clearer path.</h1><p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-navy/65">The page you requested may have moved or no longer exists.</p><Button asChild className="mt-9"><Link href="/"><ArrowLeft className="size-4" /> Return home</Link></Button></Container></section>}
