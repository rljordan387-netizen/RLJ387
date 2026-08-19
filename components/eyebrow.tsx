import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("mb-5 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-teal", className)}>
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
