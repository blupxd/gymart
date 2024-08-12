import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GymArt Beograd",
  description: "GymArt - Izgradite vaše telo kao nikada do sad!",
  keywords: "fitness, gym, bodybuilding, trening, GymArt, Beograd, teretana",
  metadataBase: new URL("https://www.gymart.rs")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
