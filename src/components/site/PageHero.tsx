import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.7 0.15 220 / 0.5), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.78 0.16 60 / 0.35), transparent 45%)",
        }}
      />
      <div className="container-page relative py-20 md:py-28">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-tech-foreground/80 mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
