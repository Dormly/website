import React from "react";

export function SideBySide({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-row flex-wrap items-center justify-center gap-8">
			{children}
		</div>
	);
}

export function TopDown({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col items-center justify-center gap-8">
			{children}
		</div>
	);
}
