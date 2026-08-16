import { Link } from "@tanstack/react-router";
import logo from "@/assets/BGS-logo.webp";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link
      to="/"
      aria-label="Brother's Global Sourcing — Home"
      className="group flex min-w-0 max-w-full items-center"
    >
      <img
        src={logo}
        alt="Brother's Global Sourcing (BGS)"
        width={389}
        height={451}
        className={`h-12 w-auto shrink-0 object-contain transition-opacity duration-300 group-hover:opacity-85 max-[430px]:h-10 sm:h-14 ${
          variant === "dark"
            ? "mr-2 rounded-xl bg-cream px-2 py-0.5 max-[430px]:mr-1.5 max-[430px]:px-1.5"
            : ""
        }`}
      />

      <div className="min-w-0 max-[430px]:max-w-80">
        <h3 className="text-sm font-bold leading-tight max-[430px]:text-[13px]">
          Brothers Global Sourcing (BGS)
        </h3>

        <p
          className={`text-xs leading-tight max-[430px]:text-[9px] ${
            variant === "dark" ? "text-cream/90" : "text-muted-foreground"
          }`}
        >
          Your Trusted Partner in Global Sourcing
        </p>
      </div>
    </Link>
  );
}
