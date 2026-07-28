import Link from "next/link";
import { siteConfig, navLinks, services } from "@/lib/content";
import { Logo } from "@/components/logo";

const social = [
  {
    href: siteConfig.social.twitter,
    label: "X / Twitter",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.849L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: siteConfig.social.dribbble,
    label: "Dribbble",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm7.568 5.302c1.417 1.64 2.28 3.746 2.399 6.054-1.408-.302-2.74-.302-3.951.047a24.47 24.47 0 00-.597-1.337c2.11-1.55 2.9-3.436 3.149-4.764zM12 2.04c2.17 0 4.16.73 5.76 1.95-.296 1.058-.95 2.61-2.74 3.91A40.04 40.04 0 0012.2 4.3c-.4-.97-.84-1.9-1.31-2.26.37-.01.74-.01 1.11-.01zm-3.1.42c.4.33.84 1.23 1.25 2.21A41.4 41.4 0 007.1 7.52c-1.59-.9-2.93-2.05-3.49-2.55A9.91 9.91 0 018.9 2.46zM2.17 9.37c.71.43 2.5 1.41 4.45 2.2-.2.54-.38 1.09-.54 1.65-2.41-.71-4.56-1.95-5.65-2.85.4-.36.97-.7 1.74-1zM2.04 12c0-.13 0-.26.01-.39 1.2 1.01 3.5 2.35 6.1 3.08-.5 2.07-.78 4.35-.84 6.18A9.97 9.97 0 012.04 12zm8.08 9.94c.07-1.75.35-3.9.84-5.9 1.85.39 3.84.47 5.9.17.46.98.84 1.98 1.11 2.97a9.96 9.96 0 01-7.85 2.76zm9.3-3.9c-.32-1.11-.75-2.22-1.28-3.3 1.48-.43 2.95-.43 4.54-.08a9.95 9.95 0 01-3.26 3.38z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 pt-16 pb-8">
      <div className="container-premium">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}. Premium websites engineered for clarity,
              performance, and growth.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-strong transition hover:border-primary-light/50 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.14em] text-white leading-relaxed pb-0.5">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.14em] text-white leading-relaxed pb-0.5">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-muted transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.14em] text-white leading-relaxed pb-0.5">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-white break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition hover:text-white"
                >
                  (770) 678-1114
                </a>
              </li>
              <li className="leading-relaxed">Based in {siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Crafted for businesses that take their digital presence seriously.</p>
        </div>
      </div>
    </footer>
  );
}
