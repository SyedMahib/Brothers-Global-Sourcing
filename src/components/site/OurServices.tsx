import {
  Lightbulb,
  ClipboardCheck,
  Route,
  ShieldCheck,
  Truck,
  Leaf,
} from "lucide-react";
import {
  GhostLink,
  Heading,
  IconCard,
  PrimaryLink,
  Reveal,
  Section,
} from "./index";

const services = [
  {
    icon: Lightbulb,
    title: "Product Sourcing & Development",
    text: "Trend-aligned product ideas, fabric and trims sourcing, sample development, fit refinement, and competitive costing aligned with your target price points.",
  },
  {
    icon: ClipboardCheck,
    title: "Factory Screening & Compliance",
    text: "Comprehensive evaluation of factory capabilities, production capacity, and technical strength — including full assessment against BSCI, SEDEX, WRAP, OEKO-TEX, and other recognized frameworks.",
  },
  {
    icon: Route,
    title: "Production Planning & Follow-Up",
    text: "Time & Action (T&A) planning, production tracking, raw material follow-up, and risk management with regular status updates to buyers.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Inspections",
    text: "Structured inline inspections, pre-final and final AQL checks, measurement verification, and detailed inspection reports with photos.",
  },
  {
    icon: Truck,
    title: "Logistics & Documentation",
    text: "Coordination with nominated forwarders, packing list and invoice review, and shipment follow-up through ETD/ETA for a smoother logistics experience.",
  },
  {
    icon: Leaf,
    title: "Sustainability & Ethical Sourcing",
    text: "Encouraging cleaner production, supporting factories on audits and improvement plans, and promoting ethical, responsible manufacturing across the supply base.",
  },
];

export default function OurServices() {
  return (
    <Section tone="deep">
      <Heading
        align="left"
        eyebrow="What We Do"
        title="Our"
        accent="Services."
        intro="We provide end-to-end garments sourcing services, acting as your extended office on the ground in Bangladesh."
      />

      {/* Services grid */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <IconCard key={s.title} {...s} index={i} />
        ))}
      </div>

      {/* CTA */}
      <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-3">
        <PrimaryLink to="/contact">Start Your Project</PrimaryLink>
        <GhostLink to="/about">About Our Team</GhostLink>
      </Reveal>
    </Section>
  );
}
