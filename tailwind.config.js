module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta de colores Flhour UI Kit (Figma Design)
        primary: "#e46f20", // Zest
        secondary: "#fcb72b", // My Sin
        accent: "#cc5803", // Red Stage
        dark: "#582b11", // Jambalaya
        light: "#f6e6c4", // Sidecar
        beige: "#e7d7c9", // Bone
        white: "#ffffff",
        // Colores semánticos
        success: "#f6e6c4", // Sidecar (success background)
        warning: "#ffe5cc", // Tequila
        error: "#cc0303", // Guardsman Red
        info: "#e5f3ff", // Pippin/Solitude
        // Grises
        gray: "#767676", // Boulder

        // Paleta Pastel Cálida
        "warm-primary": "#FFB5A7",
        "warm-secondary": "#FCD5CE",
        "warm-accent": "#F8EDEB",
        "warm-dark": "#E8B4B8",
        "warm-light": "#FFF5F3",
        "warm-beige": "#FFEEF0",

        // Paleta Pastel Fría
        "cool-primary": "#A7C7E7",
        "cool-secondary": "#B8E0D2",
        "cool-accent": "#D6EADF",
        "cool-dark": "#89B5D6",
        "cool-light": "#E8F4F8",
        "cool-beige": "#D4E7ED",

        // Paleta de Contraste
        "contrast-primary": "#FF6B6B",
        "contrast-secondary": "#4ECDC4",
        "contrast-accent": "#FFE66D",
        "contrast-dark": "#F38181",
        "contrast-light": "#FFF9E5",
        "contrast-beige": "#FFE5E5",

        // Paleta Monocromática
        "mono-primary": "#2C3E50",
        "mono-secondary": "#34495E",
        "mono-accent": "#7F8C8D",
        "mono-dark": "#1A252F",
        "mono-light": "#ECF0F1",
        "mono-beige": "#BDC3C7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        // Semantic Typography
        "heading-1": ["45.2px", { lineHeight: "76.8px", fontWeight: "700" }],
        "heading-2": ["31.1px", { lineHeight: "51.2px", fontWeight: "700" }],
        "heading-3": ["19.1px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-4": ["18.6px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-5": ["12.5px", { lineHeight: "21.25px", fontWeight: "700" }],
        "heading-6": ["9.9px", { lineHeight: "17.15px", fontWeight: "700" }],
        body: ["14.9px", { lineHeight: "25.6px", fontWeight: "400" }],
        "body-small": ["12.9px", { lineHeight: "22.4px", fontWeight: "400" }],
      },
      spacing: {
        "item-spacing-s": "24px",
        "item-spacing": "15px",
      },
    },
  },
  plugins: [],
};
