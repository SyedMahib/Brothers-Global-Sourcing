import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes,
  Factory,
  Globe2,
  Handshake,
  MessageSquare,
  PackageCheck,
  Palette,
  Ship,
  Sparkles,
  Users,
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import catKnit from "@/assets/cat-knitwear.jpg";
import catWoven from "@/assets/cat-woven.jpg";
import catSport from "@/assets/cat-sportswear.jpg";
import catDenim from "@/assets/cat-denim.jpg";
import marketUsa from "@/assets/market-usa.jpg";
import marketCanada from "@/assets/market-canada.jpg";
import marketEurope from "@/assets/market-europe.jpg";
import marketAustralia from "@/assets/market-australia.jpg";
import {
  CTABand,
  GhostLink,
  GoldRule,
  Heading,
  IconCard,
  PartnerMarquee,
  PrimaryLink,
  Reveal,
  Section,
  StatBar,
  HowWeWork,
  AboutUs,
  OurServices,
} from "@/components/site";
import { stats, testingPartners } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brother's Global Sourcing — Garments Buying House in Dhaka" },
      {
        name: "description",
        content:
          "BGS is a Dhaka-based garments buying house providing end-to-end sourcing, product development, production follow-up, QA and shipment support for global apparel brands.",
      },
      {
        property: "og:title",
        content: "Brother's Global Sourcing — Apparel Sourcing from Bangladesh",
      },
      {
        property: "og:description",
        content:
          "End-to-end garment sourcing from Bangladesh: product development, factory selection, production follow-up, quality assurance and shipment support.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Globe2,
    title: "Sourcing",
    text: "Factory selection matched to product type, compliance level and capacity across 50+ partner units.",
  },
  {
    icon: Palette,
    title: "Product Development",
    text: "In-house sampling and development from tech pack to approved counter sample.",
  },
  {
    icon: Factory,
    title: "Production",
    text: "Disciplined production follow-up with clear milestone reporting from cutting to packing.",
  },
  {
    icon: PackageCheck,
    title: "Quality Assurance",
    text: "Inline, mid-line and final inspection, with lab testing via SGS, Intertek, Bureau Veritas and TÜV.",
  },
  {
    icon: Ship,
    title: "Logistics & Shipment",
    text: "Shipment coordination, documentation support and on-time hand-over to your forwarder.",
  },
];

const advantage = [
  {
    icon: Users,
    title: "Experienced Professionals",
    text: "A team with deep garment-sourcing industry knowledge across knit, woven, sweater and denim.",
  },
  {
    icon: Sparkles,
    title: "Young & Agile Team",
    text: "Digitally fluent merchandisers who move fast on samples, costing and buyer feedback.",
  },
  {
    icon: Boxes,
    title: "One Integrated Team",
    text: "Product development, factories, production, quality and shipment connected under one roof.",
  },
  {
    icon: MessageSquare,
    title: "Buyer-Focused Communication",
    text: "Clear updates, realistic commitments and no surprises before shipment.",
  },
];

