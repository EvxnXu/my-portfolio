import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from './components/footer'
import Navbar from './components/nav'
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
  title: "Evan's Portfolio App",
  description: "A Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Scrollable Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-4 w-fullb">
          {children}
        </main>

        {/* Fixed Footer */}
        <Footer />
      </body>
    </html>
  );
}

