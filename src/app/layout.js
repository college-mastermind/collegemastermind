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
      <body className={`${inter.className} overflow-x-hidden`}>
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
        <ToasterProvider />
        <Analytics />
        <script
          src="https://pushlapgrowth.com/affiliate-tracker.js"
          data-affiliate data-program-id="b603c13e-8be9-4c4c-84a3-da42d3089fd2"
          async>
        </script>
      </body>
    </html>
  );
}
