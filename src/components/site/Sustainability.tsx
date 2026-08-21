import { useEffect, useRef, useState } from "react";
import { Users, Droplets, Sprout, ArrowUpRight } from "lucide-react";
import peopleImg from "@/assets/sustain-people.jpg";
import processImg from "@/assets/sustain-process.jpg";
import responsibilityImg from "@/assets/sustain-responsibility.jpg";
import { Heading, Reveal, Section } from "./index";

type Pillar = {
  id: string;
  label: string;
  title: string;
  icon: typeof Users;
  image: string;
  body: string[];
  points: string[];
};

const pillars: Pillar[] = [
  {
    id: "people",
    label: "People & Workplace",
    title: "People & Workplace",
    icon: Users,
    image: peopleImg,
    body: [
      "We prioritise factories with safe, fair, and respectful working conditions, and encourage continuous improvement in worker welfare and social compliance.",
    ],
    points: [
      "Safe & fair conditions",
      "Worker welfare focus",
      "Social compliance",
    ],
  },
  {
    id: "process",
    label: "Process & Environment",
    title: "Process & Environment",
    icon: Droplets,
    image: processImg,
    body: [
      "Cleaner production, responsible use of chemicals, and reduced environmental impact are key focus areas we encourage within our factory network.",
    ],
    points: ["Cleaner production", "Responsible chemistry", "Lower impact"],
  },
  {
    id: "responsibility",
    label: "Long-Term Responsibility",
    title: "Long-Term Responsibility",
    icon: Sprout,
    image: responsibilityImg,
    body: [
      "Our sustainability approach is practical and improvement-oriented. We support factories with audit preparation, corrective action plans, and long-term capability building rather than short-term fixes.",
      "We believe that good business is sustainable business — and we strive to align sourcing decisions with that belief.",
    ],
    points: [
      "Audit preparation",
      "Corrective action plans",
      "Capability building",
    ],
  },
];

export function Sustainability() {
  const [active, setActive] = useState(0);
  const activateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pillar = pillars[active]!;

  // Preload the staged images so switching pillars never waits on network/image decode.
  useEffect(() => {
    const images = pillars.map((p) => {
      const image = new Image();
      image.src = p.image;
      return image;
    });

    return () => {
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  const activate = (index: number) => {
    if (index === active) return;

    if (activateTimer.current) {
      clearTimeout(activateTimer.current);
    }

    // A tiny hover debounce prevents rapid state churn when the pointer
    // crosses the small gaps between cards. Click/focus still feels immediate.
    activateTimer.current = setTimeout(() => {
      setActive(index);
      activateTimer.current = null;
    }, 60);
  };

  const activateImmediately = (index: number) => {
    if (activateTimer.current) {
      clearTimeout(activateTimer.current);
      activateTimer.current = null;
    }
    setActive(index);
  };

  useEffect(() => {
    return () => {
      if (activateTimer.current) clearTimeout(activateTimer.current);
    };
  }, []);

  return (
    <Section tone="white" id="sustainability">
      <Heading
        align="left"
        eyebrow="Responsible Sourcing"
        title="Sustainability &"
        accent="Ethical Sourcing."
        intro="We believe long-term success is only possible when products are made responsibly, respecting people, communities, and the environment."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
        {/* Interactive pillar list */}
        <Reveal className="flex flex-col gap-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isActive = i === active;
            return (
              <button
                key={p.id}
                type="button"
                onMouseEnter={() => activate(i)}
                onFocus={() => activateImmediately(i)}
                onClick={() => activateImmediately(i)}
                aria-pressed={isActive}
                className={`group relative w-full overflow-hidden rounded-3xl border p-6 text-left transition-[border-color,background-color,box-shadow,transform] duration-300 ${
                  isActive
                    ? "border-rust/40 bg-white shadow-lift"
                    : "border-border bg-white shadow-card hover:-translate-y-0.5 hover:border-rust/25 hover:shadow-lift"
                }`}
              >
                {/* Active side accent */}
                <span
                  className={`absolute top-0 left-0 h-full w-1 rounded-l-3xl bg-rust transition-transform duration-300 ${
                    isActive ? "scale-y-100" : "scale-y-0"
                  }`}
                />

                <div className="flex items-start gap-4">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors duration-300 ${
                      isActive
                        ? "bg-rust text-white"
                        : "bg-rust-soft text-rust group-hover:bg-rust group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-navy">
                        {p.title}
                      </h3>
                      <ArrowUpRight
                        className={`h-4 w-4 shrink-0 text-rust transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>

                    {/* Body + tags are always rendered at full height so hovering
                        never changes a card's height — that height change was
                        what shifted the other cards under the cursor and caused
                        the flicker/lag loop. Only color/opacity now animate. */}
                    <div className="space-y-3 pt-3">
                      {p.body.map((t) => (
                        <p
                          key={t}
                          className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isActive
                              ? "text-muted-foreground"
                              : "text-muted-foreground/70"
                          }`}
                        >
                          {t}
                        </p>
                      ))}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {p.points.map((pt) => (
                          <span
                            key={pt}
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                              isActive
                                ? "bg-rust-soft text-rust"
                                : "bg-rust-soft/50 text-rust/70"
                            }`}
                          >
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </Reveal>

        {/* Image stage */}
        <Reveal
          delay={120}
          className="relative min-h-95 overflow-hidden rounded-3xl border border-border shadow-card lg:min-h-full"
        >
          {pillars.map((p, i) => (
            <img
              key={p.id}
              src={p.image}
              alt={p.title}
              width={1200}
              height={912}
              className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] ${
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-cream/70 uppercase">
              0{active + 1} &mdash; {pillar.label}
            </p>
            <p className="mt-3 max-w-md font-display text-xl font-bold leading-snug text-cream">
              Good business is sustainable business.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Commitment strip */}
      <Reveal delay={200} className="mt-8">
        <div className="p-10 grid gap-6 overflow-hidden rounded-3xl sm:grid-cols-3">
          {[
            { k: "100%", v: "Factories screened for social compliance" },
            { k: "Audit-Ready", v: "Preparation & corrective action support" },
            { k: "Long-Term", v: "Capability building, not short-term fixes" },
          ].map((s) => (
            <div
              key={s.k}
              className="group rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <p className="font-display text-2xl font-extrabold text-rust">
                {s.k}
              </p>
              <span className="mt-3 block h-0.5 w-8 rounded-full bg-rust/35 transition-all duration-500 group-hover:w-14 group-hover:bg-rust" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
