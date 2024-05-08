import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        "blue-accent" : "#138CD3",
        "blue-light" : "#1B4965",
        "blue-dark" : "#003049",
        "text" : "#122F40",
        "gray-bg" : "#F9F9F9",
      }
    },
  },
  plugins: [],
};
export default config;
