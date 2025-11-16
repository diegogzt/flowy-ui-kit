# 🚀 Configuración de GitHub Pages

## Pasos para habilitar GitHub Pages

### 1. Requisitos previos

- ✅ Repositorio en GitHub (ya creado: `diegogzt/flowy-ui-kit`)
- ✅ Acceso de administrador al repositorio
- ✅ GitHub Actions habilitado (por defecto)

### 2. Habilitar GitHub Pages automáticamente

El proyecto está configurado para desplegar automáticamente a GitHub Pages usando **GitHub Actions**.

**¿Cómo funciona?**

1. Cada vez que hagas un `push` a la rama `main`:
   - Se ejecuta automáticamente el workflow `.github/workflows/deploy.yml`
   - Se compila el proyecto (`npm run build`)
   - Se copia la carpeta `dist/` a la rama `gh-pages`
   - El sitio se publica en `https://diegogzt.github.io/flowy-ui-kit/`

### 3. Configurar en la interfaz de GitHub

Si necesitas configurar manualmente:

1. Ve a **Settings** → **Pages**
2. Selecciona **Source**: "Deploy from a branch"
3. Selecciona la rama: **gh-pages**
4. Selecciona la carpeta: **(root)**
5. Haz clic en **Save**

### 4. Verificar el despliegue

- El workflow se ejecuta automáticamente
- Puedes ver el estado en **Actions**
- Una vez completado, el sitio estará disponible en:
  ```
  https://diegogzt.github.io/flowy-ui-kit/
  ```

### 5. Variables de entorno en GitHub Pages

Para que el componente `Auth` funcione correctamente, el archivo `.env` se incluye en el build.

> ⚠️ **Nota de seguridad**: La contraseña en `.env` es visible en el código fuente público. Para producción real, considera usar un sistema de autenticación más robusto.

---

## Configuración local

Para probar antes de desplegar:

```bash
# Compilar para producción (simula GitHub Pages)
npm run build

# Ver el build localmente
npm run preview

# Accede a http://localhost:4173/flowy-ui-kit/
```

---

## Troubleshooting

### El sitio no se carga después del despliegue

**Problema**: Recibe error 404 en GitHub Pages

**Solución**:

1. Verifica que `vite.config.ts` tenga `base: "/flowy-ui-kit/"`
2. Compila de nuevo: `npm run build`
3. Haz push: `git push origin main`
4. Espera a que se ejecute el workflow en **Actions**

### El Auth no funciona

**Problema**: La página pide contraseña pero no deja entrar

**Solución**:

1. Asegúrate de que el `.env` existe con `VITE_AUTH_PASSWORD=flowy2025`
2. La contraseña debe ser exactamente: `flowy2025` (sin espacios)
3. Recarga la página (Cmd + Shift + R)

### Los estilos se ven rotos

**Problema**: Los colores y estilos no cargan correctamente

**Solución**:

1. Abre la consola del navegador (F12)
2. Verifica que no haya errores 404 de CSS
3. Borra la caché: Cmd + Shift + R
4. Verifica que `tailwind.config.js` está correctamente configurado

---

## Próximos pasos

- 📚 Lee la [documentación completa](README.md)
- 🎨 Explora los [componentes disponibles](GUIDE.md)
- 🔧 Personaliza los colores en `tailwind.config.js`
- 📦 Publica el paquete en npm cuando esté listo

---

**¿Preguntas?** Abre un issue en GitHub: https://github.com/diegogzt/flowy-ui-kit/issues
