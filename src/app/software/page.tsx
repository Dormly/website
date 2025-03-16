"use client";

import { Section } from "../components/Section";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { X, Component } from "lucide-react";

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
							<h1 className="text-4xl font-bold">OnCampus</h1>
							<ChevronRight
								className="text-saffron"
								style={{ width: "1.5em", height: "1.5em" }}
								strokeWidth={4}
							/>
						</span>

						<div className="flex flex-row justify-center">
							<Image
								src="/landingPage/events.svg"
								alt="phone"
								width={128}
								height={489}
								className="z-20 scale-90"
							/>
							<span className="absolute z-30">
								<Image
									src="/landingPage/dashboard.svg"
									alt="phone"
									width={128}
									height={489}
									className=""
								/>
							</span>
							<Image
								src="/landingPage/foryou.svg"
								alt="phone"
								width={128}
								height={489}
								className="z-20 scale-90"
							/>
						</div>

						<h1 className="text-center text-3xl font-bold">
							The student app built for the modern day
							<span className="text-saffron">.</span>
						</h1>
					</Link>
					<Link
						className="flex w-[25rem] flex-col items-center justify-between"
						href="/software/reslife">
						<span className="flex flex-row items-center gap-[0.5rem]">
							<h1 className="text-4xl font-bold">ResLife</h1>
							<ChevronRight
								className="text-saffron"
								style={{ width: "1.5em", height: "1.5em" }}
								strokeWidth={4}
							/>
						</span>

						<Image
							src="/landingPage/macbook.png"
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
				<h1 className="text-center text-5xl font-bold">
					One system
					<span className="text-saffron">.</span>
				</h1>
			</Section>

			{/* Modularity */}
			<Section color="bg-magnolia">
				<h1 className="text-center text-5xl font-bold">
					Modular
					<span className="text-saffron">.</span>
				</h1>
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
				<h1 className="text-center text-5xl font-bold">
					Compare
					<span className="text-saffron">.</span>
				</h1>
			</Section>
		</>
	);
}
