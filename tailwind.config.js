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
        primary: "#0A1929", // Fond principal plus foncé avec une teinte bleue
        secondary: "#0F2942", // Fond secondaire assorti
        accent: "#00A3D5", // Votre bleu principal
        text: {
          primary: "#E2E2E2", // Texte principal
          secondary: "#94A3B8", // Texte secondaire avec une teinte bleue
        },
        hover: "#163A5C", // Couleur de survol assortie
      },
      backgroundColor: {
        "accent-light": "#00B3E5", // Version plus claire pour les hovers
        "accent-dark": "#008DBB", // Version plus foncée pour les états actifs
      },
    },
  },
  plugins: [],
};
