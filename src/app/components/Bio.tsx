import React from "react";

import Image from "next/image";
import { SocialIcon } from "./SocialIcon";

export function Bio({
	imageSrc,
	name,
	description,
	position,
	linkedinLink,
}: {
	imageSrc: string;
	name: string;
	description: string;
	position: string;
	linkedinLink?: string;
}) {
	return (
		<div className="flex max-w-175 flex-row gap-8 rounded-xl bg-white p-8 text-black">
			<div className="flex flex-col gap-2">
				<div className="flex justify-between">
					<div className="flex gap-4">
						<Image
							className="h-fit rounded-full"
							alt="Bio Picture"
							width={52}
							height={52}
							src={imageSrc}
						/>
						<div className="flex flex-col">
							<p className="font-bold">{name}</p>
							<p className="text-xs text-zinc-600 italic">{position}</p>
						</div>
					</div>
					{linkedinLink && (
						<SocialIcon href={linkedinLink} iconSrc="/linkedin.svg" />
					)}
				</div>
				<p className="text-pretty">{description}</p>
			</div>
		</div>
	);
}
