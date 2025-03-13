import { Section } from "../components/Section";

export default function Software() {
	return (
		<Section color="bg-magnolia">
			<div className="flex flex-row flex-wrap justify-center gap-[2rem]">
				<div className="flex flex-col items-center">
					<h1 className="text-4xl font-bold">OnCampus</h1>
					<h1 className="w-[30rem] text-center text-3xl font-bold">
						The student app built for the modern day.
					</h1>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-4xl font-bold">ResLife</h1>
					<h1 className="w-[30rem] text-center text-3xl font-bold">
						Simplify your resident management software.
					</h1>
				</div>
			</div>
		</Section>
	);
}
