import React from "react";

import { Section } from "../components/Section";
import { Heading, SubHeading, BodyText } from "../components/TextTypes";
import { dmSerif } from "../ui/fonts";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import static_data from "../static_data.json";
import { Bio } from "../components/PeopleCards";
import Image from "next/image";

export default function About() {
	return (
		<>
			<Section color="bg-magnolia">
				<Heading period>About</Heading>
				<Image
					src={"/landingPage/Duo.png"}
					alt={"duo"}
					width={512}
					height={512}
					className="px-8"
				/>
				<SubHeading period>
					<span className={`${dmSerif.className}`}>Dormly</span> is currently in
					development
				</SubHeading>
				<BodyText>
					We&apos;re starting with what our team knows best. OnCampus, our
					student app, and ResLife, our resident management software.
				</BodyText>
				<Link href={"/software"}>
					<div className="text-saffron flex flex-row font-bold">
						<p>Prototypes</p>
						<ChevronRight />
					</div>
				</Link>
			</Section>

			<Section color="bg-magenta">
				<Heading period>In our future</Heading>

				<BodyText>
					We&apos;ve got plans to replace, integrate, and consolidate even more
					in the future.
				</BodyText>
				<SubHeading period>5 down, 40 to go</SubHeading>
				<BodyText>
					<Link href={"https://listedtech.com/blog/average-software-budget/"}>
						<span className="decoration-saffron underline underline-offset-2">
							According to ListEdTech,
						</span>
					</Link>{" "}
					universities spend on average $1,670,687 based on 45 software
					products.
				</BodyText>
				<BodyText>
					Our current prototypes consolidate 5 of these products, and we&apos;re
					just getting started.
				</BodyText>
			</Section>

			<Section color="bg-magnolia">
				<Heading period>
					The <span className={`${dmSerif.className}`}>Dormly</span> Team
				</Heading>
				<Link href={"/contact"}>
					<div className="text-saffron flex flex-row font-bold">
						<p>Get in Touch</p>
						<ChevronRight />
					</div>
				</Link>
				<div className="grid justify-center gap-8 px-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
					{static_data.fullEmployees.map((employee) => (
						<Bio
							key={employee.name}
							imageSrc={employee.imageSrc}
							name={employee.name}
							description={employee.description}
							position={employee.position}
							linkedinLink={employee.linkedinLink}
						/>
					))}
				</div>
			</Section>
		</>
	);
}
