/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      white : "#fff",
      black : {300 : "rgba(0,0,0,0.3)"}
    },
    backgroundImage: {
      slide2_bg1: "url('/images/p2-1.jpg')",
      slide2_bg2: "url('/images/p2-2.jpg')",
      slide3_bg1: "url('/images/p3-1.jpg')",
      slide3_bg2: "url('/images/p3-2.jpg')",
      slide1_bg1: "url('/images/p1-1.jpg')",
      slide1_bg2: "url('/images/p1-2.jpg')",
      slide1_bg3: "url('/images/p1-3.jpg')"
    },
    fontSize:{
      "14":"14px",
      "12": "12px"
    }
  },
  plugins: [],
}

