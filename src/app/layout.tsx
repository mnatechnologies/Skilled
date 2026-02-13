import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Skilled Demo | Sydney Demolition Experts — Residential & Commercial Demolition",
  description:
    "Professional demolition services in Sydney. Residential & commercial demolition, strip outs, asbestos removal, and rubbish removal. Fully licensed & insured. Free quotes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable} font-[family-name:var(--font-montserrat)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
