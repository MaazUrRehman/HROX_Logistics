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
  title: "HROX Dispatchers | Truck Dispatching Services",
  description: "HROX Dispatchers provides professional truck dispatching services for owner-operators and small fleets across the United States.",
  
  verification: {
    google: "0NzmArcU5edQ3kLto-sh1qrzcvk_dHNwalFtbiWCFR8",
  },
  
  icons: {
    icon: "/hrox.png", // ✅ your actual file name
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-slate-50`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
