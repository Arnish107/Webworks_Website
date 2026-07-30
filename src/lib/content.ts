import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Variants } from "framer-motion";
import {
  Globe,
  Code2,
  ShoppingCart,
  Workflow,
  Search,
  Wrench,
  Clock3,
  MapPin,
  MessagesSquare,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Live host for canonical / Open Graph. Override with NEXT_PUBLIC_SITE_URL if needed.
 */
export const siteConfig = {
  name: "Webworks Collective",
  tagline: "Websites for local businesses that need more calls, not more fluff",
  description:
    "Webworks Collective is a Cumming, GA web studio building sites for restaurants, clinics, and local service businesses. Next.js builds, clear pricing, and support after launch.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://webworks-website.vercel.app",
  email: "webworkscollective887@gmail.com",
  phone: "7706781114",
  address: "Cumming, GA",
  social: {
    twitter: "https://twitter.com/webworksco",
    linkedin: "https://linkedin.com/company/webworks-collective",
    instagram: "https://instagram.com/webworkscollective",
    dribbble: "https://dribbble.com/webworkscollective",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: LucideIcon;
};

export type ProjectCategory =
  | "Business"
  | "Restaurants"
  | "Medical"
  | "Personal Brands"
  | "E-commerce";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  /** Drop a real screenshot at this path (PNG/JPG preferred). */
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl?: string;
};

export const services: Service[] = [
  {
    id: "website-design",
    title: "Website Design",
    shortDescription:
      "Layouts built around how your customers actually decide: menus, services, hours, and the next click.",
    description:
      "We design for local businesses first. That means clear hierarchy, readable type on phones, and pages structured around calls, reservations, and form fills, not just looking nice in a mockup.",
    features: [
      "Mobile-first page layouts",
      "Brand colors and typography that match your space",
      "Clickable Figma review before we build",
      "Reusable components so future pages stay consistent",
      "Accessible contrast and focus states",
    ],
    icon: Globe,
  },
  {
    id: "website-development",
    title: "Website Development",
    shortDescription:
      "Next.js sites hosted on Vercel: fast loads, clean code, easy for us to maintain later.",
    description:
      "We ship on Next.js with TypeScript. You get a site that scores well on Core Web Vitals, updates without fighting a clunky page builder, and can grow into bookings, menus, or a CMS when you need it.",
    features: [
      "Next.js + TypeScript builds",
      "Vercel hosting and SSL",
      "Forms wired to your inbox",
      "Analytics setup (GA4 or Plausible)",
      "Hand-off notes for anything you edit yourself",
    ],
    icon: Code2,
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    shortDescription:
      "Product pages and checkout flows for shops that need to sell without babysitting the site.",
    description:
      "From simple Shopify themes to custom storefronts, we focus on the boring stuff that makes money: clear product detail, trust signals, and a checkout path that does not lose people on mobile.",
    features: [
      "Shopify or custom storefronts",
      "Product catalog structure",
      "Payments and shipping basics",
      "Mobile checkout polish",
      "Post-launch product add support",
    ],
    icon: ShoppingCart,
  },
  {
    id: "business-automation",
    title: "Business Automation",
    shortDescription:
      "Connect forms, calendars, and CRMs so leads do not die in your spam folder.",
    description:
      "If you are copying inquiry emails into a spreadsheet, we can fix that. We wire booking tools, follow-up emails, and simple automations so your team spends time on customers, not busywork.",
    features: [
      "Form to email / CRM routing",
      "Booking and scheduling tools",
      "Zapier or Make workflows",
      "Internal status dashboards",
      "Light training for your staff",
    ],
    icon: Workflow,
  },
  {
    id: "seo",
    title: "SEO",
    shortDescription:
      "Local SEO setup so people searching Cumming and nearby cities can actually find you.",
    description:
      "We handle the technical baseline every site needs: titles, meta, sitemap, speed, and Google Business Profile alignment. Content strategy is available when you are ready to publish more than a homepage.",
    features: [
      "Technical SEO checklist on launch",
      "Local keyword targeting",
      "Google Business Profile guidance",
      "On-page titles and headings",
      "Core Web Vitals tuning",
    ],
    icon: Search,
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDescription:
      "Monthly updates, backups, and fixes so your site does not quietly rot after launch.",
    description:
      "Launch is not the finish line. Our maintenance plans cover dependency updates, uptime checks, small content edits, and a human to message when something breaks on a Friday night.",
    features: [
      "Dependency and security updates",
      "Weekly backup verification",
      "Uptime monitoring",
      "Small content changes each month",
      "Same-day response on urgent outages",
    ],
    icon: Wrench,
  },
];

export const whyChooseUs: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "2 to 4 week launches",
    description:
      "Most brochure sites ship in two to four weeks once we have your copy, photos, and logo. You see a live staging link by the end of week one.",
    icon: Clock3,
  },
  {
    title: "Built for North Georgia businesses",
    description:
      "We work out of Cumming and spend most of our time on restaurants, clinics, and local service companies, not Fortune 500 pitch decks.",
    icon: MapPin,
  },
  {
    title: "You talk to the people building it",
    description:
      "No account-manager telephone game. Arnish, Abir, and Saharsh handle scope, design, and code directly in shared Slack or text threads.",
    icon: MessagesSquare,
  },
  {
    title: "Support after the ribbon cutting",
    description:
      "Starter includes 14 days of fixes. Professional includes 30. Maintenance plans cover updates and same-day help when the site goes down.",
    icon: Headphones,
  },
];

