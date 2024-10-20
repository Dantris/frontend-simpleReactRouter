/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E2F0FF", // Lighter shade of your primary color
          200: "#B0D4FF",
          300: "#80B9FF",
          400: "#4D9EFF",
          500: "#1A84FF", // The main primary color
          600: "#176FCC",
          700: "#1359A3", // The one you're using
          800: "#0E457D",
          900: "#09305A",
        },
      },
    },
  },
  plugins: [],
};
