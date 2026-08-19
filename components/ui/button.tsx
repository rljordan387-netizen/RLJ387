import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-navy px-6 py-3.5 text-ivory hover:bg-teal",
        outline: "border border-navy/25 bg-transparent px-6 py-3.5 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
        ghost: "px-3 py-2 text-navy hover:bg-navy/5",
        light: "bg-ivory px-6 py-3.5 text-navy hover:bg-gold",
      },
      size: {
        default: "min-h-12",
        sm: "min-h-10 px-4 py-2",
        lg: "min-h-14 px-7 py-4",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({ className, variant, size, asChild = false, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
