import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";

import Navbar from "./components/Navbar";
import { SocialIcon } from "./components/SocialIcon";

function Footer() {
	return (
		<div className="flex flex-row items-center justify-between p-8 font-bold text-white md:px-16 lg:px-36 xl:px-60">
			<div className="">
				<Image src="/dormly.svg" alt="logo" width={72} height={72} />
			</div>
			<div className="flex flex-row items-center gap-[1rem]">
				<SocialIcon
					href="https://www.linkedin.com/company/dormlygroup"
					iconSrc="/linkedin.svg"
				/>
				<SocialIcon href="/" iconSrc="/instagram.svg" />
				<p>&copy; 2025 Dormly</p>
			</div>
		</div>
	);
}

export const metadata: Metadata = {
	title: "Dormly",
	description: "Replace, Integrate, Consolidate",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} bg-magenta antialiased`}>
				<Navbar />
				<div className="bg-magnolia flex flex-col overflow-x-hidden">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
