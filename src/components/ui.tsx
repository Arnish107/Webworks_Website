"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn, fadeInUp } from "@/lib/content";
import { useCounter } from "@/hooks";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:bg-primary-light hover:shadow-[0_14px_40px_rgba(59,130,246,0.45)]",
        secondary:
          "glass text-foreground hover:border-primary-light/50 hover:bg-white/5",
        ghost: "text-muted-strong hover:text-white hover:bg-white/5",
        outline:
          "border border-white/15 bg-transparent text-white hover:border-primary-light/60 hover:bg-primary/10",
      },
      size: {
        default: "h-12 min-h-12 px-6",
        sm: "h-11 min-h-11 px-4 text-xs",
        lg: "h-14 min-h-14 px-6 text-base sm:px-8",
        icon: "h-11 w-11 min-h-11 min-w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("glass rounded-2xl px-5 md:px-6 mb-3", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between gap-4 py-5 text-left font-display text-base md:text-lg font-medium transition-colors hover:text-primary-light [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform duration-300" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm md:text-base text-muted",
      "data-[state=closed]:hidden data-[state=open]:block",
      className
    )}
    {...props}
  >
    <div className="pb-5 pt-0 leading-relaxed text-muted-strong">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-10 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.18em] text-primary-light leading-relaxed pb-0.5">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] pb-1 overflow-visible">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 md:mt-5 text-muted text-base md:text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const { ref, value } = useCounter({ end });
  return (
    <div className="text-center">
      <span
        ref={ref}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gradient block"
        aria-label={`${end}${suffix} ${label}`}
      >
        {value}
        {suffix}
      </span>
      <p className="mt-2 text-sm md:text-base text-muted">{label}</p>
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0, y: 12 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
        exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export { Link };
