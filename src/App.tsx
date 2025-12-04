import { useState } from "react";
import {
  Button,
  Alert,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Toggle,
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  Badge,
  Avatar,
  Spinner,
  ProgressBar,
  Link,
  Table,
  List,
  Tabs,
  Calendar,
  Auth,
  CalendarReservations,
  ColorPalette,
  palettes,
} from "./components";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Verificar si el usuario ya está autenticado en esta sesión
    return sessionStorage.getItem("flowy_authenticated") === "true";
  });
  const [toggleState, setToggleState] = useState(false);

  if (!isAuthenticated) {
    return (
      <Auth
        onAuthenticated={() => setIsAuthenticated(true)}
        passwordHash={import.meta.env.VITE_AUTH_PASSWORD}
        appName={import.meta.env.VITE_APP_NAME}
      />
    );
  }

  const tableColumns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Cliente" },
    { key: "date", header: "Fecha" },
    {
      key: "status",
      header: "Estado",
      render: (value: string) => {
        let variant: "primary" | "secondary" | "accent" | "outline" = "primary";
        if (value === "Pendiente") variant = "secondary";
        if (value === "Cancelada") variant = "outline";
        return <Badge variant={variant}>{value}</Badge>;
      },
    },
  ];

  const tableData = [
    {
      id: "#001",
      name: "Juan Pérez",
      date: "16/11/2025",
      status: "Confirmada",
    },
    {
      id: "#002",
      name: "María García",
      date: "17/11/2025",
      status: "Pendiente",
    },
    {
      id: "#003",
      name: "Carlos López",
      date: "18/11/2025",
      status: "Cancelada",
    },
  ];

  const tabItems = [
    {
      id: "day",
      label: "Día",
      content: <p className="text-dark">Vista del día seleccionado</p>,
    },
    {
      id: "week",
      label: "Semana",
      content: <p className="text-dark">Vista semanal</p>,
    },
    {
      id: "month",
      label: "Mes",
      content: <p className="text-dark">Vista mensual</p>,
    },
    {
      id: "year",
      label: "Año",
      content: <p className="text-dark">Vista anual</p>,
    },
  ];

  const listItems = [
    "Elemento de lista 1",
    "Elemento de lista 2",
    "Elemento de lista 3",
    "Elemento de lista 4",
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="px-8 py-12 border-b-2 border-beige">
        <h1 className="text-primary text-7xl font-bold mb-4">Flhour UI Kit</h1>
        <p className="text-lg text-dark">
          Componentes de interfaz para el gestor de reservas Flhour
        </p>
      </div>

      {/* Índice de Paletas */}
      <nav className="px-8 py-12 border-b-2 border-beige bg-gradient-to-br from-beige to-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            🎨 Índice de Paletas de Colores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Original Flowy */}
            <a
              href="#flowy"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌊</span>
                <h3 className="font-bold text-lg text-dark">Flowy Original</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-primary border-2 border-white shadow-sm"
                  title="#e46f20"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-secondary border-2 border-white shadow-sm"
                  title="#fcb72b"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-accent border-2 border-white shadow-sm"
                  title="#cc5803"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-dark border-2 border-white shadow-sm"
                  title="#2c1810"
                ></div>
              </div>
            </a>

            {/* Warm Pastel */}
            <a
              href="#warm"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-warm-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌸</span>
                <h3 className="font-bold text-lg text-dark">Warm Pastel</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-warm-primary border-2 border-white shadow-sm"
                  title="#FFB5A7"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-warm-secondary border-2 border-white shadow-sm"
                  title="#FCD5CE"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-warm-accent border-2 border-white shadow-sm"
                  title="#F8EDEB"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-warm-dark border-2 border-white shadow-sm"
                  title="#8B4513"
                ></div>
              </div>
            </a>

            {/* Cool Pastel */}
            <a
              href="#cool"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-cool-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">❄️</span>
                <h3 className="font-bold text-lg text-dark">Cool Pastel</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-cool-primary border-2 border-white shadow-sm"
                  title="#A7C7E7"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-cool-secondary border-2 border-white shadow-sm"
                  title="#B8E0D2"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-cool-accent border-2 border-white shadow-sm"
                  title="#D6EADF"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-cool-dark border-2 border-white shadow-sm"
                  title="#2C3E50"
                ></div>
              </div>
            </a>

            {/* Contrast */}
            <a
              href="#contrast"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-contrast-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold text-lg text-dark">Contrast</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-contrast-primary border-2 border-white shadow-sm"
                  title="#FF6B6B"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-contrast-secondary border-2 border-white shadow-sm"
                  title="#4ECDC4"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-contrast-accent border-2 border-white shadow-sm"
                  title="#FFE66D"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-contrast-dark border-2 border-white shadow-sm"
                  title="#1A535C"
                ></div>
              </div>
            </a>

            {/* Monochrome */}
            <a
              href="#monochrome"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-monochrome-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚫</span>
                <h3 className="font-bold text-lg text-dark">Monochrome</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-monochrome-primary border-2 border-white shadow-sm"
                  title="#2C3E50"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-monochrome-secondary border-2 border-white shadow-sm"
                  title="#34495E"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-monochrome-accent border-2 border-white shadow-sm"
                  title="#7F8C8D"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-monochrome-dark border-2 border-white shadow-sm"
                  title="#1C2833"
                ></div>
              </div>
            </a>

            {/* Sunset */}
            <a
              href="#sunset"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-sunset-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌅</span>
                <h3 className="font-bold text-lg text-dark">Sunset</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-sunset-primary border-2 border-white shadow-sm"
                  title="#FF6B9D"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-sunset-secondary border-2 border-white shadow-sm"
                  title="#FFA07A"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-sunset-accent border-2 border-white shadow-sm"
                  title="#FFD700"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-sunset-dark border-2 border-white shadow-sm"
                  title="#8B4789"
                ></div>
              </div>
            </a>

            {/* Nature */}
            <a
              href="#nature"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-nature-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌿</span>
                <h3 className="font-bold text-lg text-dark">Nature</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-nature-primary border-2 border-white shadow-sm"
                  title="#2D6A4F"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-nature-secondary border-2 border-white shadow-sm"
                  title="#52B788"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-nature-accent border-2 border-white shadow-sm"
                  title="#95D5B2"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-nature-dark border-2 border-white shadow-sm"
                  title="#1B4332"
                ></div>
              </div>
            </a>

            {/* Ocean */}
            <a
              href="#ocean"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-ocean-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌊</span>
                <h3 className="font-bold text-lg text-dark">Ocean</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-ocean-primary border-2 border-white shadow-sm"
                  title="#006D77"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-ocean-secondary border-2 border-white shadow-sm"
                  title="#83C5BE"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-ocean-accent border-2 border-white shadow-sm"
                  title="#EDF6F9"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-ocean-dark border-2 border-white shadow-sm"
                  title="#023047"
                ></div>
              </div>
            </a>

            {/* Lavender */}
            <a
              href="#lavender"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-lavender-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💜</span>
                <h3 className="font-bold text-lg text-dark">Lavender</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-lavender-primary border-2 border-white shadow-sm"
                  title="#9D84B7"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-lavender-secondary border-2 border-white shadow-sm"
                  title="#C8B6E2"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-lavender-accent border-2 border-white shadow-sm"
                  title="#E8DFF5"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-lavender-dark border-2 border-white shadow-sm"
                  title="#5D4E6D"
                ></div>
              </div>
            </a>

            {/* Tropical */}
            <a
              href="#tropical"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-tropical-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌴</span>
                <h3 className="font-bold text-lg text-dark">Tropical</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-tropical-primary border-2 border-white shadow-sm"
                  title="#1F6357"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-tropical-secondary border-2 border-white shadow-sm"
                  title="#4DB8A8"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-tropical-yellow border-2 border-white shadow-sm"
                  title="#F4C430"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-tropical-orange border-2 border-white shadow-sm"
                  title="#F39C12"
                ></div>
              </div>
            </a>

            {/* Neon */}
            <a
              href="#neon"
              className="block p-4 rounded-lg border-2 border-neon-primary hover:border-neon-secondary hover:shadow-lg hover:shadow-neon-primary/30 transition-all bg-black"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="font-bold text-lg text-neon-primary">Neon</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-neon-primary border-2 border-black shadow-lg shadow-neon-primary/50"
                  title="#FF00FF"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-neon-secondary border-2 border-black shadow-lg shadow-neon-secondary/50"
                  title="#00FFFF"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-neon-accent border-2 border-black shadow-lg shadow-neon-accent/50"
                  title="#FFFF00"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-white border-2 border-black shadow-sm"
                  title="#FFFFFF"
                ></div>
              </div>
            </a>

            {/* Fire */}
            <a
              href="#fire"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-fire-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔥</span>
                <h3 className="font-bold text-lg text-dark">Fire</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-fire-primary border-2 border-white shadow-sm"
                  title="#FF4500"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-fire-secondary border-2 border-white shadow-sm"
                  title="#FFD700"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-fire-accent border-2 border-white shadow-sm"
                  title="#FF6347"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-fire-dark border-2 border-white shadow-sm"
                  title="#8B0000"
                ></div>
              </div>
            </a>

            {/* Electric */}
            <a
              href="#electric"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-electric-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="font-bold text-lg text-dark">Electric</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-electric-primary border-2 border-white shadow-sm"
                  title="#00D9FF"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-electric-secondary border-2 border-white shadow-sm"
                  title="#FF0080"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-electric-accent border-2 border-white shadow-sm"
                  title="#FFFF00"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-electric-dark border-2 border-white shadow-sm"
                  title="#0A0E27"
                ></div>
              </div>
            </a>

            {/* Mint Fresh */}
            <a
              href="#mint"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-mint-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌿</span>
                <h3 className="font-bold text-lg text-dark">Mint Fresh</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-mint-primary border-2 border-white shadow-sm"
                  title="#1F756E"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-mint-secondary border-2 border-white shadow-sm"
                  title="#5DDCC3"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-mint-accent border-2 border-white shadow-sm"
                  title="#C8E86C"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-mint-lime border-2 border-white shadow-sm"
                  title="#D3EB70"
                ></div>
              </div>
            </a>

            {/* Purple Storm */}
            <a
              href="#purple"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-purple-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="font-bold text-lg text-dark">Purple Storm</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-purple-primary border-2 border-white shadow-sm"
                  title="#5856D6"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-purple-secondary border-2 border-white shadow-sm"
                  title="#475569"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-purple-slate border-2 border-white shadow-sm"
                  title="#64748B"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-purple-dark border-2 border-white shadow-sm"
                  title="#1E293B"
                ></div>
              </div>
            </a>

            {/* Meadow */}
            <a
              href="#meadow"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-meadow-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🍃</span>
                <h3 className="font-bold text-lg text-dark">Meadow</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-meadow-primary border-2 border-white shadow-sm"
                  title="#0F5C55"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-meadow-secondary border-2 border-white shadow-sm"
                  title="#7CE5D3"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-meadow-accent border-2 border-white shadow-sm"
                  title="#E1F542"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-meadow-soft border-2 border-white shadow-sm"
                  title="#B8F1E8"
                ></div>
              </div>
            </a>

            {/* Twilight */}
            <a
              href="#twilight"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-twilight-primary hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌌</span>
                <h3 className="font-bold text-lg text-dark">Twilight</h3>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-twilight-primary border-2 border-white shadow-sm"
                  title="#4338CA"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-twilight-secondary border-2 border-white shadow-sm"
                  title="#6B7280"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-twilight-indigo border-2 border-white shadow-sm"
                  title="#6366F1"
                ></div>
                <div
                  className="w-10 h-10 rounded-full bg-twilight-dark border-2 border-white shadow-sm"
                  title="#111827"
                ></div>
              </div>
            </a>
          </div>
        </div>
      </nav>

      <div className="px-8 py-12">
        {/* Typography Section */}
        <section
          id="flowy"
          className="mb-16 pb-12 border-b-2 border-beige scroll-mt-8"
        >
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">🌊 Flowy Original</h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.flowy} />
            </div>
          </div>

          {/* Typography */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-primary font-bold mb-4">
              Tipografía
            </h3>
            <div className="bg-white border-2 border-beige rounded-xl p-8 space-y-8">
            <div>
              <h1 className="text-heading-1 text-primary font-bold mb-2">
                Heading 1 - 3rem / 800
              </h1>
            </div>

            <div>
              <h2 className="text-heading-2 text-dark font-bold mb-2">
                Heading 2 - 2rem / 700
              </h2>
            </div>

            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-2">
                Heading 3 - 1.5rem / 600
              </h3>
            </div>

            <div>
              <h4 className="text-heading-4 text-dark font-bold mb-2">
                Heading 4 - 1.25rem / 600
              </h4>
            </div>

            <div>
              <h5 className="text-heading-5 text-dark font-bold mb-2">
                Heading 5 - 1rem / 600
              </h5>
            </div>

            <div>
              <h6 className="text-heading-6 text-dark font-bold mb-2">
                Heading 6 - 0.875rem / 600
              </h6>
            </div>

            <div>
              <p className="text-body text-dark mb-2">
                Párrafo base - 1rem / 400
              </p>
            </div>

            <div>
              <p className="text-body-small text-dark">
                Texto pequeño - 0.875rem / 400
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Botones</h2>
          </div>

          <div className="space-y-8">
            {/* Main Styles */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Estilos principales
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex flex-wrap gap-4">
                <Button variant="primary">Botón Primario</Button>
                <Button variant="secondary">Botón Secundario</Button>
                <Button variant="accent">Botón Acento</Button>
                <Button variant="outline">Botón Outline</Button>
                <Button variant="ghost">Botón Ghost</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tamaños
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 h-48 flex items-center gap-4">
                <Button size="sm" variant="primary">
                  Pequeño
                </Button>
                <Button size="md" variant="primary">
                  Normal
                </Button>
                <Button size="lg" variant="primary">
                  Grande
                </Button>
                <div className="flex-1">
                  <Button className="w-full" variant="primary">
                    Bloque Completo
                  </Button>
                </div>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Estados
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex flex-wrap gap-4">
                <Button variant="primary">Normal</Button>
                <Button variant="primary" disabled>
                  Deshabilitado
                </Button>
                <Button variant="secondary" disabled>
                  Deshabilitado
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">
              Alertas y Notificaciones
            </h2>
          </div>

          <div className="bg-white border-2 border-beige rounded-xl p-8 space-y-4">
            <Alert type="success">✓ Operación completada exitosamente</Alert>
            <Alert type="warning">
              ⚠ Atención: Verifica los datos ingresados
            </Alert>
            <Alert type="error">
              ✗ Ocurrió un error al procesar la solicitud
            </Alert>
            <Alert type="info">ℹ Información importante sobre tu reserva</Alert>
          </div>
        </section>

        {/* Forms Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Formularios</h2>
          </div>

          <div className="space-y-8">
            {/* Basic Inputs */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Inputs básicos
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 max-w-2xl">
                <div className="space-y-6">
                  <Input label="Input de texto" placeholder="Placeholder" />
                  <Input
                    label="Input deshabilitado"
                    placeholder="Valor deshabilitado"
                    disabled
                  />
                  <Textarea
                    label="Textarea"
                    placeholder="Escribe un mensaje..."
                  />
                </div>
              </div>
            </div>

            {/* Select and Options */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Select y opciones
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 max-w-2xl">
                <div className="space-y-6">
                  <Select
                    label="Select"
                    options={[
                      { value: "opt1", label: "Opción 1" },
                      { value: "opt2", label: "Opción 2" },
                      { value: "opt3", label: "Opción 3" },
                    ]}
                  />

                  <div className="space-y-3">
                    <Checkbox label="Checkbox 1" />
                    <Checkbox label="Checkbox 2" defaultChecked />
                    <Radio name="test" label="Radio 1" />
                    <Radio name="test" label="Radio 2" defaultChecked />
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Form */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Formulario completo
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 max-w-2xl">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Nombre" placeholder="" />
                    <Input label="Apellido" placeholder="" />
                  </div>
                  <Input label="Email" type="email" placeholder="" />
                  <Textarea label="Mensaje" placeholder="" rows={5} />
                  <Button className="w-full" variant="primary">
                    Enviar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Tarjetas</h2>
          </div>

          <div className="space-y-8">
            {/* Basic Card */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tarjeta básica
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Título de la tarjeta</CardTitle>
                  </CardHeader>
                  <p className="text-body text-dark mb-4">
                    Contenido de la tarjeta con descripción breve y detalles
                    importantes.
                  </p>
                  <CardFooter>
                    <Button variant="primary" size="sm">
                      Acción
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Cards with Badges */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tarjetas con badges
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <Card>
                  <div className="mb-4">
                    <Badge variant="primary">Nuevo</Badge>
                  </div>
                  <CardTitle>Reserva Pro</CardTitle>
                  <p className="text-body text-dark mb-4">
                    Accede a funciones avanzadas de gestión.
                  </p>
                  <CardFooter>
                    <Button variant="secondary">Actualizar</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Enlaces</h2>
          </div>

          <div className="bg-white border-2 border-beige rounded-xl p-8 space-y-4">
            <Link href="#">Enlace primario</Link>
            <Link href="#" variant="secondary">
              Enlace secundario
            </Link>
            <Link href="#" variant="ghost">
              Enlace ghost
            </Link>
          </div>
        </section>

        {/* Badges Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Badges</h2>
          </div>

          <div>
            <h3 className="text-heading-3 text-primary font-bold mb-4">
              Estilos
            </h3>
            <div className="bg-white border-2 border-beige rounded-xl p-8 flex flex-wrap gap-4">
              <Badge variant="primary">Primario</Badge>
              <Badge variant="secondary">Secundario</Badge>
              <Badge variant="accent">Acento</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </section>

        {/* Lists Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Listas</h2>
          </div>

          <div className="space-y-8">
            {/* Basic List */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Lista básica
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <List items={listItems} />
              </div>
            </div>

            {/* Striped List */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Lista con striping
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <List
                  items={[
                    "Reserva #001 - Confirmada",
                    "Reserva #002 - Pendiente",
                    "Reserva #003 - Cancelada",
                    "Reserva #004 - Confirmada",
                  ]}
                  striped
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Tabs</h2>
          </div>

          <div className="bg-white border-2 border-beige rounded-xl p-8">
            <Tabs items={tabItems} />
          </div>
        </section>

        {/* Tables Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Tablas</h2>
          </div>

          <div className="bg-white border-2 border-beige rounded-xl p-8 overflow-auto">
            <Table columns={tableColumns} data={tableData} />
          </div>
        </section>

        {/* Calendars Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Calendarios</h2>
          </div>

          <div className="space-y-8">
            {/* Small Calendar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tamaño Pequeño
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex justify-center">
                <Calendar size="sm" variant="primary" />
              </div>
            </div>

            {/* Medium Calendar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tamaño Mediano
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex justify-center">
                <Calendar size="md" variant="secondary" />
              </div>
            </div>

            {/* Large Calendar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tamaño Grande
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex justify-center">
                <Calendar size="lg" variant="accent" />
              </div>
            </div>

            {/* Multiple Variants */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Variantes de Color
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex justify-center">
                    <Calendar size="md" variant="primary" />
                  </div>
                  <div className="flex justify-center">
                    <Calendar size="md" variant="secondary" />
                  </div>
                  <div className="flex justify-center">
                    <Calendar size="md" variant="accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar with disabled past dates */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Sin Fechas Pasadas
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex justify-center">
                <Calendar size="md" variant="primary" disablePastDates={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Other Components Section */}
        <section className="pb-12">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Otros Componentes</h2>
          </div>

          <div className="space-y-8">
            {/* Progress Bar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Progress Bar
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 max-w-sm">
                <ProgressBar value={65} showLabel color="bg-primary" />
              </div>
            </div>

            {/* Spinner */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Spinner
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex items-center">
                <Spinner size="md" color="#e46f20" />
              </div>
            </div>

            {/* Avatar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Avatar
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex gap-4">
                <Avatar initials="JP" size="md" />
              </div>
            </div>

            {/* Toggle Switch */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Toggle Switch
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <Toggle
                  label="Habilitar notificaciones"
                  checked={toggleState}
                  onChange={setToggleState}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PALETA PASTEL CÁLIDA */}
        <section className="mb-16 pb-12 border-b-2 border-warm-beige">
          <div className="bg-warm-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-warm-dark">
              🎨 Paleta Pastel Cálida
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-warm-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-warm-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.warm} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-warm-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-warm-beige rounded-xl p-8">
              <CalendarReservations palette="warm" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-warm-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-warm-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-warm-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-warm-secondary text-warm-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-warm-accent text-warm-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Acento
              </button>
              <button className="px-6 py-3 border-2 border-warm-primary text-warm-primary rounded-lg font-semibold hover:bg-warm-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-warm-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-warm-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-warm-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-warm-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-warm-dark opacity-80 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-warm-secondary text-warm-dark rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-warm-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-warm-accent text-warm-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-warm-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-warm-dark opacity-80 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-warm-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-warm-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-warm-secondary text-warm-dark text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-warm-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-warm-dark opacity-80 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-warm-accent text-warm-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-warm-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-warm-beige rounded-xl p-8 space-y-4">
              <div className="bg-warm-light border-l-4 border-warm-primary p-4 rounded">
                <p className="text-warm-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-warm-secondary bg-opacity-20 border-l-4 border-warm-secondary p-4 rounded">
                <p className="text-warm-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-warm-accent bg-opacity-20 border-l-4 border-warm-accent p-4 rounded">
                <p className="text-warm-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA PASTEL FRÍA */}
        <section className="mb-16 pb-12 border-b-2 border-cool-beige">
          <div className="bg-cool-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-cool-dark">
              ❄️ Paleta Pastel Fría
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-cool-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-cool-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.cool} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-cool-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-cool-beige rounded-xl p-8">
              <CalendarReservations palette="cool" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-cool-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-cool-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-cool-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-cool-secondary text-cool-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-cool-accent text-cool-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Acento
              </button>
              <button className="px-6 py-3 border-2 border-cool-primary text-cool-primary rounded-lg font-semibold hover:bg-cool-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-cool-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-cool-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-cool-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cool-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-cool-dark opacity-80 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-cool-secondary text-cool-dark rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-cool-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-cool-accent text-cool-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cool-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-cool-dark opacity-80 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-cool-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-cool-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-cool-secondary text-cool-dark text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cool-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-cool-dark opacity-80 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-cool-accent text-cool-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-cool-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-cool-beige rounded-xl p-8 space-y-4">
              <div className="bg-cool-light border-l-4 border-cool-primary p-4 rounded">
                <p className="text-cool-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-cool-secondary bg-opacity-20 border-l-4 border-cool-secondary p-4 rounded">
                <p className="text-cool-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-cool-accent bg-opacity-20 border-l-4 border-cool-accent p-4 rounded">
                <p className="text-cool-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA DE CONTRASTE */}
        <section
          id="contrast"
          className="mb-16 pb-12 border-b-2 border-contrast-beige scroll-mt-8"
        >
          <div className="bg-contrast-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-contrast-dark">
              ⚡ Paleta de Contraste
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-contrast-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-contrast-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.contrast} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-contrast-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-contrast-beige rounded-xl p-8">
              <CalendarReservations palette="contrast" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-contrast-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-contrast-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-contrast-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-contrast-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-contrast-accent text-contrast-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Acento
              </button>
              <button className="px-6 py-3 border-2 border-contrast-primary text-contrast-primary rounded-lg font-semibold hover:bg-contrast-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-contrast-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-contrast-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-contrast-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-contrast-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-contrast-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-contrast-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-contrast-accent text-contrast-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-contrast-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-contrast-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-contrast-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-contrast-secondary text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-contrast-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-contrast-accent text-contrast-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-contrast-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-contrast-beige rounded-xl p-8 space-y-4">
              <div className="bg-contrast-light border-l-4 border-contrast-primary p-4 rounded">
                <p className="text-gray-800 font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-contrast-secondary bg-opacity-20 border-l-4 border-contrast-secondary p-4 rounded">
                <p className="text-gray-800 font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-contrast-accent bg-opacity-20 border-l-4 border-contrast-accent p-4 rounded">
                <p className="text-gray-800 font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA MONOCROMÁTICA */}
        <section className="pb-12">
          <div className="bg-mono-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-mono-primary">
              ⚫ Paleta Monocromática
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-mono-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-mono-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.monochrome} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-mono-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-mono-beige rounded-xl p-8">
              <CalendarReservations palette="monochrome" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-mono-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-mono-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-mono-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-mono-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-mono-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Acento
              </button>
              <button className="px-6 py-3 border-2 border-mono-primary text-mono-primary rounded-lg font-semibold hover:bg-mono-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-mono-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-mono-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-mono-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-mono-primary mb-2">
                  Reserva Express
                </h4>
                <p className="text-mono-accent mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-mono-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-mono-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-mono-accent text-white text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-mono-primary mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-mono-accent mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-mono-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-mono-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-mono-secondary text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-mono-primary mb-2">
                  Analytics Pro
                </h4>
                <p className="text-mono-accent mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-mono-accent text-white rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-mono-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-mono-beige rounded-xl p-8 space-y-4">
              <div className="bg-mono-light border-l-4 border-mono-primary p-4 rounded">
                <p className="text-mono-primary font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-mono-secondary bg-opacity-20 border-l-4 border-mono-secondary p-4 rounded">
                <p className="text-mono-primary font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-mono-accent bg-opacity-20 border-l-4 border-mono-accent p-4 rounded">
                <p className="text-mono-primary font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA SUNSET (ATARDECER) */}
        <section
          id="sunset"
          className="mb-16 pb-12 border-b-2 border-sunset-beige scroll-mt-8"
        >
          <div className="bg-sunset-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-sunset-dark">
              🌅 Paleta Sunset
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-sunset-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-sunset-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.sunset} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-sunset-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-sunset-beige rounded-xl p-8">
              <CalendarReservations palette="sunset" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-sunset-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-sunset-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-sunset-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-sunset-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-sunset-accent text-sunset-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Acento
              </button>
              <button className="px-6 py-3 border-2 border-sunset-primary text-sunset-primary rounded-lg font-semibold hover:bg-sunset-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-sunset-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-sunset-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-sunset-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-sunset-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-sunset-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-sunset-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-sunset-accent text-sunset-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-sunset-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-sunset-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-sunset-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-sunset-secondary text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-sunset-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-sunset-accent text-sunset-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-sunset-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-sunset-beige rounded-xl p-8 space-y-4">
              <div className="bg-sunset-light border-l-4 border-sunset-primary p-4 rounded">
                <p className="text-sunset-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-sunset-secondary bg-opacity-20 border-l-4 border-sunset-secondary p-4 rounded">
                <p className="text-sunset-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-sunset-accent bg-opacity-20 border-l-4 border-sunset-accent p-4 rounded">
                <p className="text-sunset-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA NATURE (NATURALEZA) */}
        <section
          id="nature"
          className="mb-16 pb-12 border-b-2 border-nature-beige scroll-mt-8"
        >
          <div className="bg-nature-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-nature-dark">
              🌿 Paleta Nature
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-nature-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-nature-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.nature} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-nature-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-nature-beige rounded-xl p-8">
              <CalendarReservations palette="nature" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-nature-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-nature-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-nature-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-nature-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-nature-accent text-nature-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Acento
              </button>
              <button className="px-6 py-3 border-2 border-nature-primary text-nature-primary rounded-lg font-semibold hover:bg-nature-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-nature-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-nature-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-nature-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-nature-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-nature-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-nature-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-nature-accent text-nature-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-nature-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-nature-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-nature-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-nature-secondary text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-nature-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-nature-accent text-nature-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-nature-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-nature-beige rounded-xl p-8 space-y-4">
              <div className="bg-nature-light border-l-4 border-nature-primary p-4 rounded">
                <p className="text-nature-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-nature-secondary bg-opacity-20 border-l-4 border-nature-secondary p-4 rounded">
                <p className="text-nature-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-nature-accent bg-opacity-20 border-l-4 border-nature-accent p-4 rounded">
                <p className="text-nature-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA OCEAN (OCÉANO) */}
        <section
          id="ocean"
          className="mb-16 pb-12 border-b-2 border-ocean-beige scroll-mt-8"
        >
          <div className="bg-ocean-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-ocean-dark">
              🌊 Paleta Ocean
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-ocean-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-ocean-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.ocean} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-ocean-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-ocean-beige rounded-xl p-8">
              <CalendarReservations palette="ocean" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-ocean-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-ocean-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-ocean-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-ocean-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-ocean-accent text-ocean-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Acento
              </button>
              <button className="px-6 py-3 border-2 border-ocean-primary text-ocean-primary rounded-lg font-semibold hover:bg-ocean-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-ocean-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-ocean-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-ocean-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-ocean-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-ocean-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-ocean-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-ocean-accent text-ocean-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-ocean-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-ocean-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-ocean-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-ocean-secondary text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-ocean-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-ocean-accent text-ocean-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-ocean-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-ocean-beige rounded-xl p-8 space-y-4">
              <div className="bg-ocean-light border-l-4 border-ocean-primary p-4 rounded">
                <p className="text-ocean-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-ocean-secondary bg-opacity-20 border-l-4 border-ocean-secondary p-4 rounded">
                <p className="text-ocean-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-ocean-accent bg-opacity-20 border-l-4 border-ocean-accent p-4 rounded">
                <p className="text-ocean-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA LAVENDER (LAVANDA) */}
        <section className="pb-12">
          <div className="bg-lavender-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-lavender-dark">
              💜 Paleta Lavender
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-lavender-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-lavender-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.lavender} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-lavender-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-lavender-beige rounded-xl p-8">
              <CalendarReservations palette="lavender" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-lavender-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-lavender-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-lavender-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-lavender-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-lavender-accent text-lavender-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Acento
              </button>
              <button className="px-6 py-3 border-2 border-lavender-primary text-lavender-primary rounded-lg font-semibold hover:bg-lavender-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-lavender-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-lavender-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-lavender-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-lavender-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-lavender-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-lavender-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-lavender-accent text-lavender-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-lavender-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-lavender-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-lavender-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-lavender-secondary text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-lavender-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-lavender-accent text-lavender-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-lavender-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-lavender-beige rounded-xl p-8 space-y-4">
              <div className="bg-lavender-light border-l-4 border-lavender-primary p-4 rounded">
                <p className="text-lavender-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-lavender-secondary bg-opacity-20 border-l-4 border-lavender-secondary p-4 rounded">
                <p className="text-lavender-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-lavender-accent bg-opacity-20 border-l-4 border-lavender-accent p-4 rounded">
                <p className="text-lavender-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA TROPICAL (ALTO CONTRASTE) */}
        <section
          id="tropical"
          className="mb-16 pb-12 border-b-2 border-tropical-beige scroll-mt-8"
        >
          <div className="bg-tropical-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-tropical-dark">
              🌴 Paleta Tropical
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-tropical-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-tropical-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.tropical} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-tropical-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-tropical-beige rounded-xl p-8">
              <CalendarReservations palette="tropical" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-tropical-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-tropical-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-tropical-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Primario
              </button>
              <button className="px-6 py-3 bg-tropical-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Secundario
              </button>
              <button className="px-6 py-3 bg-tropical-yellow text-tropical-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Amarillo
              </button>
              <button className="px-6 py-3 bg-tropical-orange text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Naranja
              </button>
              <button className="px-6 py-3 border-2 border-tropical-primary text-tropical-primary rounded-lg font-semibold hover:bg-tropical-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-tropical-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-tropical-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-tropical-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-tropical-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-tropical-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-tropical-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-tropical-yellow text-tropical-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-tropical-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-tropical-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-tropical-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-tropical-orange text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-tropical-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-tropical-accent text-tropical-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-tropical-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-tropical-beige rounded-xl p-8 space-y-4">
              <div className="bg-tropical-light border-l-4 border-tropical-primary p-4 rounded">
                <p className="text-tropical-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-tropical-yellow border-l-4 border-tropical-yellow p-4 rounded">
                <p className="text-tropical-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-tropical-accent border-l-4 border-tropical-secondary p-4 rounded">
                <p className="text-tropical-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA NEON (ALTO CONTRASTE) */}
        <section
          id="neon"
          className="mb-16 pb-12 border-b-2 border-neon-beige bg-neon-dark scroll-mt-8"
        >
          <div className="bg-black rounded-lg px-4 py-2 mb-6 inline-block border-2 border-neon-primary">
            <h2 className="text-4xl font-bold text-neon-primary">
              ⚡ Paleta Neon
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-neon-secondary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-black border-2 border-neon-primary rounded-xl p-8">
              <p className="text-sm text-gray-400 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.neon} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-neon-accent font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-black border-2 border-neon-secondary rounded-xl p-8">
              <CalendarReservations palette="neon" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-neon-secondary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-black border-2 border-neon-primary rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-neon-primary text-black rounded-lg font-bold hover:opacity-80 transition-opacity shadow-lg shadow-neon-primary/50">
                Magenta
              </button>
              <button className="px-6 py-3 bg-neon-secondary text-black rounded-lg font-bold hover:opacity-80 transition-opacity shadow-lg shadow-neon-secondary/50">
                Cyan
              </button>
              <button className="px-6 py-3 bg-neon-accent text-black rounded-lg font-bold hover:opacity-80 transition-opacity shadow-lg shadow-neon-accent/50">
                Amarillo
              </button>
              <button className="px-6 py-3 border-2 border-neon-primary text-neon-primary rounded-lg font-bold hover:bg-neon-primary hover:text-black transition-all shadow-lg shadow-neon-primary/30">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-neon-accent font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black border-2 border-neon-primary rounded-xl p-6 shadow-lg shadow-neon-primary/30">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-neon-primary text-black text-sm font-bold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-neon-primary mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-300 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-neon-secondary text-black rounded-lg font-bold hover:opacity-80">
                  Ver más
                </button>
              </div>
              <div className="bg-black border-2 border-neon-secondary rounded-xl p-6 shadow-lg shadow-neon-secondary/30">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-neon-accent text-black text-sm font-bold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-neon-secondary mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-300 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-neon-primary text-black rounded-lg font-bold hover:opacity-80">
                  Explorar
                </button>
              </div>
              <div className="bg-black border-2 border-neon-accent rounded-xl p-6 shadow-lg shadow-neon-accent/30">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-neon-secondary text-black text-sm font-bold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-neon-accent mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-300 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-neon-accent text-black rounded-lg font-bold hover:opacity-80">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-neon-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-black border-2 border-neon-accent rounded-xl p-8 space-y-4">
              <div className="bg-neon-dark border-l-4 border-neon-primary p-4 rounded shadow-lg shadow-neon-primary/20">
                <p className="text-neon-primary font-bold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-neon-dark border-l-4 border-neon-secondary p-4 rounded shadow-lg shadow-neon-secondary/20">
                <p className="text-neon-secondary font-bold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-neon-dark border-l-4 border-neon-accent p-4 rounded shadow-lg shadow-neon-accent/20">
                <p className="text-neon-accent font-bold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA FIRE (FUEGO - ALTO CONTRASTE) */}
        <section
          id="fire"
          className="mb-16 pb-12 border-b-2 border-fire-beige scroll-mt-8"
        >
          <div className="bg-fire-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-fire-dark">
              🔥 Paleta Fire
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-fire-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-fire-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.fire} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-fire-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-fire-beige rounded-xl p-8">
              <CalendarReservations palette="fire" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-fire-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-fire-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-fire-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Naranja Rojo
              </button>
              <button className="px-6 py-3 bg-fire-secondary text-fire-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Dorado
              </button>
              <button className="px-6 py-3 bg-fire-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Tomate
              </button>
              <button className="px-6 py-3 bg-fire-dark text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Rojo Oscuro
              </button>
              <button className="px-6 py-3 border-2 border-fire-primary text-fire-primary rounded-lg font-semibold hover:bg-fire-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-fire-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-fire-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-fire-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-fire-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-fire-secondary text-fire-dark rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-fire-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-fire-accent text-white text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-fire-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-fire-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-fire-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-fire-dark text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-fire-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-fire-secondary text-fire-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-fire-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-fire-beige rounded-xl p-8 space-y-4">
              <div className="bg-fire-light border-l-4 border-fire-primary p-4 rounded">
                <p className="text-fire-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-fire-secondary bg-opacity-20 border-l-4 border-fire-secondary p-4 rounded">
                <p className="text-fire-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-fire-accent bg-opacity-20 border-l-4 border-fire-accent p-4 rounded">
                <p className="text-fire-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA ELECTRIC (ELÉCTRICA - ALTO CONTRASTE) */}
        <section id="electric" className="pb-12 scroll-mt-8">
          <div className="bg-electric-light rounded-lg px-4 py-2 mb-6 inline-block border-2 border-electric-primary">
            <h2 className="text-4xl font-bold text-electric-dark">
              ⚡ Paleta Electric
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-electric-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-electric-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.electric} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-electric-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-electric-beige rounded-xl p-8">
              <CalendarReservations palette="electric" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-electric-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-electric-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-electric-primary text-black rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Cyan Brillante
              </button>
              <button className="px-6 py-3 bg-electric-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Rosa Neón
              </button>
              <button className="px-6 py-3 bg-electric-accent text-black rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Amarillo Eléctrico
              </button>
              <button className="px-6 py-3 bg-electric-dark text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Azul Oscuro
              </button>
              <button className="px-6 py-3 border-2 border-electric-primary text-electric-primary rounded-lg font-semibold hover:bg-electric-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-electric-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-electric-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-electric-primary text-black text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-electric-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-electric-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-electric-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-electric-accent text-black text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-electric-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-electric-primary text-black rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-electric-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-electric-dark text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-electric-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-electric-accent text-black rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-electric-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-electric-beige rounded-xl p-8 space-y-4">
              <div className="bg-electric-light border-l-4 border-electric-primary p-4 rounded">
                <p className="text-electric-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-electric-secondary bg-opacity-20 border-l-4 border-electric-secondary p-4 rounded">
                <p className="text-electric-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-electric-accent bg-opacity-20 border-l-4 border-electric-accent p-4 rounded">
                <p className="text-electric-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA MINT FRESH */}
        <section
          id="mint"
          className="mb-16 pb-12 border-b-2 border-mint-beige scroll-mt-8"
        >
          <div className="bg-mint-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-mint-dark">
              🌿 Paleta Mint Fresh
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-mint-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-mint-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.mint} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-mint-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-mint-beige rounded-xl p-8">
              <CalendarReservations palette="mint" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-mint-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-mint-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-mint-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Verde Azulado
              </button>
              <button className="px-6 py-3 bg-mint-secondary text-mint-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Aqua
              </button>
              <button className="px-6 py-3 bg-mint-accent text-mint-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Lima
              </button>
              <button className="px-6 py-3 bg-mint-lime text-mint-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Verde Claro
              </button>
              <button className="px-6 py-3 border-2 border-mint-primary text-mint-primary rounded-lg font-semibold hover:bg-mint-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-mint-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-mint-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-mint-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-mint-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-mint-secondary text-mint-dark rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-mint-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-mint-accent text-mint-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-mint-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-mint-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-mint-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-mint-lime text-mint-dark text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-mint-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-mint-accent text-mint-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-mint-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-mint-beige rounded-xl p-8 space-y-4">
              <div className="bg-mint-light border-l-4 border-mint-primary p-4 rounded">
                <p className="text-mint-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-mint-secondary bg-opacity-20 border-l-4 border-mint-secondary p-4 rounded">
                <p className="text-mint-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-mint-accent bg-opacity-20 border-l-4 border-mint-accent p-4 rounded">
                <p className="text-mint-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA PURPLE STORM */}
        <section
          id="purple"
          className="mb-16 pb-12 border-b-2 border-purple-beige scroll-mt-8"
        >
          <div className="bg-purple-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-purple-dark">
              ⚡ Paleta Purple Storm
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-purple-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-purple-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.purple} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-purple-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-purple-beige rounded-xl p-8">
              <CalendarReservations palette="purple" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-purple-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-purple-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-purple-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Morado
              </button>
              <button className="px-6 py-3 bg-purple-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Gris Azulado
              </button>
              <button className="px-6 py-3 bg-purple-slate text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Slate
              </button>
              <button className="px-6 py-3 bg-purple-dark text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Oscuro
              </button>
              <button className="px-6 py-3 border-2 border-purple-primary text-purple-primary rounded-lg font-semibold hover:bg-purple-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-purple-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-purple-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-purple-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-purple-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-purple-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-slate text-white text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-purple-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-purple-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-purple-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-dark text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-purple-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-purple-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-purple-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-purple-beige rounded-xl p-8 space-y-4">
              <div className="bg-purple-light border-l-4 border-purple-primary p-4 rounded">
                <p className="text-purple-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-purple-secondary bg-opacity-20 border-l-4 border-purple-secondary p-4 rounded">
                <p className="text-white font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-purple-accent border-l-4 border-purple-slate p-4 rounded">
                <p className="text-purple-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA MEADOW */}
        <section
          id="meadow"
          className="mb-16 pb-12 border-b-2 border-meadow-beige scroll-mt-8"
        >
          <div className="bg-meadow-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-meadow-dark">
              🍃 Paleta Meadow
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-meadow-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-meadow-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.meadow} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-meadow-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-meadow-beige rounded-xl p-8">
              <CalendarReservations palette="meadow" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-meadow-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-meadow-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-meadow-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Verde Profundo
              </button>
              <button className="px-6 py-3 bg-meadow-secondary text-meadow-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Turquesa
              </button>
              <button className="px-6 py-3 bg-meadow-accent text-meadow-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Neón Amarillo
              </button>
              <button className="px-6 py-3 bg-meadow-soft text-meadow-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Aqua Suave
              </button>
              <button className="px-6 py-3 border-2 border-meadow-primary text-meadow-primary rounded-lg font-semibold hover:bg-meadow-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-meadow-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-meadow-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-meadow-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-meadow-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-meadow-secondary text-meadow-dark rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-meadow-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-meadow-accent text-meadow-dark text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-meadow-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-meadow-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-meadow-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-meadow-soft text-meadow-dark text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-meadow-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-meadow-accent text-meadow-dark rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-meadow-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-meadow-beige rounded-xl p-8 space-y-4">
              <div className="bg-meadow-light border-l-4 border-meadow-primary p-4 rounded">
                <p className="text-meadow-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-meadow-secondary bg-opacity-20 border-l-4 border-meadow-secondary p-4 rounded">
                <p className="text-meadow-dark font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-meadow-accent bg-opacity-20 border-l-4 border-meadow-accent p-4 rounded">
                <p className="text-meadow-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PALETA TWILIGHT */}
        <section id="twilight" className="pb-12 scroll-mt-8">
          <div className="bg-twilight-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-4xl font-bold text-twilight-dark">
              🌌 Paleta Twilight
            </h2>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-twilight-primary font-bold mb-4">
              Paleta de Colores
            </h3>
            <div className="bg-white border-2 border-twilight-beige rounded-xl p-8">
              <p className="text-sm text-gray-500 mb-4">
                Haz clic en cualquier color para copiarlo al portapapeles
              </p>
              <ColorPalette colors={palettes.twilight} />
            </div>
          </div>

          {/* Calendar with Reservations */}
          <div className="mb-12">
            <h3 className="text-heading-2 text-twilight-primary font-bold mb-6">
              Calendario con Reservas
            </h3>
            <div className="bg-white border-2 border-twilight-beige rounded-xl p-8">
              <CalendarReservations palette="twilight" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-twilight-primary font-bold mb-4">
              Botones
            </h3>
            <div className="bg-white border-2 border-twilight-beige rounded-xl p-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-twilight-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Índigo
              </button>
              <button className="px-6 py-3 bg-twilight-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Gris Neutro
              </button>
              <button className="px-6 py-3 bg-twilight-indigo text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Índigo Claro
              </button>
              <button className="px-6 py-3 bg-twilight-dark text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Negro
              </button>
              <button className="px-6 py-3 border-2 border-twilight-primary text-twilight-primary rounded-lg font-semibold hover:bg-twilight-light transition-colors">
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-twilight-primary font-bold mb-4">
              Tarjetas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-twilight-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-twilight-primary text-white text-sm font-semibold rounded-full">
                    Nuevo
                  </span>
                </div>
                <h4 className="text-lg font-bold text-twilight-dark mb-2">
                  Reserva Express
                </h4>
                <p className="text-gray-700 mb-4">
                  Gestiona tus reservas de forma rápida y sencilla.
                </p>
                <button className="w-full px-4 py-2 bg-twilight-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Ver más
                </button>
              </div>
              <div className="bg-white border-2 border-twilight-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-twilight-indigo text-white text-sm font-semibold rounded-full">
                    Popular
                  </span>
                </div>
                <h4 className="text-lg font-bold text-twilight-dark mb-2">
                  Eventos Especiales
                </h4>
                <p className="text-gray-700 mb-4">
                  Organiza eventos únicos con herramientas avanzadas.
                </p>
                <button className="w-full px-4 py-2 bg-twilight-primary text-white rounded-lg font-semibold hover:opacity-90">
                  Explorar
                </button>
              </div>
              <div className="bg-white border-2 border-twilight-beige rounded-xl p-6 shadow-sm">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-twilight-dark text-white text-sm font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <h4 className="text-lg font-bold text-twilight-dark mb-2">
                  Analytics Pro
                </h4>
                <p className="text-gray-700 mb-4">
                  Analiza el rendimiento de tus reservas en tiempo real.
                </p>
                <button className="w-full px-4 py-2 bg-twilight-secondary text-white rounded-lg font-semibold hover:opacity-90">
                  Activar
                </button>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-twilight-primary font-bold mb-4">
              Alertas
            </h3>
            <div className="bg-white border-2 border-twilight-beige rounded-xl p-8 space-y-4">
              <div className="bg-twilight-light border-l-4 border-twilight-primary p-4 rounded">
                <p className="text-twilight-dark font-semibold">
                  ✓ Reserva confirmada exitosamente
                </p>
              </div>
              <div className="bg-twilight-secondary bg-opacity-20 border-l-4 border-twilight-secondary p-4 rounded">
                <p className="text-white font-semibold">
                  ⚠ Verifica los datos de contacto
                </p>
              </div>
              <div className="bg-twilight-accent border-l-4 border-twilight-indigo p-4 rounded">
                <p className="text-twilight-dark font-semibold">
                  ℹ Nueva actualización disponible
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
