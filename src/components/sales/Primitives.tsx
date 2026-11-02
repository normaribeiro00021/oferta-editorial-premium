import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Continuous, fast, never-static carousel (two identical tracks, -50% loop).
export function Marquee({ children, reverse = false, duration }: { children: ReactNode[]; reverse?: boolean; duration?: string }) {
  return (
    <div className="relative -mx-5 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex w-max animate-marquee"
        style={{ animationDirection: reverse ? "reverse" : undefined, animationDuration: duration }}
      >
        <div className="flex shrink-0 gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 gap-4 pr-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-display text-[11px] font-extrabold uppercase tracking-[0.28em] text-teal",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto flex items-center justify-center gap-2", className)} aria-hidden>
      <span className="h-px w-10 bg-teal" />
      <span className="size-1.5 rotate-45 bg-coral" />
      <span className="h-px w-10 bg-teal" />
    </div>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-center text-[1.6rem] font-extrabold leading-[1.15] text-navy", className)}>
      {children}
    </h2>
  );
}

export function CtaButton({
  href = "#oferta",
  children = "Quero os 40 casos visuais",
  className,
  pulse = true,
}: {
  href?: string;
  children?: ReactNode;
  className?: string;
  pulse?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-5 py-4 text-center font-display text-[15px] font-extrabold uppercase tracking-wide text-primary-foreground shadow-cta transition-transform active:scale-[0.98]",
        pulse && "animate-cta",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-14", className)}>
      <div className="mx-auto w-full max-w-md">{children}</div>
    </section>
  );
}

// Clean topic list: coral marker + bold title + one-line explanation.
export function TopicList({
  items,
  className,
}: {
  items: { title: string; desc: string }[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-3", className)}>
      {items.map((t) => (
        <li key={t.title} className="flex gap-3 rounded-xl border bg-card px-4 py-3.5">
          <span className="mt-[7px] size-2.5 shrink-0 rounded-full bg-coral" aria-hidden />
          <div>
            <p className="font-display text-[15px] font-extrabold leading-snug text-navy">{t.title}</p>
            <p className="mt-0.5 text-[13.5px] leading-snug text-muted-foreground">{t.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={cn("size-5 shrink-0", className)} aria-hidden>
      <circle cx="10" cy="10" r="10" className="fill-teal" />
      <path d="M5.5 10.5l3 3 6-6.5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-on-dark" />
    </svg>
  );
}

export function GiftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={cn("size-5 shrink-0", className)} aria-hidden>
      <circle cx="10" cy="10" r="10" className="fill-coral" />
      <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="stroke-navy">
        <rect x="5" y="8.5" width="10" height="6.5" rx="1" />
        <path d="M4.5 6.5h11v2h-11zM10 6.5V15M10 6.5c-1-2-3.5-2.2-3.5-.6 0 .6.8.6 3.5.6zM10 6.5c1-2 3.5-2.2 3.5-.6 0 .6-.8.6-3.5.6z" />
      </g>
    </svg>
  );
}
