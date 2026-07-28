"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteConfig, cn } from "@/lib/content";
import { Button } from "@/components/ui";
import { Logo } from "@/components/logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-premium">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-3 md:px-5 transition-all duration-300",
            scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
          )}
          aria-label="Primary"
        >
          <Logo priority />

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors focus-ring",
                  pathname === link.href
                    ? "text-white bg-white/8"
                    : "text-muted-strong hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden focus-ring rounded-full p-2 text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="lg:hidden container-premium mt-2"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="glass rounded-3xl p-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base transition-colors",
                      pathname === link.href
                        ? "bg-primary/20 text-white"
                        : "text-muted-strong hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Button asChild className="mt-3 w-full">
                <Link href="/contact">Get Started with {siteConfig.name}</Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
