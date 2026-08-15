"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Sparkle,
  Star,
} from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { CustomCursor } from "@/components/CustomCursor";
import { LazyImage } from "@/components/lazy-image";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aiProjects,
  contactLinks,
  experience,
  figmaProjects,
  navItems,
  tools,
} from "@/lib/content";

const softEase = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.55, ease: softEase },
};

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="grain" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-sm font-black uppercase tracking-normal"
            aria-label="Back to hero"
          >
            Taushik / UX
          </a>
          <div className="hidden items-center gap-6 text-xs font-bold uppercase text-[var(--muted)] sm:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="subtle-link">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:taushikok@gmail.com"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--ink)] text-[var(--ink)] transition duration-200 hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            aria-label="Email Taushik"
          >
            <Mail size={16} />
          </a>
        </nav>
      </header>

      <main className="relative z-10 overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <AiProductsSection />
        <FigmaProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] pt-16 sm:pt-20 pb-8 sm:pb-12 flex items-center justify-center bg-[var(--paper)] select-none"
    >
      {/* Top Left Corner Red Accent Graphic */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 pointer-events-none">
        <div className="relative w-6 h-6 sm:w-20 sm:h-20 border-2 border-[#e52424]">
          <div className="absolute top-0 left-0 w-3 h-3 sm:w-12 sm:h-12 bg-[#e52424] flex items-center justify-center">
            <span className="w-1 h-1 sm:w-2.5 sm:h-2.5 rounded-full bg-white block" />
          </div>
          <div className="absolute bottom-0.5 right-0.5 w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424]" />
        </div>
      </div>

      {/* Top Right Corner Red Accent Graphic */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 pointer-events-none">
        <div className="relative w-6 h-6 sm:w-20 sm:h-20 border-2 border-[#e52424]">
          <div className="absolute top-0 right-0 w-3 h-3 sm:w-12 sm:h-12 bg-[#e52424] flex items-center justify-center">
            <span className="w-1 h-1 sm:w-2.5 sm:h-2.5 rounded-full bg-white block" />
          </div>
          <div className="absolute bottom-0.5 left-0.5 w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424]" />
        </div>
      </div>

      <div className="section-shell relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-6">
        <div className="relative flex flex-col items-center justify-center">
          {/* Main Poster Typography Frame */}
          <motion.div
            className="relative w-full max-w-5xl py-2 sm:py-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: softEase }}
          >
            {/* Top Frame Bar */}
            <div className="relative flex items-center justify-between text-[#e52424] font-black text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mb-2 sm:mb-3 px-1 sm:px-2">
              <span className="flex items-center gap-1 sm:gap-2 font-bold">
                TAUSHIK CHANDANA
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424] inline-block" />
              </span>
              <div className="flex-1 mx-1.5 sm:mx-6 h-[1.5px] bg-[#e52424]" />
              <span className="flex items-center gap-1 sm:gap-2 font-bold">
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424] inline-block" />
                2026
              </span>
            </div>

            {/* DESKTOP HERO VIEW (md and up) */}
            <div className="hidden md:flex relative items-center justify-center min-h-[420px] lg:min-h-[480px]">
              {/* Left Side Typography: P O / F O */}
              <div className="z-10 flex flex-col justify-between items-end text-[#e52424] display-font select-none md:mr-[-40px] lg:mr-[-70px]">
                <div className="flex gap-2 text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.78] tracking-tighter">
                  <span>P</span>
                  <span>O</span>
                </div>
                <div className="flex gap-2 text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.78] tracking-tighter mt-2">
                  <span>F</span>
                  <span>O</span>
                </div>
              </div>

              {/* Center Column: Character Illustration */}
              <div className="relative z-20 flex flex-col items-center justify-center shrink-0 my-[-25px]">
                <motion.div
                  className="w-[280px] md:w-[340px] lg:w-[420px] shrink-0 mix-blend-multiply"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: softEase }}
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src="/character_straight.png"
                    alt="Taushik Chandana character illustration"
                    className="w-full h-auto object-contain mix-blend-multiply filter contrast-105"
                  />
                </motion.div>

                {/* TAUSHIK Stamp Badge */}
                <motion.div
                  className="relative cursor-pointer mt-3"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                >
                  <div className="px-5 py-2 rounded-full border-2 border-[#e52424] bg-[var(--paper)] text-[#e52424] font-black text-sm uppercase tracking-widest shadow-[3px_3px_0_#e52424]">
                    TAUSHIK
                  </div>
                  <span className="absolute -top-2 -right-2 text-[#e52424] font-black text-xs">
                    ✦
                  </span>
                </motion.div>
              </div>

              {/* Right Side Typography: R T / L I O */}
              <div className="z-10 flex flex-col justify-between items-start text-[#e52424] display-font select-none md:ml-[-40px] lg:ml-[-70px]">
                <div className="flex gap-2 text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.78] tracking-tighter">
                  <span>R</span>
                  <span>T</span>
                </div>
                <div className="flex gap-2 text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.78] tracking-tighter mt-2">
                  <span>L</span>
                  <span>I</span>
                  <span>O</span>
                </div>
              </div>
            </div>

            {/* MOBILE HERO VIEW (< md, applies to all mobile resolutions from 320px to 767px) */}
            <div className="flex md:hidden flex-col items-center justify-center py-4 xs:py-6 relative select-none w-full">
              {/* 1. TEXT ON TOP: Large, high-impact PORTFOLIO title */}
              <div className="text-center display-font text-[#e52424] font-black leading-[0.78] tracking-tighter text-[5.2rem] xs:text-[6.2rem] sm:text-[7.5rem]">
                <div className="tracking-tight">PORT</div>
                <div className="tracking-tight mt-1">FOLIO</div>
              </div>

              {/* 2. IMAGE BELOW TEXT: Large, prominent character illustration */}
              <motion.div
                className="relative z-10 w-[240px] xs:w-[270px] sm:w-[320px] max-w-[85%] mt-5 xs:mt-7 mix-blend-multiply"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/character_straight.png"
                  alt="Taushik Chandana character illustration"
                  className="w-full h-auto object-contain mix-blend-multiply filter contrast-105"
                />
              </motion.div>

              {/* 3. NAME STAMP DIRECTLY BELOW IMAGE */}
              <motion.div
                className="relative cursor-pointer z-20 mt-4 xs:mt-5"
                initial={{ scale: 0.9, rotate: -6 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <div className="px-6 py-2.5 rounded-full border-3 border-[#e52424] bg-[var(--paper)] text-[#e52424] font-black text-sm xs:text-base uppercase tracking-widest shadow-[4px_4px_0_#e52424]">
                  TAUSHIK ✦ UX
                </div>
              </motion.div>
            </div>

            {/* Bottom Frame Bar */}
            <div className="relative flex items-center justify-between text-[#e52424] font-black text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mt-4 sm:mt-6 px-1 sm:px-2">
              <span className="flex items-center gap-1 sm:gap-2 font-bold">
                UI/UX DESIGNER
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424] inline-block" />
              </span>
              <div className="flex-1 mx-1.5 sm:mx-6 h-[1.5px] bg-[#e52424]" />
              <span className="flex items-center gap-1 sm:gap-2 font-bold">
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424] inline-block" />
                PRODUCT DESIGNER
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const FloatingShape = ({
  children,
  className,
  delay = 0,
  floatDuration = 4,
  spinDuration = 10,
  yOffset = -15,
}: {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  floatDuration?: number;
  spinDuration?: number;
  yOffset?: number;
}) => {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none z-0 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 80 }}
    >
      <motion.div
        animate={{
          y: [0, yOffset, 0],
          rotate: spinDuration ? [0, 360] : 0,
        }}
        transition={{
          y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
          rotate: spinDuration
            ? { duration: spinDuration, repeat: Infinity, ease: "linear" }
            : undefined,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

/* Punk-Collage Brutalism Helper Components */

function BrutalistSectionDivider({ variant = "zigzag", className = "" }: { variant?: "zigzag" | "ripped" | "spikes"; className?: string }) {
  if (variant === "ripped") {
    return (
      <div aria-hidden="true" className={`w-full overflow-hidden leading-none select-none my-6 ${className}`}>
        <svg className="relative block w-full h-8 sm:h-12 text-[#e52424]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 L30,40 L60,10 L100,50 L140,20 L180,60 L230,15 L280,55 L320,25 L370,65 L420,10 L480,50 L530,20 L580,70 L640,15 L690,60 L750,20 L810,65 L870,25 L920,55 L980,10 L1040,60 L1100,20 L1150,50 L1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    );
  }

  if (variant === "spikes") {
    return (
      <div aria-hidden="true" className={`w-full overflow-hidden leading-none select-none my-6 ${className}`}>
        <svg className="relative block w-full h-6 sm:h-10 text-[var(--ink)]" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 L40,60 L80,0 L120,60 L160,0 L200,60 L240,0 L280,60 L320,0 L360,60 L400,0 L440,60 L480,0 L520,60 L560,0 L600,60 L640,0 L680,60 L720,0 L760,60 L800,0 L840,60 L880,0 L920,60 L960,0 L1000,60 L1040,0 L1080,60 L1120,0 L1160,60 L1200,0 L1200,60 L0,60 Z" />
        </svg>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`w-full overflow-hidden leading-none select-none my-6 ${className}`}>
      <svg className="relative block w-full h-6 sm:h-10 text-[#e52424]" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M0,20 L50,5 L100,35 L150,10 L200,30 L250,5 L300,35 L350,15 L400,30 L450,5 L500,35 L550,10 L600,30 L650,5 L700,35 L750,15 L800,30 L850,5 L900,35 L950,10 L1000,30 L1050,5 L1100,35 L1150,15 L1200,20" />
      </svg>
    </div>
  );
}

function StarburstBadge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: 12 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative inline-flex items-center justify-center p-3 text-center cursor-pointer ${className}`}
    >
      <div
        className="absolute inset-0 bg-[#e52424] shadow-[3px_3px_0_#220608]"
        style={{
          clipPath:
            "polygon(50% 0%, 63% 15%, 83% 4%, 81% 25%, 100% 35%, 88% 52%, 98% 72%, 78% 77%, 71% 98%, 53% 86%, 35% 97%, 30% 77%, 9% 74%, 18% 54%, 2% 38%, 21% 27%, 15% 7%, 37% 13%)",
        }}
      />
      <span className="relative z-10 font-mono text-[9px] sm:text-[10px] font-black uppercase text-white tracking-widest px-1">
        {text}
      </span>
    </motion.div>
  );
}

function HandDoodle({ type = "underline", className = "" }: { type?: "underline" | "arrow" | "squiggle" | "burst"; className?: string }) {
  if (type === "underline") {
    return (
      <svg aria-hidden="true" className={`w-full h-3 sm:h-4 text-[#e52424] overflow-visible ${className}`} viewBox="0 0 200 12" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M3 8 Q 50 2, 100 8 T 197 5" />
      </svg>
    );
  }

  if (type === "arrow") {
    return (
      <svg aria-hidden="true" className={`w-10 h-10 sm:w-12 sm:h-12 text-[#e52424] overflow-visible ${className}`} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M10 50 Q 25 15, 45 10 M 32 6 L 48 10 L 44 24" />
      </svg>
    );
  }

  if (type === "squiggle") {
    return (
      <svg aria-hidden="true" className={`w-12 h-12 text-[#e52424]/70 ${className}`} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M10 30 C 15 10, 30 10, 25 30 C 20 50, 40 50, 45 25 C 50 10, 55 40, 55 45" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={`w-8 h-8 text-[var(--ink)] ${className}`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 2 L23 15 L36 8 L27 19 L40 25 L26 27 L30 40 L19 29 L10 38 L13 25 L1 22 L14 16 L5 5 L17 11 Z" />
    </svg>
  );
}

function AboutSection() {
  return (
    <>
      <BrutalistSectionDivider variant="zigzag" />
      <section id="about" className="relative py-16 sm:py-28 overflow-hidden">
        <FloatingShape className="left-4 top-8 text-[var(--coral)] opacity-35" delay={0.1}>
          <Star size={24} fill="currentColor" />
        </FloatingShape>
        <FloatingShape
          className="right-8 top-2 text-[var(--blue)] opacity-30 h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-dashed border-current"
          spinDuration={20}
          delay={0.2}
        />
        <FloatingShape className="left-8 bottom-4 text-[var(--sage)] opacity-40" delay={0.3}>
          <Sparkle size={20} />
        </FloatingShape>

        <div className="section-shell grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center relative z-10">
          <motion.div {...fadeIn} className="relative">
            <SectionHeading eyebrow="About Me" title="Designer & Builder" />
            <HandDoodle type="underline" className="max-w-[220px] mt-1" />
            <div className="absolute -top-4 right-2 sm:right-10 hidden sm:block">
              <StarburstBadge text="UX ✦ 2026" />
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} className="space-y-6">
            {/* Paper-cut zine card container */}
            <div className="relative border-2 border-[var(--ink)] bg-[#fff8f8] p-6 sm:p-8 shadow-[6px_6px_0_#e52424] -rotate-1">
              <p className="max-w-3xl text-base sm:text-xl leading-7 sm:leading-9 text-[var(--ink)] font-bold">
                I&apos;m a UI/UX &amp; Product Designer bridging the gap between user experience, visual craft, and design engineering. I build intuitive digital interfaces and end-to-end product architectures that turn complex systems into seamless user journeys.
              </p>
              <p className="mt-4 max-w-3xl text-sm sm:text-base leading-6 sm:leading-8 text-[var(--muted)]">
                Beyond traditional screens, I focus on how products are built and shipped—combining design systems, modern frontend code, AI stack workflows, and rapid prototyping to turn bold ideas into production-ready software.
              </p>
              <HandDoodle type="squiggle" className="absolute -bottom-4 -right-4 hidden sm:block" />
            </div>

            <div className="flex flex-wrap gap-4 pt-2 sm:pt-4">
              <motion.div
                whileHover={{ rotate: 1, scale: 1.03 }}
                className="rounded-xl border-2 border-[var(--ink)] bg-white px-5 py-3 shadow-[4px_4px_0_#e52424] ring-2 ring-white"
              >
                <span className="block text-xs font-black uppercase text-[#e52424]">Focus</span>
                <span className="text-xs sm:text-sm font-black uppercase text-[var(--ink)]">UI/UX &amp; Product Design</span>
              </motion.div>
              <motion.div
                whileHover={{ rotate: -1, scale: 1.03 }}
                className="rounded-xl border-2 border-[var(--ink)] bg-white px-5 py-3 shadow-[4px_4px_0_#220608] ring-2 ring-white"
              >
                <span className="block text-xs font-black uppercase text-[var(--muted)]">Execution</span>
                <span className="text-xs sm:text-sm font-black uppercase text-[var(--ink)]">Design Engineering &amp; Shipping</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ToolsSection() {
  const toolItems = [
    { name: "Canva", category: "Visual Assets" },
    { name: "GPT", category: "AI Intelligence" },
    { name: "Codex", category: "Code Generation" },
    { name: "Claude", category: "AI Reasoning" },
    { name: "Gemini", category: "Multimodal AI" },
    { name: "Antigravity", category: "Agent Workflow" },
    { name: "Miro", category: "Brainstorming" },
    { name: "Lovable", category: "Vibe Coding" },
    { name: "Stitch", category: "Design Systems" },
    { name: "Replit", category: "Cloud Workspace" },
  ];

  return (
    <>
      <BrutalistSectionDivider variant="ripped" />
      <section id="tools" className="relative py-12 sm:py-20 bg-[var(--paper)] select-none">
        <div className="section-shell max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="relative">
            <SectionHeading eyebrow="Stack & Workflow" title="Tools I Use" />
            <HandDoodle type="underline" className="max-w-[180px] mt-1" />
            <div className="absolute top-0 right-4 hidden sm:block">
              <StarburstBadge text="RISO STACK" />
            </div>
          </motion.div>

          {/* Anti-Slop Architectural Layout: Stage + Directory */}
          <div className="mt-8 sm:mt-12 grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[330px_1fr] items-center">
            {/* Main Hero Poster Artwork */}
            <motion.div
              {...fadeIn}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="relative mx-auto w-full max-w-[270px] sm:max-w-[310px] rounded-2xl border-2 border-[var(--ink)] bg-white p-2.5 shadow-[8px_8px_0_#e52424]"
            >
              <div className="overflow-hidden rounded-xl border border-[var(--line)]">
                <img
                  src="/tools_poster.png"
                  alt="Tools I Use - Poster Artwork"
                  className="w-full h-auto object-contain block max-h-[410px]"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between px-1 text-[10px] font-black uppercase text-[var(--muted)] tracking-wider">
                <span>Poster Edition</span>
                <span className="text-[#e52424] font-bold">10 Core Tools</span>
              </div>
            </motion.div>

            {/* Clean Structured Tool Directory */}
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="flex flex-col justify-center relative"
            >
              <div className="mb-4 pb-2 border-b-2 border-[var(--ink)] flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#e52424]">
                  Core Stack Directory
                </h3>
                <span className="font-mono text-[11px] font-bold text-[var(--ink)] bg-[#e52424]/10 px-2 py-0.5 rounded">2026</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {toolItems.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? -1 : 1 }}
                    className="group flex items-center justify-between rounded-xl border-2 border-[var(--ink)] bg-white px-3.5 py-2.5 transition-all duration-200 hover:border-[#e52424] shadow-[3px_3px_0_#220608] hover:shadow-[4px_4px_0_#e52424]"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-7 w-7 place-items-center rounded-lg border border-[var(--ink)] bg-[#fff8f8] text-[var(--ink)] group-hover:border-[#e52424] group-hover:text-[#e52424]">
                        <BrandIcon name={tool.name} className="h-4 w-4" />
                      </span>
                      <span className="text-xs font-black uppercase text-[var(--ink)] group-hover:text-[#e52424]">
                        {tool.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[var(--muted)] uppercase">
                      {tool.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function AiProductsSection() {
  return (
    <>
      <BrutalistSectionDivider variant="spikes" />
      <section id="products" className="relative py-20 sm:py-32 overflow-hidden">
        <FloatingShape className="left-12 top-4 text-[var(--clay)] opacity-40" delay={0.1}>
          <Star size={22} fill="currentColor" />
        </FloatingShape>
        <FloatingShape className="right-12 top-8 text-[var(--coral)] opacity-35" delay={0.2}>
          <Sparkle size={28} />
        </FloatingShape>
        <FloatingShape
          className="left-1/3 bottom-12 text-[var(--blue)] opacity-20 h-10 w-10 sm:h-12 sm:w-12 border-2 border-dashed border-current"
          spinDuration={15}
          delay={0.3}
        />
        <div className="section-shell relative z-10">
          <motion.div {...fadeIn} className="relative">
            <SectionHeading eyebrow="Vibe coded work" title="AI Powered Products" />
            <HandDoodle type="underline" className="max-w-[260px] mt-1" />
            <div className="absolute top-0 right-2 hidden sm:block">
              <StarburstBadge text="AI STACK" />
            </div>
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aiProjects.map((project, index) => (
              <motion.a
                key={project.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.04 }}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, rotate: index % 2 === 0 ? -1 : 1 }}
                className="group flex min-h-[250px] sm:min-h-[280px] flex-col justify-between rounded-xl border-2 border-[var(--ink)] bg-white p-5 sm:p-6 shadow-[5px_5px_0_#e52424] transition duration-200 hover:shadow-[7px_7px_0_#220608]"
              >
                <div>
                  <div className="mb-4 sm:mb-6 flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-white bg-[#e52424] px-2 py-0.5 rounded shadow-[2px_2px_0_#220608]">
                      0{index + 1}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#e52424]"
                    />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black uppercase leading-tight flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.title}
                    {(project.title.toLowerCase() === "creonix" ||
                      project.title.toLowerCase() === "prepblitz") && (
                      <span className="inline-block rounded-md border border-[#e52424] bg-[#fff8f8] text-[#e52424] px-2 py-0.5 text-[9px] font-black uppercase tracking-widest shadow-[2px_2px_0_#220608]">
                        Under Progress
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={`${project.title}-${tool}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--ink)] bg-[#fff8f8] px-2.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase text-[var(--ink)] ring-2 ring-white"
                    >
                      <BrandIcon name={tool} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FigmaProjectsSection() {
  return (
    <>
      <BrutalistSectionDivider variant="zigzag" />
      <section id="figma" className="relative overflow-hidden py-20 sm:py-32">
        <FloatingShape className="left-6 top-20 text-[var(--sage)] opacity-35" delay={0.1}>
          <Star size={26} fill="currentColor" />
        </FloatingShape>
        <FloatingShape className="right-8 top-12 text-[var(--blue)] opacity-45" delay={0.2}>
          <Sparkle size={24} />
        </FloatingShape>
        <FloatingShape className="right-1/4 bottom-8 text-[var(--clay)] opacity-40" delay={0.3}>
          <Star size={20} fill="currentColor" />
        </FloatingShape>
        <div
          aria-hidden="true"
          className="poster-outline display-font pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-4xl sm:text-8xl md:text-[9rem] lg:text-[12rem] font-black uppercase leading-none select-none"
        >
          Projects
        </div>
        <div className="section-shell relative z-10">
          <motion.div {...fadeIn} className="relative">
            <SectionHeading eyebrow="Figma files" title="Figma Projects" />
            <HandDoodle type="underline" className="max-w-[210px] mt-1" />
          </motion.div>

          <div className="mt-10 sm:mt-16 grid gap-6 md:grid-cols-3">
            {figmaProjects.map((project, index) => (
              <motion.a
                key={project.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.06 }}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
                className="group block"
              >
                <div
                  className="relative min-h-[360px] sm:min-h-[440px] overflow-hidden rounded-xl border-2 border-[var(--ink)] p-4 sm:p-5 shadow-[6px_6px_0_#220608] transition duration-200"
                  style={{ backgroundColor: project.accent }}
                >
                  <div className="flex items-start justify-between relative z-20">
                    <span className="rounded-full border border-[var(--ink)] bg-[var(--paper)] px-3 py-1 font-mono text-xs font-black shadow-[2px_2px_0_#220608]">
                      {project.number}
                    </span>
                    <ArrowUpRight size={20} className="text-white drop-shadow" />
                  </div>
                  <MockupSketch index={index} />
                  <p className="display-font absolute -bottom-7 right-1 text-[6.5rem] sm:text-[8rem] font-black leading-none text-[var(--paper)] opacity-90 sm:text-[9rem] lg:text-[10rem] select-none">
                    {project.number.replace("0", "")}
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 pr-2 sm:pr-3">
                  <h3 className="text-base sm:text-lg font-black uppercase group-hover:text-[#e52424] transition-colors">{project.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm leading-5 text-[var(--muted)]">
                    {project.subtitle}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MockupSketch({ index }: { index: number }) {
  const isWide = index === 1;

  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-20 sm:top-24 flex -translate-x-1/2 items-center justify-center select-none"
    >
      <div
        className={`relative border-2 border-[var(--ink)] bg-[var(--paper)] shadow-[10px_14px_0_rgba(17,16,14,0.25)] ${
          isWide
            ? "h-36 w-52 sm:h-40 sm:w-64 rotate-3 rounded-md"
            : "h-52 w-28 sm:h-64 sm:w-36 -rotate-6 rounded-[28px]"
        }`}
      >
        <div className="absolute left-1/2 top-3 h-2 w-8 sm:w-10 -translate-x-1/2 rounded-full bg-[var(--ink)] opacity-70" />
        <div className="absolute inset-x-3 sm:inset-x-5 top-10 sm:top-12 space-y-2.5 sm:space-y-3">
          <div className="h-3.5 sm:h-4 rounded-full bg-[var(--ink)] opacity-85" />
          <div className="h-2.5 sm:h-3 w-2/3 rounded-full bg-[var(--ink)] opacity-30" />
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-2 sm:pt-3">
            <div className="h-10 sm:h-14 rounded border border-[var(--ink)] bg-transparent" />
            <div className="h-10 sm:h-14 rounded border border-[var(--ink)] bg-transparent" />
          </div>
        </div>
      </div>
      {index === 0 ? (
        <div className="relative -ml-6 sm:-ml-8 mt-16 sm:mt-20 h-36 w-20 sm:h-48 sm:w-28 rotate-6 rounded-[20px] sm:rounded-[24px] border-2 border-[var(--ink)] bg-[var(--paper)] shadow-[8px_10px_0_rgba(17,16,14,0.2)]" />
      ) : null}
    </div>
  );
}

function ExperienceSection() {
  return (
    <>
      <BrutalistSectionDivider variant="ripped" />
      <section id="experience" className="relative py-16 sm:py-32 overflow-hidden">
        <FloatingShape className="left-20 top-2 text-[var(--coral)] opacity-45" delay={0.1}>
          <Sparkle size={22} />
        </FloatingShape>
        <FloatingShape
          className="right-12 top-16 text-[var(--sage)] opacity-30 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-dashed border-current"
          spinDuration={25}
          delay={0.2}
        />
        <FloatingShape className="left-8 bottom-4 text-[var(--blue)] opacity-35" delay={0.3}>
          <Star size={24} fill="currentColor" />
        </FloatingShape>
        <div className="section-shell relative z-10">
          <motion.div {...fadeIn} className="relative">
            <SectionHeading eyebrow="Recent roles" title="Experience" />
            <HandDoodle type="underline" className="max-w-[160px] mt-1" />
          </motion.div>
          <div className="mt-8 sm:mt-12 grid gap-5 md:grid-cols-3">
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.05 }}
                whileHover={{ y: -4, rotate: index % 2 === 0 ? -1 : 1 }}
                className="relative min-h-44 sm:min-h-56 rounded-xl border-2 border-[var(--ink)] bg-white p-5 shadow-[5px_5px_0_#e52424]"
              >
                <div className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-3">
                  <span className="font-mono text-xs font-black text-white bg-[#e52424] px-2 py-0.5 rounded shadow-[2px_2px_0_#220608]">
                    ROLE 0{index + 1}
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)]">{item.date}</span>
                </div>
                <h3 className="mt-4 text-lg sm:text-2xl font-black uppercase leading-tight text-[var(--ink)]">
                  {item.company}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-black uppercase text-[#e52424]">
                  {item.role}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <BrutalistSectionDivider variant="spikes" />
      <section id="contact" className="relative pb-16 pt-16 sm:pb-20 sm:pt-32 overflow-hidden select-none">
        <FloatingShape className="right-24 top-4 text-[var(--clay)] opacity-45" delay={0.1}>
          <Sparkle size={32} />
        </FloatingShape>
        <FloatingShape className="left-8 bottom-32 text-[var(--coral)] opacity-35" delay={0.2}>
          <Star size={28} fill="currentColor" />
        </FloatingShape>
        <div className="section-shell relative z-10">
          <motion.div
            {...fadeIn}
            className="grid gap-8 sm:gap-10 border-2 border-[var(--ink)] bg-white p-6 sm:p-10 rounded-2xl shadow-[8px_8px_0_#e52424] lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#e52424]">
                  Contact
                </span>
                <StarburstBadge text="GET IN TOUCH" />
              </div>
              <h2 className="display-font text-4xl sm:text-7xl md:text-[7rem] font-black uppercase leading-[0.86] text-[var(--ink)]">
                Let&apos;s Connect
              </h2>
              <HandDoodle type="arrow" className="mt-4 hidden sm:block" />
            </div>
            <div className="flex flex-col justify-end gap-4 sm:gap-5">
              {contactLinks.map((item) => {
                const isExternal = item.href.startsWith("http");

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="group flex items-center justify-between gap-4 border-2 border-[var(--ink)] bg-[#fff8f8] p-3.5 sm:p-4 rounded-xl shadow-[3px_3px_0_#220608] hover:border-[#e52424] hover:shadow-[4px_4px_0_#e52424] transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-lg border-2 border-[var(--ink)] bg-white text-[#e52424] shadow-[2px_2px_0_#220608]">
                        <ContactIcon label={item.label} />
                      </span>
                      <span>
                        <span className="block text-[10px] sm:text-xs font-black uppercase text-[var(--muted)]">
                          {item.label}
                        </span>
                        <span className="subtle-link text-base sm:text-lg font-black text-[var(--ink)] group-hover:text-[#e52424]">
                          {item.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-[#e52424] transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <footer className="mt-16 sm:mt-20 flex flex-col justify-between gap-3 border-t-2 border-[var(--ink)] pt-5 text-xs font-bold uppercase text-[var(--muted)] sm:flex-row">
            <p>Taushik Chandana Portfolio '26</p>
            <a href="#hero" className="subtle-link text-[#e52424]">
              Back to top ↑
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}

function ContactIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return <span className="text-[11px] font-black leading-none">in</span>;
  }

  if (label === "Phone") {
    return <Phone size={16} />;
  }

  return <Mail size={16} />;
}
