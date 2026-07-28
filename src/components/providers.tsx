"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useLenis, useMediaQuery, useMousePosition } from "@/hooks";
import { Button } from "@/components/ui";

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), reduceMotion ? 200 : 1800);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1220]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          aria-hidden={!visible}
        >
          <div className="flex flex-col items-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt=""
                className="mx-auto h-24 w-24 object-contain md:h-28 md:w-28"
              />
            </motion.div>
            <motion.p
              className="mt-5 font-display text-xl font-semibold tracking-tight text-white md:text-2xl leading-snug"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Webworks Collective
            </motion.p>
            <motion.div
              className="mx-auto mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary-light"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function CustomCursor() {
  const { x, y } = useMousePosition();
  const isDesktop = useMediaQuery("(min-width: 1025px) and (pointer: fine)");
  const reduceMotion = useReducedMotion();
  if (!isDesktop || reduceMotion) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light mix-blend-difference"
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.4 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-light/40"
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.6 }}
        aria-hidden
      />
    </>
  );
}

function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="gradient-blob animate-float-slow left-[-10%] top-[12%] h-[28rem] w-[28rem] bg-primary/30" />
      <div className="gradient-blob animate-float-delayed right-[-8%] top-[38%] h-[24rem] w-[24rem] bg-sky-500/20" />
      <div className="gradient-blob animate-pulse-glow bottom-[-10%] left-[30%] h-[22rem] w-[22rem] bg-indigo-500/20" />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
        >
          <Button
            variant="secondary"
            size="icon"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shadow-lg"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <GradientBlobs />
      <div className="noise-overlay" aria-hidden />
      <CustomCursor />
      <div className="relative z-10">{children}</div>
      <BackToTop />
    </>
  );
}
