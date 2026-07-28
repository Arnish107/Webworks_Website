import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { ServicesPage } from "@/sections/pages";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Webworks Collective services including website design, development, e-commerce, automation, SEO, and maintenance.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default ServicesPage;
