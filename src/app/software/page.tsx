"use client";

import React from "react";

import { Section } from "../components/Section";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { X, Component } from "lucide-react";
import { Heading } from "@/app/components/TextTypes";

import Link from "next/link";
import Image from "next/image";

function Disclaimer({
	setDisclaimerShown,
}: {
	setDisclaimerShown: (value: boolean) => void;
}) {
	return (
		<>
			<p className="text-center font-bold">
				DISCLAIMER: Our software is in early development. Check our{" "}
				<span>
					<Link className="decoration-magenta underline" href={"/roadmap"}>
						Roadmap
					</Link>
				</span>{" "}
				for more details.
			</p>
			<button
				className="flex flex-row"
				onClick={() => {
					setDisclaimerShown(false);
				}}>
				<X strokeWidth={4} style={{ width: "1em", height: "1em" }} />
			</button>
		</>
	);
}

export default function Software() {
	const [disclaimerShown, setDisclaimerShown] = useState(true);

	return (
		<>
			{disclaimerShown && (
				<>
					{/* Mobile disclaimer */}
					<div className="bg-saffron flex w-full flex-col items-center justify-between gap-[1rem] p-[2rem] text-white md:hidden lg:hidden xl:hidden">
						<Disclaimer setDisclaimerShown={setDisclaimerShown} />
					</div>

					{/* Desktop disclaimer */}
					<div className="bg-saffron hidden w-full items-center justify-between p-[2rem] text-white md:flex md:px-16 lg:px-36 xl:px-60">
						<Disclaimer setDisclaimerShown={setDisclaimerShown} />
					</div>
				</>
			)}

			<Section color="bg-magnolia">
				<div className="flex flex-row flex-wrap justify-center gap-[2rem]">
					<Link
						className="flex w-[25rem] flex-col items-center gap-[1rem]"
						href="/software/oncampus">
						<span className="flex flex-row items-center gap-[0.5rem]">
							<h1 className="text-5xl font-bold">OnCampus</h1>
							<ChevronRight
								className="text-saffron"
								style={{ width: "2em", height: "2em" }}
								strokeWidth={4}
							/>
						</span>

						<Image
							src="/landingPage/OnCampusTriage.png"
							alt="phone"
							width={256}
							height={256}
							className=""
						/>

						<h1 className="text-center text-3xl font-bold">
							The student app built for the modern day
							<span className="text-saffron">.</span>
						</h1>
					</Link>
					<Link
						className="flex w-[25rem] flex-col items-center justify-between"
						href="/software/reslife">
						<span className="flex flex-row items-center gap-[0.5rem]">
							<h1 className="text-5xl font-bold">ResLife</h1>
							<ChevronRight
								className="text-saffron"
								style={{ width: "2em", height: "2em" }}
								strokeWidth={4}
							/>
						</span>

						<Image
							src="/landingPage/ResLifeLaptop.png"
							alt="ResLife"
							height={489}
							width={320}
						/>

						<h1 className="text-center text-3xl font-bold">
							Simplify your resident management software
							<span className="text-saffron">.</span>
						</h1>
					</Link>
				</div>
			</Section>

			{/* Benefits of a single system */}
			<Section color="bg-magenta">
				<Heading period>One system</Heading>
			</Section>

			{/* Modularity */}
			<Section color="bg-magnolia">
				<Heading period>Modular</Heading>
				<div className="flex flex-row flex-wrap items-center justify-center gap-[3rem]">
					<div className="">
						<Component width={72} height={72} />
					</div>
					<div className="flex flex-col">
						<h1 className="text-3xl font-bold">
							The perfect fit
							<span className="text-saffron">.</span>
						</h1>
						<p className="w-[20rem] text-xl">
							Higher-education institutions are unique, and have varying
							requirements. As such, our software is modular.
						</p>
					</div>
				</div>
			</Section>

			{/* Compare to BeConnected, Rokwire, StarRez, CSC Go? Pugh matrix? */}
			<Section color="bg-magenta">
				<Heading period>Compare</Heading>
			</Section>
		</>
	);
}
