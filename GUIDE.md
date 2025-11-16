# 📚 Guía Completa de Flowy UI Kit

## Tabla de contenidos

1. [Instalación](#instalación)
2. [Primeros pasos](#primeros-pasos)
3. [Componentes](#componentes)
4. [Temas y personalización](#temas-y-personalización)
5. [Buenas prácticas](#buenas-prácticas)

---

## Instalación

### Desde el repositorio

```bash
# Clonar el repositorio
git clone https://github.com/diegogzt/flowy-ui-kit.git
cd flowy-ui-kit

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Compilar para producción
npm run build
```

### Desde npm (próximamente)

```bash
npm install flowy-ui-kit
```

---

## Primeros pasos

### Estructura del proyecto

```
flowy-ui-kit/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── utils/         # Funciones utilitarias
│   ├── App.tsx        # Aplicación principal
│   └── main.tsx       # Punto de entrada
├── dist/              # Build de producción
├── tailwind.config.js # Configuración de Tailwind
└── package.json       # Dependencias y scripts
```

### Crear tu primer componente

```tsx
import { Button, Card, Input } from "flowy-ui-kit";

export function MyForm() {
  return (
    <Card className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Mi Formulario</h2>

      <Input type="email" placeholder="tu@email.com" className="mb-4" />

      <Button variant="primary" className="w-full">
        Enviar
      </Button>
    </Card>
  );
}
```

---

## Componentes

### Button

Botón versátil con múltiples variantes.

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

<Button disabled>Deshabilitado</Button>
```

**Props:**

- `variant`: "primary" | "secondary" | "accent" | "outline" | "ghost"
- `size`: "sm" | "md" | "lg"
- `disabled`: boolean
- `className`: string (clases adicionales)

---

### Input

Campo de entrada de texto.

```tsx
import { useState } from "react";
import { Input } from "flowy-ui-kit";

function App() {
  const [value, setValue] = useState("");

  return (
    <Input
      type="text"
      placeholder="Escribe aquí..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full"
    />
  );
}
```

**Props:**

- `type`: "text" | "email" | "password" | "number" | "date" | etc.
- `placeholder`: string
- `value`: string
- `onChange`: (e: ChangeEvent<HTMLInputElement>) => void
- `disabled`: boolean
- `className`: string

---

### Card

Contenedor con estructura de tarjeta.

```tsx
import { Card, CardHeader, CardTitle, CardFooter, Button } from "flowy-ui-kit";

<Card>
  <CardHeader>
    <CardTitle>Título de la tarjeta</CardTitle>
  </CardHeader>

  <div className="p-6">Contenido principal de la tarjeta</div>

  <CardFooter>
    <Button variant="secondary">Cancelar</Button>
    <Button>Aceptar</Button>
  </CardFooter>
</Card>;
```

**Componentes:**

- `Card` - Contenedor principal
- `CardHeader` - Encabezado (con fondo de color)
- `CardTitle` - Título dentro del header
- `CardFooter` - Pie de página

---

### Alert

Notificaciones y alertas.

```tsx
<Alert variant="success">
  ✓ Operación completada
</Alert>

<Alert variant="error">
  ✗ Ha ocurrido un error
</Alert>

<Alert variant="warning">
  ⚠ Advertencia importante
</Alert>

<Alert variant="info">
  ℹ Información
</Alert>
```

**Props:**

- `variant`: "success" | "error" | "warning" | "info"
- `title`: string (opcional)
- `children`: ReactNode (mensaje)

---

### Calendar

Calendario interactivo para selección de fechas.

```tsx
import { Calendar } from "flowy-ui-kit";
import { useState } from "react";

function Booking() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Calendar
      selectedDate={date}
      onDateSelect={setDate}
      size="md"
      variant="primary"
      disablePastDates={true}
      showHeader={true}
    />
  );
}
```

**Props:**

- `size`: "sm" | "md" | "lg"
- `variant`: "primary" | "secondary" | "accent"
- `selectedDate`: Date
- `onDateSelect`: (date: Date) => void
- `disablePastDates`: boolean
- `showHeader`: boolean
- `className`: string

---

### Form Controls

#### Checkbox

```tsx
import { Checkbox } from "flowy-ui-kit";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
      label="Aceptar términos"
    />
  );
}
```

#### Radio

```tsx
import { Radio } from 'flowy-ui-kit';

<Radio name="options" value="opt1" label="Opción 1" />
<Radio name="options" value="opt2" label="Opción 2" />
<Radio name="options" value="opt3" label="Opción 3" />
```

#### Select

```tsx
import { Select } from "flowy-ui-kit";

<Select>
  <option value="">Selecciona una opción</option>
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
  <option value="3">Opción 3</option>
</Select>;
```

#### Toggle

```tsx
import { Toggle } from "flowy-ui-kit";
import { useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Toggle
      checked={enabled}
      onChange={() => setEnabled(!enabled)}
      label="Activar notificaciones"
    />
  );
}
```

---

### Data Display

#### Badge

```tsx
import { Badge } from 'flowy-ui-kit';

