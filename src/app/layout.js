import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import ToasterProvider from "@/Providers/ToastProvider";
import "./globals.css";

import NavBar from "@/components/Header/Navbar";
import MobileNavBar from "@/components/Header/MobileNavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
        <ToasterProvider />
        <Analytics />
      </body>
    </html>
  );
}
