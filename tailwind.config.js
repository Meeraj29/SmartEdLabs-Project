/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-fade":
          "linear-gradient(270deg, rgba(242, 242, 242, 0.1) 0%, #F2F2F2 100%)",
      },
      animation: {
        // Optimized speeds for a professional, continuous feel
        "marquee-left": "marquee-left 20s linear infinite",
        "marquee-right": "marquee-right 20s linear infinite",
        "marquee-infinite": "marquee-infinite 20s linear infinite",
        "slide-from-top": "slideFromTop 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        staircase: "staircase 0.8s ease-out forwards",
      },
      keyframes: {
        // Continuous loop: Moves from 0 to -50%
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "marquee-infinite": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        staircase: {
          "0%": {
            opacity: "0",
            clipPath: "polygon(0 0, 0 0, 0 0, 0 0)",
            transform: "scale(1.1) translate(-20px, -20px)",
          },
          "100%": {
            opacity: "1",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transform: "scale(1) translate(0, 0)",
          },
        },
        slideFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontFamily: {
        russo: ["var(--font-russo)"],

        inter: ["var(--font-inter)"],

      },
    },
  },
  plugins: [],
};
