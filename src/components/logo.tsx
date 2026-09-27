import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/content";

type LogoProps = {
  className?: string;
  priority?: boolean;
  href?: string;
};

export function Logo({ className, priority = false, href = "/" }: LogoProps) {
  const image = (
    <Image
      src="/logo-wordmark.png"
      alt="Webworks"
      width={858}
      height={158}
      priority={priority}
      className={cn("h-8 w-auto md:h-9", className)}
    />
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      className="focus-ring inline-flex shrink-0 items-center rounded-lg"
      aria-label="Webworks home"
    >
      {image}
    </Link>
  );
}
