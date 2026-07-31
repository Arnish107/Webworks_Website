"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Reveal,
  SectionHeading,
} from "@/components/ui";
import { ProjectThumb } from "@/components/project-thumb";
import {
  cn,
  faqs,
  pricingPlans,
  processSteps,
  projects,
  services,
  siteConfig,
  testimonials,
  trustedLogos,
  whyChooseUs,
} from "@/lib/content";

const floatingSites = [
  {
    label: "Menu + hours",
    className:
      "hidden sm:block left-[2%] top-[10%] w-[36%] rotate-[-6deg] md:left-[-4%] md:top-[8%] md:w-[38%] md:rotate-[-8deg]",
    delay: 0.35,
  },
  {
    label: "Mobile booking",
    className:
      "hidden sm:block right-[2%] top-[4%] w-[32%] rotate-[5deg] md:right-[-4%] md:top-[2%] md:w-[34%] md:rotate-[7deg]",
    delay: 0.5,
  },
  {
    label: "Local SEO",
    className:
      "hidden sm:block right-[4%] bottom-[8%] w-[34%] rotate-[-3deg] md:right-[2%] md:bottom-[6%] md:w-[36%] md:rotate-[-4deg]",
    delay: 0.65,
  },
];

function GsapReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-24 pb-8 sm:pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.28),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.2),rgba(11,18,32,0.95))]" />
      </div>

      <motion.div style={{ y, opacity }} className="container-premium">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <motion.p
              className="mb-3 text-xs uppercase tracking-[0.18em] text-primary-light md:text-sm leading-relaxed pb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {siteConfig.name}
            </motion.p>

            <motion.h1
              className="font-display text-[2rem] font-semibold leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-[3.75rem] pb-1 overflow-visible"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Building Websites That{" "}
              <span className="text-gradient">Get Local Customers</span>
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              We are a three-person studio in Cumming, GA. We build Next.js sites
              for restaurants, clinics, and local service businesses that need
              clearer pages, faster phones, and a site their staff can update.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link href="/portfolio">
                  <Play className="h-4 w-4" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3] sm:overflow-visible">
              {floatingSites.map((site) => (
                <motion.div
                  key={site.label}
                  className={`absolute overflow-hidden rounded-2xl border border-white/15 bg-[#111827]/90 p-3 shadow-2xl shadow-black/40 sm:p-4 ${site.className}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: site.delay }}
                >
                  <div className="mb-3 h-2 w-1/2 rounded-full bg-white/10" />
                  <div className="mb-2 h-2 w-3/4 rounded-full bg-white/10" />
                  <div className="h-14 rounded-lg bg-primary/20 sm:h-16" />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-primary-light">
                    {site.label}
                  </p>
                </motion.div>
              ))}

              <motion.div
                className="absolute left-1/2 top-1/2 z-10 w-[92%] -translate-x-1/2 -translate-y-1/2 sm:w-[72%]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.28 }}
              >
                <div className="rounded-[1.25rem] border border-white/20 bg-[#0f172a]/glass p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rounded-[1.4rem]">
                  <div className="mb-2 flex items-center gap-1.5 px-2 pt-1">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br from-[#1e3a8a]/60 to-[#0B1220] p-4 sm:p-5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-primary-light sm:text-xs">
                      Staging preview
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                      Your site, live on a private link before launch
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function TrustedBySection() {
  return (
    <section className="border-y border-white/6 py-8 md:py-10" aria-label="Trusted by">
      <div className="container-premium">
        <p className="mb-5 text-center text-xs uppercase tracking-[0.16em] text-muted leading-relaxed pb-1">
          Clients we have built for
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
          {trustedLogos.map((logo) => (
            <li
              key={logo}
              className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-xs font-medium text-muted-strong sm:px-4 sm:py-2.5 sm:text-sm"
            >
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section-padding" id="services">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What we actually take on"
            description="Design, build, SEO, and maintenance for local businesses. No bloated retainers unless you ask for one."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <Link
                  href={`/services#${service.id}`}
                  className="group glass hover-glow block h-full rounded-3xl p-6 md:p-7 focus-ring"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary-light transition group-hover:bg-primary/25">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-white leading-snug pb-0.5 overflow-visible">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 text-muted transition group-hover:text-primary-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                    {service.shortDescription}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="section-padding relative">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Why work with us"
            title="What is different about this studio"
            description="Four specifics you can hold us to, not a generic agency checklist."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent md:left-1/2" aria-hidden />
          <div className="space-y-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div
                    className={`relative grid gap-4 pl-10 md:grid-cols-2 md:gap-10 md:pl-0 ${
                      isLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div
                      className={`glass rounded-3xl p-5 sm:p-6 md:p-7 ${
                        isLeft ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="font-display text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-[0.7rem] top-8 h-3 w-3 rounded-full border-2 border-primary-light bg-background md:left-1/2 md:-translate-x-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  const featured = projects.slice(0, 6);

  return (
    <section className="section-padding" id="work">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="Sites we have shipped for real clients"
            description="Sites we have shipped for real clients. Temporary preview images until final screenshots are ready."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="group glass hover-glow overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProjectThumb
                    src={project.image}
                    alt={project.imageAlt}
                    title={project.title}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-light">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {project.description}
                  </p>
                  <Button asChild variant="ghost" className="mt-4 px-0">
                    <Link href="/portfolio">
                      View Project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/portfolio">Explore Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="From first call to DNS cutover"
            description="A concrete sequence with timeboxes. No vague discovery theater."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <GsapReveal key={step.step}>
              <div className="glass hover-glow relative h-full rounded-3xl p-6 md:p-7">
                <span className="font-display text-4xl font-semibold text-primary/40">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section className="section-padding">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Client notes"
            title="What owners told us after launch"
            description="Short and specific. We only publish quotes we can attribute."
          />
        </Reveal>

        <Reveal>
          <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-[1.5rem] p-6 sm:rounded-[2rem] sm:p-8 md:p-12">
            <Quote className="mb-5 h-7 w-7 text-primary-light/70 sm:mb-6 sm:h-8 sm:w-8" aria-hidden />
            <div className="relative min-h-[160px] sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.4 }}
                >
                  <blockquote className="font-display text-lg leading-relaxed text-white sm:text-xl md:text-2xl md:leading-relaxed">
                    “{active.quote}”
                  </blockquote>
                  <footer className="mt-6 sm:mt-8">
                    <p className="font-medium text-white">{active.name}</p>
                    <p className="text-sm text-muted">
                      {active.role}
                    </p>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 sm:mt-8">
              <div className="flex gap-1" role="tablist" aria-label="Testimonials">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial from ${item.name}`}
                    className="focus-ring flex h-11 w-11 items-center justify-center rounded-full"
                    onClick={() => setIndex(i)}
                  >
                    <span
                      className={`block h-2.5 rounded-full transition-all ${
                        i === index
                          ? "w-8 bg-primary-light"
                          : "w-2.5 bg-white/20"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setIndex(
                      (current) =>
                        (current - 1 + testimonials.length) % testimonials.length
                    )
                  }
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  aria-label="Next testimonial"
                  onClick={() =>
                    setIndex((current) => (current + 1) % testimonials.length)
                  }
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="section-padding" id="pricing">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Published numbers, not mystery retainers"
            description="Starter and Professional are fixed. Enterprise and Maintenance are scoped so you are not surprised."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[1.75rem] p-6 md:p-8",
                  plan.highlighted
                    ? "glass-strong"
                    : "glass hover-glow"
                )}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="font-display text-2xl font-semibold">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
                <div className="mt-6">
                  <p className="font-display text-4xl font-semibold text-white">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                    {plan.period}
                  </p>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-strong"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Straight answers before you email us"
            description="Timelines, payments, redesigns, and what happens after launch."
          />
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="section-padding pt-4">
      <div className="container-premium">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[1.5rem] px-5 py-12 text-center sm:rounded-[2rem] sm:px-6 sm:py-14 md:px-12 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-light">
                Cumming, GA
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-[1.65rem] font-semibold leading-tight text-white sm:text-3xl md:text-5xl">
                Tell us what the site needs to do for your business
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm text-muted sm:text-base md:text-lg">
                Send a short note about your business, current site (if any), and
                timeline. We reply within one business day with fit, rough
                timing, and next steps.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
