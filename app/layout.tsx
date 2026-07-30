import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4, Courier_Prime } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-franklin",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${franklin.variable} ${serif.variable} ${courier.variable}`}>
      <head>
        {/* Without JS, Framer Motion's server-rendered opacity:0 would hide content — undo it. */}
        <noscript>
          <style>{`[style*="opacity"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
