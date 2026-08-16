import { partners as defaultPartners } from "@/data/site";

type Partner = {
  name: string;
  logo: string;
};

export function PartnerMarquee({
  items = defaultPartners as readonly Partner[],
}: {
  items?: readonly Partner[];
}) {
  // Duplicate the list so the CSS loop can scroll by -50% with no gap.
  const loop = [...items, ...items];

  return (
    <div
      className="partner-marquee relative overflow-hidden"
      aria-label="Trusted partner network"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-cream to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-cream to-transparent sm:w-24" />

      <div className="partner-marquee-track flex w-max items-center gap-10 py-3">
        {loop.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex h-24 w-48 shrink-0 items-center justify-center px-4"
            aria-hidden={i >= items.length}
          >
            <img
              src={p.logo}
              alt={p.name}
              loading="lazy"
              className="h-full w-full object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
