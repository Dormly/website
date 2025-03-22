import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/app/components/Section";
import { Heading, SubHeading, BodyText } from "@/app/components/TextTypes";
import { SideBySide, TopDown } from "@/app/components/CustomFlex";
import { ChevronRight } from "lucide-react";

export default function ResLife() {
	return (
		<>
			<Section color="bg-magnolia">
				<div>
					<Heading period>ResLife</Heading>
					<h1 className="text-center text-2xl font-bold">PROTOTYPE</h1>
				</div>

				<Image
					src={"/landingPage/ResLifeLaptop.png"}
					alt={"ResLife"}
					width={512}
					height={512}
					className="px-8"
				/>
				<SubHeading period>
					Simplify your resident management software
				</SubHeading>
			</Section>

			<Section color="bg-magenta">
				<Heading period>Things residential living communities need</Heading>
				<TopDown>
					<BodyText left>
						<p>
							<span className="text-saffron">-</span> Standard Reports
						</p>
						<p>
							<span className="text-saffron">-</span> Conduct Reports
						</p>
						<p>
							<span className="text-saffron">-</span> Maintenance Reports
						</p>
						<p>
							<span className="text-saffron">-</span> Mailroom Administration
						</p>
						<p>
							<span className="text-saffron">-</span> Employee Scheduling
						</p>
					</BodyText>
					<BodyText>
						ResLife is built to serve all these needs and more.
					</BodyText>
				</TopDown>
			</Section>

			<Section color="bg-magnolia">
				<Heading period>Speed up your workflows</Heading>
				<BodyText>ResLife tailors the experience to the user.</BodyText>
			</Section>

			<Section color="bg-magenta">
				<Heading period>Works together</Heading>
			</Section>

			<Section color="bg-magnolia">
				<Heading period>Check out the rest</Heading>
				<BodyText>
					ResLife is just one of the ways we&apos;re innovating software for
					higher-education institutions.
				</BodyText>

				<Link href={"/software/oncampus"}>
					<SideBySide>
						<Image
							src="/landingPage/OnCampusTriage.png"
							alt="ResLife"
							height={256}
							width={256}
						/>
						<div className="flex flex-row items-center">
							<SubHeading period noPadding>
								OnCampus
							</SubHeading>
							<ChevronRight
								className="text-saffron"
								style={{ width: "2em", height: "2em" }}
								strokeWidth={4}
							/>
						</div>
					</SideBySide>
				</Link>
			</Section>
		</>
	);
}
