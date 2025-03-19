import React from "react";

import Image from "next/image";
import Link from "next/link";

export function SocialIcon({
	href,
	iconSrc,
}: {
	href: string;
	iconSrc: string;
}) {
	return (
		<Link href={href} target="_blank">
			<div className="hover:bg-saffron max-w-fit rounded-full bg-white p-2 duration-100">
				<Image src={iconSrc} alt="Social Link" width={16} height={16} />
			</div>
		</Link>
	);
}
