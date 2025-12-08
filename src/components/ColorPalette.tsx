import { useState } from "react";

interface ColorItem {
  name: string;
  value: string;
  textColor?: string;
}

interface ColorPaletteProps {
  colors: ColorItem[];
  title?: string;
}

export function ColorPalette({ colors, title }: ColorPaletteProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyColor = async (colorValue: string) => {
    try {
      await navigator.clipboard.writeText(colorValue);
      setCopiedColor(colorValue);
      setTimeout(() => setCopiedColor(null), 1500);
    } catch (err) {
      console.error("Error al copiar el color:", err);
    }
  };

  // Determina si el texto debe ser oscuro o claro basado en el color de fondo
  const getContrastTextColor = (hexColor: string): string => {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#1a1a1a" : "#ffffff";
  };

  return (
    <div className="mb-6">
      {title && (
        <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
          {title}
        </h4>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => handleCopyColor(color.value)}
            className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            title={`Clic para copiar ${color.value}`}
          >
            <div
              className="h-16 w-full flex items-center justify-center"
              style={{ backgroundColor: color.value }}
            >
              {copiedColor === color.value ? (
                <span
                  className="text-sm font-bold animate-pulse"
                  style={{ color: getContrastTextColor(color.value) }}
                >
                  ✓ Copiado
                </span>
              ) : (
                <span
                  className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: getContrastTextColor(color.value) }}
                >
                  {color.value}
                </span>
              )}
            </div>
            <div className="bg-white px-2 py-1.5 text-center border-t">
              <p className="text-xs font-medium text-gray-700 truncate">
                {color.name}
              </p>
              <p className="text-xs text-gray-400 font-mono">{color.value}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Definiciones de paletas de colores
export const palettes = {
  flowy: [
    { name: "Primary", value: "#e46f20" },
    { name: "Secondary", value: "#fcb72b" },
    { name: "Accent", value: "#cc5803" },
    { name: "Dark", value: "#582b11" },
    { name: "Light", value: "#f6e6c4" },
    { name: "Beige", value: "#e7d7c9" },
    { name: "White", value: "#ffffff" },
    { name: "Error", value: "#cc0303" },
    { name: "Gray", value: "#767676" },
  ],
  warm: [
    { name: "Primary", value: "#FFB5A7" },
    { name: "Secondary", value: "#FCD5CE" },
    { name: "Accent", value: "#F8EDEB" },
    { name: "Dark", value: "#E8B4B8" },
    { name: "Light", value: "#FFF5F3" },
    { name: "Beige", value: "#FFEEF0" },
  ],
  cool: [
    { name: "Primary", value: "#A7C7E7" },
    { name: "Secondary", value: "#B8E0D2" },
    { name: "Accent", value: "#D6EADF" },
    { name: "Dark", value: "#89B5D6" },
    { name: "Light", value: "#E8F4F8" },
    { name: "Beige", value: "#D4E7ED" },
  ],
  contrast: [
    { name: "Primary", value: "#FF6B6B" },
    { name: "Secondary", value: "#4ECDC4" },
    { name: "Accent", value: "#FFE66D" },
    { name: "Dark", value: "#F38181" },
    { name: "Light", value: "#FFF9E5" },
    { name: "Beige", value: "#FFE5E5" },
  ],
  monochrome: [
    { name: "Primary", value: "#2C3E50" },
    { name: "Secondary", value: "#34495E" },
    { name: "Accent", value: "#7F8C8D" },
    { name: "Dark", value: "#1A252F" },
    { name: "Light", value: "#ECF0F1" },
    { name: "Beige", value: "#BDC3C7" },
  ],
  sunset: [
    { name: "Primary", value: "#FF6B9D" },
    { name: "Secondary", value: "#FFA07A" },
    { name: "Accent", value: "#FFD700" },
    { name: "Dark", value: "#C73866" },
    { name: "Light", value: "#FFF4E6" },
    { name: "Beige", value: "#FFE4E1" },
  ],
  nature: [
    { name: "Primary", value: "#2D6A4F" },
    { name: "Secondary", value: "#52B788" },
    { name: "Accent", value: "#95D5B2" },
    { name: "Dark", value: "#1B4332" },
    { name: "Light", value: "#D8F3DC" },
    { name: "Beige", value: "#B7E4C7" },
  ],
  ocean: [
    { name: "Primary", value: "#006D77" },
    { name: "Secondary", value: "#83C5BE" },
    { name: "Accent", value: "#EDF6F9" },
    { name: "Dark", value: "#003D47" },
    { name: "Light", value: "#FFDDD2" },
    { name: "Beige", value: "#E29578" },
  ],
  lavender: [
    { name: "Primary", value: "#9D84B7" },
    { name: "Secondary", value: "#C8B6E2" },
    { name: "Accent", value: "#E8DFF5" },
    { name: "Dark", value: "#6B5B8E" },
    { name: "Light", value: "#F7F3FC" },
    { name: "Beige", value: "#E5D9F2" },
  ],
  tropical: [
    { name: "Primary", value: "#1F6357" },
    { name: "Secondary", value: "#4DB8A8" },
    { name: "Accent", value: "#F4E9CD" },
    { name: "Dark", value: "#0D3D34" },
    { name: "Light", value: "#E8F5F3" },
    { name: "Beige", value: "#D4C5A0" },
    { name: "Yellow", value: "#F4C430" },
    { name: "Orange", value: "#F39C12" },
  ],
  neon: [
    { name: "Primary", value: "#FF00FF" },
    { name: "Secondary", value: "#00FFFF" },
    { name: "Accent", value: "#FFFF00" },
    { name: "Dark", value: "#000000" },
    { name: "Light", value: "#FFFFFF" },
    { name: "Beige", value: "#333333" },
  ],
  fire: [
    { name: "Primary", value: "#FF4500" },
    { name: "Secondary", value: "#FFD700" },
    { name: "Accent", value: "#FF6347" },
    { name: "Dark", value: "#8B0000" },
    { name: "Light", value: "#FFF8DC" },
    { name: "Beige", value: "#FFE4B5" },
  ],
  electric: [
    { name: "Primary", value: "#00D9FF" },
    { name: "Secondary", value: "#FF0080" },
    { name: "Accent", value: "#FFFF00" },
    { name: "Dark", value: "#0A0E27" },
    { name: "Light", value: "#F0F8FF" },
    { name: "Beige", value: "#B0E0E6" },
  ],
  mint: [
    { name: "Primary", value: "#1F756E" },
    { name: "Secondary", value: "#5DDCC3" },
    { name: "Accent", value: "#C8E86C" },
    { name: "Dark", value: "#163D39" },
    { name: "Light", value: "#F2FFF9" },
    { name: "Beige", value: "#E8F5F2" },
    { name: "Cream", value: "#EFEFEF" },
    { name: "Lime", value: "#D3EB70" },
  ],
  purple: [
    { name: "Primary", value: "#5856D6" },
    { name: "Secondary", value: "#475569" },
    { name: "Accent", value: "#E5E7EB" },
    { name: "Dark", value: "#1E293B" },
    { name: "Light", value: "#F8FAFC" },
    { name: "Beige", value: "#CBD5E1" },
    { name: "Slate", value: "#64748B" },
  ],
  meadow: [
    { name: "Primary", value: "#0F5C55" },
    { name: "Secondary", value: "#7CE5D3" },
    { name: "Accent", value: "#E1F542" },
    { name: "Dark", value: "#083832" },
    { name: "Light", value: "#F0FFF4" },
    { name: "Beige", value: "#D1F2EB" },
    { name: "Soft", value: "#B8F1E8" },
  ],
  twilight: [
    { name: "Primary", value: "#4338CA" },
    { name: "Secondary", value: "#6B7280" },
    { name: "Accent", value: "#F3F4F6" },
    { name: "Dark", value: "#111827" },
    { name: "Light", value: "#FAFBFC" },
    { name: "Beige", value: "#E5E7EB" },
    { name: "Indigo", value: "#6366F1" },
  ],
  vista: [
    { name: "Primary", value: "#d56a34" },
    { name: "Secondary", value: "#3f170e" },
    { name: "Accent", value: "#f9f7e9" },
    { name: "Dark", value: "#2a0f08" },
    { name: "Light", value: "#fdfcf5" },
    { name: "Beige", value: "#f4f1e0" },
    { name: "Terracotta", value: "#c45a28" },
    { name: "Cream", value: "#f0ead6" },
  ],
};

export default ColorPalette;
