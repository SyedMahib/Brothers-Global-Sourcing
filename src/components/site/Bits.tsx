import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Factory,
  Handshake,
  type LucideIcon,
  Package,
  Users,
} from "lucide-react";
import { useCountUp } from "react-countup";
import { useRef, type ReactNode, type RefObject } from "react";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  tone = "cream",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "white" | "deep";
  id?: string;
}) {
  const bg =
    tone === "white"
      ? "bg-white"
      : tone === "deep"
        ? "bg-cream-deep"
        : "bg-cream";
  return (
    <section
      id={id}
      className={`${bg} px-5 py-20 lg:px-8 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Heading({
  eyebrow,
  title,
  accent,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] text-navy sm:text-4xl lg:text-[2.75rem]">
        {title} {accent && <span className="text-rust">{accent}</span>}
      </h2>
      {intro && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function IconCard({
  icon: Icon,
  title,
  text,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 70}>
      <div className="group h-full rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rust-soft text-rust transition-colors group-hover:bg-rust group-hover:text-white">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-5 font-display text-lg font-bold text-navy">
          {title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </Reveal>
  );
}

type StatItem = { value: string; label: string };

const STAT_ICONS: Record<string, LucideIcon> = {
  "Annual turnover": Handshake,
  "Factory partners": Factory,
  "Active buyers": Users,
  "Product categories": Boxes,
  "MOQ per colour": Package,
};

function parseStatValue(value: string): {
  prefix: string;
  end: number;
  decimals: number;
  suffix: string;
} {
  const match = value.match(/^([^0-9]*)([\d.,]+)(.*)$/);
  if (!match) {
    return { prefix: "", end: 0, decimals: 0, suffix: value };
  }
  const [, prefix = "", num, suffix = ""] = match;
  const decimals = num.includes(".") ? (num.split(".")[1]?.length ?? 0) : 0;
  return {
    prefix,
    end: Number(num.replace(/,/g, "")),
    decimals,
    suffix,
  };
}

function StatValue({ value }: { value: string }) {
  const parsed = parseStatValue(value);
  if (!parsed.end) return <>{value}</>;
  return <AnimatedStat {...parsed} />;
}

function AnimatedStat({
  prefix,
  end,
  decimals,
  suffix,
}: {
  prefix: string;
  end: number;
  decimals: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useCountUp({
    // react-countup expects RefObject<HTMLElement> (React 18 style)
    ref: ref as RefObject<HTMLElement>,
    start: 0,
    end,
    decimals,
    duration: 1.6,
    prefix,
    suffix,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return <span ref={ref} />;
}

export function StatBar({ items }: { items: StatItem[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/45 p-2 shadow-card backdrop-blur-xl sm:p-2.5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/50 via-transparent to-rust/5"
      />

      <div className="relative grid grid-cols-2 gap-2 lg:grid-cols-4">
        {items.map((s) => {
          const Icon = STAT_ICONS[s.label] ?? Boxes;
          return (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/55 px-3 py-4 text-center shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-rust/25 hover:bg-white/75 hover:shadow-card sm:px-4 sm:py-5"
            >
              <span className="mx-auto grid h-7 w-7 place-items-center rounded-lg bg-rust/10 text-rust transition-colors duration-300 group-hover:bg-rust group-hover:text-white">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <p className="mt-2.5 font-display text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                <StatValue value={s.value} />
              </p>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-navy/45">
                {s.label}
              </p>
              <span className="mx-auto mt-2.5 block h-0.5 w-6 rounded-full bg-rust/35 transition-all duration-500 group-hover:w-10 group-hover:bg-rust" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function GoldRule() {
  return <div className="rule-gold mx-auto max-w-5xl" />;
}

export function PrimaryLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
    >
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function GhostLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-cream"
    >
      {children}
    </Link>
  );
}

export function CTABand({
  title,
  accent,
  text,
  cta = "Contact Our Team",
}: {
  title: string;
  accent?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section className="bg-cream px-5 py-20 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy px-8 py-14 text-center lg:px-16">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-cream sm:text-4xl">
            {title} {accent && <span className="text-gold">{accent}</span>}
          </h2>
          {text && (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/70">
              {text}
            </p>
          )}
          <div className="mt-8 flex justify-center">
            <PrimaryLink to="/contact">{cta}</PrimaryLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
