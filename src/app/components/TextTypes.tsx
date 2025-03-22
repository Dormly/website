import React from "react";

export function Heading({
	children,
	period,
}: {
	children: React.ReactNode;
	period?: boolean;
}) {
	return (
		<h1 className="px-8 text-center text-5xl font-bold">
			{children}
			{period && <span className="text-saffron">.</span>}
		</h1>
	);
}

export function SubHeading({
	children,
	period,
	noPadding,
}: {
	children: React.ReactNode;
	period?: boolean;
	noPadding?: boolean;
}) {
	return (
		<h1 className={`${!noPadding && "px-8"} text-center text-4xl font-bold`}>
			{children}
			{period && <span className="text-saffron">.</span>}
		</h1>
	);
}

export function BodyText({
	children,
	period,
	left,
	right,
}: {
	children: React.ReactNode;
	period?: boolean;
	left?: boolean;
	right?: boolean;
}) {
	return (
		<h1
			className={`max-w-[25rem] px-8 ${left && "text-left"} ${right && "text-right"} ${!left && !right && "text-center"} text-2xl`}>
			{children}
			{period && <span className="text-saffron">.</span>}
		</h1>
	);
}
