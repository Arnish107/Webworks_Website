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
  Zap,
  Smartphone,
  Shield,
  BadgeDollarSign,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Webworks Collective",
  tagline: "Building Websites That Build Businesses",
  description:
    "Webworks Collective designs and develops premium websites, e-commerce platforms, and digital experiences that help ambitious brands grow with confidence.",
  url: "https://webworkscollective.com",
  email: "webworkscollective887@gmail.com",
  phone: "7706781114",
  address: "Cumming, GA",
  social: {
    twitter: "https://twitter.com/webworksco",
    linkedin: "https://linkedin.com/company/webworks-collective",
    instagram: "https://instagram.com/webworkscollective",
    dribbble: "https://dribbble.com/webworkscollective",
  },
} as const;

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
  image: string;
  imageAlt: string;
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
  image: string;
  imageAlt: string;
  tags: string[];
};

export const services: Service[] = [
  {
    id: "website-design",
    title: "Website Design",
    shortDescription:
      "Distinctive visual systems and interfaces that make your brand impossible to ignore.",
    description:
      "We craft premium digital identities, from brand-aligned layouts to pixel-perfect UI, that feel intentional, modern, and unmistakably yours. Every screen is designed for clarity, conversion, and lasting impression.",
    features: [
      "Brand-aligned visual systems",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Design systems and component libraries",
      "Accessibility-first interfaces",
    ],
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Designer reviewing a modern website layout on a large display",
  },
  {
    id: "website-development",
    title: "Website Development",
    shortDescription:
      "Fast, scalable, production-ready websites engineered for performance and growth.",
    description:
      "From marketing sites to complex web applications, we build with modern frameworks, clean architecture, and ruthless attention to speed. Your site launches polished and stays ready to scale.",
    features: [
      "Next.js and modern stack builds",
      "CMS integrations",
      "API and third-party connections",
      "Performance optimization",
      "Ongoing technical maintenance",
    ],
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Developer writing clean code on a dual-monitor workstation",
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    shortDescription:
      "Conversion-focused online stores that turn browsers into loyal customers.",
    description:
      "We design and develop e-commerce experiences that feel effortless: beautiful product storytelling, frictionless checkout, and infrastructure built for real revenue.",
    features: [
      "Custom storefronts",
      "Shopify and headless commerce",
      "Payment and inventory integrations",
      "Conversion-focused UX",
      "Analytics and growth tooling",
    ],
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Customer browsing products on a modern e-commerce website",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    shortDescription:
      "Smart workflows that reclaim your time and tighten every operational loop.",
    description:
      "We connect the tools you already use, and build the ones you are missing, so leads, invoices, bookings, and follow-ups move on autopilot while your team focuses on what matters.",
    features: [
      "CRM and marketing automation",
      "Booking and scheduling systems",
      "Custom internal tools",
      "Zapier / Make integrations",
      "Reporting dashboards",
    ],
    icon: Workflow,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Analytics dashboard showing automated business workflows",
  },
  {
    id: "seo",
    title: "SEO",
    shortDescription:
      "Technical and content strategy that puts your business where buyers are searching.",
    description:
      "Search visibility is not luck. It is structure, speed, and substance. We audit, optimize, and continuously refine so the right people find you at the right moment.",
    features: [
      "Technical SEO audits",
      "On-page optimization",
      "Local SEO strategy",
      "Content architecture",
      "Performance and Core Web Vitals",
    ],
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "SEO analytics charts on a laptop screen",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDescription:
      "Proactive care that keeps your site secure, fast, and always current.",
    description:
      "Launch day is just the beginning. Our maintenance plans cover updates, monitoring, backups, and iterative improvements so your digital presence stays sharp year-round.",
    features: [
      "Security monitoring",
      "Software and plugin updates",
      "Automated backups",
      "Uptime and performance checks",
      "Priority support",
    ],
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Team collaborating on website maintenance and updates",
  },
];

