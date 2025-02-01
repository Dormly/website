import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        magenta: "#8534EE",
        saffron: "#E8AA00",
        violet: "#E980FC",
        night: "#0D160B",
        magnolia: "#FCF7FF"
      }
    },
  },
  plugins: [],
} satisfies Config;
