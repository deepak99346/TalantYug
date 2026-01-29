// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        smooth: "cubic-bezier(.2,.9,.2,1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleFade: {
          "0%": { opacity: "0", transform: "scale(.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(.2,.9,.2,1) both",
        fadeIn: "fadeIn 0.4s ease both",
        scaleFade: "scaleFade 0.5s cubic-bezier(.2,.9,.2,1) both",
        slideLeft: "slideLeft 0.6s ease-out both",
        slideRight: "slideRight 0.6s ease-out both",
      },
    },
  },
  plugins: [],
}
