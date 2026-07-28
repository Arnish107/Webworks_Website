"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import {
  AnimatedCounter,
  Button,
  PageTransition,
  Reveal,
  SectionHeading,
} from "@/components/ui";
import {
  cn,
  portfolioCategories,
  projects,
  services,
  siteConfig,
  stats,
  team,
  type ProjectCategory,
} from "@/lib/content";
import { CtaSection } from "@/sections/home";

export function AboutPage() {
  return (
    <PageTransition>
      <section className="section-padding pt-32 md:pt-36">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="A collective obsessed with websites that actually work"
              description="Webworks Collective exists to help ambitious businesses look world-class online and give them digital foundations they can grow on for years."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Mission",
                body: "To craft premium websites that clarify brands, earn trust, and turn attention into meaningful business outcomes.",
              },
              {
                title: "Vision",
                body: "A web where every growing company can afford exceptional design, performance, and strategy, without the traditional agency chaos.",
              },
              {
                title: "Our Story",
                body: "We started as a small team tired of bloated timelines and forgettable templates. Today we partner with founders and local businesses who want digital presence that feels intentional, modern, and built to last.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="glass h-full rounded-3xl p-6 md:p-7">
                  <h2 className="font-display text-xl font-semibold leading-snug pb-0.5">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <Reveal>
            <div className="glass-strong grid gap-10 rounded-[2rem] px-6 py-12 md:grid-cols-3 md:px-10">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="Team"
              title="Meet the people behind the pixels"
              description="Three founders building websites that help local brands grow with confidence."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <article className="glass hover-glow rounded-3xl p-6 md:p-7">
                  <div
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 font-display text-xl font-semibold text-primary-light"
                    aria-hidden
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug pb-0.5">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-primary-light leading-relaxed pb-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{member.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}

type FormState = {
  name: string;
  email: string;
  business: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  business: "",
  phone: "",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <PageTransition>
      <section className="section-padding pt-32 md:pt-36">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us about the website you want to build"
              description="Share a few details and we’ll respond with next steps, timing, and a clear path forward."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <aside className="glass h-full rounded-[1.75rem] p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold leading-snug pb-0.5">
                  Let’s talk
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Send all inquiries to our email below, or use the form and we
                  will get back within one business day.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary-light">
                      <Mail className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted leading-relaxed pb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-white transition hover:text-primary-light break-all"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary-light">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted leading-relaxed pb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-sm text-white transition hover:text-primary-light"
                      >
                        (770) 678-1114
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary-light">
                      <MapPin className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted leading-relaxed pb-0.5">
                        Based In
                      </p>
                      <p className="text-sm text-white">{siteConfig.address}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                  <div
                    className="relative flex aspect-[16/11] items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.25),_transparent_60%)]"
                    role="img"
                    aria-label="Map placeholder for Webworks Collective in Cumming, Georgia"
                  >
                    <div className="text-center px-6">
                      <MapPin className="mx-auto mb-3 h-8 w-8 text-primary-light" />
                      <p className="font-display text-lg font-semibold leading-snug pb-0.5">
                        Cumming, GA
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        Serving local businesses across Georgia and beyond.
                        Send all inquiries to {siteConfig.email}.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.08}>
              <form
                onSubmit={onSubmit}
                className="glass rounded-[1.75rem] p-6 md:p-8"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    autoComplete="name"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                  />
                  <Field
                    label="Business"
                    name="business"
                    value={form.business}
                    onChange={onChange}
                    autoComplete="organization"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    autoComplete="tel"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-muted-strong"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:border-primary-light/60 focus:ring-2 focus:ring-primary/30"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <Button type="submit" size="lg" className="mt-6">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>

                {submitted ? (
                  <p
                    className="mt-4 text-sm text-emerald-300"
                    role="status"
                    aria-live="polite"
                  >
                    Thanks for reaching out. We’ve received your message and
                    will reply shortly.
                  </p>
                ) : null}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-muted-strong">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:border-primary-light/60 focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

export function PortfolioPage() {
  const [active, setActive] = useState<(typeof portfolioCategories)[number]>(
    "All"
  );

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <PageTransition>
      <section className="section-padding pt-32 md:pt-36">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="Work that balances beauty with business outcomes"
              description="Filter by industry and explore how we help brands look sharper and perform better online."
            />
          </Reveal>

          <Reveal>
            <div
              className="mb-10 flex flex-wrap justify-center gap-2"
              role="tablist"
              aria-label="Portfolio categories"
            >
              {portfolioCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active === category}
                  onClick={() => setActive(category)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition focus-ring",
                    active === category
                      ? "bg-primary text-white"
                      : "glass text-muted-strong hover:text-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group glass hover-glow overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white backdrop-blur">
                      {project.category as ProjectCategory}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-display text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="ghost" className="mt-4 px-0">
                      <Link href="/contact">
                        View Project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CtaSection />
    </PageTransition>
  );
}

export function ServicesPage() {
  return (
    <PageTransition>
      <section className="section-padding pt-32 md:pt-36">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Premium digital services built around your growth"
              description="Whether you need a brand-new site, a conversion-focused redesign, or systems that keep your business moving, we deliver with clarity and craft."
            />
          </Reveal>
        </div>
      </section>

      <div className="container-premium space-y-20 pb-10 md:space-y-28">
        {services.map((service, index) => {
          const Icon = service.icon;
          const reverse = index % 2 === 1;
          return (
            <Reveal key={service.id}>
              <article
                id={service.id}
                className={`scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] border border-white/10">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 to-transparent" />
                </div>

                <div className="glass rounded-[1.75rem] p-6 md:p-8">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary-light">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h2 className="font-display text-3xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted-strong"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/contact">
                      Discuss {service.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <CtaSection />
    </PageTransition>
  );
}
