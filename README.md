# Flowy UI Kit

Un completo y moderno sistema de componentes UI construido con React, TypeScript y Tailwind CSS. Perfecto para crear interfaces consistentes y profesionales.

## 🌟 Características

- **20 Componentes listos para usar** - Buttons, Cards, Forms, Tables, Calendar y más
- **100% TypeScript** - Type-safe y con excelente autocompletar
- **Diseño consistente** - Paleta de colores y tipografía cohesiva
- **Tailwind CSS** - Estilos altamente customizables
- **Exportable** - Usar como librería en otros proyectos
- **Demostración viva** - Sitio web con ejemplos de todos los componentes

## 📦 Instalación

### Como dependencia npm (cuando se publique)

```bash
npm install flowy-ui-kit
```

### Usar componentes de forma local

1. Clona el repositorio:

```bash
git clone https://github.com/diegogzt/flowy-ui-kit.git
cd flowy-ui-kit
```

2. Instala dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Para compilar para producción:

```bash
npm run build
```

## 🎨 Componentes Disponibles

### Botones & Acciones

- **Button** - Botón principal con variantes y tamaños
- **Link** - Enlace estilizado con variantes

### Alertas & Retroalimentación

- **Alert** - Componente de alerta con múltiples variantes
- **Spinner** - Indicador de carga
- **ProgressBar** - Barra de progreso personalizable

### Formularios

- **Input** - Campo de entrada de texto
- **Textarea** - Área de texto multilinea
- **Select** - Selector desplegable
- **Checkbox** - Casilla de verificación
- **Radio** - Botón de radio
- **Toggle** - Interruptor on/off

### Visualización de Datos

- **Badge** - Etiqueta pequeña
- **Avatar** - Imagen de perfil con iniciales
- **Card** - Contenedor con header, título y footer
- **Table** - Tabla de datos con filas y columnas
- **List** - Lista ordenada o desordenada
- **Tabs** - Pestañas navegables
- **Calendar** - Calendario interactivo con selección de fechas

### Autenticación

- **Auth** - Componente de login con protección por contraseña

## 🚀 Uso en tu Proyecto

### Importar componentes individuales

```tsx
import { Button, Card, Input } from "flowy-ui-kit";

function App() {
  return (
    <div className="p-4">
      <Card>
        <h2>Crear cuenta</h2>
        <Input placeholder="Tu nombre" />
        <Button>Registrarse</Button>
      </Card>
    </div>
  );
}
```

### Ejemplos específicos

#### Button

```tsx
import { Button } from 'flowy-ui-kit';

<Button variant="primary" size="lg">
  Guardar
</Button>

<Button variant="secondary" disabled>
  Cancelar
</Button>
```

#### Input

```tsx
import { Input } from "flowy-ui-kit";

<Input
  type="email"
  placeholder="tu@email.com"
  onChange={(e) => console.log(e.target.value)}
/>;
```

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardFooter } from "flowy-ui-kit";

<Card>
  <CardHeader>
    <CardTitle>Título de la tarjeta</CardTitle>
  </CardHeader>
  <p>Contenido de la tarjeta</p>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>;
```

#### Calendar

```tsx
import { Calendar } from "flowy-ui-kit";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <Calendar
      size="md"
      variant="primary"
      selectedDate={selectedDate}
      onDateSelect={setSelectedDate}
      disablePastDates={true}
    />
  );
}
```

#### Alert

```tsx
import { Alert } from 'flowy-ui-kit';

<Alert variant="success" title="¡Éxito!">
  Tu cambio ha sido guardado correctamente.
</Alert>

<Alert variant="error" title="Error">
  Ha ocurrido un error. Intenta de nuevo.
</Alert>
```

## 🎭 Paleta de Colores

| Color                  | Hex     | Uso                                         |
| ---------------------- | ------- | ------------------------------------------- |
| **Primary** (Zest)     | #E46F20 | Botones, encabezados, elementos principales |
| **Secondary** (My Sin) | #FCB72B | Botones secundarios, highlights             |
| **Accent** (Red Stage) | #CC5803 | Énfasis, acentos especiales                 |
| **Dark** (Jambalaya)   | #582B11 | Texto principal, fondos oscuros             |
| **Light** (Sidecar)    | #F6E6C4 | Fondos claros, secciones                    |
| **Beige** (Bone)       | #E7D7C9 | Bordes, separadores                         |

## 🔧 Scripts disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ver build en navegador
npm run preview
```

## 🛠️ Stack Tecnológico

- **React 18.2** - Librería de UI
- **TypeScript 5.3** - Type safety
- **Tailwind CSS 3.3** - Estilos utility-first
- **Vite 5.4** - Build tool ultrarrápido
- **PostCSS** - Procesamiento de CSS

## 📄 Licencia

MIT - Libre para usar en proyectos comerciales y personales

## 👨‍💻 Autor

Diego Tovar - [GitHub](https://github.com/diegogzt)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o pull request para sugerir cambios.

---

**¿Necesitas ayuda?** Abre un issue en [GitHub](https://github.com/diegogzt/flowy-ui-kit/issues)

- **Select** - Dropdown selector
- **Checkbox** - Checkbox reutilizable
- **Radio** - Radio button reutilizable
- **Toggle** - Switch on/off

### Presentación de Datos

- **Badge** - Etiquetas con variantes
- **Avatar** - Avatar de usuario
- **Card** - Tarjeta contenedora (con header, title, footer)
- **Table** - Tabla de datos
- **List** - Lista simple o striped
- **Tabs** - Pestañas navegables

## 🎨 Sistema de Colores

```javascript
{
  primary: '#e46f20',
  secondary: '#fcb72b',
  accent: '#cc5803',
  hover: '#ff9505',
  dark: '#582b11',
  light: '#f6e6c4',
  beige: '#e7d7c9',
  white: '#ffffff',
}
```

## 💻 Ejemplos de Uso

### Button

```jsx
import { Button } from './components';

<Button variant="primary">Botón Primario</Button>
<Button variant="secondary" size="lg">Botón Grande</Button>
<Button variant="outline" disabled>Deshabilitado</Button>
```

### Input

```jsx
import { Input } from "./components";

<Input
  label="Nombre"
  placeholder="Ingresa tu nombre"
  error="Este campo es requerido"
/>;
```

### Card

```jsx
import { Card, CardHeader, CardTitle, CardFooter } from "./components";

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <p>Contenido de la tarjeta</p>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>;
```

### Table

```jsx
import { Table } from "./components";

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Nombre" },
  { key: "date", header: "Fecha" },
];

const data = [
  { id: "001", name: "Juan", date: "16/11/2025" },
  { id: "002", name: "María", date: "17/11/2025" },
];

<Table columns={columns} data={data} striped />;
```

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 📝 Características

- ✅ Componentes funcionales con React Hooks
- ✅ TypeScript para type safety
- ✅ Estilos inline consistentes
- ✅ Accesibilidad básica
- ✅ Responsivos
- ✅ Animaciones suaves
- ✅ Estados interactivos (hover, focus, disabled)

## 📋 Notas

- Todos los componentes tienen estilos inline para facilitar la portabilidad
- Los colores se centralizan en `src/styles/colors.ts`
- Los tipos están en `src/types/index.ts`
- Cada componente es independent y reutilizable
