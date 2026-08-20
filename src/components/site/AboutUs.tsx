import { Target, Eye, Heart } from "lucide-react";
import office from "../../assets/BGSoffice.png";
import { Heading, PrimaryLink, Reveal, Section } from "./index";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    text: "To provide transparent, efficient, and high-quality garment sourcing services that empower global brands to build strong, sustainable supply chains.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To become a trusted long-term sourcing partner for international brands through reliable service, strong relationships, and an uncompromising commitment to quality.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Trust, transparency, quality, collaboration, and continuous improvement guide every relationship and every order we deliver.",
  },
];

export default function AboutUs() {
  return (
    <Section>
      <Heading
        align="left"
        eyebrow="Who We Are"
        title="Built On Trust."
        accent="Driven By Discipline."
        intro="Brother's Global Sourcing (BGS) is a Dhaka-based garments buying house connecting global brands with compliant, capable factories — on trust, transparency, and committed delivery, from first sample to final shipment."
      />

      {/* Image (left) + stacked Mission/Vision/Values (right) */}
      <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="group relative h-full min-h-80 overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift lg:min-h-0">
            <img
              src={office}
              alt="BGS team reviewing garment samples"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-navy/0 to-transparent" />
            <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between">
              <p className="text-lg font-semibold text-white">
                Uttara, Dhaka &mdash; Head Office
              </p>
              <span className="hidden items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-wide text-navy sm:inline-flex">
                Est. In Bangladesh
              </span>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="flex-1">
              <div className="group relative h-full rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-start gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rust-soft text-rust transition-colors group-hover:bg-rust group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                    <span className="mt-5 block h-0.5 w-8 rounded-full bg-rust/35 transition-all duration-500 group-hover:w-14 group-hover:bg-rust" />
                  </div>
                </div>
                <span className="absolute top-5 right-6 font-display text-3xl font-extrabold text-navy/6 select-none">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-3">
        <PrimaryLink to="/services">Our Services</PrimaryLink>
        <a
          href="/BGS-Company-Profile.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-cream"
        >
          Download Company Profile
        </a>
      </Reveal>
    </Section>
  );
}
