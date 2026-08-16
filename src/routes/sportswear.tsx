import { createFileRoute } from "@tanstack/react-router";
import { Activity, ShieldCheck, Wind } from "lucide-react";
import img from "@/assets/cat-sportswear.jpg";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/sportswear")({
  head: () => ({
    meta: [
      { title: "Sportswear & Athleisure Sourcing — Brother's Global Sourcing" },
      {
        name: "description",
        content:
          "Performance apparel sourcing: training and teamwear, gym and studio, running, tracksuits and modest activewear.",
      },
      {
        property: "og:title",
        content: "Sportswear & Athleisure Sourcing — BGS",
      },
      {
        property: "og:description",
        content:
          "Technical knits, four-way stretch and bonded finishes developed for performance programmes.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Category · Sportswear & Athleisure"
      title="Performance Built"
      accent="Into the Fabric."
      intro="Technical knits, four-way stretch, moisture management and flat-lock construction — developed with factories that specialise in performance apparel."
      image={img}
      items={[
        { name: "Men's Training", group: "Men" },
        { name: "Teamwear Kits", group: "Men" },
        { name: "Women's Gym", group: "Women" },
        { name: "Studio & Yoga", group: "Women" },
        { name: "Outdoor Fitness", group: "Outdoor" },
        { name: "Running Apparel", group: "Outdoor" },
        { name: "Tracksuits", group: "Athleisure" },
        { name: "Athleisure Sets", group: "Athleisure" },
        { name: "Specialty Activewear", group: "Specialty" },
        { name: "Modest Activewear", group: "Specialty" },
      ]}
      highlights={[
        {
          icon: Wind,
          title: "Fabric Technology",
          text: "Moisture-wicking, quick-dry and four-way stretch qualities sourced and tested.",
        },
        {
          icon: Activity,
          title: "Performance Features",
          text: "Flat-lock seams, bonded taping, reflective trims and gusseted panels.",
        },
        {
          icon: ShieldCheck,
          title: "Lab Verified",
          text: "Pilling, stretch recovery and colour fastness testing via accredited labs.",
        },
      ]}
    />
  ),
});
