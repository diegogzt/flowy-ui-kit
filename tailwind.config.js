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

        // Paleta Tropical (Alto Contraste - Imagen)
        "tropical-primary": "#1F6357",
        "tropical-secondary": "#4DB8A8",
        "tropical-accent": "#F4E9CD",
        "tropical-dark": "#0D3D34",
        "tropical-light": "#E8F5F3",
        "tropical-beige": "#D4C5A0",
        "tropical-yellow": "#F4C430",
        "tropical-orange": "#F39C12",

        // Paleta Neon (Alto Contraste)
        "neon-primary": "#FF00FF",
        "neon-secondary": "#00FFFF",
        "neon-accent": "#FFFF00",
        "neon-dark": "#000000",
        "neon-light": "#FFFFFF",
        "neon-beige": "#333333",

        // Paleta Fire (Fuego - Alto Contraste)
        "fire-primary": "#FF4500",
        "fire-secondary": "#FFD700",
        "fire-accent": "#FF6347",
        "fire-dark": "#8B0000",
        "fire-light": "#FFF8DC",
        "fire-beige": "#FFE4B5",

        // Paleta Electric (Eléctrica - Alto Contraste)
        "electric-primary": "#00D9FF",
        "electric-secondary": "#FF0080",
        "electric-accent": "#FFFF00",
        "electric-dark": "#0A0E27",
        "electric-light": "#F0F8FF",
        "electric-beige": "#B0E0E6",

        // Paleta Mint Fresh (De la imagen - fila superior)
        "mint-primary": "#1F756E", // Oscuro verde azulado
        "mint-secondary": "#5DDCC3", // Aqua claro
        "mint-accent": "#C8E86C", // Verde lima
        "mint-dark": "#163D39",
        "mint-light": "#F2FFF9",
        "mint-beige": "#E8F5F2",
        "mint-cream": "#EFEFEF", // Gris claro de la imagen
        "mint-lime": "#D3EB70", // Variación del verde lima

        // Paleta Purple Storm (De la imagen - fila inferior)
        "purple-primary": "#5856D6", // Morado/azul
        "purple-secondary": "#475569", // Gris azulado
        "purple-accent": "#E5E7EB", // Gris muy claro
        "purple-dark": "#1E293B", // Negro azulado
        "purple-light": "#F8FAFC",
        "purple-beige": "#CBD5E1",
        "purple-slate": "#64748B", // Gris intermedio

        // Paleta Meadow (Variación de mint con más contraste)
        "meadow-primary": "#0F5C55", // Verde oscuro profundo
        "meadow-secondary": "#7CE5D3", // Turquesa brillante
        "meadow-accent": "#E1F542", // Amarillo-verde neón
        "meadow-dark": "#083832",
        "meadow-light": "#F0FFF4",
        "meadow-beige": "#D1F2EB",
        "meadow-soft": "#B8F1E8", // Aqua suave

        // Paleta Twilight (Variación de purple con más tonos)
        "twilight-primary": "#4338CA", // Índigo intenso
        "twilight-secondary": "#6B7280", // Gris neutro
        "twilight-accent": "#F3F4F6", // Casi blanco
        "twilight-dark": "#111827", // Negro puro
        "twilight-light": "#FAFBFC",
        "twilight-beige": "#E5E7EB",
        "twilight-indigo": "#6366F1", // Índigo más claro

        // Paleta Vista (Basada en los colores del logo)
        "vista-primary": "#d56a34", // Naranja terracota del logo
        "vista-secondary": "#3f170e", // Marrón oscuro del logo
        "vista-accent": "#f9f7e9", // Crema claro del logo
        "vista-dark": "#2a0f08", // Marrón más oscuro
        "vista-light": "#fdfcf5", // Blanco crema
        "vista-beige": "#f4f1e0", // Beige suave
        "vista-terracotta": "#c45a28", // Terracota más intenso
        "vista-cream": "#f0ead6", // Crema medio
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
