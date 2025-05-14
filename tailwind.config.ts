/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    extend: {
      screens: {
        sm: "640px", // Small devices (phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops)
        xl: "1280px", // Extra large devices (desktops)
        "2xl": "1536px", // 2X large devices (large desktops)

        // You can add custom breakpoints if needed
        "3xl": "1920px", // Example of additional breakpoint

        // Height-based breakpoints (less common but possible)
        tall: { raw: "(min-height: 800px)" },
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
