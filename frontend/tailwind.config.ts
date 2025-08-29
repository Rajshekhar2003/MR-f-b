import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode:"selector",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

export default config;
