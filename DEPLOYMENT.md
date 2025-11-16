# 📦 Guía de Despliegue - Flowy UI Kit

## 🎯 Estado actual

✅ **Proyecto completamente configurado para GitHub Pages**

- ✅ Repositorio en GitHub: `diegogzt/flowy-ui-kit`
- ✅ GitHub Actions configurado para despliegue automático
- ✅ Componente Auth con protección por contraseña (flowy2025)
- ✅ Base URL configurada para: `/flowy-ui-kit/`

---

## 🚀 Despliegue automático

El proyecto se despliega **automáticamente** en cada push a `main`:

### Cómo funciona

1. **Push a GitHub**

   ```bash
   git add .
   git commit -m "tu mensaje"
   git push origin main
   ```

2. **GitHub Actions se ejecuta automáticamente**

   - Instala dependencias
   - Compila el proyecto
   - Genera la carpeta `dist/`
   - Publica en GitHub Pages

3. **Tu sitio está listo**
   - URL: `https://diegogzt.github.io/flowy-ui-kit/`
   - Disponible en ~2-3 minutos

### Verificar el estado

1. Ve a: https://github.com/diegogzt/flowy-ui-kit
2. Haz clic en **Actions**
3. Verás el último workflow:
   - 🟢 Verde = Desplegado exitosamente
   - 🔴 Rojo = Error en el build
   - 🟡 Amarillo = En progreso

---

## 🔐 Protección por contraseña

### Acceder al sitio

1. Abre: `https://diegogzt.github.io/flowy-ui-kit/`
2. Se mostrará un popup de login
3. Ingresa la contraseña: **`flowy2025`**

### Cambiar la contraseña

1. Edita el archivo `.env`:

   ```env
   VITE_AUTH_PASSWORD=tu_nueva_contraseña
   ```

2. Haz commit y push:

   ```bash
   git add .env
   git commit -m "chore: Update auth password"
   git push origin main
   ```

3. Se deployará automáticamente con la nueva contraseña

---

## 📱 Estructura de URLs

```
https://diegogzt.github.io/flowy-ui-kit/
├── /                    # Página principal (con Auth)
├── /assets/             # Assets estáticos (CSS, JS)
├── /dist/               # Archivos compilados
└── /index.html          # HTML principal
```

---

## 🔧 Configuración de GitHub Pages

### Verificar que está habilitado

1. Ve a: https://github.com/diegogzt/flowy-ui-kit/settings/pages
2. Verificar:
   - ✅ **Source**: "Deploy from a branch"
   - ✅ **Branch**: gh-pages
   - ✅ **Folder**: (root)

### Si necesitas cambios

En **Settings → Pages**:

- Source: Selecciona "Deploy from a branch"
- Branch: Selecciona "gh-pages"
- Folder: "(root)"
- Click en "Save"

---

## ✅ Checklist de verificación

Antes de considerar el proyecto "deployado":

- [ ] Repositorio en GitHub (diegogzt/flowy-ui-kit)
- [ ] Branch principal configurada a `main`
- [ ] GitHub Actions ejecutado exitosamente
- [ ] GitHub Pages habilitado
- [ ] URL accesible: https://diegogzt.github.io/flowy-ui-kit/
- [ ] Auth popup mostrando con contraseña
- [ ] Contraseña funciona (flowy2025)
- [ ] Componentes cargan correctamente
- [ ] Documentación visible en el sitio

---

## 🐛 Troubleshooting

### Error 404 en GitHub Pages

**Problema**: "There isn't a GitHub Pages site here"

**Solución**:

1. Verifica que GitHub Pages esté habilitado en Settings
2. Asegúrate que la rama `gh-pages` existe
3. En `vite.config.ts` debe tener: `base: "/flowy-ui-kit/"`
4. Compila y haz push: `npm run build && git push`

### El sitio tarda mucho en actualizar

**Problema**: Cambios no se reflejan en el sitio

**Solución**:

1. Limpia caché del navegador (Cmd+Shift+R)
2. Espera 2-3 minutos para que GitHub Pages actualice
3. Verifica que el workflow en **Actions** está verde
4. Comprueba que no hay errores en la consola del navegador

### Auth no funciona

**Problema**: No puedo ingresar con la contraseña

**Solución**:

1. Limpia storage del navegador (F12 → Application → Storage → Delete All)
2. Recarga la página
3. Intenta la contraseña exactamente: `flowy2025`
4. Verifica que `.env` tiene: `VITE_AUTH_PASSWORD=flowy2025`

### Estilos no cargan

**Problema**: Página sin estilos (solo texto)

**Solución**:

1. Verifica en DevTools que no hay errores 404
2. Limpia caché: Cmd+Shift+R
3. Comprueba que `tailwind.config.js` está correctamente
4. Recompila: `npm run build`

---

## 📊 Monitoreo

### Ver logs del deployment

1. GitHub → **Actions** → Último workflow
2. Haz clic en **Deploy to GitHub Pages**
3. Expande los steps para ver detalles

### Métricas útiles

- Tiempo de build: ~3 minutos
- Tiempo de deployment: ~1 minuto
- Tamaño del bundle: ~44 KB (gzip: 11.58 KB)

---

## 🔐 Información sensible

⚠️ **IMPORTANTE**: El archivo `.env` está versionado en GitHub y la contraseña es visible en el código fuente.

### Para proyectos en producción real

Considera:

- Usar un servicio de autenticación real (Auth0, Supabase, etc.)
- No versionear `.env` en Git
- Usar `gh-pages-auth` u otro middleware
- Implementar HTTPS obligatorio

Para este proyecto de demostración, está bien así, pero ten en cuenta las implicaciones de seguridad.

---

## 📚 Referencias

- 📖 [Documentación GitHub Pages](https://docs.github.com/en/pages)
- 🔧 [Guía Vite](https://vitejs.dev/)
- ⚙️ [GitHub Actions](https://docs.github.com/en/actions)

---

## 🎉 ¡Felicidades!

Tu Flowy UI Kit está deployado en GitHub Pages con:

- ✅ 20+ componentes React profesionales
- ✅ Documentación completa
- ✅ Autenticación por contraseña
- ✅ Actualización automática en cada push
- ✅ URL pública accesible desde cualquier lugar

**Próximos pasos:**

1. Compartir el enlace: https://diegogzt.github.io/flowy-ui-kit/
2. Agregar más componentes según sea necesario
3. Publicar en npm cuando esté listo
4. Implementar pruebas unitarias

---

**¿Necesitas ayuda?** Abre un issue en https://github.com/diegogzt/flowy-ui-kit/issues
