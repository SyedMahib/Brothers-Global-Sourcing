import { Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, Factory, Users, Boxes } from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
} from "@/components/site";

type Stat = { value: string; label: string; icon: LucideIcon };

const stats: Stat[] = [
  { value: "USD 1.5M", label: "Annual turnover", icon: Handshake },
  { value: "50+", label: "Factory partners", icon: Factory },
  { value: "5", label: "Active buyers", icon: Users },
  { value: "7", label: "Product categories", icon: Boxes },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="https://res.cloudinary.com/dnciexhyw/video/upload/v1787331752/bgs-hero-final_a2vvjc.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Readability overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-cream via-cream/90 to-cream/15" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <Reveal>
            <span className="eyebrow">Garments Buying House · Dhaka</span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.3] text-navy sm:text-4xl lg:text-[2.75rem]">
              Your trusted partner in
              <span className="text-rust"> ready-made </span>
              garments sourcing.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Brothers Global Sourcing (BGS) directly sources high-quality
              garments from trusted and compliant Bangladeshi factories and
              exports them to global brands, importers, and retailers — on
              Trust, Transparency, and Committed Delivery.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryLink to="/products">Our Capabilities</PrimaryLink>
              <GhostLink to="/contact">Work With Us</GhostLink>
            </div>
          </Reveal>
        </div>

        {/* Right column intentionally empty on desktop so the background video reads as the hero visual */}
        <div aria-hidden="true" className="hidden lg:block" />
      </div>

      <div className="mx-auto mt-18 max-w-7xl">
        <p className="mb-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-navy/75">
          Trusted by global buyers
        </p>
        <StatBar items={stats} />
      </div>
    </section>
  );
}

export default HeroSection;
