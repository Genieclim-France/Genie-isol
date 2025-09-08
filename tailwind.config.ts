/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8000",
        secondary: "#333333",
        tertiary: "#F9F9F9",
        hover: "#FF7F02",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        emOne: ["var(--font-em-one)", "sans-serif"],
        kollektif: ["var(--font-kollektif)", "sans-serif"],
      },
      screens: {
        xl: "1400px",
        "3xl": "2240px",
      },
      keyframes: {
        fill93: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "93%",
          },
        },
        fill100: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        fill95: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "95%",
          },
        },
        fill85: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "85%",
          },
        },
        fill90: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "90%",
          },
        },
      },
      animation: {
        "fill-93": "fill93 2s ease-in-out forwards",
        "fill-100": "fill100 2s ease-in-out forwards",
        "fill-95": "fill95 2s ease-in-out forwards",
        "fill-85": "fill85 2s ease-in-out forwards",
        "fill-90": "fill90 2s ease-in-out forwards",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  daisyui: {
    themes: ["light"],
  },
} satisfies Config;
