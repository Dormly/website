'use client';

import Image from "next/image";
import Link from "next/link";
import { dmSerif, geistSans, inter } from "@/app/ui/fonts";

export default function Custom404() {
    return (
        <div className={`relative flex flex-col items-center min-h-screen ${inter.className}`}>
            <h1 className={`font-bold text-4xl text-center p-4`}>Something Went Wrong</h1>
            <Image className={`p-4 w-50 h-50`} src="/dormly.svg" alt="logo" width={1} height={1} />
            <h1 className={`font-bold text-4xl text-center p-4`}>Error 404</h1>
            <h1 className={`text-4xl p-4 text-center`}>The page you are looking for does not exist!</h1>
            <Link href="/" className={`font-bold text-black ${inter.className} bg-saffron hover:bg-magenta hover:text-white transition-all duration-200 px-8 py-1.5 rounded-full`}>Return Home</Link>
        </div>
    )
}