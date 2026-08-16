import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-cream/92 backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <Logo />
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-rust" }}
                className="rounded-full px-3 py-2 text-[0.82rem] font-medium tracking-wide text-navy/75 transition-colors hover:text-rust"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden rounded-full bg-rust px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-navy xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-cream px-5 pb-5 pt-2 xl:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-rust" }}
              className="block border-b border-border/60 py-3 font-medium text-navy/80"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-white"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
