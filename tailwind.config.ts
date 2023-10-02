import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darknavy: "#020c1b",
        navy: "#0a192f",
        lightnavy: "#112240",
        lightestnavy: "#233554",
        darkslate: "#495670",
        slate: "#8892b0",
        lightslate: "#a8b2d1",
        lightestslate: "#ccd6f6",
        white: "#e6f1ff",
        pink: "#f57dff",
        green: "#64ffda",
        blue: "#57cbff",
      },
    },
    fontFamily: {
      sans: "Fira Sans, sans-serif",
      mono: "Space Mono, monospace",
    },
    screens: {
      "xs": "400px",
      ...defaultTheme.screens
    }
  },
  plugins: [],
};
export default config;
