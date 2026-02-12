/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  safelist: [
    // Fondos de botones
    "bg-blue-600",
    "bg-blue-700",
    "hover:bg-blue-700",
    "bg-green-600",
    "bg-green-700",
    "hover:bg-green-700",
    "bg-purple-600",
    "bg-purple-700",
    "hover:bg-purple-700",
    "bg-pink-600",
    "bg-pink-700",
    "hover:bg-pink-700",
    "bg-indigo-600",
    "bg-indigo-700",
    "hover:bg-indigo-700",
    "bg-teal-600",
    "bg-teal-700",
    "hover:bg-teal-700",

    // Gradientes
    "from-blue-50",
    "from-blue-500",
    "from-blue-700",
    "from-green-50",
    "from-green-500",
    "from-green-700",
    "from-purple-50",
    "from-purple-500",
    "from-purple-700",
    "from-pink-50",
    "from-pink-500",
    "from-pink-700",
    "from-indigo-50",
    "from-indigo-500",
    "from-indigo-700",
    "from-teal-50",
    "from-teal-500",
    "from-teal-700",

    "to-blue-700",
    "to-green-700",
    "to-purple-700",
    "to-pink-700",
    "to-indigo-700",
    "to-teal-700",

    // Bordes
    "border-blue-100",
    "border-blue-500",
    "border-green-100",
    "border-green-500",
    "border-purple-100",
    "border-purple-500",
    "border-pink-100",
    "border-pink-500",
    "border-indigo-100",
    "border-indigo-500",
    "border-teal-100",
    "border-teal-500",

    // Fondos de íconos
    "bg-blue-100",
    "hover:bg-blue-600",
    "bg-green-100",
    "hover:bg-green-600",
    "bg-purple-100",
    "hover:bg-purple-600",
    "bg-pink-100",
    "hover:bg-pink-600",
    "bg-indigo-100",
    "hover:bg-indigo-600",
    "bg-teal-100",
    "hover:bg-teal-600",

    // Textos
    "text-blue-600",
    "hover:text-blue-600",
    "text-green-600",
    "hover:text-green-600",
    "text-purple-600",
    "hover:text-purple-600",
    "text-pink-600",
    "hover:text-pink-600",
    "text-indigo-600",
    "hover:text-indigo-600",
    "text-teal-600",
    "hover:text-teal-600",
  ],
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
