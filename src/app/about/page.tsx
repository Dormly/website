import Image from "next/image";
import { dmSerif, geistSans, inter } from "../ui/fonts";

export default function About() {
  return (
    <div className="">
      <div className={`relative flex ${inter.className}`}>

        <h1 className={`text-7xl absolute z-10 py-[7rem] left-[11.7rem]`}>A Higher Education</h1>
        <h1 className={`${inter.className} intense-shadow my-48 left-40 bg-magnolia backdrop-blur-3xl backdrop-opacity-80 px-8 font-bold underline decoration-saffron underline-offset-4 text-7xl absolute`}>Hub</h1>
        <h1 className="text-7xl absolute z-10 py-[17.5rem] left-[11.9rem]">With an Attitude</h1>
        <h1 className="text-7xl absolute z-10 py-[17.5rem] left-[11.9rem]">At Dormly, we believe that both the student and administrator experience should be</h1>
      </div>
    </div>
  );
}
