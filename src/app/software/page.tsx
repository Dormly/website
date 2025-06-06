"use client";

import React from "react";

import { Section } from "../components/Section";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { X, Check } from "lucide-react";
import { Heading, BodyText } from "@/app/components/TextTypes";

import Link from "next/link";
import Image from "next/image";
import { dmSerif } from "../ui/fonts";

function FeatureMapping({ featureBrand }: { featureBrand: boolean }) {
	const renderIcon = (value: boolean) =>
		value ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />;
	return (
		<div className="flex h-14 items-center justify-center border-b border-gray-200">
			{renderIcon(featureBrand)}
		</div>
	);
}

const ComparisonTable = () => {
	const features = [
		{ name: "Modular", brand: true, competitor1: true, competitor2: true },
		{ name: "Student App", brand: true, competitor1: false, competitor2: true },
		{
			name: "Resident Management",
			brand: true,
			competitor1: true,
			competitor2: false,
		},
		{
			name: "Tailored UI/UX",
			brand: true,
			competitor1: false,
			competitor2: false,
		},
		{
			name: "Custom Branding",
			brand: true,
			competitor1: false,
			competitor2: true,
		},
		{
			name: "Purpose Built",
			brand: true,
			competitor1: false,
			competitor2: true,
		},
		{
			name: "One System",
			brand: true,
			competitor1: false,
			competitor2: false,
		},
	];

	return (
		<div className="bg-magnolia max-w-140 rounded-2xl p-8 text-black shadow-xl">
			<div className="mb-4 grid grid-cols-4 border-b border-gray-300 pb-4 text-left">
				<div className="text-xl font-bold text-gray-800"></div>
				<div className="rounded-xl text-center text-2xl font-bold text-black transition-all">
					<span className={`${dmSerif.className}`}>Dormly</span>
					<span className="text-saffron">.</span>
				</div>
				<div className="flex items-center justify-center">
					<Image
						src={"/competitors/starrez.svg"}
						alt={"StarRez"}
						width={100}
						height={48}
					/>
				</div>
				<div className="flex items-center justify-center">
					<Image
						src={"/competitors/pathify.svg"}
						alt={"StarRez"}
						width={70}
						height={48}
					/>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-6">
				<div className="col-span-1">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex h-14 items-center border-b border-gray-200 text-sm font-semibold text-gray-700">
							{feature.name}
						</div>
					))}
				</div>
				<div className="bg-saffron col-span-1 rounded-xl text-white shadow transition-all">
					{features.map((feature, index) => (
						<FeatureMapping key={index} featureBrand={feature.brand} />
					))}
				</div>
				<div className="col-span-1">
					{features.map((feature, index) => (
						<FeatureMapping key={index} featureBrand={feature.competitor1} />
					))}
				</div>
				<div className="col-span-1">
					{features.map((feature, index) => (
						<FeatureMapping key={index} featureBrand={feature.competitor2} />
					))}
				</div>
			</div>
		</div>
	);
};

function Disclaimer({
	setDisclaimerShown,
}: {
	setDisclaimerShown: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<>
			<p className="text-center font-bold">
				DISCLAIMER: Our software is in early development. Check our{" "}
				<span>
					<Link className="decoration-magenta underline" href={"/about"}>
						About
					</Link>
				</span>{" "}
				page for more details.
			</p>
			<button
				className="flex cursor-pointer flex-row"
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
							Simplify your residential living communities
							<span className="text-saffron">.</span>
						</h1>
					</Link>
				</div>
			</Section>

			{/* Comparison */}
			<Section color="bg-magenta">
				<Heading period>Compare</Heading>
				<ComparisonTable />
			</Section>

			<Section color="mg-magnolia">
				<Heading period>Consolidate</Heading>
				<BodyText>Cut costs and improve the end-user experience.</BodyText>
				<BodyText>
					Dormly is a one-stop-shop for all your school&apos;s software needs,
					and our software is a one-stop-shop for your student&apos;s and
					staff&apos;s needs.
				</BodyText>
			</Section>
		</>
	);
}
