import {
  siAnthropic,
  siFigma,
  siFirebase,
  siGithub,
  siGooglegemini,
  siMiro,
  siNodedotjs,
  siReplit,
} from "simple-icons";

type SimpleIcon = {
  title: string;
  path: string;
};

const customPaths: Record<string, string> = {
  GPT: "M22.28 9.82a6 6 0 0 0-.53-5.18 6.07 6.07 0 0 0-4.82-3 6 6 0 0 0-5.35 1.55 6 6 0 0 0-4.49.52A6.07 6.07 0 0 0 4.1 6.53a6 6 0 0 0-2.07 5.16 6.07 6.07 0 0 0 1.56 5.36 6 6 0 0 0 .52 5.18 6.07 6.07 0 0 0 4.83 3 6 6 0 0 0 5.35-1.55 6 6 0 0 0 4.49-.52 6.07 6.07 0 0 0 3.01-2.82 6 6 0 0 0 2.07-5.16 6.07 6.07 0 0 0-1.58-5.36zm-8.86 11.2a4.07 4.07 0 0 1-2.42-1.39l.15-.08 3.58-2.07a.5.5 0 0 0 .25-.43v-5.05l1.51.87a.47.47 0 0 0 .25.07.49.49 0 0 0 .49-.49V8.04l.1.06a4.07 4.07 0 0 1 1.76 3.12v.12a4.07 4.07 0 0 1-5.65 3.68zm7.38-5.38a4.07 4.07 0 0 1-1.39 2.42v-3.82a.5.5 0 0 0-.25-.43l-4.37-2.52 1.51-.87a.5.5 0 0 0 .25-.43V5.57l.11.06a4.07 4.07 0 0 1 2.29 2.76 4.07 4.07 0 0 1 1.85 7.25zM12 10.59l2.44 1.41-2.44 1.41-2.44-1.41z",
  ChatGPT: "M22.28 9.82a6 6 0 0 0-.53-5.18 6.07 6.07 0 0 0-4.82-3 6 6 0 0 0-5.35 1.55 6 6 0 0 0-4.49.52A6.07 6.07 0 0 0 4.1 6.53a6 6 0 0 0-2.07 5.16 6.07 6.07 0 0 0 1.56 5.36 6 6 0 0 0 .52 5.18 6.07 6.07 0 0 0 4.83 3 6 6 0 0 0 5.35-1.55 6 6 0 0 0 4.49-.52 6.07 6.07 0 0 0 3.01-2.82 6 6 0 0 0 2.07-5.16 6.07 6.07 0 0 0-1.58-5.36zm-8.86 11.2a4.07 4.07 0 0 1-2.42-1.39l.15-.08 3.58-2.07a.5.5 0 0 0 .25-.43v-5.05l1.51.87a.47.47 0 0 0 .25.07.49.49 0 0 0 .49-.49V8.04l.1.06a4.07 4.07 0 0 1 1.76 3.12v.12a4.07 4.07 0 0 1-5.65 3.68zm7.38-5.38a4.07 4.07 0 0 1-1.39 2.42v-3.82a.5.5 0 0 0-.25-.43l-4.37-2.52 1.51-.87a.5.5 0 0 0 .25-.43V5.57l.11.06a4.07 4.07 0 0 1 2.29 2.76 4.07 4.07 0 0 1 1.85 7.25zM12 10.59l2.44 1.41-2.44 1.41-2.44-1.41z",
  Canva: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.49 0-4.5-2.01-4.5-4.5S10.51 7.5 13 7.5c1.43 0 2.7.67 3.5 1.72l-1.63 1.23c-.42-.58-1.1-.95-1.87-.95-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.77 0 1.45-.37 1.87-.95l1.63 1.23c-.8 1.05-2.07 1.72-3.5 1.72z",
  Codex: "M8.5 6L3 11.5L8.5 17M15.5 6L21 11.5L15.5 17",
  Antigravity: "M12 3L2 21h20L12 3zm0 5.5l5.5 10h-11L12 8.5z",
  Stitch: "M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z",
};

const iconMap: Record<
  string,
  | { kind: "simple"; icon: SimpleIcon }
  | { kind: "custom"; path: string }
  | { kind: "image"; src: string; wide?: boolean }
> = {
  Figma: { kind: "simple", icon: siFigma },
  Replit: { kind: "simple", icon: siReplit },
  Gemini: { kind: "simple", icon: siGooglegemini },
  "Gemini API": { kind: "simple", icon: siGooglegemini },
  Firebase: { kind: "simple", icon: siFirebase },
  "Node.js": { kind: "simple", icon: siNodedotjs },
  Github: { kind: "simple", icon: siGithub },
  GitHub: { kind: "simple", icon: siGithub },
  Claude: { kind: "simple", icon: siAnthropic },
  Miro: { kind: "simple", icon: siMiro },
  GPT: { kind: "custom", path: customPaths.GPT },
  ChatGPT: { kind: "custom", path: customPaths.ChatGPT },
  Canva: { kind: "custom", path: customPaths.Canva },
  Codex: { kind: "custom", path: customPaths.Codex },
  Antigravity: { kind: "custom", path: customPaths.Antigravity },
  Stitch: { kind: "custom", path: customPaths.Stitch },
  Lovable: { kind: "image", src: "/icons/lovable.svg", wide: true },
};

export function BrandIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const icon = iconMap[name] ?? { kind: "custom" as const, path: customPaths.Antigravity };

  if (icon.kind === "simple") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-4 w-4 shrink-0 ${className}`}
        fill="currentColor"
      >
        <path d={icon.icon.path} />
      </svg>
    );
  }

  if (icon.kind === "custom") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-4 w-4 shrink-0 ${className}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={icon.path} fill={name === "GPT" || name === "ChatGPT" || name === "Canva" || name === "Antigravity" ? "currentColor" : "none"} stroke={name === "GPT" || name === "ChatGPT" || name === "Canva" || name === "Antigravity" ? "none" : "currentColor"} />
      </svg>
    );
  }

  if (icon.kind === "image") {
    return (
      <img
        src={icon.src}
        alt=""
        aria-hidden="true"
        className={`${icon.wide ? "h-3.5 w-12" : "h-4 w-4"} object-contain ${className}`}
      />
    );
  }

  return null;
}
