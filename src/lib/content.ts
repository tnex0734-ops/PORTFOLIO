export const navItems = [
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "UX / UI", href: "#ux-ui" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export const tools = [
  "Canva",
  "GPT",
  "Codex",
  "Claude",
  "Gemini",
  "Antigravity",
  "Miro",
  "Lovable",
  "Stitch",
  "Replit",
];

export const aiProjects = [
  {
    title: "Dev Atlas",
    description:
      "Second-brain operating system and workspace for developers with role-based dashboard, progress tracking, and curated roadmaps.",
    tools: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    link: "https://devatlas-lake.vercel.app/?role=all&section=overview",
  },
  {
    title: "Abtalks Landing Redesign",
    description:
      "Editorial landing page redesign for Abtalks featuring bold brutalist typography, dynamic motion, and conversion-focused layout.",
    tools: ["React", "Motion", "Tailwind", "Vercel"],
    link: "https://abtalks-redesign-rust.vercel.app/",
  },
  {
    title: "Creonix",
    description:
      "AI illustration generator that creates styled visuals for designers using Gemini API.",
    tools: ["Lovable", "Gemini API"],
    link: "https://creonix-art-creator.lovable.app",
    status: "Under Progress",
  },
  {
    title: "PrepBlitz",
    description:
      "Cross-platform exam preparation experience for Gen Z students with progress tracking.",
    tools: ["Lovable"],
    link: "https://id-preview--c1e34932-22ce-4676-86af-7f1ab15467b7.lovable.app",
    status: "Under Progress",
  },
];

export interface SubProjectPart {
  type: "ux" | "ui";
  title: string;
  badge: string;
  tag: string;
  description: string;
  link: string;
  coverImage: string;
  actionLabel: string;
}

export interface UxUiProject {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  link?: string;
  accent: string;
  coverImage: string;
  hasModal?: boolean;
  subProjects?: SubProjectPart[];
}

export const uxUiProjects: UxUiProject[] = [
  {
    number: "01",
    title: "Nexus GG",
    subtitle: "Gaming ecosystem — UX research & interactive UI prototype",
    category: "Gaming Ecosystem",
    accent: "#E63946",
    coverImage: "/projects/nexus_cover.png",
    hasModal: true,
    subProjects: [
      {
        type: "ux",
        title: "Nexus GG UX Research",
        badge: "UX Research • Miro",
        tag: "User Research & Architecture",
        description:
          "Comprehensive UX research, player personas, gaming ecosystem information architecture, and core journey maps documented on Miro.",
        link: "https://miro.com/app/board/uXjVHVlMcO0=/?share_link_id=153443925322",
        coverImage: "/projects/nexus_ux.png",
        actionLabel: "Open Miro Board ↗",
      },
      {
        type: "ui",
        title: "Nexus GG UI Prototype",
        badge: "UI Prototype • Stitch",
        tag: "Interactive Design System",
        description:
          "High-fidelity interactive prototype, gaming UI component system, and responsive screen flows built in Stitch with Google.",
        link: "https://stitch.withgoogle.com/preview/12763680542864368951?node-id=ef27dedf2bc040128be786c6e39caede",
        coverImage: "/projects/nexus_ui.png",
        actionLabel: "Launch Stitch Prototype ↗",
      },
    ],
  },
  {
    number: "02",
    title: "Palmist.io Website Redesign",
    subtitle:
      "Redesign from AI slop to human touch, design decisions inside Figma file",
    category: "Website Redesign",
    link: "https://www.figma.com/design/RNsq1KmSm8tEiNfECWmwNd/projects-base?node-id=482-4&t=PDYGEryUjHA6bl1Y-1",
    accent: "#E63946",
    coverImage: "/projects/palmist.png",
  },
  {
    number: "03",
    title: "Equifiz",
    subtitle:
      "Fintech project (internship project) — shipped in production",
    category: "Fintech Project",
    link: "https://www.figma.com/design/9RfatmO6DzUdI2d2Hm5yGW/Equifiz?node-id=0-1&t=VDkRwSrOdSUBcECw-1",
    accent: "#B7094C",
    coverImage: "/projects/equifiz.png",
  },
];

export const figmaProjects = uxUiProjects;

export const experience = [
  {
    company: "UIUX Hyderabad",
    role: "Core Member",
    date: "May 2026 - Present",
  },
  {
    company: "The Regiment",
    role: "UX/UI Designer",
    date: "Jun 2026 - Sep 2026",
  },
  {
    company: "Acquiq",
    role: "User Experience Designer",
    date: "May 2026 - Jul 2026",
  },
  {
    company: "RamScript Private Limited",
    role: "UX/UI Designer",
    date: "Jan 2026 - Feb 2026",
  },
];

export const contactLinks = [
  {
    label: "LinkedIn",
    value: "taushik-chandana",
    href: "https://www.linkedin.com/in/taushik-chandana-16ba14378",
  },
  {
    label: "Email",
    value: "taushikok@gmail.com",
    href: "mailto:taushikok@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 8919237170",
    href: "tel:+918919237170",
  },
];
