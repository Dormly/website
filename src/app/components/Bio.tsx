import Image from "next/image";

export function Bio({
	imageSrc,
	name,
	description,
	position,
}: {
	imageSrc: string;
	name: string;
	description: string;
	position: string;
}) {
	return (
		<div className="flex w-[30rem] flex-row gap-[2rem] rounded-xl bg-white p-[2rem] text-black">
			<Image
				className="h-fit rounded-full"
				alt="Testimonial Picture"
				height={96}
				width={96}
				src={imageSrc}
			/>
			<div className="flex flex-col gap-[0.5rem]">
				<span>
					<p className="font-bold">{name}</p>
					<p className="italic">{position}</p>
				</span>

				<p>{description}</p>
			</div>
		</div>
	);
}
