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
				<Heading period>Residential living community essentials</Heading>
				<TopDown>
					<BodyText left>
						<p>
							<span className="text-saffron">-</span> Rosters
						</p>
						<p>
							<span className="text-saffron">-</span> Room Assignments
						</p>
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
				<Heading period>Speed up workflows</Heading>
				<BodyText left>ResLife tailors the experience to the user.</BodyText>
				<BodyText left>
					ResLife intelligently recommends information and actions relevant to
					the user. For example, Resident Advisors see rosters and reports
					assigned to them, reducing extraneous information.
				</BodyText>
			</Section>

			<Section color="bg-magenta">
				<Heading period>Works together</Heading>
				<SideBySide>
					<Image
						src={"/landingPage/Duo.png"}
						alt={"Duo"}
						width={512}
						height={512}
						className="px-8"
					/>
					<BodyText left>
						Our competitor&apos;s mailroom solution sends emails when packages
						are delivered. It&apos;s 2025. ResLife sends the recipient a push
						notification through the OnCampus app.
					</BodyText>
				</SideBySide>
				<BodyText left>
					Push notifications can also be used for emergency notifications,
					announcements, and reminders.
				</BodyText>
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
							<SubHeading noPadding>OnCampus</SubHeading>
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
