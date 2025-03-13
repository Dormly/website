"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { dmSerif } from "./ui/fonts";
import { GraduationCap } from "lucide-react";
import { Testimonial } from "./components/Testimonial";
import { Bio } from "./components/Bio";
import { Section } from "./components/Section";

import static_data from "./static_data.json";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
	const words = [
		"Students",
		"Faculty",
		"Staff",
		"Campus",
		"University",
		"College",
		"Residents",
		"Administrators",
		"Everything",
	];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(true);

	useEffect(() => {
		if (!isAnimating) return;

		const interval = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % (words.length - 1));
		}, 300);

		const timeout = setTimeout(() => {
			clearInterval(interval);
			setCurrentWordIndex(words.length - 1);
			setIsAnimating(false);
		}, 3000);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [isAnimating, words.length]);

	return (
		<div className="flex flex-col overflow-x-hidden">
			<div className="flex flex-wrap justify-center gap-[3rem] py-[2rem]">
				<div className="flex w-96 flex-col items-center justify-center py-[2rem] text-6xl">
					<h1 className="">Connect your</h1>
					<motion.p
						key={currentWordIndex}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						transition={{ duration: 0.3 }}
						className="decoration-saffron font-bold underline underline-offset-4">
						{words[currentWordIndex]}
					</motion.p>
					<h1 className="">
						with{" "}
						<span className={`${dmSerif.className}`}>
							Dormly<span className="text-saffron">.</span>
						</span>
					</h1>
				</div>
				<div className="flex justify-center overflow-x-hidden">
					<Image
						src="/landingPage/events.svg"
						alt="phone"
						width={243}
						height={489}
						className="z-20 scale-90"
					/>
					<span className="absolute z-30">
						<Image
							src="/landingPage/dashboard.svg"
							alt="phone"
							width={243}
							height={489}
							className=""
						/>
					</span>
					<Image
						src="/landingPage/foryou.svg"
						alt="phone"
						width={243}
						height={489}
						className="z-20 scale-90"
					/>
				</div>
			</div>

			<Section color="bg-magenta">
				<span className="flex flex-col items-center gap-[0.5rem]">
					<h1 className="text-center text-3xl font-bold">
						On average, a university spends
					</h1>
					<h1 className="decoration-saffron text-5xl font-bold underline underline-offset-4">
						$1,670,687
					</h1>
					<h1 className="text-3xl font-bold">on software annually.</h1>
				</span>
				<h1 className="px-[2rem] text-center text-5xl font-bold underline-offset-4">
					Real students & staff, real problems
					<span className="text-saffron">.</span>
				</h1>
				<Marquee autoFill={true} pauseOnHover={true}>
					{static_data.negativeTestimonials.map((testimonial) => (
						<Testimonial
							key={testimonial.name}
							imageSrc={testimonial.imageSrc}
							name={testimonial.name}
							description={testimonial.description}
							relation={testimonial.relation}
						/>
					))}
				</Marquee>
			</Section>

			<Section color="bg-magnolia">
				<h1 className="px-[2rem] text-center text-5xl font-bold">
					The <span className={`${dmSerif.className}`}>Dormly</span> Difference
					<span className="text-saffron">.</span>
				</h1>
				<Image
					className="px-[2rem]"
					src="/landingPage/macbook.png"
					alt="macbook"
					width={640}
					height={640}
				/>
				<span className="flex flex-row flex-wrap justify-center gap-[2rem]">
					<span className="flex flex-col items-center gap-[0.5rem]">
						<h1 className="text-4xl font-bold">
							Replace<span className="text-saffron">.</span>
						</h1>
						<p className="w-[20rem] text-xl">
							Our software suite is designed to replace and improve software in
							use at higher-education institutions.
						</p>
					</span>
					<span className="flex flex-col items-center gap-[0.5rem]">
						<h1 className="text-4xl font-bold">
							Integrate<span className="text-saffron">.</span>
						</h1>
						<p className="w-[20rem] text-xl">
							Provide a consistent, streamlined user experience and reduce time
							spent navigating between separate sites and apps.
						</p>
					</span>
					<span className="flex flex-col items-center gap-[0.5rem]">
						<h1 className="text-4xl font-bold">
							Consolidate<span className="text-saffron">.</span>
						</h1>
						<p className="w-[20rem] text-xl">
							Cut costs and confusion by consolidating to a single, easy to use
							system.
						</p>
					</span>
				</span>
			</Section>

			<Section color="bg-magenta">
				<h1 className="px-[2rem] text-center text-5xl font-bold">
					Built for higher-education institutions
					<span className="text-saffron">.</span>
				</h1>
				<div className="flex flex-row flex-wrap items-center justify-center gap-[3rem]">
					<div className="">
						<GraduationCap width={72} height={72} />
					</div>
					<div className="flex flex-col">
						<h1 className="text-3xl font-bold">
							The right tool for the job
							<span className="text-saffron">.</span>
						</h1>
						<p className="w-[20rem] text-xl">
							Dormly&apos;s software is built for higher-education institutions,
							nothing else. No more morphing general-purpose software into
							something it&apos;s not.
						</p>
					</div>
				</div>
			</Section>

			<Section color="bg-magnolia">
				<h1 className="px-[2rem] text-center text-5xl font-bold">
					The team behind <span className={`${dmSerif.className}`}>Dormly</span>
					<span className="text-saffron">.</span>
				</h1>
				<h1 className="px-[2rem] text-center text-3xl font-bold">
					Our software is built by students and staff, for students and staff.
				</h1>
				<div className="flex max-w-[75rem] flex-row flex-wrap justify-center gap-[2rem]">
					{static_data.employees.map((employee) => (
						<Bio
							key={employee.name}
							imageSrc={employee.imageSrc}
							name={employee.name}
							description={employee.description}
							position={employee.position}
						/>
					))}
				</div>
			</Section>
		</div>
	);
}
