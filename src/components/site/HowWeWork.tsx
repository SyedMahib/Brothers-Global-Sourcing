import {
  ClipboardList,
  Factory,
  PencilRuler,
  ShieldCheck,
  Ship,
  Layers,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import deskImage from "@/assets/process-desk.jpg";
import worldDots from "@/assets/world-dots.png";
import { GhostLink, Heading, PrimaryLink, Reveal, Section } from "./index";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Requirement Sharing",
    description:
      "Buyer shares tech packs, target prices, and delivery timelines for the collection or program.",
    Icon: ClipboardList,
  },
  {
    number: "02",
    title: "Product Design & Development",
    description:
      "Our design team creates technical specifications, patterns, and prototypes based on initial requirements.",
    Icon: PencilRuler,
  },
  {
    number: "03",
    title: "Factory & Fabric Matching",
    description:
      "We shortlist suitable factories and fabric sources based on product type, volume, and compliance needs.",
    Icon: Factory,
  },
  {
    number: "04",
    title: "Sampling & Approvals",
    description:
      "Samples are developed, fits are refined, and final approvals are obtained before order confirmation.",
    Icon: Layers,
  },
  {
    number: "05",
    title: "Production & Quality Control",
    description:
      "Daily follow-up with inline and final AQL checks, along with measurement and finishing control.",
    Icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Shipment & Documentation",
    description:
      "Coordination with nominated forwarders, document review, and shipment status updates until dispatch.",
    Icon: Ship,
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const { Icon } = step;

  return (
    <Reveal delay={(index % 3) * 80} className="h-full">
      <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
        <div className="flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rust-soft text-rust transition-colors group-hover:bg-rust group-hover:text-white">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-display text-sm font-extrabold tracking-[0.18em] text-rust/45">
            {step.number}
          </span>
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-navy">
          {step.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
        <span className="mt-6 block h-0.5 w-8 rounded-full bg-rust/35 transition-all duration-500 group-hover:w-14 group-hover:bg-rust" />
      </div>
    </Reveal>
  );
}

export function HowWeWork() {
  return (
    <Section tone="white" className="overflow-hidden">
      <Heading
        eyebrow="Our Process"
        title="How We"
        accent="Work."
        intro="A simple, transparent and structured process from idea to shipment — better planning, fewer surprises, smoother execution."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} />
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-white shadow-card md:grid-cols-[minmax(0,340px)_1fr]">
          <img
            src={deskImage}
            alt="Fabric swatches, sketches and sampling notes on a designer's desk"
            loading="lazy"
            width={912}
            height={1024}
            className="h-56 w-full object-cover md:h-full"
          />

          <div className="relative isolate flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
            <img
              src={worldDots}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1400}
              height={700}
              className="pointer-events-none absolute inset-y-0 right-0 -z-10 h-full w-2/3 object-contain opacity-40"
            />

            <span className="pin-pulse animate-ping pointer-events-none absolute right-[21%] top-[45%] -z-10 size-1.5 rounded-full bg-primary" />
            <span
              className="pin-pulse animate-ping pointer-events-none absolute right-[32%] bottom-[62%] -z-10 size-1.5 rounded-full bg-primary"
              style={{ animationDelay: "0.9s" }}
            />

            <div className="flex flex-wrap items-center gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rust-soft text-rust">
                <MessagesSquare className="h-5 w-5" />
              </span>
              <div>
                <span className="eyebrow">Ready to start?</span>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-3xl">
                  Let&apos;s build something great{" "}
                  <span className="text-rust">together.</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  From concept to container, we&apos;re with you at every step.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrimaryLink to="/contact">Start Your Project</PrimaryLink>
              <GhostLink to="/about">About Our Team</GhostLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default HowWeWork;
