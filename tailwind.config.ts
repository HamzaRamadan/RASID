import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#071923",
        card: "#0d2a2e",
        accent: "#18c4c0",
        tealDark: "#08282e",
      }
    }
  },
  plugins: [],
} satisfies Config;
