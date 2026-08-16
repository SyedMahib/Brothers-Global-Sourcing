import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  Clock,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { contact, stats, footerLinks } from "@/data/site";

const categories = [
  { to: "/knitwear", label: "Knitwear" },
  { to: "/wovenwear", label: "Woven Apparel" },
  { to: "/sportswear", label: "Sportswear & Athleisure" },
  { to: "/denimwear", label: "Denim" },
] as const;

const socials = [
  {
    to: "https://www.linkedin.com/company/brothers-global-sourcing/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
] as const;

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
      <span className="h-px w-6 bg-linear-to-r from-gold to-transparent" />
      {children}
    </h4>
  );
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link
        to={to}
        className="group inline-flex items-center gap-1.5 text-sm text-cream transition-colors duration-300 hover:text-gold"
      >
        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        <span className="relative">
          {label}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-cream/75">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-56 w-160 -translate-x-1/2 rounded-full bg-gold/[0.07] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rust/8 blur-3xl" />
      </div>
      <div className="h-px w-full bg-linear-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* CTA band */}
        <Reveal>
          <section className="border-b border-cream/10 py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow">Start a conversation</p>
                <h3 className="mt-4 text-2xl font-bold text-cream sm:text-3xl">
                  Let&apos;s build your next season{" "}
                  <span className="text-gold">together</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">
                  From first sketch to final AQL inspection — get sourcing
                  support that protects your margins and your brand.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rust/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rust/90 hover:shadow-xl hover:shadow-rust/35"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                >
                  <Mail className="h-4 w-4" />
                  Email us
                </a>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream/10 pt-7">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2.5">
                  <span className="font-display text-xl font-bold text-gold">
                    {s.value}
                  </span>
                  <span className="text-xs text-cream">{s.label}</span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Main grid */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal className="sm:col-span-2 lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream">
              {contact.tagline}
            </p>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-cream">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
              {contact.responseNote}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ to, label, Icon }) => (
                <a
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-cream/15 bg-cream/5 text-cream/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/10 hover:text-gold hover:shadow-lg hover:shadow-gold/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-2">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((l) => (
                <FooterLink key={l.to} to={l.to} label={l.label} />
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-3">
            <ColumnHeading>Categories</ColumnHeading>
            <ul className="mt-5 space-y-3">
              {categories.map((c) => (
                <FooterLink key={c.to} to={c.to} label={c.label} />
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240} className="sm:col-span-2 lg:col-span-3">
            <ColumnHeading>Get in touch</ColumnHeading>
            <ul className="mt-5 space-y-4">
              <li className="group flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cream/10 bg-cream/5 text-gold transition-all duration-300 group-hover:border-rust/40 group-hover:bg-rust/15 group-hover:text-rust">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="pt-2 text-sm text-cream transition-colors duration-300 hover:text-gold"
                >
                  {contact.email}
                </a>
              </li>
              <li className="group flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cream/10 bg-cream/5 text-gold transition-all duration-300 group-hover:border-rust/40 group-hover:bg-rust/15 group-hover:text-rust">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={contact.whatsapp}
                  className="pt-2 text-sm text-cream transition-colors duration-300 hover:text-gold"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="group flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cream/10 bg-cream/5 text-gold transition-all duration-300 group-hover:border-rust/40 group-hover:bg-rust/15 group-hover:text-rust">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-2 text-sm leading-relaxed text-cream">
                  {/* {contact.address} */}
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="group flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cream/10 bg-cream/5 text-gold transition-all duration-300 group-hover:border-rust/40 group-hover:bg-rust/15 group-hover:text-rust">
                  <FileText className="h-4 w-4" />
                </span>
                <a
                  href="https://drive.google.com/file/d/1qZSskaKC0GCYelCmn4EEgyVFR0xxXja9/view?usp=drive_link"
                  className="pt-2 text-sm leading-relaxed text-cream transition-colors duration-300 hover:text-gold"
                  target="_blank"
                >
                  BGS Compnay Profile
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-cream sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-center">
            © {year} Brother&apos;s Global Sourcing. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center">
            <p className="flex items-center gap-1.5 text-center">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Garments Buying House · Dhaka, Bangladesh
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              Back to top
              <span className="grid h-8 w-8 place-items-center rounded-full border border-cream/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold/50 group-hover:bg-gold/10">
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
