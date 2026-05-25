import {
  siAnthropic,
  siFigma,
  siFirebase,
  siGithub,
  siGooglegemini,
  siNodedotjs,
  siReplit,
} from "simple-icons";

type SimpleIcon = {
  title: string;
  path: string;
};

const iconMap: Record<
  string,
  | { kind: "simple"; icon: SimpleIcon }
  | { kind: "image"; src: string; wide?: boolean }
  | { kind: "text"; glyph: string }
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
  Lovable: { kind: "image", src: "/icons/lovable.svg", wide: true },
  Codex: { kind: "text", glyph: "Cx" },
  Antigravity: { kind: "text", glyph: "Ag" },
  Stitch: { kind: "text", glyph: "St" },
  Canva: { kind: "text", glyph: "Ca" },
};

export function BrandIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const icon = iconMap[name] ?? { kind: "text" as const, glyph: name[0] ?? "?" };

  if (icon.kind === "simple") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-5 w-5 ${className}`}
        fill="currentColor"
      >
        <path d={icon.icon.path} />
      </svg>
    );
  }

  if (icon.kind === "image") {
    return (
      <img
        src={icon.src}
        alt=""
        aria-hidden="true"
        className={`${icon.wide ? "h-4 w-16" : "h-5 w-5"} object-contain ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`grid h-6 min-w-6 place-items-center text-[10px] font-black uppercase leading-none ${className}`}
    >
      {icon.glyph}
    </span>
  );
}
