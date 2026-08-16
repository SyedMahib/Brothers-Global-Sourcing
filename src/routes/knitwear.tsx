import { createFileRoute } from "@tanstack/react-router";
import { Shirt, ShieldCheck, Thermometer } from "lucide-react";
import img from "@/assets/cat-knitwear.jpg";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/knitwear")({
  head: () => ({
    meta: [
      { title: "Knitwear Sourcing — Brother's Global Sourcing" },
      {
        name: "description",
        content:
          "Knitwear sourcing from Bangladesh: t-shirts, polos, hoodies, joggers, sleepwear, leggings, maternity and kids.",
      },
      {
        property: "og:title",
        content: "Knitwear Sourcing — Brother's Global Sourcing",
      },
      {
        property: "og:description",
        content:
          "Cotton and blended knitwear developed and inspected by BGS in Dhaka.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Category · Knitwear"
      title="Everyday Knits,"
      accent="Consistently Made."
      intro="Our largest category. From basic jersey tees to fleece hoodies, we develop knitwear with reliable fit blocks, stable shrinkage and colour consistency across repeat orders."
      image={img}
      items={[
        { name: "T-Shirts", group: "Tops" },
        { name: "Polo Shirts", group: "Tops" },
        { name: "Tank Tops", group: "Tops" },
        { name: "Sweatshirts", group: "Fleece" },
        { name: "Hoodies", group: "Fleece" },
        { name: "Joggers", group: "Bottoms" },
        { name: "Shorts", group: "Bottoms" },
        { name: "Leggings", group: "Bottoms" },
        { name: "Sleepwear", group: "Lounge" },
        { name: "Dresses", group: "Women" },
        { name: "Maternity", group: "Women" },
        { name: "Kids", group: "Kids" },
      ]}
      highlights={[
        {
          icon: Shirt,
          title: "Fit Block Control",
          text: "Approved blocks per buyer to keep fit identical season after season.",
        },
        {
          icon: Thermometer,
          title: "Shrinkage & Colour",
          text: "Wash-tested fabric with lab-dip approvals before bulk knitting.",
        },
        {
          icon: ShieldCheck,
          title: "Three-Stage QC",
          text: "Inline, mid-line and final AQL inspection on every order.",
        },
      ]}
    />
  ),
});
