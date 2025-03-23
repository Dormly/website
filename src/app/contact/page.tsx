import React from "react";

import { Section } from "../components/Section";
import { Heading, SubHeading, BodyText } from "../components/TextTypes";
import { Contact } from "../components/PeopleCards";
import static_data from "@/app/static_data.json";

export default function GetInTouch() {
	return (
		<>
			<Section color="bg-magnolia">
				<Heading period>Get in touch</Heading>
				<SubHeading period>Thank you for your interest in Dormly</SubHeading>
				<BodyText>
					We&apos;re building better software, and we&apos;re just getting
					started.
				</BodyText>
				<BodyText>
					If you&apos;d like to get in touch, please contact Zack.
				</BodyText>
				<div className="grid grid-cols-1 justify-center gap-8 px-8">
					{static_data.contacts.map((contact) => (
						<Contact
							key={contact.name}
							imageSrc={contact.imageSrc}
							name={contact.name}
							email={contact.email}
							phone={contact.phone}
							position={contact.position}
							linkedinLink={contact.linkedinLink}
						/>
					))}
				</div>
			</Section>
		</>
	);
}
