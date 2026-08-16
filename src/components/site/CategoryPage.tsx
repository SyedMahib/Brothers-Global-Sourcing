import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Layers,
  Ruler,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { CTABand, Heading, IconCard, Reveal, Section } from "./index";

export type CategoryItem = { name: string; group: string };

export function CategoryPage({
  eyebrow,
  title,
  accent,
  intro,
  image,
  items,
  highlights,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  items: CategoryItem[];
  highlights: { icon: LucideIcon; title: string; text: string }[];
}) {
  const groups = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.group)))],
    [items],
  );
  const [active, setActive] = useState("All");
  const shown =
    active === "All" ? items : items.filter((i) => i.group === active);

  return (
    <>
      <section className="bg-cream px-5 pb-14 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
              {title} <span className="text-rust">{accent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-navy shadow-card">
                <Ruler className="h-4 w-4 text-rust" /> MOQ 500 pcs / colour
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-navy shadow-card">
                <ShieldCheck className="h-4 w-4 text-rust" /> Inline · Mid-line
                · Final QC
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={image}
              alt={title}
              width={1200}
              height={900}
              className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <Section tone="white">
        <Heading
          eyebrow="Product Range"
          title="What We"
          accent="Develop"
          intro="Filter by sub-category to explore the product types we develop and follow up in this segment."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActive(g)}
              className={`rounded-full border px-5 py-2 text-[0.8rem] font-semibold transition-all ${
                active === g
                  ? "border-rust bg-rust text-white shadow-card"
                  : "border-border bg-cream text-navy/70 hover:border-rust/50 hover:text-rust"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((item, i) => (
            <Reveal key={item.name} delay={(i % 4) * 60}>
              <div className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-rust/40 hover:bg-white hover:shadow-card">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-rust" />
                <div className="min-w-0">
                  <p className="font-display font-semibold text-navy">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.group}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <Heading
          eyebrow="Category Highlights"
          title="Built on Controlled"
          accent="Execution"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <IconCard
              key={h.title}
              icon={h.icon}
              title={h.title}
              text={h.text}
              index={i}
            />
          ))}
          <IconCard
            icon={Layers}
            title="Fabric & Trims"
            text="Sourced from Bangladesh and China with in-house product development and sampling support."
            index={highlights.length}
          />
        </div>
      </Section>

      <CTABand
        title="Ready to develop your next"
        accent={`${accent.toLowerCase()} programme?`}
        text="Share your tech packs, target price and timeline — our merchandising team will revert with a costed proposal."
      />
    </>
  );
}
