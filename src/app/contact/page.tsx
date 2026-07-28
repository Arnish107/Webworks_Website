import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { ContactPage } from "@/sections/pages";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Webworks Collective to start your next website, redesign, or digital growth project.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default ContactPage;
