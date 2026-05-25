export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-t border-[var(--line)] pt-5">
      <div>
        {eyebrow ? (
          <p className="mb-3 text-xs font-black uppercase tracking-normal text-[var(--muted)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="display-font text-4xl font-black uppercase leading-[0.88] text-[var(--ink)] sm:text-6xl md:text-7xl">
          {title}
        </h2>
      </div>
      <span className="hidden h-3 w-3 rounded-full bg-[var(--ink)] md:block" />
    </div>
  );
}
