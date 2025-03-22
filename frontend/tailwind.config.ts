import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        yuiop: {
          50: "#f5f6ff",
          100: "#eceeff",
          200: "#d9deff",
          300: "#b8c2ff",
          400: "#a4b2ff",
          500: "#8e9dff",
          600: "#7889ff",
          700: "#6271ff",
          800: "#4d5ce6",
          900: "#3947cc",
          950: "#232c99",
        },
      },
    },
  },
};
