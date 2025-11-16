import { useState } from "react";

interface Reservation {
  id: string;
  title: string;
  time: string;
  color: string;
}

interface CalendarReservationsProps {
  palette?: "warm" | "cool" | "contrast" | "monochrome" | "sunset" | "nature" | "ocean" | "lavender" | "tropical" | "neon" | "fire" | "electric" | "mint" | "purple" | "meadow" | "twilight";
}

const CalendarReservations = ({ palette = "warm" }: CalendarReservationsProps) => {
  const [currentDate] = useState(new Date(2025, 10, 1)); // Noviembre 2025
  
  // Colores según la paleta
  const paletteColors = {
    warm: {
      primary: "#FFB5A7",
      secondary: "#FCD5CE",
      accent: "#F8EDEB",
      highlight: "#F9DCC4",
      dark: "#FEC89A",
    },
    cool: {
      primary: "#A7C7E7",
      secondary: "#B8E0D2",
      accent: "#D6EADF",
      highlight: "#C9E4DE",
      dark: "#95D5B2",
    },
    contrast: {
      primary: "#FF6B6B",
      secondary: "#4ECDC4",
      accent: "#FFE66D",
      highlight: "#95E1D3",
      dark: "#F38181",
    },
    monochrome: {
      primary: "#2C3E50",
      secondary: "#34495E",
      accent: "#7F8C8D",
      highlight: "#95A5A6",
      dark: "#BDC3C7",
    },
    sunset: {
      primary: "#FF6B9D",
      secondary: "#FFA07A",
      accent: "#FFD700",
      highlight: "#FFB6C1",
      dark: "#C73866",
    },
    nature: {
      primary: "#2D6A4F",
      secondary: "#52B788",
      accent: "#95D5B2",
      highlight: "#74C69D",
      dark: "#1B4332",
    },
    ocean: {
      primary: "#006D77",
      secondary: "#83C5BE",
      accent: "#EDF6F9",
      highlight: "#FFDDD2",
      dark: "#003D47",
    },
    lavender: {
      primary: "#9D84B7",
      secondary: "#C8B6E2",
      accent: "#E8DFF5",
      highlight: "#D4C5E0",
      dark: "#6B5B8E",
    },
    tropical: {
      primary: "#1F6357",
      secondary: "#4DB8A8",
      accent: "#F4E9CD",
      highlight: "#F4C430",
      dark: "#F39C12",
    },
    neon: {
      primary: "#FF00FF",
      secondary: "#00FFFF",
      accent: "#FFFF00",
      highlight: "#00FF00",
      dark: "#FF0080",
    },
    fire: {
      primary: "#FF4500",
      secondary: "#FFD700",
      accent: "#FF6347",
      highlight: "#FFA500",
      dark: "#8B0000",
    },
    electric: {
      primary: "#00D9FF",
      secondary: "#FF0080",
      accent: "#FFFF00",
      highlight: "#00FF7F",
      dark: "#8A2BE2",
    },
    mint: {
      primary: "#1F756E",
      secondary: "#5DDCC3",
      accent: "#C8E86C",
      highlight: "#D3EB70",
      dark: "#EFEFEF",
    },
    purple: {
      primary: "#5856D6",
      secondary: "#475569",
      accent: "#E5E7EB",
      highlight: "#64748B",
      dark: "#1E293B",
    },
    meadow: {
      primary: "#0F5C55",
      secondary: "#7CE5D3",
      accent: "#E1F542",
      highlight: "#B8F1E8",
      dark: "#083832",
    },
    twilight: {
      primary: "#4338CA",
      secondary: "#6B7280",
      accent: "#F3F4F6",
      highlight: "#6366F1",
      dark: "#111827",
    },
  };

  const colors = paletteColors[palette];

  // Reservas del mes (simuladas basadas en la imagen)
  const reservations: { [key: number]: Reservation[] } = {
    1: [
      { id: "1", title: "Alice", time: "11:45", color: colors.primary },
      { id: "2", title: "Randalls Party", time: "13:45", color: colors.accent },
      { id: "3", title: "Alice", time: "14:15", color: colors.primary },
    ],
    2: [
      { id: "4", title: "Alice", time: "11:15", color: colors.primary },
      { id: "5", title: "Randalls Party", time: "14:15", color: colors.accent },
      { id: "6", title: "El Invernadero", time: "18:00", color: colors.secondary },
      { id: "7", title: "Alice", time: "17:45", color: colors.primary },
      { id: "8", title: "Randalls Party", time: "19:45", color: colors.accent },
      { id: "9", title: "El Invernadero", time: "19:00", color: colors.secondary },
      { id: "10", title: "Randalls Party", time: "20:15", color: colors.accent },
    ],
    7: [
      { id: "11", title: "Alice", time: "13:00", color: colors.primary },
      { id: "12", title: "El Invernadero", time: "18:00", color: colors.secondary },
      { id: "13", title: "Randalls Party", time: "19:30", color: colors.accent },
    ],
    8: [
      { id: "14", title: "El Invernadero", time: "16:00", color: colors.secondary },
      { id: "15", title: "Randalls Party", time: "18:15", color: colors.accent },
      { id: "16", title: "El Invernadero", time: "20:00", color: colors.secondary },
    ],
    9: [
      { id: "17", title: "Alice", time: "13:00", color: colors.primary },
      { id: "18", title: "El Invernadero", time: "18:00", color: colors.secondary },
      { id: "19", title: "Randalls Party", time: "19:15", color: colors.accent },
      { id: "20", title: "El Invernadero", time: "19:15", color: colors.secondary },
    ],
    14: [
      { id: "21", title: "El Invernadero", time: "10:00", color: colors.secondary },
      { id: "22", title: "El Invernadero", time: "14:00", color: colors.secondary },
      { id: "23", title: "El Invernadero", time: "15:00", color: colors.secondary },
      { id: "24", title: "El Invernadero", time: "18:00", color: colors.secondary },
      { id: "25", title: "Randalls Party", time: "18:15", color: colors.accent },
      { id: "26", title: "El Invernadero", time: "20:00", color: colors.secondary },
      { id: "27", title: "Randalls Party", time: "20:15", color: colors.accent },
    ],
    15: [
      { id: "28", title: "El Invernadero", time: "14:00", color: colors.secondary },
      { id: "29", title: "El Invernadero", time: "15:00", color: colors.secondary },
      { id: "30", title: "El Invernadero", time: "18:00", color: colors.secondary },
    ],
    16: [
      { id: "31", title: "El Invernadero", time: "12:00", color: colors.secondary },
      { id: "32", title: "Randalls Party", time: "12:15", color: colors.accent },
    ],
    18: [
      { id: "33", title: "El Invernadero", time: "20:00", color: colors.secondary },
    ],
    19: [
      { id: "34", title: "El Invernadero", time: "20:00", color: colors.secondary },
    ],
    22: [
      { id: "35", title: "El Invernadero", time: "16:00", color: colors.secondary },
      { id: "36", title: "El Invernadero", time: "18:00", color: colors.secondary },
      { id: "37", title: "Randalls Party", time: "12:15", color: colors.accent },
    ],
    28: [
      { id: "38", title: "Randalls Party", time: "12:15", color: colors.accent },
    ],
    29: [
      { id: "39", title: "Randalls Party", time: "12:15", color: colors.accent },
    ],
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleDateString("es-ES", { month: "long", year: "numeric" });

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="min-h-[120px]"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayReservations = reservations[day] || [];
    days.push(
      <div
        key={day}
        className="min-h-[120px] border border-gray-200 p-2 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="text-sm font-semibold text-gray-700 mb-1">{day}</div>
        <div className="space-y-1">
          {dayReservations.slice(0, 3).map((reservation) => (
            <div
              key={reservation.id}
              className="text-xs px-2 py-1 rounded text-white truncate"
              style={{ backgroundColor: reservation.color }}
            >
              <div className="font-medium">{reservation.time}</div>
              <div className="opacity-90">{reservation.title}</div>
            </div>
          ))}
          {dayReservations.length > 3 && (
            <div className="text-xs text-gray-500 px-2">
              +{dayReservations.length - 3} más
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 capitalize">{monthName}</h3>
      </div>
      
      <div className="grid grid-cols-7 gap-0 border border-gray-200">
        {["dom", "lun", "mar", "mié", "jue", "vie", "sáb"].map((day) => (
          <div
            key={day}
            className="bg-gray-100 border-b border-gray-200 py-2 text-center text-sm font-semibold text-gray-700"
          >
            {day}
          </div>
        ))}
        {days}
      </div>

      <div className="mt-6 flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.primary }}></div>
          <span className="text-sm text-gray-700">Alice</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.secondary }}></div>
          <span className="text-sm text-gray-700">El Invernadero</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.accent }}></div>
          <span className="text-sm text-gray-700">Randalls Party</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarReservations;
