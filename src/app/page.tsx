import Image from "next/image";
import { dmSerif, geistSans, inter } from "./ui/fonts";

export default function Home() {
  return (
    <div className="">
      <div className={`relative flex ${inter.className}`}>
        <div className="py-48 animate-marquee whitespace-nowrap">
          <span className="mx-4 text-7xl opacity-55">University</span>
          <span className="mx-4 text-7xl opacity-55">Students</span>
          <span className="mx-4 text-7xl opacity-55">Faculty</span>
          <span className="mx-4 text-7xl opacity-55">Administrators</span>
          <span className="mx-4 text-7xl opacity-55">Staff</span>
          <span className="mx-4 text-7xl opacity-55">Campus</span>
        </div>
        <div className="absolute top-0 py-48 animate-marquee2 whitespace-nowrap">
          <span className="mx-4 text-7xl opacity-55">Students</span>
          <span className="mx-4 text-7xl opacity-55">University</span>
          <span className="mx-4 text-7xl opacity-55">Faculty</span>
          <span className="mx-4 text-7xl opacity-55">Administrators</span>
          <span className="mx-4 text-7xl opacity-55">Staff</span>
          <span className="mx-4 text-7xl opacity-55">Campus</span>
        </div>

        <h1 className={`text-7xl absolute z-10 py-[7rem] left-[11.7rem]`}>Connect your</h1>
        <h1 className={`${inter.className} intense-shadow my-48 left-40 bg-magnolia backdrop-blur-3xl backdrop-opacity-80 px-8 font-bold underline decoration-saffron underline-offset-4 text-7xl absolute`}>Everything</h1>
        <h1 className="text-7xl absolute z-10 py-[17.5rem] left-[11.9rem]">With <span className={`${dmSerif.className}`}>Dormly<span className="text-saffron">.</span></span></h1>

        <Image src="/phone.svg" alt="phone" width={243} height={489} className="absolute z-30 left-[60rem] top-10" />
        <Image src="/phone.svg" alt="phone" width={243} height={489} className="absolute z-20 left-[53rem] scale-90 top-10" />
        <Image src="/phone.svg" alt="phone" width={243} height={489} className="absolute z-20 left-[67rem] scale-90 top-10" />
      </div>
    </div>
  );
}
