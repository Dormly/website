"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { dmSerif } from "@/app/ui/fonts";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full">
			{/* Mobile Navbar */}
			<div className="bg-magnolia sticky z-50 w-full flex-col items-center justify-between md:hidden md:px-16 lg:hidden lg:px-36 xl:hidden xl:px-60">
				<div className="flex w-full justify-between p-8">
					<Link href="/" className="flex items-center gap-2">
						<Image src="/dormly.svg" alt="logo" width={36} height={36} />
						<h4 className={`${dmSerif.className} text-night text-3xl`}>
							Dormly<span className="text-saffron">.</span>
						</h4>
					</Link>

					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Hamburger Menu */}
				{isOpen && (
					<div>
						<nav className="bg-magnolia z-50 flex w-dvw flex-col items-center justify-between gap-8 md:hidden">
							<Link
								href="/features"
								className="flex w-full justify-center p-2 text-lg">
								Features
							</Link>
							<Link
								href="/roadmap"
								className="flex w-full justify-center p-2 text-lg">
								Roadmap
							</Link>
							<Link
								href="/about"
								className="flex w-full justify-center p-2 text-lg">
								About
							</Link>
							<Link
								href="/schedule"
								className="bg-magenta hover:bg-saffron rounded-full px-3 py-1.5 font-bold text-white transition-all duration-200">
								Get in Touch
							</Link>
						</nav>
						<div className="bg-opacity-50 absolute z-30 h-dvh w-dvw bg-black/50">
							<button
								className="h-dvh w-dvw"
								onClick={() => setIsOpen(!isOpen)}>
								{isOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				)}
			</div>

			{/* Desktop Navbar */}
			<div className="bg-magnolia hidden w-full items-center justify-between p-8 md:flex md:px-16 lg:px-36 xl:px-60">
				<Link href="/" className="flex items-center gap-2">
					<Image src="/dormly.svg" alt="logo" width={36} height={36} />
					<h4 className={`${dmSerif.className} text-night text-3xl`}>
						Dormly<span className="text-saffron">.</span>
					</h4>
				</Link>

				<nav className="flex items-center gap-8">
					<Link href="/features" className="text-lg font-bold">
						Features
					</Link>
					<Link href="/roadmap" className="text-lg font-bold">
						Roadmap
					</Link>
					<Link href="/about" className="text-lg font-bold">
						About
					</Link>
					<Link
						href="/schedule"
						className="bg-magenta hover:bg-saffron rounded-full px-3 py-1.5 font-bold text-white duration-100">
						Get in Touch
					</Link>
				</nav>
			</div>
		</nav>
	);
};

export default Navbar;
