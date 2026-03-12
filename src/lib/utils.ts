import { type ClassValue, clsx } from "clsx";
import { Geist, Geist_Mono, Inter, Russo_One } from "next/font/google";
import { twMerge } from "tailwind-merge";



// 1. Existing Tailwind CSS merger utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 2. Font definitions moved from layout.tsx
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
export const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
  display: "swap",
});


