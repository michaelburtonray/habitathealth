import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#232222",
        cream: "#F5F2EF",
        current: "currentColor",
        "dark-grey": "#3C3C3C",
        "fern-green": "#106B68",
        green: "#003F3A",
        "green-tint": "rgba(0,63,51,0.40)",
        grey: "#C7C7C7",
        "light-grey": "#E3E3E3",
        orange: "#FCA949",
        "sky-blue": "#D8EEF6",
        transparent: "transparent",
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["gelica", "serif"],
        sans: ['var(--font-gellix)', "sans-serif"],
      }
    },
  },
  plugins: [typography],
} satisfies Config;
