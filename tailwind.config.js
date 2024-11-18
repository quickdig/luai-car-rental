/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#dd2b1c"
        },
        secondary: {
          DEFAULT: "#141414"
        }
      }
    },
  },
  plugins: [],
}

