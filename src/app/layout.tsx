import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NDIS Support Coordination | Expert Support Services Australia Wide",
  description: "Professional NDIS Support Coordination services helping participants across Australia navigate their NDIS journey with confidence and dignity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable} font-[family-name:var(--font-raleway)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
