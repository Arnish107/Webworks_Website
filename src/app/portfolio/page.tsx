import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { PortfolioPage } from "@/sections/pages";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Webworks Collective portfolio projects across business, restaurants, medical, personal brands, and e-commerce.",
  alternates: { canonical: `${siteConfig.url}/portfolio` },
};

export default PortfolioPage;
