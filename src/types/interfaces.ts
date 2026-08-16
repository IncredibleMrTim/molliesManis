import type { StaticImageData } from "next/image";

export interface INavLink {
  label: string;
  href: string;
}

export interface IHeroStat {
  value: string;
  label: string;
}

export interface ICollection {
  id: number;
  name: string;
  description: string;
  images: StaticImageData[];
  tag: string;
  tagColorClass: string;
}

export interface IProcessStep {
  emoji: string;
  text: string;
}

export interface IOneOfAKindItem {
  image: StaticImageData;
  label: string;
}

export interface IContactFormData {
  name: string;
  email: string;
  message: string;
}
