import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        minsk: {
          "50": "#eef2ff",
          "100": "#e1e7fe",
          "200": "#c8d4fd",
          "300": "#a7b6fa",
          "400": "#848ff5",
          "500": "#666bee",
          "600": "#5049e2",
          "700": "#443bc7",
          "800": "#3833a0",
          "900": "#343285",
          "950": "#1e1c4a",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
