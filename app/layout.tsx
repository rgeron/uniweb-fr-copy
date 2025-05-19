import { FaqSection } from "@/components/blocks/faq";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { FooterSection } from "@/components/ui/footer-section";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  const faqItems = [
    {
      question: "What is Uniweb?",
      answer:
        "Uniweb is a revolutionary script that makes any website WCAG 2.1 compliant instantly.",
    },
    {
      question: "How easy is it to integrate Uniweb?",
      answer:
        "It's incredibly simple. Just add a single script tag to your website's HTML.",
    },
    {
      question: "Is Uniweb expensive?",
      answer:
        "We offer various pricing plans to suit different needs, including a free tier for small projects.",
    },
    {
      question: "Does Uniweb affect website performance?",
      answer:
        "Uniweb is designed to be lightweight and has minimal impact on your website's performance.",
    },
  ];

  const contactInfo = {
    title: "Still have questions?",
    description:
      "Our team is here to help you with any inquiries you may have.",
    buttonText: "Contact Us",
  };

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
