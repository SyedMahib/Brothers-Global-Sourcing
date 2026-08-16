import { createFileRoute } from "@tanstack/react-router";
import {
  Compass,
  Eye,
  HeartHandshake,
  Layers,
  RefreshCw,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
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
          "Mission, vision, values and team strength behind BGS, a garments buying house in Uttara, Dhaka.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Trust",
    text: "Long-term relationships built on commitments we keep.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Open costing, honest timelines and clear status reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    text: "Inspection discipline at every stage of production.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "One integrated team working alongside your product people.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    text: "Every season we sharpen process, not just price.",
  },
];

const team = [
  {
    count: "6",
    role: "Merchandising",
    text: "Order follow-up, costing and buyer communication.",
  },
  {
    count: "3",
    role: "QC / QA",
    text: "Inline, mid-line and final inspection coverage.",
  },
  {
    count: "2",
    role: "Design & Development",
    text: "Tech packs, sampling and fabric development.",
  },
];

function About() {
  return (
    <>
      <section className="bg-cream px-5 pb-14 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.07] text-navy sm:text-5xl">
              Who We <span className="text-rust">Are.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Brother&apos;s Global Sourcing (BGS) is a Dhaka-based garments
              buying house providing end-to-end sourcing support to
              international brands, importers and retailers. Acting as an
              extended sourcing office, BGS coordinates product development,
              factory selection, production follow-up, quality assurance and
              shipment support with transparency and disciplined execution.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={heroAbout}
              alt="BGS merchandising team reviewing fabric swatches in a sunlit Dhaka office"
              width={1600}
              height={1008}
              className="w-full rounded-[2rem] object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-cream p-9">
              <Target className="h-7 w-7 text-rust" />
              <h2 className="mt-5 font-display text-2xl font-extrabold text-navy">
                Our Mission
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To provide transparent, efficient and quality-focused garment
                sourcing services that help global buyers build reliable and
                sustainable supply chains in Bangladesh.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-border bg-navy p-9">
              <Compass className="h-7 w-7 text-gold" />
              <h2 className="mt-5 font-display text-2xl font-extrabold text-cream">
                Our Vision
              </h2>
              <p className="mt-4 leading-relaxed text-cream/70">
                To become a trusted long-term buying-house partner for
                international brands through reliable service, strong
                relationships and consistent quality.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Core Values" title="What We" accent="Stand For." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <IconCard key={v.title} {...v} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Heading
          eyebrow="Company Snapshot"
          title="Numbers That"
          accent="Ground Us."
        />
        <div className="mt-12">
          <StatBar
            items={[
              { value: "USD 1.5M", label: "Annual turnover" },
              { value: "5", label: "Active buyers" },
              { value: "50+", label: "Factory partners" },
              { value: "500 pcs", label: "MOQ per colour" },
            ]}
          />
        </div>
      </Section>

      <Section tone="deep">
        <Heading
          eyebrow="Team Strength"
          title="A Small Team,"
          accent="Fully Accountable."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.role} delay={i * 90}>
              <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-card">
                <p className="font-display text-5xl font-extrabold text-rust">
                  {t.count}
                </p>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {t.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Global Presence</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              BGS Team in <span className="text-rust">Global Trade Fairs.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We meet buyers where they plan their seasons — at international
              apparel and textile fairs — then translate those conversations
              into sampling and production plans back in Dhaka.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Apparel Sourcing Fairs",
                "Textile & Fabric Expos",
                "Buyer Meetings Abroad",
                "Factory Audits",
              ].map((t) => (
                <div
                  key={t}
                  className="flex aspect-4/3 flex-col justify-end rounded-2xl border border-border bg-cream p-5"
                >
                  <Layers className="mb-3 h-5 w-5 text-rust" />
                  <p className="font-display text-sm font-bold text-navy">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Let's work"
        accent="together."
        text="Tell us about your programme and we will map the right factories, timelines and quality plan."
      />
    </>
  );
}