export const whyChooseUs: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Fast Delivery",
    description:
      "Clear timelines, disciplined sprints, and launches that do not drag for months.",
    icon: Zap,
  },
  {
    title: "Responsive Design",
    description:
      "Every experience is crafted to feel native on desktop, tablet, and mobile.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimized",
    description:
      "Built-in technical foundations so your site is discoverable from day one.",
    icon: Search,
  },
  {
    title: "Secure Hosting",
    description:
      "Modern hosting, SSL, and best practices that protect your brand and data.",
    icon: Shield,
  },
  {
    title: "Affordable Pricing",
    description:
      "Premium craft without inflated agency markups. Packages that scale with you.",
    icon: BadgeDollarSign,
  },
  {
    title: "Ongoing Support",
    description:
      "A real partnership after launch with guidance, updates, and rapid response.",
    icon: Headphones,
  },
];

export const projects: Project[] = [
  {
    id: "mazai-restro-cafe",
    title: "Mazai Restro Cafe",
    category: "Restaurants",
    description:
      "A warm, modern cafe site with menu highlights, hours, and easy reservation prompts.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Cafe interior with coffee bar and seating",
    tags: ["Hospitality", "Menu", "Local SEO"],
  },
  {
    id: "chackos-indian-cuisine",
    title: "Chackos Indian Cuisine",
    category: "Restaurants",
    description:
      "Bold restaurant branding online with online ordering paths and event-ready pages.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Indian cuisine dishes plated for service",
    tags: ["Restaurant", "Ordering", "Brand"],
  },
  {
    id: "peace-love-and-pizza",
    title: "Peace Love and Pizza",
    category: "Restaurants",
    description:
      "Fun, high-energy pizza brand site built for orders, locations, and community vibes.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Fresh pizza on a wooden serving board",
    tags: ["Pizza", "Ordering", "Brand Site"],
  },
  {
    id: "riverside-pizza",
    title: "Riverside Pizza",
    category: "Restaurants",
    description:
      "Clean neighborhood pizzeria website with delivery info, specials, and contact flows.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Pizza being prepared in a restaurant kitchen",
    tags: ["Local Business", "Menu", "Mobile"],
  },
  {
    id: "neurosol",
    title: "Neurosol",
    category: "Business",
    description:
      "Professional healthcare-tech presence focused on clarity, trust, and lead capture.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Modern medical technology and research setting",
    tags: ["Healthcare Tech", "Lead Gen", "UX"],
  },
  {
    id: "evosol-pediatrics",
    title: "Evosol Pediatrics",
    category: "Medical",
    description:
      "Parent-friendly pediatric site with services, provider info, and appointment pathways.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Bright pediatric clinic waiting area",
    tags: ["Medical", "Appointments", "Accessibility"],
  },
  {
    id: "washingtons-wharf",
    title: "Washington's Wharf",
    category: "Restaurants",
    description:
      "Waterfront dining site with atmosphere-first design, menus, and reservation CTAs.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Waterfront restaurant dining terrace at dusk",
    tags: ["Dining", "Reservations", "Photography"],
  },
  {
    id: "mamas-pet-services",
    title: "Mama's Pet Services",
    category: "Business",
    description:
      "Friendly pet-care business site with services, booking prompts, and trust-building copy.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Happy dog with pet care professional outdoors",
    tags: ["Services", "Booking", "Local"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dig into your goals, audience, competitors, and constraints so every decision has purpose.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We shape a visual direction and interactive experience that elevates your brand and clarifies your message.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We engineer a fast, secure, maintainable build, tested across devices and optimized for real users.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We ship with confidence, train your team, and stay close for iteration, analytics, and growth.",
  },
];

export const testimonials = [
  {
    quote:
      "Webworks Collective gave Riverside Pizza a site that finally matches how we show up in person. Orders and calls picked up within the first weeks.",
    name: "Paul Johnson",
    role: "Owner, Riverside Pizza",
    company: "Riverside Pizza",
  },
  {
    quote:
      "Webworks Collective built a site that feels true to Chackos. Our guests love it, and our staff can update it without stress.",
    name: "Janeesh Chacko",
    role: "Owner, Chackos Indian Cuisine",
    company: "Chackos Indian Cuisine",
  },
  {
    quote:
      "From first call to launch, the process was clear and collaborative. Our new site makes booking and learning about our services simple.",
    name: "Name Here",
    role: "Owner, Mazai Restro Cafe",
    company: "Mazai Restro Cafe",
  },
  {
    quote:
      "They understood the vibe we wanted and turned it into a site that feels alive. Guests say it looks as good as the food.",
    name: "Name Here",
    role: "Owner, Peace Love and Pizza",
    company: "Peace Love and Pizza",
  },
  {
    quote:
      "Evosol Pediatrics needed something parents could trust at a glance. Webworks Collective delivered a calm, clear site our families actually use.",
    name: "Aditi Neekhra",
    role: "Founder, Evosol Pediatrics",
    company: "Evosol Pediatrics",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$300",
    period: "one-time",
    description: "Ideal for new businesses ready for a polished online presence.",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 weeks of post-launch support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$500",
    period: "one-time",
    description: "Our most popular package for brands that need to convert and scale.",
    features: [
      "Up to 12 custom pages",
      "Advanced animations and interactions",
      "CMS for easy content updates",
      "SEO and analytics foundation",
      "Performance optimization",
      "30 days of priority support",
    ],
    highlighted: true,
    cta: "Start Professional",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "scoped per project",
    description: "For complex platforms, e-commerce, and multi-stakeholder builds.",
    features: [
      "Unlimited page architecture",
      "Custom integrations and automation",
      "E-commerce or web app builds",
      "Dedicated project lead",
      "SLA-backed support options",
      "Ongoing growth retainers available",
    ],
    highlighted: false,
    cta: "Talk to Us",
  },
  {
    name: "Maintenance",
    price: "Custom",
    period: "per month",
    description:
      "Monthly care that keeps your website secure, updated, and performing at its best.",
    features: [
      "Security monitoring and updates",
      "Content and plugin maintenance",
      "Performance checks",
      "Backup management",
      "Priority support each month",
    ],
    highlighted: false,
    cta: "Ask About Monthly",
  },
];

export const faqs = [
  {
    question: "How long does a typical website project take?",
    answer:
      "Most marketing sites launch in 4 to 8 weeks depending on scope, content readiness, and revision cycles. E-commerce and custom platforms are scoped individually with clear milestones from day one.",
  },
  {
    question: "Do you work with businesses outside of tech?",
    answer:
      "Absolutely. We partner with restaurants, clinics, professional services, personal brands, retailers, and growing startups, any organization ready to elevate how they show up online.",
  },
  {
    question: "What is included after launch?",
    answer:
      "Every project includes a handoff, documentation, and a support window. We also offer maintenance and growth retainers for updates, SEO, and continuous improvement.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Many of our strongest results come from redesigns, preserving what already works while rebuilding structure, design, and performance around clearer business goals.",
  },
  {
    question: "Do you provide copywriting and photography?",
    answer:
      "We can guide messaging strategy and partner with trusted writers and photographers, or work seamlessly with your existing creative assets.",
  },
  {
    question: "How do payments work?",
    answer:
      "Projects typically begin with a kickoff deposit, followed by milestone payments tied to design approval and launch. Enterprise engagements may use custom billing schedules.",
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
    bio: "Leads strategy, client partnerships, and the overall vision for Webworks Collective.",
    initials: "AN",
  },
  {
    name: "Abir Neekhra",
    role: "Co-Founder",
    bio: "Focuses on design systems, brand experience, and polished interfaces that convert.",
    initials: "AB",
  },
  {
    name: "Saharsh Majjiga",
    role: "Co-Founder",
    bio: "Builds fast, reliable websites and keeps technical delivery clean from kickoff to launch.",
    initials: "SM",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const portfolioCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Business",
  "Restaurants",
  "Medical",
  "Personal Brands",
  "E-commerce",
];
