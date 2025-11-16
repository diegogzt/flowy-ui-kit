# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a Flowy UI Kit! Esta guía te ayudará a entender cómo contribuir de la mejor manera.

## Antes de empezar

1. **Fork** el repositorio
2. **Clone** tu fork: `git clone https://github.com/TU_USUARIO/flowy-ui-kit.git`
3. **Crea una rama** para tu feature: `git checkout -b feature/mi-componente`

## Proceso de desarrollo

### 1. Instalar dependencias

```bash
npm install
npm run dev
```

### 2. Crear un nuevo componente

La estructura básica de un componente:

```tsx
// src/components/MyComponent.tsx
import React from "react";
import { cn } from "../utils/cn";

interface MyComponentProps {
  className?: string;
  children?: React.ReactNode;
  // ... más props
}

export const MyComponent: React.FC<MyComponentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {children}
    </div>
  );
};

export default MyComponent;
```

### 3. Exportar el componente

Agrega a `src/components/index.ts`:

```typescript
export { default as MyComponent } from "./MyComponent";
```

### 4. Agregar a la demostración

Actualiza `src/App.tsx` para incluir tu componente:

```tsx
import { MyComponent } from "./components";

// En el JSX:
<section>
  <h2>Mi Componente</h2>
  <MyComponent />
</section>;
```

### 5. Probar y compilar

```bash
# Desarrollo
npm run dev

# Compilación
npm run build

# Verifica que no hay errores TypeScript
npx tsc --noEmit
```

## Estándares de código

### TypeScript

- ✅ Usa tipos explícitos para props
- ✅ Exporta interfaces públicas
- ✅ Documenta componentes con JSDoc

```tsx
/**
 * Componente de botón versátil
 * @param variant - Estilo del botón (primary, secondary, accent)
 * @param size - Tamaño (sm, md, lg)
 * @param disabled - Deshabilita el botón
 */
interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}
```

### Estilos

- ✅ Usa la función `cn()` para combinar clases
- ✅ Respeta la paleta de colores del proyecto
- ✅ Asegura responsive design
- ✅ Usa tokens de Tailwind (no colores aleatorios)

```tsx
// ✅ Bien
className={cn(
  'px-4 py-2 rounded-lg',
  'bg-primary text-white',
  'hover:bg-primary/90',
  'disabled:opacity-50',
  className
)}

// ❌ Evita
className="px-4 py-2 #E46F20"
```

### Componentes accesibles

- ✅ Usa elementos semánticos (button, label, input)
- ✅ Agrega ARIA labels cuando sea necesario
- ✅ Asegura navegación por teclado
- ✅ Mantén buen contraste de colores

```tsx
<button aria-label="Cerrar diálogo" className="...">
  ✕
</button>
```

## Proceso de commit

Usa mensajes de commit descriptivos:

```bash
# Features
git commit -m "feat: agregar componente Badge"

# Fixes
git commit -m "fix: corregir espaciado en Button"

# Docs
git commit -m "docs: actualizar guía del Calendar"

# Refactoring
git commit -m "refactor: simplificar lógica de Input"

# Tests
git commit -m "test: agregar tests para Card"
```

## Pull Request

1. **Título claro**: describe qué cambia
2. **Descripción**: explica el por qué y el cómo
3. **Checklist**:
   - [ ] Código sigue los estándares del proyecto
   - [ ] Sin errores TypeScript
   - [ ] Compilación exitosa (`npm run build`)
   - [ ] Documentación actualizada
   - [ ] Componente agregado a la demo

Ejemplo de PR description:

```markdown
## 📝 Descripción

Agrega nuevo componente Badge con múltiples variantes.

## 🎯 Cambios

- Nuevo componente `Badge` en `src/components/Badge.tsx`
- Exportado en `src/components/index.ts`
- Demostración agregada en `src/App.tsx`
- Documentación en `GUIDE.md`

## 📸 Captura

[Incluye screenshot o GIF si es relevante]

## ✅ Checklist

- [x] Código revisado
- [x] TypeScript sin errores
- [x] Build exitoso
```

## Estructura de carpetas

```
src/
├── components/        # Componentes React
│   ├── Button.tsx
│   ├── Card.tsx
│   └── index.ts      # Exportaciones
├── utils/            # Funciones utilitarias
│   ├── cn.ts         # Merge de clases
│   └── index.ts
├── types/            # Tipos TypeScript
├── styles/           # Configuraciones de estilo
├── App.tsx           # Aplicación principal
└── main.tsx          # Punto de entrada
```

## Reportar bugs

Usa la plantilla de issue:

```markdown
## 🐛 Descripción del bug

Describe brevemente el problema

## 🔄 Pasos para reproducir

1. Abre...
2. Haz clic en...
3. Observa...

## ✅ Comportamiento esperado

Qué debería pasar

## ❌ Comportamiento actual

Qué está pasando

## 📸 Captura/Video

[Incluye si es posible]

## 💻 Ambiente

- Sistema operativo: [Windows, macOS, Linux]
- Navegador: [Chrome, Firefox, Safari]
- Versión de Node: [18, 20, etc]
```

## Solicitaes de feature

```markdown
## ✨ Solicitud de feature

Describe la nueva funcionalidad

## 💡 Propuesta

Cómo crees que debería implementarse

## 🎯 Caso de uso

Cuándo/dónde se usaría esta feature
```

## Preguntas

- 💬 [Discussions](https://github.com/diegogzt/flowy-ui-kit/discussions)
- 📧 diego.gzt@example.com

---

**¡Gracias por contribuir!** 🙌
