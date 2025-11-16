# 📖 Documentación - Flowy UI Kit

Bienvenido a **Flowy UI Kit**, un sistema completo de componentes React profesionales.

## 🚀 Acceso Rápido

| Enlace | Descripción |
|--------|------------|
| 🌐 **[Demo en vivo](https://diegogzt.github.io/flowy-ui-kit/)** | Accede a la demostración interactiva (contraseña: flowy2025) |
| 💻 **[Repositorio GitHub](https://github.com/diegogzt/flowy-ui-kit)** | Código fuente y gestión de issues |
| 📚 **[README.md](README.md)** | Introducción y características principales |

---

## 📚 Guías Disponibles

### Para usuarios
- **[README.md](README.md)** - Guía general, características y ejemplos básicos
- **[GUIDE.md](GUIDE.md)** - Documentación detallada de cada componente con ejemplos
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Cómo acceder a GitHub Pages y solucionar problemas

### Para desarrolladores
- **[SETUP.md](SETUP.md)** - Configuración de desarrollo local
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Cómo contribuir al proyecto
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Resumen técnico y estadísticas

### Documentación especializada
- **[CALENDAR_COMPONENT.md](CALENDAR_COMPONENT.md)** - Guía completa del componente Calendar
- **[FIGMA_DESIGN_IMPLEMENTATION.md](FIGMA_DESIGN_IMPLEMENTATION.md)** - Detalles de implementación del diseño

---

## 🎯 Comenzar rápidamente

### 1. Ver la demo
```
Abre: https://diegogzt.github.io/flowy-ui-kit/
Contraseña: flowy2025
```

### 2. Usar los componentes localmente
```bash
# Clonar
git clone https://github.com/diegogzt/flowy-ui-kit.git
cd flowy-ui-kit

# Instalar
npm install

# Desarrollar
npm run dev

# Compilar
npm run build
```

### 3. Importar en tu proyecto
```tsx
import { Button, Card, Calendar } from './components';

<Button>Haz clic</Button>
<Card>Contenido</Card>
<Calendar />
```

---

## 🎨 20+ Componentes

### Botones & Acciones
```tsx
import { Button, Link } from 'flowy-ui-kit';

<Button variant="primary">Primario</Button>
<Link href="#example">Enlace</Link>
```

### Alertas
```tsx
import { Alert } from 'flowy-ui-kit';

<Alert variant="success">¡Éxito!</Alert>
<Alert variant="error">Error</Alert>
```

### Formularios
```tsx
import { Input, Select, Checkbox, Toggle } from 'flowy-ui-kit';

<Input placeholder="Tu nombre" />
<Select><option>Opción 1</option></Select>
<Checkbox label="Aceptar términos" />
<Toggle label="Notificaciones" />
```

### Datos
```tsx
import { Card, Table, Tabs, Calendar } from 'flowy-ui-kit';

<Card>Contenedor</Card>
<Table columns={cols} data={data} />
<Tabs>...</Tabs>
<Calendar size="md" variant="primary" />
```

---

## 🔐 Autenticación

El sitio está protegido con un componente Auth personalizado:

**Contraseña:** `flowy2025`

Configurable en `.env`:
```env
VITE_AUTH_PASSWORD=flowy2025
```

---

## 💻 Stack Tecnológico

- **React 18.2** - UI Framework
- **TypeScript 5.3** - Type safety
- **Tailwind CSS 3.3** - Styling
- **Vite 5.4** - Build tool
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

---

## 📊 Estadísticas

- ✅ **20+** componentes
- ✅ **100%** TypeScript
- ✅ **~5,000+** líneas de código
- ✅ **44 KB** tamaño bundle
- ✅ **6+** documentos de guía
- ✅ **0** errores de compilación

---

## 🎯 Estructura del Repositorio

```
flowy-ui-kit/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Button.tsx
│   │   ├── Calendar.tsx
│   │   ├── Card.tsx
│   │   ├── Auth.tsx         # Autenticación
│   │   └── ...+ 15 más
│   ├── utils/               # Utilidades
│   ├── App.tsx              # Demo
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions
├── dist/                    # Build compilado
├── README.md                # Introducción
├── GUIDE.md                 # Guía completa
├── DEPLOYMENT.md            # Guía de despliegue
├── SETUP.md                 # Configuración
├── CONTRIBUTING.md          # Contribuciones
└── package.json             # Dependencias
```

---

## 🔗 Enlaces útiles

### Documentación
- 📖 [README - Introducción](README.md)
- 📚 [GUIDE - Componentes detallados](GUIDE.md)
- ⚙️ [SETUP - Configuración local](SETUP.md)
- 🚀 [DEPLOYMENT - GitHub Pages](DEPLOYMENT.md)
- 🤝 [CONTRIBUTING - Cómo contribuir](CONTRIBUTING.md)

### Recursos externos
- 🔗 [GitHub Repository](https://github.com/diegogzt/flowy-ui-kit)
- 🌐 [Demo en vivo](https://diegogzt.github.io/flowy-ui-kit/)
- 📦 [React Documentation](https://react.dev)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- ⚡ [Vite Guide](https://vitejs.dev)

---

## ❓ Preguntas frecuentes

**¿Cuál es la contraseña?**
> `flowy2025`

**¿Cómo cambio la contraseña?**
> Edita el archivo `.env` y cambia `VITE_AUTH_PASSWORD`

**¿Puedo usar los componentes en mi proyecto?**
> ¡Sí! Copia la carpeta `src/components` a tu proyecto e importa lo que necesites.

**¿Cómo contribuyo?**
> Lee [CONTRIBUTING.md](CONTRIBUTING.md) para instrucciones detalladas.

**¿Se puede publicar en npm?**
> Sí, pero actualmente solo está disponible en GitHub. Pronto en npm.

---

## 🆘 Soporte

- 🐛 **Reportar bugs:** [GitHub Issues](https://github.com/diegogzt/flowy-ui-kit/issues)
- 💬 **Discusiones:** [GitHub Discussions](https://github.com/diegogzt/flowy-ui-kit/discussions)
- 📧 **Email:** diego.gzt@example.com

---

## 📄 Licencia

**MIT** - Libre para usar en proyectos comerciales y personales.

---

## 🎉 Comenzar ahora

1. **Explora la demo:** https://diegogzt.github.io/flowy-ui-kit/ (contraseña: flowy2025)
2. **Lee la documentación:** [README.md](README.md)
3. **Copia componentes:** Desde `src/components/`
4. **¡Usa en tu proyecto!**

---

**Última actualización:** Noviembre 2025  
**Versión:** 1.0.0  
**Mantenedor:** Diego Tovar
