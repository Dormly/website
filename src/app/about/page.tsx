import Image from "next/image";
import TitleContentBox from "../components/TitleContentBox";
import DescriptionText from "../components/DescriptionText"
import { dmSerif, geistSans, inter } from "../ui/fonts";

export default function About() {
  return (
    <div className="">
      <div className={`relative flex-col justify-center ${inter.className}`}>
        <TitleContentBox title={"Who are we"} content={
          <DescriptionText description="We're a group of students tired of antiquated technologies being implemented at colleges, and have a passion for innovation."></DescriptionText>
        }></TitleContentBox>
        <TitleContentBox title={"What is Dormly"} content={
          <DescriptionText description="Dormly is our approach for managing students on campus. Dormly is an umbrella organization that holds various smaller products such as ResLife and OnCampus."></DescriptionText>
        }></TitleContentBox>
      </div>
    </div>
  );
}