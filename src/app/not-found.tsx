import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
	return (
		<div className="flex flex-col items-center gap-[2rem] p-[2rem]">
			<h1 className="text-center text-5xl font-bold">Something Went Wrong</h1>
			<Image
				className="h-50 w-50"
				src="/dormly.svg"
				alt="logo"
				width={1}
				height={1}
			/>
			<h1 className="text-center text-4xl font-bold">Error 404</h1>
			<h1 className="text-center text-4xl">
				The page you are looking for does not exist!
			</h1>
			<Link
				href="/"
				className="bg-magenta hover:bg-saffron rounded-full px-3 py-1.5 font-bold text-white duration-100">
				Return Home
			</Link>
		</div>
	);
}
