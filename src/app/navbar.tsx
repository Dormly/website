"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { dmSerif, geistSans, inter } from "@/app/ui/fonts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
        {/* Mobile Navbar */}
        <div className="md:hidden flex-col md:px-16 lg:px-36 xl:px-60 absolute w-full bg-white shadow-md items-center justify-between z-50">
            <div className="flex justify-between w-full p-8">
                <Link href="/" className="flex items-center gap-2">
                <Image src="/dormly.svg" alt="logo" width={36} height={36} />
                <h4 className={`${dmSerif.className} text-3xl text-night`}>Dormly</h4>
                </Link>

                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Hamburger Menu */}
            {isOpen && (
            <div>
                <nav className="md:hidden absolute flex items-center justify-between w-dvw p-8 shadow-md z-50 bg-white">
                    <Link href="/features" className={`font-bold ${inter.className} text-lg`}>Features</Link>
                    <Link href="/roadmap" className={`font-bold ${inter.className} text-lg`}>Roadmap</Link>
                    <Link href="/about" className={`font-bold ${inter.className} text-lg`}>About</Link>
                    <Link href="/schedule" className={`font-bold text-white ${inter.className} bg-magenta hover:bg-saffron transition-all duration-200 px-3 py-1.5 rounded-full`}>Schedule Demo</Link>
                </nav>
                <div className="h-dvh w-dvw absolute bg-opacity-50 bg-slate-950 z-30">
                    <button className="w-dvw h-dvh" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        )}
        </div>

        {/* Mobile Menu */}
        

        {/* Desktop Navbar */}
        <div className="hidden md:flex md:px-16 lg:px-36 xl:px-60 absolute w-full p-8 bg-white shadow-md  items-center justify-between z-50">
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
        </div>
    </nav>
  );
};

export default Navbar;