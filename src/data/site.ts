import logoMaranatha from "@/assets/01_Maranatha_Trading_Group.png";
import logoFinlay from "@/assets/02_Finlay.png";
import logoMosaic from "@/assets/03_Mosaic_Brands_Ltd.png";
import logoInco from "@/assets/04_Inco_Group.png";
import logoRagno from "@/assets/05_Ragno.png";
import logoHugo from "@/assets/06_Hugo_Boss.png";
import logoAdidas from "@/assets/07_Adidas_Custom.png";
import logoMiller from "@/assets/08_Miller_Zoo.png";
import logoEcotone from "@/assets/09_Ecotone.png";
import logoKoroshi from "@/assets/10_Koroshi.png";
import logoNasri from "@/assets/11_Nasri_International.png";
import logoEot from "@/assets/12_Every_Other_Thursday.png";

export const contact = {
  email: "info@bdbgs.com",
  phone: "+8801760698817",
  whatsapp: "https://wa.me/8801760698817",
  website: "https://bdbgs.com/",
  address:
    "Plot # 11, Road # 12, Sector # 14, Flat 1B (first floor), Uttara, Dhaka - 1230, Bangladesh",
  tagline: "Based in Dhaka. Serving global buyers.",
  responseNote:
    "We typically respond within 1–2 working days. For urgent queries, please use WhatsApp.",
};

export const stats = [
  { value: "USD 1.5M", label: "Annual turnover" },
  { value: "50+", label: "Factory partners" },
  { value: "5", label: "Active buyers" },
  { value: "7", label: "Product categories" },
];

export const partners = [
  { name: "Maranatha Trading Group", logo: logoMaranatha },
  { name: "Finlay", logo: logoFinlay },
  { name: "Mosaic Brands", logo: logoMosaic },
  { name: "INCO Group", logo: logoInco },
  { name: "Ragno", logo: logoRagno },
  { name: "Hugo Boss", logo: logoHugo },
  { name: "Adidas Custom", logo: logoAdidas },
  { name: "Miller Zoo", logo: logoMiller },
  { name: "Ecotone", logo: logoEcotone },
  { name: "Koröshi", logo: logoKoroshi },
  { name: "Nasri International", logo: logoNasri },
  { name: "Every Other Thursday", logo: logoEot },
] as const;

export const testingPartners = [
  {
    name: "SGS",
    focus: "Chemical & physical lab testing",
    detail:
      "Fibre composition, colour fastness, shrinkage and restricted-substance screening against buyer specs.",
    buyerWin: "Retail-ready reports your QA team can file with confidence.",
  },
  {
    name: "Intertek",
    focus: "Performance & safety protocols",
    detail:
      "Dimensional stability, seam strength, flammability and product-safety checks for export markets.",
    buyerWin: "Fewer surprises at destination — specs proven before shipment.",
  },
  {
    name: "Bureau Veritas",
    focus: "Inspection & social compliance",
    detail:
      "Factory audits, AQL inspections and social-compliance verification across partner units.",
    buyerWin: "Traceable factory standards that protect your brand reputation.",
  },
  {
    name: "TÜV",
    focus: "Certification & market access",
    detail:
      "Independent verification for European and global market requirements where third-party sign-off is mandatory.",
    buyerWin: "Clear documentation when buyers or customs ask for proof.",
  },
] as const;

export const qualityCheckpoints = [
  {
    step: "01",
    title: "Inline",
    text: "Catch construction issues while the line is still running.",
  },
  {
    step: "02",
    title: "Mid-line",
    text: "Verify measurements, workmanship and trim accuracy mid-run.",
  },
  {
    step: "03",
    title: "Final AQL",
    text: "Pre-shipment inspection against your agreed AQL level.",
  },
  {
    step: "04",
    title: "Lab report",
    text: "Accredited third-party testing before goods leave Bangladesh.",
  },
] as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/knitwear", label: "Knitwear" },
  { to: "/wovenwear", label: "Wovenwear" },
  { to: "/sportswear", label: "Sportswear" },
  { to: "/denimwear", label: "Denimwear" },
] as const;

export const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact Us" },
] as const;
