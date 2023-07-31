/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#258bf8",
        blue: "#305FED",
        navyBlueLight: "#1B3D79",
        navyBlue: "#0F2A53",
        navyBlueDark: "#0B1B32",
        lightGray: "#F9FAFB",
        greenLight: "#42CA89",
      },

      fontSize: {
        f12: "12px",
        f14: "14px",
        f15: "15px",
        f16: "16px",
        f18: "18px",
        f20: "20px",
        f26: "26px",
      },

      boxShadow: {
        one: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
