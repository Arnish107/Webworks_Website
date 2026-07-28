import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { AboutPage } from "@/sections/pages";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Webworks Collective: our mission, vision, story, and the team behind premium websites that build businesses.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default AboutPage;
