import React from "react";

import Image from "next/image";

export function Testimonial({
	imageSrc,
	name,
	description,
	relation,
}: {
	imageSrc?: string;
	name: string;
	description: string;
	relation: string;
}) {
	return (
		<div className="ml-[2rem] flex min-h-48 w-[30rem] flex-row items-center gap-[2rem] rounded-xl bg-white p-[2rem] text-black">
			{imageSrc ? (
				<Image
					className="aspect-square h-fit rounded-full"
					alt="Testimonial Picture"
					height={96}
					width={96}
					src={imageSrc}
				/>
			) : (
				<Image
					className="aspect-square h-fit rounded-full"
					alt="Testimonial Picture"
					height={96}
					width={96}
					src={"/dormly.svg"}
				/>
			)}
			<div className="flex flex-col justify-between">
				<p>&quot;{description}&quot;</p>
				<span>
					<p className="font-bold">{name}</p>
					<p className="italic">{relation}</p>
				</span>
			</div>
		</div>
	);
}
