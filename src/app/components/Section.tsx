import React from "react";

export function Section({
	color,
	children,
}: {
	color: string;
	children: React.ReactNode;
}) {
	return (
		<div
			className={`${color} ${color === "bg-magnolia" && "text-black"} ${color === "bg-magenta" && "text-white"} flex flex-col items-center justify-center gap-8 py-[2rem]`}>
			{children}
		</div>
	);
}
