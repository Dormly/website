import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CarouselCard({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: React.JSX.Element;
}) {
	return (
		<div className="flex flex-col gap-4 rounded-xl bg-white p-6 text-black">
			<div className="flex flex-row items-center gap-4">
				{icon}
				<h1 className="text-3xl font-semibold">
					{title}
					<span className="text-saffron">.</span>
				</h1>
			</div>
			<p className="text-xl leading-8">{description}</p>

			<Link href="/software" className="font-bold text-white">
				<span className="text-saffron flex flex-row items-center gap-1">
					<p>Check it Out</p>
					<ChevronRight
						strokeWidth={3}
						style={{ width: "1em", height: "1em" }}
					/>
				</span>
			</Link>
		</div>
	);
}
