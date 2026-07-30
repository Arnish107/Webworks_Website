"use client";

import { useState } from "react";
import { cn } from "@/lib/content";

type ProjectThumbProps = {
  src: string;
  alt: string;
  title: string;
  className?: string;
};

/**
 * Shows a real screenshot from /public/portfolio when the file exists.
 * Missing files fall back to a labeled placeholder (never stock photography).
 */
export function ProjectThumb({ src, alt, title, className }: ProjectThumbProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] px-6 text-center",
          className
        )}
        role="img"
        aria-label={`${title} screenshot placeholder`}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-primary-light">
          Screenshot needed
        </p>
        <p className="font-display text-lg font-semibold text-white">{title}</p>
        <p className="max-w-xs text-xs text-muted">
          Add <span className="text-muted-strong">{src}</span>
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
