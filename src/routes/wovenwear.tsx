import { createFileRoute } from "@tanstack/react-router";
import { Ruler, Scissors, ShieldCheck } from "lucide-react";
import img from "@/assets/cat-woven.jpg";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/wovenwear")({
  head: () => ({
    meta: [
      { title: "Woven Apparel Sourcing — Brother's Global Sourcing" },
      {
        name: "description",
        content:
          "Woven apparel sourcing from Bangladesh: shirts, bottoms, outerwear, sleepwear, dresses, skirts and kidswear.",
      },
      {
        property: "og:title",
        content: "Woven Apparel Sourcing — Brother's Global Sourcing",
      },
      {
        property: "og:description",
        content:
          "Shirting, bottoms and outerwear developed with precise construction and finishing.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Category · Woven Apparel"
      title="Precision Cut,"
      accent="Cleanly Finished."
      intro="Woven programmes demand construction discipline. We control pattern accuracy, seam quality and pressing standards from first sample through final pack."
      image={img}
      items={[
        { name: "Casual Shirts", group: "Shirts" },
        { name: "Formal Shirts", group: "Shirts" },
        { name: "Trousers", group: "Bottoms" },
        { name: "Chinos & Shorts", group: "Bottoms" },
        { name: "Jackets", group: "Outerwear" },
        { name: "Overshirts", group: "Outerwear" },
        { name: "Sleepwear Sets", group: "Lounge" },
        { name: "Dresses", group: "Women" },
        { name: "Skirts", group: "Women" },
        { name: "Kids Shirts", group: "Kids" },
        { name: "Kids Bottoms", group: "Kids" },
      ]}
      highlights={[
        {
          icon: Scissors,
          title: "Pattern Accuracy",
          text: "Graded patterns checked against approved measurement charts before cutting.",
        },
        {
          icon: Ruler,
          title: "Finishing Standards",
          text: "Pressing, packing and presentation controlled to buyer manuals.",
        },
        {
          icon: ShieldCheck,
          title: "Compliance Ready",
          text: "Partner factories audited for social and structural compliance.",
        },
      ]}
    />
  ),
});
