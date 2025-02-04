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
        background: "var(--background)",
        charcoal: "#232222",
        cream: "#F5F2EF",
        current: "current",
        "dark-grey": "#3C3C3C",
        "fern-green": "#106B68",
        foreground: "var(--foreground)",
        green: "#003F3A",
        "green-tint": "rgba(0,63,51,0.40)",
        grey: "#C7C7C7",
        "light-grey": "#E3E3E3",
        orange: "#FCA949",
        "sky-blue": "#D8EEF6",
        transparent: "transparent",
        white: "#FFFFFF",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: 'inherit',
              fontWeight: '300',
              letterSpacing: '-0.01em',
              lineHeight: '1',
            },
            h2: {
              color: 'inherit',
              fontWeight: '300',
              letterSpacing: '-0.01em',
              lineHeight: '1',
            },
            h3: {
              color: 'inherit',
              fontWeight: '600',
              letterSpacing: '0',
              lineHeight: '1',
            },
            h4: {
              color: 'inherit',
              fontWeight: '300',
              letterSpacing: '-0.01em',
              lineHeight: '1.05',
            },
            h5: {
              color: 'inherit',
              fontWeight: '300',
              letterSpacing: '-0.01em',
              lineHeight: '1.10',
            },
            h6: {
              color: 'inherit',
              fontWeight: '300',
              letterSpacing: '-0.01em',
              lineHeight: '1',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
