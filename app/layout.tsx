import { FaqSection } from "@/components/blocks/faq";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { FooterSection } from "@/components/ui/footer-section";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { contactInfo, faqItems } from "../content/FAQ_CONTACT_DATA";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FaqSection
            title="Frequently Asked Questions"
            description="Find answers to common questions about Uniweb and web accessibility."
            items={faqItems}
            contactInfo={contactInfo}
            id="faq-section"
          />
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