const categories = [
  {
    to: "/knitwear",
    label: "Knitwear",
    img: catKnit,
    note: "T-shirts, polos, hoodies, joggers",
  },
  {
    to: "/wovenwear",
    label: "Woven Apparel",
    img: catWoven,
    note: "Shirts, bottoms, outerwear",
  },
  {
    to: "/sportswear",
    label: "Sportswear",
    img: catSport,
    note: "Training, gym, athleisure",
  },
  {
    to: "/denimwear",
    label: "Denim",
    img: catDenim,
    note: "Jeans, jackets, dungarees",
  },
] as const;

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <span className="eyebrow">Garments Buying House · Dhaka</span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.3] text-navy sm:text-4xl lg:text-[2.75rem]">
              Sourcing Made <span className="text-rust">Simple.</span>
              <br />
              Delivered With Discipline.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Brothers Global Sourcing (BGS) directly sources high-quality
              garments from trusted and compliant Bangladeshi factories and
              exports them to global brands, importers, and retailers — on
              Trust, Transparency, and Committed Delivery.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryLink to="/products">Our Capabilities</PrimaryLink>
              <GhostLink to="/contact">Contact Us</GhostLink>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <img
                src={heroHome}
                alt="Bright sourcing showroom with folded knitwear and fabric swatch books"
                width={1600}
                height={1104}
                className="w-full rounded-[2.25rem] object-cover shadow-lift"
              />
              <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:block">
                <p className="font-display text-xl font-extrabold text-rust">
                  500 pcs
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  MOQ per colour
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-18 max-w-7xl">
          <p className="mb-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-navy/45">
            Trusted by global buyers
          </p>
          <StatBar items={stats} />
        </div>
      </section>

      <AboutUs />

      <OurServices />

      <Section>
        <Heading
          eyebrow="Product Categories"
          title="Multiple Categories."
          accent="One Coordinated Journey."
          intro="Seven product categories, developed and followed up by a single merchandising team."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.to} delay={i * 80}>
              <Link
                to={c.to}
                className="group block overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {c.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {c.note}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-rust">
                    Explore →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <GhostLink to="/products">View all 7 categories</GhostLink>
        </div>
      </Section>

      <HowWeWork />

      <Section tone="deep">
        <Heading
          eyebrow="The BGS Advantage"
          title="Why Buyers"
          accent="Stay With Us."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantage.map((a, i) => (
            <IconCard key={a.title} {...a} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Why Bangladesh</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              A Global Apparel Hub,{" "}
              <span className="text-rust">Close to the Floor.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Bangladesh offers an established export ecosystem, a skilled
              manufacturing base and scalable capacity across knitwear, woven,
              sweaters, denim, sportswear, workwear and accessories — at
              competitive value and with strong logistics connectivity.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Established export ecosystem",
                "Skilled manufacturing base",
                "Scalable capacity",
                "Diverse product capability",
                "Competitive value",
                "Strong logistics connectivity",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-navy/80"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-border bg-cream p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Main export markets
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {(
                  [
                    { name: "USA", image: marketUsa },
                    { name: "Canada", image: marketCanada },
                    { name: "Europe", image: marketEurope },
                    { name: "Australia", image: marketAustralia },
                  ] as const
                ).map((m) => (
                  <div
                    key={m.name}
                    className="group relative aspect-4/3 overflow-hidden rounded-2xl"
                  >
                    <img
                      src={m.image}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transform-gpu will-change-transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/85 via-navy/45 to-navy/20" />
                    <div className="pointer-events-none relative flex h-full flex-col items-center justify-end px-4 pb-5 pt-8 text-center">
                      <Globe2 className="h-5 w-5 text-gold" />
                      <p className="mt-2 font-display text-lg font-bold text-cream">
                        {m.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Head office in Uttara, Dhaka — inside the manufacturing belt,
                minutes from our partner factories.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="text-center">
          <span className="eyebrow">Testing & Compliance</span>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {testingPartners.map((t) => (
              <span
                key={t.name}
                className="rounded-full border border-border bg-white px-7 py-3 font-display text-sm font-bold tracking-wide text-navy shadow-card transition-colors hover:border-rust/50 hover:text-rust"
              >
                {t.name}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="mt-16">
          <GoldRule />
        </div>
        <Reveal className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Trusted partner network
          </p>
          <div className="mt-8">
            <PartnerMarquee />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <figure className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-cream px-8 py-14 text-center lg:px-16">
            <Handshake className="mx-auto h-8 w-8 text-rust" />
            <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-navy sm:text-3xl">
              “Bangladesh provides manufacturing depth. BGS converts that
              strength into controlled sourcing execution.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              Managing Director · Brother&apos;s Global Sourcing
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      <CTABand
        title="Let's build your next"
        accent="collection together."
        text="Share your tech packs and targets — we will come back with factory options, costing and a realistic timeline."
      />
    </>
  );
}
