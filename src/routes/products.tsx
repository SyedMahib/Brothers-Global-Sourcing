import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, Palette, Ruler, Sparkles } from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import catKnit from "@/assets/cat-knitwear.jpg";
import catWoven from "@/assets/cat-woven.jpg";
import catSweaters from "@/assets/cat-sweaters.jpg";
import catSport from "@/assets/cat-sportswear.jpg";
import catWork from "@/assets/cat-workwear.jpg";
import catDenim from "@/assets/cat-denim.jpg";
import catAcc from "@/assets/cat-accessories.jpg";
import { CTABand, Heading, IconCard, Reveal, Section } from "@/components/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Categories — Brother's Global Sourcing" },
      {
        name: "description",
        content:
          "Seven apparel categories sourced from Bangladesh: knitwear, woven, sweaters, sportswear, workwear, denim and accessories.",
      },
      {
        property: "og:title",
        content: "Product Categories — Brother's Global Sourcing",
      },
      {
        property: "og:description",
        content:
          "One buying house, multiple product categories, one coordinated sourcing journey.",
      },
    ],
  }),
  component: Products,
});

type Cat = {
  name: string;
  img: string;
  items: string;
  group: "Knit" | "Woven" | "Denim" | "Performance" | "Accessories";
  to?: "/knitwear" | "/wovenwear" | "/sportswear" | "/denimwear";
};

const cats: Cat[] = [
  {
    name: "Knitwear",
    img: catKnit,
    group: "Knit",
    to: "/knitwear",
    items:
      "T-shirts, polos, tank tops, sweatshirts, hoodies, joggers, shorts, sleepwear, dresses, leggings, maternity, kids",
  },
  {
    name: "Woven Apparel",
    img: catWoven,
    group: "Woven",
    to: "/wovenwear",
    items: "Shirts, bottoms, outerwear, sleepwear, dresses & skirts, kids",
  },
  {
    name: "Sportswear & Athleisure",
    img: catSport,
    group: "Performance",
    to: "/sportswear",
    items:
      "Training & teamwear, gym & studio, running, tracksuits, modest activewear",
  },
  {
    name: "Denim",
    img: catDenim,
    group: "Denim",
    to: "/denimwear",
    items:
      "Jeans, jackets, overalls & dungarees, trousers, shirts, shorts, skirts, workwear",
  },
  {
    name: "Sweaters",
    img: catSweaters,
    group: "Knit",
    items: "Sweaters, pullovers, cardigans",
  },
  {
    name: "Workwear & Uniforms",
    img: catWork,
    group: "Woven",
    items:
      "Outdoor & indoor workwear, medical uniforms, chef's gowns, school uniforms",
  },
  {
    name: "Accessories",
    img: catAcc,
    group: "Accessories",
    items: "Caps, jute bags, tote bags, backpacks, boots, sneakers, scarves",
  },
];

const filters = [
  "All",
  "Knit",
  "Woven",
  "Denim",
  "Performance",
  "Accessories",
] as const;

const highlights = [
  {
    icon: Ruler,
    title: "Quality Materials",
    text: "Fabric and trims sourced from vetted mills in Bangladesh and China.",
  },
  {
    icon: Sparkles,
    title: "Trend-Aligned Designs",
    text: "Development informed by seasonal direction and buyer-specific fits.",
  },
  {
    icon: Leaf,
    title: "Responsible Production",
    text: "Compliant partner factories with monitored working standards.",
  },
  {
    icon: Palette,
    title: "Custom Development",
    text: "In-house sampling for bespoke styles, prints and washes.",
  },
];

function Products() {
  const [active, setActive] = useState<string>("All");
  const shown =
    active === "All" ? cats : cats.filter((c) => c.group === active);

  return (
    <>
      <section className="bg-cream px-5 pb-14 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Our Products</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.07] text-navy sm:text-5xl">
              One Buying House.{" "}
              <span className="text-rust">Multiple Categories.</span> One
              Coordinated Journey.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Seven product categories developed, inspected and shipped by the
              same integrated team — so quality and communication stay
              consistent across your whole range.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={heroProducts}
              alt="Flat lay of apparel across categories in warm neutral tones"
              width={1600}
              height={1008}
              className="w-full rounded-[2rem] object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <Section tone="white">
        <Heading
          eyebrow="Browse by Category"
          title="Explore Our"
          accent="Collections."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-5 py-2 text-[0.8rem] font-semibold transition-all ${
                active === f
                  ? "border-rust bg-rust text-white shadow-card"
                  : "border-border bg-cream text-navy/70 hover:border-rust/50 hover:text-rust"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-cream shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {!c.to && (
                    <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cream">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-navy">
                    {c.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.items}
                  </p>
                  {c.to ? (
                    <Link
                      to={c.to}
                      className="mt-5 text-sm font-semibold text-rust hover:underline"
                    >
                      Explore {c.name} →
                    </Link>
                  ) : (
                    <span className="mt-5 text-sm font-semibold text-muted-foreground">
                      Available on request
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <Heading
          eyebrow="Sourcing Standards"
          title="Quality Before"
          accent="Quantity."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <IconCard key={h.title} {...h} index={i} />
          ))}
        </div>
      </Section>

      <CTABand
        title="Looking for something"
        accent="specific?"
        text="We welcome requests for custom product development — share your reference and we will build it."
      />
    </>
  );
}
