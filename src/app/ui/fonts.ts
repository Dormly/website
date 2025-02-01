import { DM_Serif_Display, Geist } from "next/font/google";

export const dmSerif = DM_Serif_Display({
    variable: "--font-dm-serif",
    weight: "400",
    subsets: ["latin"],
    display: "swap"
});

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});