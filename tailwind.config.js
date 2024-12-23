/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212", // Fond principal
        secondary: "#1E1E1E", // Fond des cartes
        accent: "#60A5FA", // Nouvelle couleur d'accent (bleu ciel)
        text: {
          primary: "#E2E2E2", // Texte principal
          secondary: "#909090", // Texte secondaire
        },
        hover: "#2A2A2A", // Couleur de survol
      },
      fontFamily: {
        // Style 1: Moderne et léger
        sans: ["Inter", "sans-serif"],

        // Style 2: Élégant
        display: ["Montserrat", "sans-serif"],

        // Style 3: Bold et impactant
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
