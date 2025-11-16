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

        // Paleta Sunset (Atardecer)
        "sunset-primary": "#FF6B9D",
        "sunset-secondary": "#FFA07A",
        "sunset-accent": "#FFD700",
        "sunset-dark": "#C73866",
        "sunset-light": "#FFF4E6",
        "sunset-beige": "#FFE4E1",

        // Paleta Nature (Naturaleza)
        "nature-primary": "#2D6A4F",
        "nature-secondary": "#52B788",
        "nature-accent": "#95D5B2",
        "nature-dark": "#1B4332",
        "nature-light": "#D8F3DC",
        "nature-beige": "#B7E4C7",

        // Paleta Ocean (Océano)
        "ocean-primary": "#006D77",
        "ocean-secondary": "#83C5BE",
        "ocean-accent": "#EDF6F9",
        "ocean-dark": "#003D47",
        "ocean-light": "#FFDDD2",
        "ocean-beige": "#E29578",

        // Paleta Lavender (Lavanda)
        "lavender-primary": "#9D84B7",
        "lavender-secondary": "#C8B6E2",
        "lavender-accent": "#E8DFF5",
        "lavender-dark": "#6B5B8E",
        "lavender-light": "#F7F3FC",
        "lavender-beige": "#E5D9F2",
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
