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
import { SectionHeading } from "@/components/SectionHeading";
import {
  aiProjects,
  contactLinks,
  experience,
  figmaProjects,
  navItems,
  tools,
} from "@/lib/content";

const heroLetters = [
  { value: "P", rotate: -7, y: 26, color: "var(--ink)" },
  { value: "O", rotate: 5, y: 82, color: "var(--ink)" },
  { value: "R", rotate: -13, y: 12, color: "var(--ink)" },
  { value: "+", rotate: 2, y: -16, color: "var(--ink)" },
  { value: "f", rotate: 11, y: 18, color: "var(--ink)" },
  { value: "o", rotate: -3, y: 80, color: "var(--ink)" },
  { value: "L", rotate: -9, y: 54, color: "var(--ink)" },
  { value: "i", rotate: 7, y: 22, color: "var(--ink)" },
  { value: "o", rotate: 5, y: 76, color: "var(--ink)" },
];

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

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
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
      className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28"
    >
      <div className="section-shell">
        <div className="relative min-h-[760px] sm:min-h-[820px] lg:min-h-[760px]">
          <div
            className="relative z-10 flex max-w-[1080px] flex-nowrap items-start justify-center gap-x-1 sm:gap-x-2 lg:justify-start pt-8 sm:pt-12"
            aria-label="Portfolio"
          >
            {heroLetters.map((letter, index) => (
              <motion.span
                key={`${letter.value}-${index}`}
                className="display-font block text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] xl:text-[10.5rem] font-black leading-[0.78] select-none cursor-pointer"
                style={{
                  color: letter.color,
                }}
                initial={{
                  rotate: letter.rotate,
                  y: letter.y + 80,
                  opacity: 0,
                }}
                animate={{
                  rotate: letter.rotate,
                  y: letter.y,
                  opacity: 1,
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  color: "var(--clay)",
                  transition: { duration: 0.15 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 12,
                  delay: index * 0.04,
                }}
              >
                {letter.value}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="display-font absolute right-2 top-16 z-20 text-5xl font-black text-[var(--clay)] sm:right-16 sm:top-10 sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ delay: 0.4, duration: 0.6, ease: softEase }}
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            '26
          </motion.p>

          <motion.div
            className="absolute left-1/2 top-[90px] sm:top-[110px] md:top-[120px] lg:top-[100px] z-20 -translate-x-1/2 h-[340px] w-[min(90vw,360px)] sm:h-[400px] sm:w-[420px] md:h-[460px] md:w-[480px] lg:h-[480px] lg:w-[500px]"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: softEase }}
          >
            <div className="relative h-full w-full">
              <img
                src="/character.png"
                alt="Taushik Chandana character illustration placeholder"
                className="h-full w-full object-contain object-bottom mix-blend-multiply"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute left-0 top-[85px] sm:top-[125px] md:top-[170px] lg:top-[210px] xl:top-[240px] z-30 max-w-[260px] md:left-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: softEase }}
          >
            <p className="text-sm font-black uppercase tracking-widest text-[var(--coral)] bg-[var(--paper)] px-3 py-1.5 border-2 border-[var(--coral)] rounded-md inline-block shadow-[4px_4px_0_var(--ink)] rotate-[-2deg] hover:rotate-0 transition-transform duration-200 cursor-pointer">
              Taushik Chandana
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-0 z-30 max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] border-l-4 border-[var(--blue)] pl-5 md:right-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: softEase }}
          >
            <p className="text-base leading-7 text-[var(--ink)] sm:text-lg font-medium">
              I design simple, user-friendly digital experiences and AI-powered
              products with a focus on usability, clarity, and playful
              interaction.
            </p>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute bottom-44 left-4 z-10 h-24 w-24 rounded-full border-2 border-dashed border-[var(--blue)] bg-[rgba(120,147,212,0.06)] sm:left-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-10 top-[480px] z-10 h-16 w-16 border border-[var(--coral)] bg-[rgba(232,91,85,0.04)]"
            animate={{ rotate: [12, 45, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-28 left-1/3 z-20 text-[var(--coral)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <Sparkle size={26} />
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

function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <FloatingShape className="left-4 top-8 text-[var(--coral)] opacity-35" delay={0.1}>
        <Star size={24} fill="currentColor" />
      </FloatingShape>
      <FloatingShape
        className="right-8 top-2 text-[var(--blue)] opacity-30 h-16 w-16 rounded-full border-2 border-dashed border-current"
        spinDuration={20}
        delay={0.2}
      />
      <FloatingShape className="left-8 bottom-4 text-[var(--sage)] opacity-40" delay={0.3}>
        <Sparkle size={20} />
      </FloatingShape>
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div {...fadeIn}>
          <SectionHeading eyebrow="About + tools" title="Hi, I'm Taushik" />
        </motion.div>
        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }}>
          <p className="max-w-3xl text-xl leading-9 text-[var(--ink)]">
            I&apos;m a UI/UX designer focused on building clean, intuitive, and
            visually engaging digital experiences. I enjoy simplifying complex
            ideas into interfaces that feel natural and easy to use. Alongside
            design, I also explore AI-assisted and vibe-coded products using
            modern no-code and development tools.
          </p>

          <div className="relative mt-14 min-h-[360px] overflow-hidden rounded-lg border border-[var(--line)] p-5 sm:p-8">
            <p
              aria-hidden="true"
              className="poster-outline display-font absolute -left-3 top-8 text-7xl font-black uppercase leading-none sm:text-8xl md:text-[8.5rem]"
            >
              Tools
            </p>
            <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  data-cursor-hover
                  animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                  transition={{
                    duration: 5.5 + index * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex min-h-24 items-center justify-center gap-3 rounded-md border border-[var(--line)] bg-[rgba(245,243,238,0.86)] px-4 text-sm font-black uppercase shadow-[0_10px_30px_rgba(17,16,14,0.04)]"
                  style={{ transform: `rotate(${index % 2 ? -1.5 : 1.5}deg)` }}
                >
                  <BrandIcon name={tool} />
                  <span>{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AiProductsSection() {
  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      <FloatingShape className="left-12 top-4 text-[var(--clay)] opacity-40" delay={0.1}>
        <Star size={22} fill="currentColor" />
      </FloatingShape>
      <FloatingShape className="right-12 top-8 text-[var(--coral)] opacity-35" delay={0.2}>
        <Sparkle size={28} />
      </FloatingShape>
      <FloatingShape
        className="left-1/3 bottom-12 text-[var(--blue)] opacity-20 h-12 w-12 border-2 border-dashed border-current"
        spinDuration={15}
        delay={0.3}
      />
      <div className="section-shell">
        <motion.div {...fadeIn}>
          <SectionHeading eyebrow="Vibe coded work" title="AI Powered Products" />
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((project, index) => (
            <motion.a
              key={project.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.04 }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[270px] flex-col justify-between rounded-lg border border-[var(--line)] bg-[#fbfaf6] p-6 shadow-[0_14px_40px_rgba(17,16,14,0.045)] transition duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--muted)]">
                    0{index + 1}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight flex flex-wrap items-center gap-x-2 gap-y-1">
                  {project.title}
                  {(project.title.toLowerCase() === "creonix" ||
                    project.title.toLowerCase() === "prepblitz") && (
                    <span className="inline-block rounded-md border border-[var(--coral)] bg-[var(--paper)] text-[var(--coral)] px-2 py-0.5 text-[9px] font-black uppercase tracking-widest shadow-[2px_2px_0_var(--ink)]">
                      Under Progress
                    </span>
                  )}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={`${project.title}-${tool}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 text-[11px] font-bold uppercase text-[var(--ink)]"
                  >
                    <BrandIcon name={tool} className="h-3.5 w-3.5" />
                    {tool}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FigmaProjectsSection() {
  return (
    <section id="figma" className="relative overflow-hidden py-24 sm:py-32">
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
        className="poster-outline display-font pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-5xl font-black uppercase leading-none sm:text-8xl md:text-[9rem] lg:text-[12rem]"
      >
        Projects
      </div>
      <div className="section-shell relative">
        <motion.div {...fadeIn}>
          <SectionHeading eyebrow="Figma files" title="Figma Projects" />
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {figmaProjects.map((project, index) => (
            <motion.a
              key={project.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.06 }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div
                className="relative min-h-[440px] overflow-hidden rounded-lg border border-[var(--ink)] p-5 transition duration-200 group-hover:-translate-y-1"
                style={{ backgroundColor: project.accent }}
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-[var(--paper)] px-3 py-1 font-mono text-xs font-bold">
                    {project.number}
                  </span>
                  <ArrowUpRight size={18} />
                </div>
                <MockupSketch index={index} />
                <p className="display-font absolute -bottom-7 right-1 text-[8rem] font-black leading-none text-[var(--paper)] sm:text-[9rem] lg:text-[10rem]">
                  {project.number.replace("0", "")}
                </p>
              </div>
              <div className="mt-4 pr-3">
                <h3 className="text-lg font-black uppercase">{project.title}</h3>
                <p className="mt-1 text-sm leading-5 text-[var(--muted)]">
                  {project.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockupSketch({ index }: { index: number }) {
  const isWide = index === 1;

  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-24 flex -translate-x-1/2 items-center justify-center"
    >
      <div
        className={`relative border-2 border-[var(--ink)] bg-[var(--paper)] shadow-[10px_14px_0_rgba(17,16,14,0.12)] ${
          isWide
            ? "h-40 w-64 rotate-3 rounded-md"
            : "h-64 w-36 -rotate-6 rounded-[28px]"
        }`}
      >
        <div className="absolute left-1/2 top-3 h-2 w-10 -translate-x-1/2 rounded-full bg-[var(--ink)] opacity-70" />
        <div className="absolute inset-x-5 top-12 space-y-3">
          <div className="h-4 rounded-full bg-[var(--ink)] opacity-85" />
          <div className="h-3 w-2/3 rounded-full bg-[var(--ink)] opacity-30" />
          <div className="grid grid-cols-2 gap-2 pt-3">
            <div className="h-14 rounded border border-[var(--ink)] bg-transparent" />
            <div className="h-14 rounded border border-[var(--ink)] bg-transparent" />
          </div>
        </div>
      </div>
      {index === 0 ? (
        <div className="relative -ml-8 mt-20 h-48 w-28 rotate-6 rounded-[24px] border-2 border-[var(--ink)] bg-[var(--paper)] shadow-[8px_10px_0_rgba(17,16,14,0.12)]" />
      ) : null}
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <FloatingShape className="left-20 top-2 text-[var(--coral)] opacity-45" delay={0.1}>
        <Sparkle size={22} />
      </FloatingShape>
      <FloatingShape
        className="right-12 top-16 text-[var(--sage)] opacity-30 h-14 w-14 rounded-full border border-dashed border-current"
        spinDuration={25}
        delay={0.2}
      />
      <FloatingShape className="left-8 bottom-4 text-[var(--blue)] opacity-35" delay={0.3}>
        <Star size={24} fill="currentColor" />
      </FloatingShape>
      <div className="section-shell">
        <motion.div {...fadeIn}>
          <SectionHeading eyebrow="Recent roles" title="Experience" />
        </motion.div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.05 }}
              className="relative min-h-56 border-l border-[var(--ink)] py-2 pl-6"
            >
              <span className="font-mono text-xs text-[var(--muted)]">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-2xl font-black uppercase leading-tight">
                {item.company}
              </h3>
              <p className="mt-3 text-sm font-black uppercase text-[var(--ink)]">
                {item.role}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.date}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative pb-16 pt-24 sm:pb-20 sm:pt-32 overflow-hidden">
      <FloatingShape className="right-24 top-4 text-[var(--clay)] opacity-45" delay={0.1}>
        <Sparkle size={32} />
      </FloatingShape>
      <FloatingShape className="left-8 bottom-32 text-[var(--coral)] opacity-35" delay={0.2}>
        <Star size={28} fill="currentColor" />
      </FloatingShape>
      <div className="section-shell">
        <motion.div
          {...fadeIn}
          className="grid gap-10 border-t border-[var(--ink)] pt-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="mb-4 text-xs font-black uppercase text-[var(--muted)]">
              Contact
            </p>
            <h2 className="display-font text-5xl font-black uppercase leading-[0.86] sm:text-7xl md:text-[7.5rem]">
              Let&apos;s Connect
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-5">
            {contactLinks.map((item) => {
              const isExternal = item.href.startsWith("http");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--ink)]">
                      <ContactIcon label={item.label} />
                    </span>
                    <span>
                      <span className="block text-xs font-black uppercase text-[var(--muted)]">
                        {item.label}
                      </span>
                      <span className="subtle-link text-lg font-black">
                        {item.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              );
            })}
          </div>
        </motion.div>

        <footer className="mt-20 flex flex-col justify-between gap-3 border-t border-[var(--line)] pt-5 text-xs font-bold uppercase text-[var(--muted)] sm:flex-row">
          <p>Taushik Chandana Portfolio '26</p>
          <a href="#hero" className="subtle-link">
            Back to top
          </a>
        </footer>
      </div>
    </section>
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
