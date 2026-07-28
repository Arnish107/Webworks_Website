"use client";

import Image from "next/image";
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
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    alt: "Analytics dashboard website preview",
    className: "left-[-8%] top-[8%] w-[38%] rotate-[-8deg]",
    delay: 0.35,
  },
  {
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    alt: "Creative agency website preview",
    className: "right-[-6%] top-[2%] w-[34%] rotate-[7deg]",
    delay: 0.5,
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    alt: "Product design website preview",
    className: "right-[2%] bottom-[6%] w-[36%] rotate-[-4deg]",
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
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.28),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.2),rgba(11,18,32,0.95))]" />
      </div>

      <motion.div style={{ y, opacity }} className="container-premium">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <motion.p
              className="mb-5 text-xs uppercase tracking-[0.18em] text-primary-light md:text-sm leading-relaxed pb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {siteConfig.name}
            </motion.p>

            <motion.h1
              className="font-display text-4xl font-semibold leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] pb-1 overflow-visible"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Building Websites That{" "}
              <span className="text-gradient">Build Businesses</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              We design and develop premium digital experiences for ambitious
              brands: sites that look exceptional, load fast, and convert with
              intention.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/portfolio">
                  <Play className="h-4 w-4" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3]">
              {floatingSites.map((site) => (
                <motion.div
                  key={site.alt}
                  className={`absolute overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/40 ${site.className}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: site.delay }}
                >
                  <Image
                    src={site.src}
                    alt={site.alt}
                    width={640}
                    height={420}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 45vw, 280px"
                  />
                </motion.div>
              ))}

              <motion.div
                className="absolute left-1/2 top-1/2 z-10 w-[72%] -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.28 }}
              >
                <div className="rounded-[1.4rem] border border-white/20 bg-[#0f172a]/glass p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div className="mb-2 flex items-center gap-1.5 px-2 pt-1">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
                      alt="Laptop displaying a modern website build"
                      width={900}
                      height={600}
                      priority
                      className="aspect-[16/10] w-full object-cover"
                      sizes="(max-width: 1024px) 70vw, 420px"
                    />
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
  const logos = [...trustedLogos, ...trustedLogos];

  return (
    <section className="section-padding border-y border-white/6 py-12 md:py-16" aria-label="Trusted by">
      <div className="container-premium">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.16em] text-muted leading-relaxed pb-1">
          Trusted by growing brands
        </p>
        <div className="relative overflow-hidden py-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee gap-6 md:gap-10">
            {logos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex min-h-12 min-w-max items-center justify-center rounded-full border border-white/8 bg-white/[0.03] px-5 py-3 text-sm font-medium tracking-normal text-muted-strong whitespace-nowrap leading-normal"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
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
            title="Everything your brand needs to show up stronger online"
            description="From first impression to ongoing growth, we cover the full spectrum of modern web craft."
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
            eyebrow="Why Choose Us"
            title="A partner built for clarity, speed, and lasting quality"
            description="We combine premium design taste with engineering discipline, so your website becomes a business asset, not a liability."
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
                    className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                      isLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div
                      className={`glass rounded-3xl p-6 md:p-7 ${
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
            eyebrow="Portfolio"
            title="Selected work that looks sharp and works harder"
            description="A glimpse into the brands we’ve helped clarify, elevate, and convert."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="group glass hover-glow overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
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
            eyebrow="Process"
            title="A clear path from idea to launch"
            description="Four focused stages. No mystery, no endless revisions without direction."
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
            eyebrow="Testimonials"
            title="Clients who trusted us with their next chapter"
            description="Real partnerships. Real outcomes. Words from the people we build with."
          />
        </Reveal>

        <Reveal>
          <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-8 md:p-12">
            <Quote className="mb-6 h-8 w-8 text-primary-light/70" aria-hidden />
            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.4 }}
                >
                  <blockquote className="font-display text-xl leading-relaxed text-white md:text-2xl md:leading-relaxed">
                    “{active.quote}”
                  </blockquote>
                  <footer className="mt-8">
                    <p className="font-medium text-white">{active.name}</p>
                    <p className="text-sm text-muted">
                      {active.role}
                    </p>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2" role="tablist" aria-label="Testimonials">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial from ${item.name}`}
                    className={`h-2.5 rounded-full transition-all focus-ring ${
                      i === index
                        ? "w-8 bg-primary-light"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                    onClick={() => setIndex(i)}
                  />
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
            title="Transparent packages for every stage of growth"
            description="Choose a starting point, or tell us what you need and we will shape a custom engagement."
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
            title="Answers before we get started"
            description="Straight talk about timelines, process, and what working together looks like."
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
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-14 text-center md:px-12 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-light">
                Ready when you are
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                Let’s build a website your business can grow into
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-muted md:text-lg">
                Tell us where you are and where you want to go. We’ll map the
                clearest path to a digital presence that feels premium and
                performs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
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
