import type { Metadata } from "next";
import "./globals.css";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";

import Navbar from "@/app/navbar"

export const metadata: Metadata = {
  title: "Dormly",
  description: "A modern all-in-one higher education software suite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-magnolia`}>
        <header>
          <Navbar />
        </header>
        
        <main> 
          {children}
        </main>
      </body>
    </html>
  );
}
