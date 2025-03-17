"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { dmSerif } from "./ui/fonts";
import {
	ChevronLeft,
	ChevronRight,
	GraduationCap,
	Paintbrush,
} from "lucide-react";
import { Testimonial } from "./components/Testimonial";
import { Bio } from "./components/Bio";
import { Section } from "./components/Section";

import static_data from "./static_data.json";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CarouselCard } from "@/app/components/CarouselCard";

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
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const scrollNext = () => {
		if (!api) {
			return;
		}

		api.scrollNext();
	};

	const scrollPrev = () => {
		if (!api) {
			return;
		}

		api.scrollPrev();
	};

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
		<>
			{/* Landing Graphic */}
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

			{/* Attention Grabber */}
			<Section color="bg-magenta">
				<span className="flex flex-col items-center gap-[0.5rem]">
					<h1 className="px-[2rem] text-center text-3xl font-bold">
						Without <span className={`${dmSerif.className}`}>Dormly</span>,
						universities spend
					</h1>
					<h1 className="decoration-saffron text-center text-5xl font-bold underline underline-offset-4">
						$1,670,687
					</h1>
					<h1 className="px-[2rem] text-center text-3xl font-bold">
						annually on 45 different types of software.
					</h1>
				</span>
				<h1 className="px-[2rem] text-center text-5xl font-bold underline-offset-4">
					Real students & staff, real problems
					<span className="text-saffron">.</span>
				</h1>
				<Marquee autoFill={true}>
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

			{/* Differentiation */}
			<Section color="bg-magnolia">
				<h1 className="px-8 text-center text-5xl font-bold">
					The <span className={`${dmSerif.className}`}>Dormly</span> Difference
					<span className="text-saffron">.</span>
				</h1>
				<Image
					className="px-8"
					src="/landingPage/macbook.png"
					alt="macbook"
					width={640}
					height={640}
				/>
				<div className="flex flex-row flex-wrap justify-center gap-8">
					<div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6">
						<h1 className="text-4xl font-bold">
							Replace<span className="text-saffron">.</span>
						</h1>
						<p className="w-96 text-xl leading-8 text-pretty">
							Our software suite is designed to replace and improve software in
							use at higher-education institutions.
						</p>
					</div>
					<div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6">
						<h1 className="text-4xl font-bold">
							Integrate<span className="text-saffron">.</span>
						</h1>
						<p className="w-96 text-xl leading-8 text-pretty">
							Provide a consistent, streamlined user experience. Reduce
							frustration caused by navigating between separate sites and apps.
						</p>
					</div>
					<div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6">
						<h1 className="text-4xl font-bold">
							Consolidate<span className="text-saffron">.</span>
						</h1>
						<p className="w-96 text-xl leading-8 text-pretty">
							Cut costs and confusion by consolidating to a single, easy to use
							system.
						</p>
					</div>
				</div>
			</Section>

			{/* Differentiation Continued */}
			<Section color="bg-magenta">
				<h1 className="px-8 text-center text-5xl font-bold">
					How we do things differently<span className="text-saffron">.</span>
				</h1>
				<div className="w-full max-w-250 min-w-96 px-8">
					<Carousel
						opts={{ loop: true }}
						setApi={setApi}
						plugins={[
							Autoplay({
								delay: 5000,
								stopOnMouseEnter: true,
							}),
						]}
						onMouseLeave={() => {
							api?.plugins().autoplay.play();
						}}>
						<CarouselContent>
							<CarouselItem>
								<CarouselCard
									title="Built for higher-education institutions"
									description="Dormly's software is purpose-built for higher-education
										institutions, nothing else. No more morphing general-purpose
										software into something it's not."
									icon={<GraduationCap size={48} />}
								/>
							</CarouselItem>
							<CarouselItem>
								<CarouselCard
									title="Customization at the forefront"
									description="Dormly's is created with customization in mind. No longer struggle to create a unique and unified campus identity for your institution."
									icon={<Paintbrush size={48} />}
								/>
							</CarouselItem>
						</CarouselContent>

						<div className="flex flex-row justify-between gap-4 pt-4">
							<button
								className="text-magenta rounded-lg bg-white p-2 hover:cursor-pointer"
								onClick={scrollPrev}>
								<ChevronLeft
									strokeWidth={3}
									style={{ width: "1rem", height: "1rem" }}
								/>
							</button>
							<p>
								{current} of {count}
							</p>
							<button
								className="text-magenta rounded-lg bg-white p-2 hover:cursor-pointer"
								onClick={scrollNext}>
								<ChevronRight
									strokeWidth={3}
									style={{ width: "1rem", height: "1rem" }}
								/>
							</button>
						</div>
					</Carousel>
				</div>
			</Section>

			{/* Team */}
			<Section color="bg-magnolia">
				<h1 className="px-8 text-center text-5xl font-bold">
					The team behind <span className={`${dmSerif.className}`}>Dormly</span>
					<span className="text-saffron">.</span>
				</h1>
				<h1 className="px-8 text-center text-3xl font-bold">
					Built by students and staff, for students and staff.
				</h1>
				<div className="grid justify-center gap-8 px-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
					{static_data.employees.map((employee) => (
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
