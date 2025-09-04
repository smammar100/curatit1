import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONTACT_LINKS = [
  {
    label: "37°47'33.4\"N 122°24'18.6\"W",
    href: "https://maps.app.goo.gl/MnpbPDEHxoDydc9M9",
  },
  {
    label: "(269) 682-1402",
    href: "https://joyco.studio/showcase",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/joyco.studio/",
  },
];