import type { Config } from "tailwindcss";

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
        foreground: "var(--foreground)",
      },
      fontFamily: {
        abril: ['"Abril Fatface"', "serif"],
        garamond: ['"EB Garamond"', "serif"],
        ibmplex: ['"IBM Plex Serif"', "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
