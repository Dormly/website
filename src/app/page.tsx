import Image from "next/image";
import { dmSerif, inter } from "./ui/fonts";

export default function Home() {
  return (
      <div className={`${inter.className} flex justify-center items-center`}>
        <div className={`${inter.className} p-10 flex justify-between items-center flex-col phones:flex-row gap-8`}>

          <h1 className="text-center text-5xl leading-[4rem] md:text-7xl max-w-[29rem] md:leading-[6rem]">Connect your <span className="font-bold underline decoration-saffron underline-offset-4">Everything</span> with <span className={`${dmSerif.className}`}>Dormly<span className="text-saffron">.</span></span></h1>

          <div className="flex w-fit">
            <Image src="/phone.svg" alt="phone" width={243} height={489} className="phones:scale-90 scale-[75%] phones:translate-x-[80px] translate-x-[100px] w-1/3 min-w-44" />
            <Image src="/phone.svg" alt="phone" width={243} height={489} className="z-10 phones:scale-100 scale-[85%] w-1/3 min-w-48" />
            <Image src="/phone.svg" alt="phone" width={243} height={489} className="phones:scale-90 scale-[75%] phones:-translate-x-[80px] -translate-x-[100px] w-1/3 min-w-44" />
          </div>
        </div>
      </div>
  );
}
