import React from "react";
import Image from "next/image";

import { Heading, SubHeading, BodyText } from "@/app/components/TextTypes";
import { Section } from "@/app/components/Section";
import { SideBySide, TopDown } from "@/app/components/CustomFlex";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function OnCampus() {
	return (
		<>
			<Section color="bg-magnolia">
				<div>
					<Heading period>OnCampus</Heading>
					<h1 className="text-center text-2xl font-bold">PROTOTYPE</h1>
				</div>

				<Image
					src={"/landingPage/OnCampusTriage.png"}
					alt={"OnCampus"}
					width={512}
					height={512}
					className="px-8"
				/>

				<SubHeading period>The student app built for the modern day</SubHeading>
			</Section>

			<Section color="bg-magenta">
				<Heading period>Things students need</Heading>
				<TopDown>
					<BodyText left>
						<p>
							<span className="text-saffron">-</span> Campus Map
						</p>
						<p>
							<span className="text-saffron">-</span> Class Schedule
						</p>
						<p>
							<span className="text-saffron">-</span> Room Booking System
						</p>
						<p>
							<span className="text-saffron">-</span> Dining Hall Menu
						</p>
						<p>
							<span className="text-saffron">-</span> Laundry Machine Status
						</p>
						<p>
							<span className="text-saffron">-</span> Push Notifications
						</p>
						<p>
							<span className="text-saffron">-</span> Clubs & Events
						</p>
					</BodyText>
					<BodyText>
						OnCampus consolidates everything a student needs daily, to a single,
						easy to use, app.
					</BodyText>
				</TopDown>
			</Section>

			<Section color="bg-magnolia">
				<Heading period>Build to modern standards</Heading>
				<SideBySide>
					<Image
						src={"/landingPage/foryou.png"}
						alt={"For You Page"}
						width={192}
						height={192}
					/>
					<TopDown>
						<BodyText left>
							OnCampus is designed to feel familiar and easy to use.
						</BodyText>
						<BodyText left>
							Like popular social media apps, the &quot;For You&quot; page
							provides a customized feed of things a student may need throughout
							their day.
						</BodyText>
					</TopDown>
				</SideBySide>
			</Section>

			<Section color="bg-magenta">
				<Heading period>Works together</Heading>
				<SideBySide>
					<Image
						src={"/landingPage/Duo.png"}
						alt={"duo"}
						width={512}
						height={512}
						className="px-8"
					/>
					<TopDown>
						<BodyText left>OnCampus integrates with all of Dormly.</BodyText>
						<BodyText left>
							As an example, a student may submit a maintenance report through
							OnCampus, which is then sent to ResLife to be approved.
						</BodyText>
					</TopDown>
				</SideBySide>
			</Section>

			<Section color="bg-magnolia">
				<Heading period>Check out the rest</Heading>
				<BodyText>
					OnCampus is just one of the ways we&apos;re innovating software for
					higher-education institutions.
				</BodyText>
				<Link href={"/software/reslife"}>
					<SideBySide>
						<Image
							src="/landingPage/ResLifeLaptop.png"
							alt="ResLife"
							height={489}
							width={320}
						/>
						<div className="flex flex-row items-center">
							<SubHeading noPadding>ResLife</SubHeading>
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
