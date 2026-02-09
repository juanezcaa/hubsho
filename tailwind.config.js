/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatMobile: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(-1deg)" },
        },
        growBar: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        fillProgress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        // float with delays (para que quede como tu CSS original)
        float0: "float 3s ease-in-out infinite",
        float05: "float 3s ease-in-out infinite 0.5s",
        float1: "float 3s ease-in-out infinite 1s",
        float15: "float 3s ease-in-out infinite 1.5s",

        // mobile float (tu original: 3.5s y delay 2s)
        floatMobile: "floatMobile 3.5s ease-in-out infinite 2s",

        // barras / progress
        growBar: "growBar 1s ease-out both",
        fillProgress: "fillProgress 2s ease-out both",

        // status dot
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
