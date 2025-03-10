import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dormly.",
  description: "Your one stop shop for all things university",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body
    className={`${geistSans.variable} antialiased bg-magnolia min-h-screen overflow-x-clip`}
  >
    <header className="w-full p-8 px-48 bg-white shadow-md flex items-center justify-between z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/dormly.svg" alt="logo" width={36} height={36} />
        <h4 className={`${dmSerif.className} text-3xl text-night`}>Dormly</h4>
      </Link>

      <nav className="flex items-center gap-8">
        <Link href="/features" className={`font-bold ${inter.className} text-lg`}>Features</Link>
        <Link href="/roadmap" className={`font-bold ${inter.className} text-lg`}>Roadmap</Link>
        <Link href="/about" className={`font-bold ${inter.className} text-lg`}>About</Link>
        <Link href="/schedule" className={`font-bold text-white ${inter.className} bg-magenta hover:bg-saffron transition-all duration-200 px-3 py-1.5 rounded-full`}>Schedule Demo</Link>
      </nav>
    </header>
    <main className="h-screen"> 
      {children}
    </main>
    <footer>
      <div className="bg-magenta text-white p-8 text-center">
        <p className="text-lg">© 2025 Dormly. All rights reserved.</p>
      </div>
    </footer>
  </body>
</html>

  );
}
