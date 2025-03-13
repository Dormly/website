import { DM_Serif_Display, Inter } from "next/font/google";

export const dmSerif = DM_Serif_Display({
	variable: "--font-dm-serif",
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});
