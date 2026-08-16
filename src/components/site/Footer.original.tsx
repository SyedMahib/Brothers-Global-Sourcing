import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";
import { contact, navLinks } from "@/data/site";

const categories = [
  { to: "/knitwear", label: "Knitwear" },
  { to: "/wovenwear", label: "Woven Apparel" },
  { to: "/sportswear", label: "Sportswear & Athleisure" },
  { to: "/denimwear", label: "Denim" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-cream/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo variant="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {contact.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <span
                key={i}
                className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-rust hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] text-gold">
            QUICK LINKS
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-rust">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] text-gold">
            CATEGORIES
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.to}>
                <Link to={c.to} className="transition-colors hover:text-rust">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] text-gold">
            GET IN TOUCH
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
              <a href={`mailto:${contact.email}`} className="hover:text-rust">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
              <a href={contact.whatsapp} className="hover:text-rust">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Brother&apos;s Global Sourcing. All
            rights reserved.
          </p>
          <p>Garments Buying House · Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
