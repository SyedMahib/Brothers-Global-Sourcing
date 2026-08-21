import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Eye,
  Factory,
  HeartHandshake,
  Leaf,
  MapPin,
  Search,
  Truck,
} from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import qualityImg from "@/assets/about-quality.jpg";
import {
  CTABand,
  Heading,
  IconCard,
  Reveal,
  Section,
  StatBar,
} from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Brother's Global Sourcing" },
      {
        name: "description",
        content:
          "Who we are: a Dhaka-based buying house built on trust, transparency and quality, acting as an extended sourcing office for global apparel brands.",
      },
      {
        property: "og:title",
        content: "Our Story — Brother's Global Sourcing",
      },
      {
        property: "og:description",
        content:
          "Mission, vision, values and journey behind BGS, a garments buying house in Uttara, Dhaka.",
      },
    ],
  }),
  component: About,
});

const milestones = [
  {
    year: "2021",
    title: "Established Strong Global Partnerships",
    body: "Built long-term relationships with trusted manufacturers and suppliers to ensure consistent quality and reliable production across multiple product categories.",
  },
  {
    year: "2022",
    title: "Expanded Product Portfolio",
    body: "Extended our sourcing capabilities into knitwear, denim, outerwear, and specialized apparel segments to meet diverse client requirements.",
  },
  {
    year: "2023",
    title: "Strengthened Quality & Compliance Standards",
    body: "Implemented enhanced quality control processes and partnered with factories that meet international compliance and ethical manufacturing standards.",
  },
  {
    year: "2024",
    title: "Scaling Production Capacity",
    body: "Expanded our factory network and sourcing operations to handle larger order volumes while maintaining quality, efficiency, and on-time delivery.",
  },
  {
    year: "2025–2026",
    title: "Driving Sustainable Global Growth",
    body: "Focused on innovation, sustainable sourcing practices, and strategic partnerships to support brands worldwide with scalable and responsible manufacturing solutions.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Trust",
    text: "We build long-term partnerships based on reliability, honesty, and consistent delivery. Your success is our success.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "No hidden costs, no surprises. We provide clear communication and full visibility throughout the sourcing process.",
  },
  {
    icon: Truck,
    title: "Committed Delivery",
    text: "We understand timelines are critical. Our structured processes ensure on-time delivery without compromising quality.",
  },
];

const advantages = [
  {
    icon: Factory,
    title: "Curated Factory Network",
    text: "We partner only with reliable, compliant factories that meet international standards for quality and ethics.",
  },
  {
    icon: Search,
    title: "Rigorous Quality Control",
    text: "Our multi-stage inspection process ensures every product meets your specifications and quality expectations.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    text: "With deep roots in Bangladesh's garment industry, we navigate local complexities to deliver seamless sourcing.",
  },
  {
    icon: Leaf,
    title: "Ethical & Sustainable",
    text: "We prioritize factories with strong social compliance records and encourage sustainable manufacturing practices.",
  },
];

const stats = [
  { value: "8+", label: "Years experience" },
  { value: "50+", label: "Partner factories" },
  { value: "15+", label: "Countries served" },
  { value: "5M+", label: "Garments sourced" },
];

function About() {
  const [activeMilestone, setActiveMilestone] = useState(4);
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.3] text-navy sm:text-4xl lg:text-[2.75rem]">
              A sourcing office built on
              <span className="text-rust"> trust, transparency </span>
              and committed delivery.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Brother&apos;s Global Sourcing (BGS) is a Dhaka-based garments
              buying house created to be a transparent, reliable bridge between
              global fashion brands and Bangladesh&apos;s world-class garment
              manufacturing industry.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Founded by garment-industry professionals who saw buyers struggle
              with communication, quality consistency and supply-chain
              visibility, BGS acts as your extended sourcing office on the
              ground — from first tech pack to final shipment.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                "8+ years of industry experience",
                "50+ compliant partner factories",
                "Serving 15+ countries worldwide",
              ].map((h) => (
                <span
                  key={h}
                  className="flex items-center gap-2.5 text-sm font-semibold text-navy/80"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {h}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <img
                src={heroAbout}
                alt="BGS merchandising team reviewing fabric swatches in a sunlit Dhaka office"
                width={1600}
                height={1008}
                className="w-full rounded-[2.25rem] object-cover shadow-lift"
              />
              <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:block">
                <p className="font-display text-xl font-extrabold text-rust">
                  Est. in Bangladesh
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Uttara, Dhaka — Head Office
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Milestones */}
      <Section tone="white">
        <Heading
          eyebrow="Our Journey"
          title="Milestones That"
          accent="Shaped Us."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {milestones.map((m, i) => {
            const isActive = i === activeMilestone;
            return (
              <button
                key={m.year}
                type="button"
                onMouseEnter={() => setActiveMilestone(i)}
                onFocus={() => setActiveMilestone(i)}
                onClick={() => setActiveMilestone(i)}
                aria-pressed={isActive}
                className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-transparent bg-navy text-cream shadow-lift"
                    : "border-border bg-cream hover:-translate-y-1 hover:border-rust/30"
                }`}
              >
                <p
                  className={`font-display text-xl font-extrabold ${
                    isActive ? "text-gold" : "text-navy"
                  }`}
                >
                  {m.year}
                </p>
                <p
                  className={`mt-2 text-sm font-semibold leading-snug ${
                    isActive ? "text-cream" : "text-navy"
                  }`}
                >
                  {m.title}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-cream p-8 sm:p-10">
          <p className="eyebrow">{milestones[activeMilestone]!.year}</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-navy">
            {milestones[activeMilestone]!.title}
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            {milestones[activeMilestone]!.body}
          </p>
        </div>
      </Section>

      {/* Core values */}
      <Section>
        <Heading
          eyebrow="Mission & Values"
          title="What We"
          accent="Stand For."
          intro="Our core principles guide every decision we make and every relationship we build."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <IconCard key={v.title} {...v} index={i} />
          ))}
        </div>
      </Section>

      {/* Why choose BGS */}
      <Section tone="white">
        <Heading
          eyebrow="Why Choose BGS"
          title="What Sets Us"
          accent="Apart."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="flex flex-col gap-3">
            {advantages.map((a, i) => {
              const Icon = a.icon;
              const isActive = i === activeAdvantage;
              return (
                <button
                  key={a.title}
                  type="button"
                  onMouseEnter={() => setActiveAdvantage(i)}
                  onFocus={() => setActiveAdvantage(i)}
                  onClick={() => setActiveAdvantage(i)}
                  aria-pressed={isActive}
                  className={`group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-rust/40 bg-cream shadow-card"
                      : "border-border bg-white hover:border-rust/25"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${
                      isActive
                        ? "bg-rust text-white"
                        : "bg-rust-soft text-rust group-hover:bg-rust group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy">
                      {a.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {a.text}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src={qualityImg}
              alt="Fabric samples and quality inspection checklist"
              loading="lazy"
              width={1200}
              height={800}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-cream/70">
                0{activeAdvantage + 1} — {advantages[activeAdvantage]!.title}
              </p>
              <p className="mt-3 max-w-md font-display text-xl font-bold leading-snug text-cream">
                Trust, transparency, and committed delivery — on every order.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section tone="deep">
        <Heading
          eyebrow="Company Snapshot"
          title="Numbers That"
          accent="Ground Us."
        />
        <div className="mt-12">
          <StatBar items={stats} />
        </div>
      </Section>

      <CTABand
        title="Let's work"
        accent="together."
        text="Let's discuss how BGS can streamline your sourcing from Bangladesh with transparency, quality, and reliability."
      />
    </>
  );
}
