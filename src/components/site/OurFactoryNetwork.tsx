import { Factory, ShieldCheck } from "lucide-react";
import BDmap from "../../assets/bangladesh-hubs-map.png";
import { Heading, Reveal, Section } from "./index";

const compliance = ["BSCI", "SEDEX", "WRAP", "OEKO-TEX", "RSC/ACCORD"];

export default function OurFactoryNetwork() {
  return (
    <Section>
      <Heading
        align="left"
        eyebrow="Where We Operate"
        title="Our Factory"
        accent="Network."
        intro="BGS partners with a curated network of woven, knitwear, denim, sweater, and workwear factories across key production hubs in Bangladesh."
      />

      {/* Map + facts */}
      <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5">
        {/* Signature: pre-composited map image (image only, edge to edge) */}
        <Reveal className="lg:col-span-3">
          <div className="group relative h-full bg-cream overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
            <img
              src={BDmap}
              alt="Map of Bangladesh showing BGS production hubs in Gazipur, Ashulia, Savar, Narayanganj, and Chattogram"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-105 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* soft vignette so the map blends into the card edges */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_45%,transparent_45%,rgba(9,20,45,0.55)_100%)]"
            />
          </div>
        </Reveal>

        {/* Supporting facts */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Reveal delay={80} className="flex-1">
            <div className="group h-full rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <p className="font-display text-3xl font-extrabold text-navy">
                50+
              </p>
              <span className="mt-3 block h-0.5 w-8 rounded-full bg-rust/35 transition-all duration-500 group-hover:w-14 group-hover:bg-rust" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                BGS works with an extensive and carefully vetted network of 50+
                factories across Bangladesh, covering every major product
                category — knitwear, woven apparel, sweaters, sportswear,
                workwear, denim, and accessories. This wide manufacturing
                ecosystem allows us to support small, medium, and large-scale
                orders with reliability, flexibility, and consistent quality.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160} className="flex-1">
            <div className="group h-full rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rust-soft text-rust transition-colors group-hover:bg-rust group-hover:text-white">
                  <Factory className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy">
                  Factory Network
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our partner factories are located across key production hubs
                such as Gazipur, Savar, Ashulia, Narayanganj, and Chattogram,
                ensuring diversified capabilities and strong production capacity
                throughout the year. Each unit is selected based on its
                technical strength, operational stability, and proven ability to
                deliver across varied fabric types, garment styles, and
                finishing requirements.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240} className="flex-1">
            <div className="group h-full rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rust-soft text-rust transition-colors group-hover:bg-rust group-hover:text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy">
                  Compliance First
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We treat compliance as a serious matter requirement. All
                sourcing partners are assessed for adherence to internationally
                recognized standards, and we prioritize factories following
                BSCI, SEDEX, WRAP, OEKO-TEX, and RSC/ACCORD frameworks. This
                approach ensures ethical production, safe working environments,
                and full alignment with the expectations of global brands.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {compliance.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-rust-soft px-3 py-1.5 text-xs font-semibold text-rust"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Disclaimer */}
      <Reveal className="mt-8">
        <p className="text-xs leading-relaxed text-muted-foreground/80">
          Compliance and certifications (such as BSCI, SEDEX, WRAP, OEKO-TEX,
          RSC/ACCORD) are considered based on buyer requirements and factory
          profiles.
        </p>
      </Reveal>
    </Section>
  );
}
