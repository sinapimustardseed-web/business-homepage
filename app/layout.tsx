import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { displayFont } from "@/lib/fonts";

// TODO: replace with the licensed "Glacial Indifference" webfont once available.
// Jost is used as a clean geometric-sans fallback for Latin text in the meantime.
const latinFont = Jost({
  variable: "--font-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cinapi | Concrete-Free Infrastructure Solutions",
  description: "Concrete-free infrastructure solutions powered by X-PILE and AirDome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior opts into the smooth scrolling globals.css sets, and
    // silences Next's route-transition warning about it.
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${latinFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cinapi-ivory text-cinapi-green">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
