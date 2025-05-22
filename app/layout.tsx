import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { FooterSection } from "../src/components/sections/footer-section";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uniweb - Accessibilité Web",
  description:
    "Solution d'accessibilité web facile à intégrer, conforme aux normes WCAG et RGAA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://sdk.hellouniweb.com/base/main.js"
          data-account="lZOzpEvf"
        />
        <Script
          id="hs-script-loader"
          src="//js-eu1.hs-scripts.com/146251277.js"
          strategy="afterInteractive"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="pt-24">{children}</div>

          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