<Badge variant="primary">Nuevo</Badge>
<Badge variant="secondary">En progreso</Badge>
<Badge variant="accent">Urgente</Badge>
<Badge variant="outline">Archivado</Badge>
```

#### Avatar

```tsx
import { Avatar } from 'flowy-ui-kit';

<Avatar
  src="https://ejemplo.com/avatar.jpg"
  alt="Diego"
  size="md"
/>

// O con iniciales si no hay imagen
<Avatar
  initials="DT"
  size="lg"
/>
```

#### Table

```tsx
import { Table } from "flowy-ui-kit";

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Nombre" },
  { key: "email", header: "Email" },
];

const data = [
  { id: "1", name: "Juan", email: "juan@mail.com" },
  { id: "2", name: "María", email: "maria@mail.com" },
];

<Table columns={columns} data={data} />;
```

#### Tabs

```tsx
import { Tabs } from "flowy-ui-kit";

<Tabs defaultValue="tab1">
  <div value="tab1" label="Pestaña 1">
    Contenido 1
  </div>
  <div value="tab2" label="Pestaña 2">
    Contenido 2
  </div>
</Tabs>;
```

#### List

```tsx
import { List } from 'flowy-ui-kit';

<List ordered>
  <li>Primer item</li>
  <li>Segundo item</li>
  <li>Tercer item</li>
</List>

<List>
  <li>Item 1</li>
  <li>Item 2</li>
</List>
```

---

## Temas y personalización

### Usar variables Tailwind CSS

Todos los componentes utilizan las variables de color de Tailwind. Puedes personalizarlos modificando `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#E46F20",
        secondary: "#FCB72B",
        accent: "#CC5803",
        dark: "#582B11",
        light: "#F6E6C4",
        beige: "#E7D7C9",
      },
    },
  },
};
```

### Aplicar clases personalizadas

```tsx
<Button variant="primary" className="custom-class shadow-xl">
  Botón personalizado
</Button>
```

---

## Buenas prácticas

### 1. Importa solo lo que necesitas

```tsx
// ✅ Bien
import { Button, Card } from "flowy-ui-kit";

// ❌ Evita
import * as UI from "flowy-ui-kit";
```

### 2. Usa TypeScript

```tsx
// ✅ Bien - Tienes autocompletar y validación
interface UserFormProps {
  onSubmit: (data: User) => void;
}

export function UserForm({ onSubmit }: UserFormProps) {
  // ...
}
```

### 3. Combina componentes para crear complejos

```tsx
// ✅ Composición
function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <Avatar initials={user.initials} />
      <p>{user.email}</p>
      <CardFooter>
        <Button>Ver perfil</Button>
      </CardFooter>
    </Card>
  );
}
```

### 4. Mantén la consistencia visual

```tsx
// ✅ Usa la misma paleta de colores en todo el proyecto
<Button variant="primary">Guardar</Button>
<Alert variant="success">Guardado exitosamente</Alert>

// ❌ Evita colores inconsistentes
<Button style={{ backgroundColor: '#randomcolor' }}>
```

### 5. Documenta componentes personalizados

```tsx
/**
 * Componente de formulario de login
 * @param onSubmit - Callback cuando se envía el formulario
 * @param isLoading - Muestra estado de carga
 */
export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  // Implementación
}
```

---

## Ayuda y soporte

- 📖 [Documentación completa](https://github.com/diegogzt/flowy-ui-kit)
- 🐛 [Reportar bugs](https://github.com/diegogzt/flowy-ui-kit/issues)
- 💬 [Discusiones](https://github.com/diegogzt/flowy-ui-kit/discussions)

---

**Versión:** 1.0.0  
**Última actualización:** Noviembre 2025
