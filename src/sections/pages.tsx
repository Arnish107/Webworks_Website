"use client";

import { useMemo, useState } from "react";
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
import { ProjectThumb } from "@/components/project-thumb";
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
      <section className="section-padding pt-28 sm:pt-32 md:pt-36">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="A small Cumming studio building sites for local businesses"
              description="Webworks Collective is Arnish, Abir, and Saharsh. We design and ship Next.js websites for restaurants, clinics, and service companies that need clearer pages and more inbound calls."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Mission",
                body: "Help North Georgia businesses stop relying on Facebook pages and outdated templates, and get a site their customers can use on a phone in under ten seconds.",
              },
              {
                title: "Vision",
                body: "Make professional web work accessible at clear price points ($300 and $500 packages) without the agency theater that pads timelines and invoices.",
              },
              {
                title: "Our Story",
                body: "We started after watching friends pay for slow template sites they could not edit. Now we build, host on Vercel, and stick around for the messy week after launch.",
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
              title="The three people on your project"
              description="No separate sales layer. The founders who quote the work also design and ship it."
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
      <section className="section-padding pt-28 sm:pt-32 md:pt-36">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Email us what you need the site to do"
              description="Include your business name, current website if you have one, and a rough timeline. We reply within one business day."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <aside className="glass h-full rounded-[1.5rem] p-5 sm:rounded-[1.75rem] sm:p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold leading-snug pb-0.5">
                  Reach the team directly
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Prefer email. Use the form if that is easier. Either way it
                  lands with the founders, not a ticket queue.
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
                        Serving local businesses across North Georgia. Email{" "}
                        {siteConfig.email} or call (770) 678-1114.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.08}>
              <form
                onSubmit={onSubmit}
                className="glass rounded-[1.5rem] p-5 sm:rounded-[1.75rem] sm:p-6 md:p-8"
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
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-muted focus:border-primary-light/60 focus:ring-2 focus:ring-primary/30 sm:text-sm"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
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
        className="min-h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-muted focus:border-primary-light/60 focus:ring-2 focus:ring-primary/30 sm:text-sm"
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
      <section className="section-padding pt-28 sm:pt-32 md:pt-36">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="Client sites we have built"
              description="Filter by industry. Temporary preview images until final client screenshots are ready."
            />
          </Reveal>

          <Reveal>
            <div
              className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10"
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
                    "min-h-11 rounded-full px-4 py-2.5 text-sm transition focus-ring",
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
                    <ProjectThumb
                      src={project.image}
                      alt={project.imageAlt}
                      title={project.title}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
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
      <section className="section-padding pt-28 sm:pt-32 md:pt-36">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="What we sell, in plain language"
              description="Pick a lane or combine them. Most restaurant and clinic projects start with Design + Development, then Maintenance after launch."
            />
          </Reveal>
        </div>
      </section>

      <div className="container-premium space-y-8 pb-10 md:space-y-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.id} delay={index * 0.03}>
              <article
                id={service.id}
                className="scroll-mt-28 glass rounded-[1.75rem] p-6 md:p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary-light">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="font-display text-3xl font-semibold leading-snug pb-0.5">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-3xl text-muted leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
              </article>
            </Reveal>
          );
        })}
      </div>

      <CtaSection />
    </PageTransition>
  );
}
