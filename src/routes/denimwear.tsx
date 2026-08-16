import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Layers, ShieldCheck } from "lucide-react";
import img from "@/assets/cat-denim.jpg";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/denimwear")({
  head: () => ({
    meta: [
      { title: "Denim Sourcing — Brother's Global Sourcing" },
      {
        name: "description",
        content:
          "Denim sourcing from Bangladesh: jeans, jackets, dungarees, trousers, shirts, shorts, skirts and denim workwear.",
      },
      {
        property: "og:title",
        content: "Denim Sourcing — Brother's Global Sourcing",
      },
      {
        property: "og:description",
        content:
          "Wash development, fit consistency and finishing control for denim programmes.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Category · Denim"
      title="Denim With"
      accent="Character."
      intro="From raw rigid to heavily washed, we work with specialist denim units on wash recipes, fit consistency and hardware finishing that survive bulk production."
      image={img}
      items={[
        { name: "Jeans", group: "Bottoms" },
        { name: "Pants & Trousers", group: "Bottoms" },
        { name: "Shorts", group: "Bottoms" },
        { name: "Skirts", group: "Women" },
        { name: "Overalls & Dungarees", group: "Women" },
        { name: "Denim Jackets", group: "Outerwear" },
        { name: "Denim Shirts", group: "Outerwear" },
        { name: "Denim Workwear", group: "Workwear" },
      ]}
      highlights={[
        {
          icon: Droplets,
          title: "Wash Development",
          text: "Rinse, stone, enzyme, bleach and laser finishes developed to your reference.",
        },
        {
          icon: Layers,
          title: "Fabric & Hardware",
          text: "Denim mills matched by weight and stretch, with trims tested for durability.",
        },
        {
          icon: ShieldCheck,
          title: "Fit Consistency",
          text: "Post-wash measurement control so bulk matches the approved sample.",
        },
      ]}
    />
  ),
});
