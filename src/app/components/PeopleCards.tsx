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
		<div className="flex max-w-160 flex-row gap-8 rounded-xl bg-white p-8 text-black">
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between">
					<div className="flex justify-center gap-4">
						<Image
							className="h-fit rounded-full"
							alt="Bio Picture"
							width={52}
							height={52}
							src={imageSrc}
						/>
						<div className="flex flex-col justify-center">
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

export function Contact({
	imageSrc,
	name,
	email,
	phone,
	position,
	linkedinLink,
}: {
	imageSrc: string;
	name: string;
	email: string;
	phone: string;
	position: string;
	linkedinLink?: string;
}) {
	return (
		<div className="flex max-w-160 flex-row gap-8 rounded-xl bg-white p-8 text-black">
			<div className="flex w-160 flex-col gap-2">
				<div className="flex items-center justify-between">
					<div className="flex justify-center gap-4">
						<Image
							className="h-fit rounded-full"
							alt="Bio Picture"
							width={52}
							height={52}
							src={imageSrc}
						/>
						<div className="flex flex-col justify-center">
							<p className="font-bold">{name}</p>
							<p className="text-xs text-zinc-600 italic">{position}</p>
						</div>
					</div>
					{linkedinLink && (
						<SocialIcon href={linkedinLink} iconSrc="/linkedin.svg" />
					)}
				</div>
				<a
					href={`mailto:${email}?subject=Interest%20in%20Dormly`}
					className="decoration-magenta font-semibold underline underline-offset-4">
					{email}
				</a>
				<a
					href={`tel:${phone}`}
					className="decoration-magenta font-semibold underline underline-offset-4">
					{phone}
				</a>
			</div>
		</div>
	);
}
