import Image from "next/image";
import { dmSerif, geistSans, inter } from "./ui/fonts";

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <div className="flex-row justify-center align-middle">
        <div className="md:px-16 lg:px-36 xl:px-60 flex justify-between h-dvh z-10 relative">
          <div className="flex flex-col justify-center">
            <h1 className={`py-5 text-7xl`}>Connect your</h1>
            <h1 className={`${inter.className} font-bold underline decoration-saffron underline-offset-4 text-7xl`}>Everything</h1>
            <h1 className="py-5 text-7xl">With <span className={`${dmSerif.className}`}>Dormly<span className="text-saffron">.</span></span></h1>
          </div>
          <div className="hidden md:flex flex-row">
            <Image src="/phone.svg" alt="phone" width={243} height={489} className="scale-90" />
            <Image src="/phone.svg" alt="phone" width={243} height={489} className="" />
            <Image src="/phone.svg" alt="phone" width={243} height={489} className="scale-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
