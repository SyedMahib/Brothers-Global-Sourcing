import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Logo } from "./Logo";

const productLinks = [
  { to: "/knitwear", label: "Knitwear", exists: true },
  { to: "/wovenwear", label: "Woven", exists: true },
  { to: "/sweater", label: "Sweater", exists: false },
  { to: "/sportswear", label: "Sportswear", exists: true },
  { to: "/workwear", label: "Workwear", exists: false },
  { to: "/denimwear", label: "Denim", exists: true },
  { to: "/accessories", label: "Accessories", exists: false },
] as const;

const mainLinks = [
  { to: "/", label: "Home", exists: true },
  { to: "/about", label: "About", exists: true },
  { to: "/services", label: "Services", exists: false },
  { to: "/products", label: "Products", exists: true, hasDropdown: true },
  { to: "#factory", label: "Factories", exists: true },
  { to: "#sustainability", label: "Sustainability", exists: true },
] as const;

// Typed <Link> for routes that exist in routeTree.gen.ts, plain <a> for the
// ones coming later — keeps the full menu working without breaking the
// type-safe router build.
function NavItem({
  to,
  exists,
  children,
  className,
  activeClassName = "",
  onClick,
}: {
  to: string;
  exists: boolean;
  children: ReactNode;
  className: string;
  activeClassName?: string;
  onClick?: () => void;
}) {
  if (exists) {
    return (
      <Link
        to={to as "/"}
        activeOptions={{ exact: to === "/" }}
        activeProps={{ className: `${className} ${activeClassName}` }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={to}
      onClick={onClick}
      aria-disabled="true"
      title="Page coming soon"
      className={`${className} opacity-70`}
    >
      {children}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the desktop dropdown on outside click / Escape.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

  const desktopLinkClass =
    "rounded-full px-3 py-2 text-[0.82rem] font-medium tracking-wide text-navy/75 transition-colors hover:text-rust";

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
            {mainLinks.map((l) =>
              "hasDropdown" in l && l.hasDropdown ? (
                <div
                  key={l.to}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="flex items-center">
                    <NavItem
                      to={l.to}
                      exists={l.exists}
                      className={desktopLinkClass}
                      activeClassName="text-rust"
                    >
                      {l.label}
                    </NavItem>
                    <button
                      type="button"
                      aria-label="Toggle products menu"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="-ml-2 rounded-full p-1.5 text-navy/60 transition-colors hover:text-rust"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-rust" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Invisible bridge so the menu stays open while moving the
                      cursor from the trigger down to the panel. */}
                  <div className="absolute left-0 right-0 top-full h-2" />

                  <div
                    role="menu"
                    aria-label="Product categories"
                    className={`absolute left-1/2 top-full z-50 mt-2 w-52 -translate-x-1/2 transition-all duration-200 ${
                      dropdownOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-border bg-white py-2 shadow-lift">
                      {productLinks.map((p) => (
                        <NavItem
                          key={p.to}
                          to={p.to}
                          exists={p.exists}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-2.5 text-sm font-medium text-navy/80 transition-colors hover:bg-rust-soft hover:text-rust"
                          activeClassName="bg-rust-soft text-rust"
                        >
                          {p.label}
                        </NavItem>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavItem
                  key={l.to}
                  to={l.to}
                  exists={l.exists}
                  className={desktopLinkClass}
                  activeClassName="text-rust"
                >
                  {l.label}
                </NavItem>
              ),
            )}
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
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-navy xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-cream px-5 pb-5 pt-2 xl:hidden">
          {mainLinks.map((l) =>
            "hasDropdown" in l && l.hasDropdown ? (
              <div key={l.to} className="border-b border-border/60">
                <div className="flex items-center justify-between">
                  <NavItem
                    to={l.to}
                    exists={l.exists}
                    onClick={() => setOpen(false)}
                    className="block flex-1 py-3 font-medium text-navy/80"
                    activeClassName="text-rust"
                  >
                    {l.label}
                  </NavItem>
                  <button
                    type="button"
                    aria-label="Toggle product categories"
                    aria-expanded={mobileProductsOpen}
                    onClick={() => setMobileProductsOpen((v) => !v)}
                    className="grid h-9 w-9 place-items-center rounded-full text-navy/60 transition-colors hover:text-rust"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileProductsOpen ? "rotate-180 text-rust" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileProductsOpen && (
                  <div className="mb-2 ml-3 border-l-2 border-rust-soft pl-4">
                    {productLinks.map((p) => (
                      <NavItem
                        key={p.to}
                        to={p.to}
                        exists={p.exists}
                        onClick={() => {
                          setMobileProductsOpen(false);
                          setOpen(false);
                        }}
                        className="block py-2 text-sm font-medium text-navy/65 transition-colors hover:text-rust"
                        activeClassName="text-rust"
                      >
                        {p.label}
                      </NavItem>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavItem
                key={l.to}
                to={l.to}
                exists={l.exists}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 font-medium text-navy/80"
                activeClassName="text-rust"
              >
                {l.label}
              </NavItem>
            ),
          )}
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
