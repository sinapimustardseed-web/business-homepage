import { Space_Grotesk } from "next/font/google";

// Display / Latin face for the new-design system (Home + all migrated routes).
// Self-hosted via next/font and exposed as a CSS variable so it can be applied
// once on the root layout and consumed anywhere via var(--font-space-grotesk).
export const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
