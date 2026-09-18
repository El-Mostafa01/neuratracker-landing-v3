import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuraTracker — Your out-of-stock items detected by photo",
  description:
    "Retail execution software: NeuraTracker turns your field teams' shelf photos into KPIs, actions and proof. Guided mobile capture, AI shelf recognition, manager visibility.",
  openGraph: {
    title: "NeuraTracker — Retail execution intelligence",
    description:
      "Turn every shelf visit into measurable retail intelligence. Capture the shelf, understand what is happening, measure execution, act on what matters.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1526",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} ${inter.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
