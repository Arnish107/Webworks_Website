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
      src="/logo.png"
      alt="Webworks Collective"
      width={88}
      height={88}
      priority={priority}
      className={cn("h-10 w-10 object-contain md:h-11 md:w-11", className)}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="focus-ring inline-flex items-center rounded-lg">
      {image}
    </Link>
  );
}
