"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import React from "react";

import Link from "next/link";

import { dmSerif } from "@/app/ui/fonts";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full">
			{/* Mobile Navbar */}
			<div className="bg-magnolia z-50 w-full flex-col items-center justify-between md:hidden lg:hidden xl:hidden">
				<div className="flex w-full justify-between p-[2rem]">
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
				<AnimatePresence>
					{isOpen && (
						<>
							{/* Overlay */}
							<motion.div
								className="fixed inset-0 z-40 bg-black/50"
								onClick={() => setIsOpen(false)}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							/>

							{/* Slide-in Menu */}
							<motion.nav
								className="bg-magnolia fixed top-0 left-0 z-50 w-full p-[2rem]"
								initial={{ y: "-100%" }}
								animate={{ y: 0 }}
								exit={{ y: "-100%" }}
								transition={{ type: "spring", stiffness: 100, damping: 20 }}>
								<div className="flex flex-col gap-[2rem]">
									<button
										className="flex flex-row justify-end"
										onClick={() => setIsOpen(false)}>
										<X size={24} />
									</button>
									<div className="flex flex-col items-center gap-[2rem]">
										<Link
											href="/"
											className="text-lg"
											onClick={() => setIsOpen(false)}>
											Overview
										</Link>
										<Link
											href="/software"
											className="text-lg"
											onClick={() => setIsOpen(false)}>
											Software
										</Link>
										<Link
											href="/about"
											className="text-lg"
											onClick={() => setIsOpen(false)}>
											About
										</Link>
										<Link
											href="/contact"
											className="bg-magenta hover:bg-saffron rounded-full px-3 py-1.5 font-bold text-white duration-100"
											onClick={() => setIsOpen(false)}>
											Get in Touch
										</Link>
									</div>
								</div>
							</motion.nav>
						</>
					)}
				</AnimatePresence>
			</div>

			{/* Desktop Navbar */}
			<div className="bg-magnolia hidden w-full items-center justify-between p-[2rem] md:flex md:px-16 lg:px-36 xl:px-60">
				<Link href="/" className="flex items-center gap-2">
					<Image src="/dormly.svg" alt="logo" width={36} height={36} />
					<h4 className={`${dmSerif.className} text-night text-3xl`}>
						Dormly<span className="text-saffron">.</span>
					</h4>
				</Link>

				<nav className="flex items-center gap-8">
					<Link href="/software" className="text-lg font-bold">
						Software
					</Link>
					<Link href="/about" className="text-lg font-bold">
						About
					</Link>
					<Link
						href="/contact"
						className="bg-magenta hover:bg-saffron rounded-full px-3 py-1.5 font-bold text-white duration-100">
						Get in Touch
					</Link>
				</nav>
			</div>
		</nav>
	);
};

export default Navbar;