/**
 * Temporary Unsplash stand-ins until real client screenshots are ready.
 * Swap each `image` path to `/portfolio/{id}.png` when you have files.
 */
export const projects: Project[] = [
  {
    id: "mazai-restro-cafe",
    title: "Mazai Restro Cafe",
    category: "Restaurants",
    description:
      "Cafe site with menu sections, hours, and a clear path to visit or inquire.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Mazai Restro Cafe project preview",
    tags: ["Restaurant", "Menu", "Local"],
  },
  {
    id: "chackos-indian-cuisine",
    title: "Chackos Indian Cuisine",
    category: "Restaurants",
    description:
      "Restaurant site built so guests can scan the menu and reach the team without hunting.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Chackos Indian Cuisine project preview",
    tags: ["Restaurant", "Brand", "Mobile"],
  },
  {
    id: "peace-love-and-pizza",
    title: "Peace Love and Pizza",
    category: "Restaurants",
    description:
      "High-energy pizza brand site focused on ordering intent and location info.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Peace Love and Pizza project preview",
    tags: ["Pizza", "Ordering", "Brand"],
  },
  {
    id: "riverside-pizza",
    title: "Riverside Pizza",
    category: "Restaurants",
    description:
      "Neighborhood pizzeria site with specials, contact, and mobile-friendly menus.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Riverside Pizza project preview",
    tags: ["Pizza", "Local", "Contact"],
  },
  {
    id: "neurosol",
    title: "Neurosol",
    category: "Business",
    description:
      "Healthcare-tech marketing site structured for trust and inbound lead capture.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Neurosol project preview",
    tags: ["Healthcare", "Lead gen"],
  },
  {
    id: "evosol-pediatrics",
    title: "Evosol Pediatrics",
    category: "Medical",
    description:
      "Pediatric practice site with services, provider context, and appointment paths.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Evosol Pediatrics project preview",
    tags: ["Medical", "Appointments"],
  },
  {
    id: "washingtons-wharf",
    title: "Washington's Wharf",
    category: "Restaurants",
    description:
      "Waterfront dining site with atmosphere, menus, and reservation-focused CTAs.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Washington's Wharf project preview",
    tags: ["Dining", "Reservations"],
  },
  {
    id: "mamas-pet-services",
    title: "Mama's Pet Services",
    category: "Business",
    description:
      "Pet-care service site with offerings, trust signals, and booking prompts.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Mama's Pet Services project preview",
    tags: ["Services", "Booking"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Scope call + sitemap",
    description:
      "30 to 45 minutes on Zoom or in person. We leave with page list, must-have features, and who is sending photos/copy. You get a one-page brief the same day.",
  },
  {
    step: "02",
    title: "Design in Figma",
    description:
      "Homepage and key interior pages first. Two rounds of notes included. We do not start coding until you approve the direction in writing.",
  },
  {
    step: "03",
    title: "Build on Next.js",
    description:
      "We develop on a private Vercel preview URL you can share with partners. Forms, SEO tags, and mobile QA happen here before anything is public.",
  },
  {
    step: "04",
    title: "Launch checklist",
    description:
      "DNS cutover, Analytics, Search Console, and a 15-minute walkthrough. Then we stay on standby for the support window baked into your package.",
  },
];

/**
 * FLAG: Removed two "Name Here" testimonials (Mazai / Peace Love and Pizza).
 * Add them back when you have real attribution.
 */
export const testimonials = [
  {
    quote:
      "We were still sending people a Facebook page. After the new site went up, I started getting texts asking if we deliver to Alpharetta. That never happened before.",
    name: "Paul Johnson",
    role: "Owner, Riverside Pizza",
    company: "Riverside Pizza",
  },
  {
    quote:
      "I kept delaying because every agency quote looked the same. These guys just rebuilt the site, showed me how to change the specials, and stopped billing me for every little edit.",
    name: "Janeesh Chacko",
    role: "Owner, Chackos Indian Cuisine",
    company: "Chackos Indian Cuisine",
  },
  {
    quote:
      "Parents were calling us for basic info that should have been on the site. Now they book from their phone in the parking lot. Not fancy, just finally usable.",
    name: "Aditi Neekhra",
    role: "Founder, Evosol Pediatrics",
    company: "Evosol Pediatrics",
  },
];

/** FLAG: $300 / $500 came from your earlier instruction. Kept as published pricing. */
export const pricingPlans = [
  {
    name: "Starter",
    price: "$300",
    period: "one-time",
    description:
      "A tight 3 to 5 page site for a new local business that needs to look legit online.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive Next.js build",
      "Contact form to your email",
      "Basic on-page SEO",
      "14 days of post-launch fixes",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$500",
    period: "one-time",
    description:
      "More pages, stronger motion, and a longer support window for busier brands.",
    features: [
      "Up to 12 pages",
      "Custom sections and light animation",
      "CMS or easy content edits where needed",
      "SEO + Analytics foundation",
      "Performance pass before launch",
      "30 days of priority support",
    ],
    highlighted: true,
    cta: "Start Professional",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "scoped per project",
    description:
      "Multi-location, e-commerce, or integrations that need a written statement of work.",
    features: [
      "Scoped page architecture",
      "Custom integrations",
      "E-commerce or web app builds",
      "Dedicated build lead",
      "Optional SLA support",
    ],
    highlighted: false,
    cta: "Talk to Us",
  },
  {
    name: "Maintenance",
    price: "Custom",
    period: "per month",
    description:
      "Month-to-month care: updates, backups, monitoring, and small content changes.",
    features: [
      "Security and dependency updates",
      "Backup checks",
      "Uptime monitoring",
      "Small content edits",
      "Priority response on outages",
    ],
    highlighted: false,
    cta: "Ask About Monthly",
  },
];

export const faqs = [
  {
    question: "How long does a typical website project take?",
    answer:
      "Starter and Professional marketing sites usually take 2 to 4 weeks after we have your logo, photos, and copy. If content is still being written, that becomes the bottleneck, not the build. Larger e-commerce or multi-location projects get a dated milestone schedule in the proposal.",
  },
  {
    question: "Do you work with businesses outside of tech?",
    answer:
      "Yes. Most of our clients are not tech companies. We regularly build for restaurants, medical practices, pet services, and other brick-and-mortar teams around Cumming and metro Atlanta.",
  },
  {
    question: "What is included after launch?",
    answer:
      "Starter includes 14 days of bug fixes. Professional includes 30. After that you can move to a monthly maintenance plan for updates, backups, and small edits, or message us for one-off changes billed hourly.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We usually keep your domain and migrate what still works (Google listings, emails, analytics), then rebuild the front end. Expect a short audit call so we do not recreate the same problems in a nicer skin.",
  },
  {
    question: "Do you provide copywriting and photography?",
    answer:
      "We can rewrite thin pages and structure messaging, and we will tell you exactly what photos we still need. Full photo shoots and long-form brand books are quoted separately or handled with a photographer you already trust.",
  },
  {
    question: "How do payments work?",
    answer:
      "50% to start, 50% before DNS goes live. Enterprise work can split across milestones. We invoice by email and accept card or bank transfer. Maintenance is billed monthly and can cancel anytime before the next cycle.",
  },
];

export const trustedLogos = [
  "Mazai Restro Cafe",
  "Chackos Indian Cuisine",
  "Peace Love and Pizza",
  "Riverside Pizza",
  "Neurosol",
  "Evosol Pediatrics",
  "Washington's Wharf",
  "Mama's Pet Services",
];

export const team = [
  {
    name: "Arnish Nigam",
    role: "Co-Founder",
    bio: "Client scope, proposals, and keeping projects honest about timeline and budget.",
    initials: "AN",
  },
  {
    name: "Abir Neekhra",
    role: "Co-Founder",
    bio: "Design systems, visual direction, and making sure the site matches the business in real life.",
    initials: "AB",
  },
  {
    name: "Saharsh Majjiga",
    role: "Co-Founder",
    bio: "Next.js engineering, hosting, and the launch checklist so nothing breaks on cutover day.",
    initials: "SM",
  },
];

export const stats = [
  { value: 8, suffix: "+", label: "Client sites shipped" },
  { value: 3, suffix: "", label: "Founders you actually talk to" },
  { value: 2, suffix: "-4 wks", label: "Typical launch window" },
];

export const portfolioCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Business",
  "Restaurants",
  "Medical",
  "Personal Brands",
  "E-commerce",
];
