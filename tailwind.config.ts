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
        background: "#0A0D17",
        foreground: "#FFFFFF",
        primary: "#A604F2",
        secondary: "#763AF5",
      },
    },
  },
  plugins: [],
} satisfies Config;
