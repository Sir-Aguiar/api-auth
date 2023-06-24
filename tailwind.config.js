/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "jwt-purple": "#D63AFF",
        "jwt-ping": "#FF46C5",
        "jwt-blue": "#00B9F1",
        "jwt-black": "#434343",
        "white-back": "#F9F9F9",
      },
      fontFamily: {
        Plex: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

