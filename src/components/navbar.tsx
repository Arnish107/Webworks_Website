"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, cn } from "@/lib/content";
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

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "pt-[env(safe-area-inset-top)]",
        scrolled ? "py-2" : "py-2.5 md:py-3"
      )}
    >
      <div className="container-premium">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-3 py-2.5 md:px-5 md:py-3 transition-all duration-300",
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
            className="lg:hidden focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-[#0B1220]/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              className="fixed inset-x-0 top-0 z-50 flex max-h-[100dvh] flex-col pt-[env(safe-area-inset-top)] lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="container-premium pt-2">
                <div className="flex items-center justify-between rounded-full px-3 py-2.5 glass">
                  <Logo />
                  <button
                    type="button"
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="container-premium flex min-h-0 flex-1 flex-col pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3">
                <div className="glass flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[1.75rem] p-5">
                  <nav className="flex flex-col gap-1" aria-label="Mobile">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * index + 0.08 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "block rounded-2xl px-4 py-3.5 text-lg font-medium transition-colors focus-ring",
                            pathname === link.href
                              ? "bg-primary/20 text-white"
                              : "text-muted-strong active:bg-white/5 active:text-white"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto border-t border-white/8 pt-5">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
