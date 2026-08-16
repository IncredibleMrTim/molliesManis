import logo from "@/assets/images/WhatsApp_Image_2026-08-13_at_11.48.47.jpeg";
import fishLeopard from "@/assets/images/IMG_20260813_112912.jpg";
import rainbowFun from "@/assets/images/IMG_20260813_112921.jpg";
import galaxy from "@/assets/images/IMG_20260813_112952.jpg";
import ocean from "@/assets/images/IMG_20260813_113043.jpg";
import fishLeopard2 from "@/assets/images/IMG_20260813_113057_1.jpg";
import fishLeopard3 from "@/assets/images/IMG_20260813_113057.jpg";
import rainbowFun2 from "@/assets/images/IMG_20260813_113112.jpg";
import samples from "@/assets/images/IMG_20260813_113127.jpg";
import snoopy from "@/assets/images/IMG_20260813_113159.jpg";
import type {
  ICollection,
  IHeroStat,
  INavLink,
  IOneOfAKindItem,
  IProcessStep,
} from "@/types/interfaces";

export const heroLogo = logo;
export const oceanSpellImage = ocean;

export const navLinks: INavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "One-of-a-Kind", href: "#bespoke" },
];

export const heroStats: IHeroStat[] = [
  { value: "100+", label: "Sets Painted" },
  { value: "⭐ 5/5", label: "Happy Clients" },
  { value: "✦ By Hand", label: "Every Nail" },
];

export const heroBanner: string[] = [
  "✨ Hand-Painted",
  "💅 Real Brushwork",
  "💎 Charms & Gems",
  "💋 3D Sculpted",
  "⭐ Made to Order",
];

export const collections: ICollection[] = [
  {
    id: 1,
    name: "Fishy Business",
    description:
      "Hand-painted fish in every hue — orange, pink, olive, lavender, and blue. Whimsical and wearable.",
    images: [fishLeopard, fishLeopard2, fishLeopard3],
    tag: "Fan Favourite",
    tagColorClass: "bg-orange-400",
  },
  {
    id: 2,
    name: "Girls Don't Cry",
    description:
      "3D sculptured lips, leopard print, cherry charms, and rhinestone chains. Maximum drama.",
    images: [fishLeopard, fishLeopard2],
    tag: "Bold & 3D",
    tagColorClass: "bg-red-500",
  },
  {
    id: 3,
    name: "Rainbow Rush",
    description:
      "Stripes, Game Boys, avocados, cherries, and stars — a full set of playful pop-art vibes.",
    images: [rainbowFun, rainbowFun2],
    tag: "Y2K Pop",
    tagColorClass: "bg-yellow-500",
  },
  {
    id: 4,
    name: "Cosmic Dust",
    description:
      "Navy-to-purple galaxy gradient with glitter, silver star charms, and a soft blush French tip.",
    images: [galaxy],
    tag: "Glam",
    tagColorClass: "bg-purple-500",
  },
  {
    id: 5,
    name: "Ocean Spell",
    description:
      "Cat-eye teal meets watercolour blue — adorned with pearl beads, gold shells, and a starfish charm.",
    images: [ocean],
    tag: "Mermaid Core",
    tagColorClass: "bg-teal-500",
  },
];

export const processSteps: IProcessStep[] = [
  {
    emoji: "🖌️",
    text: "Hand-painted with real nail brushes — each nail its own tiny artwork",
  },
  {
    emoji: "💎",
    text: "Finished with charms, gems, and embellishments for that extra something special",
  },
  {
    emoji: "✉️",
    text: "Just send me your idea, a colour, a vibe — I'll take it from there",
  },
  {
    emoji: "📦",
    text: "I package every set with care, ready to wear whenever you are",
  },
  {
    emoji: "💬",
    text: "Got questions? I love a chat — nothing is too much to ask",
  },
];

export const oneOfAKindItems: IOneOfAKindItem[] = [
  { image: snoopy, label: "Snoopy Love" },
  { image: samples, label: "Sample Vault" },
];

export const galleryStripImages = [
  fishLeopard,
  rainbowFun,
  galaxy,
  ocean,
  fishLeopard2,
  rainbowFun2,
  samples,
  snoopy,
];

export const footerLinks: INavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];
