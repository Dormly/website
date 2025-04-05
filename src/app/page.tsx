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
import { Bio } from "./components/PeopleCards";
import { Section } from "./components/Section";
import { Heading, SubHeading } from "@/app/components/TextTypes";

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
import Link from "next/link";

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
			<div className="flex flex-wrap justify-center gap-[2rem] py-10 pb-20 sm:py-30 md:gap-[6rem] md:py-30 lg:gap-[8rem] lg:py-30">
				<div className="flex flex-col items-center justify-center py-[2rem] text-5xl md:text-6xl lg:text-7xl">
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
				<Image
					src="/landingPage/OnCampusTriage.png"
					alt="phone"
					width={512}
					height={512}
					className="px-8"
				/>
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
				<Heading period>Students & staff aren&apos;t satisfied</Heading>
				<Marquee autoFill={true}>
					{static_data.negativeTestimonials.map((testimonial) => (
						<Testimonial
							key={testimonial.name}
							name={testimonial.name}
							description={testimonial.description}
							relation={testimonial.relation}
							imageSrc={testimonial.imageSrc}
						/>
					))}
				</Marquee>
			</Section>

			{/* Solution */}
			<Section color="bg-magnolia">
				<Heading period>
					The <span className={`${dmSerif.className}`}>Dormly</span> Solution
				</Heading>
				<Link href={"/software"}>
					<div className="text-saffron flex flex-row font-bold">
						<p>Software</p>
						<ChevronRight />
					</div>
				</Link>

				<Image
					className="px-8"
					src="/landingPage/Duo.png"
					alt="macbook"
					width={720}
					height={640}
				/>
				<div className="flex flex-row flex-wrap justify-center gap-8">
					<div className="rounded-x flex flex-col items-center gap-4 p-6">
						<SubHeading period>Replace</SubHeading>
						<p className="w-96 text-xl leading-8 text-pretty">
							Dormly&apos;s software suite replaces and improves software at
							higher-education institutions.
						</p>
					</div>
					<div className="flex flex-col items-center gap-4 rounded-xl p-6">
						<SubHeading period>Integrate</SubHeading>
						<p className="w-96 text-xl leading-8 text-pretty">
							Dormly provides a consistent, streamlined user experience. Reduce
							frustration caused by navigating between separate sites and apps.
						</p>
					</div>
					<div className="flex flex-col items-center gap-4 rounded-xl p-6">
						<SubHeading period>Consolidate</SubHeading>
						<p className="w-96 text-xl leading-8 text-pretty">
							Cut costs and confusion by consolidating to a single, easy to use
							system.
						</p>
					</div>
				</div>
			</Section>

			{/* Differentiation */}
			<Section color="bg-magenta">
				<Heading period>
					The <span className={`${dmSerif.className}`}>Dormly</span> Difference
				</Heading>
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
										institutions, nothing else. Our competitors morph general-purpose
										software into something it's not."
									icon={<GraduationCap size={48} />}
								/>
							</CarouselItem>
							<CarouselItem>
								<CarouselCard
									title="Customization at the forefront"
									description="Dormly's is created with customization in mind. Create a unique and unified campus identity for your institution."
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
				<Heading period>
					The <span className={`${dmSerif.className}`}>Dormly</span> Team
				</Heading>
				<Link href={"/contact"}>
					<div className="text-saffron flex flex-row font-bold">
						<p>Get in Touch</p>
						<ChevronRight />
					</div>
				</Link>
				<Image
					className="px-8"
					src="/landingPage/teamCore.JPG"
					alt="team"
					width={720}
					height={640}
				/>
				<SubHeading>
					Built by students and staff, for students and staff.
				</SubHeading>
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
				<Link href={"/about"}>
					<div className="text-saffron flex flex-row font-bold">
						<p>+ 2 more</p>
						<ChevronRight />
					</div>
				</Link>
			</Section>
		</>
	);
}
