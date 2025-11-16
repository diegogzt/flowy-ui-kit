# ✅ Solución: Error 403 en GitHub Actions

## El problema

El workflow de GitHub Actions no tenía permisos para escribir en la rama `gh-pages`:

```
remote: Permission to diegogzt/flowy-ui-kit.git denied to github-actions[bot].
fatal: unable to access '...': The requested URL returned error: 403
```

## La solución

### ✅ Paso 1: Actualizar workflow (YA HECHO)

He actualizado `.github/workflows/deploy.yml` con los permisos correctos:

- `contents: write` - Para leer y escribir en el repositorio
- `pages: write` - Para desplegar en GitHub Pages
- `id-token: write` - Para tokens OIDC

### ✅ Paso 2: Habilitar permisos en GitHub (IMPORTANTE - HAZLO AHORA)

Ve a tu repositorio GitHub:

1. **Settings** → **Actions** → **General**
2. Baja hasta **Workflow permissions**
3. Selecciona: **"Read and write permissions"**
4. Marca: **"Allow GitHub Actions to create and approve pull requests"**
5. Click en **Save**

### ✅ Paso 3: Ejecutar el workflow nuevamente

El push que acabo de hacer debería ejecutar el workflow nuevamente con los permisos correctos.

**Para forzar una nueva ejecución:**

1. Ve a **Actions** en tu repositorio
2. Selecciona el workflow **"Deploy to GitHub Pages"**
3. Click en **"Run workflow"** → **"Run workflow"**

---

## Instrucciones en imágenes

### 1. Ve a Settings

```
GitHub → Tu repositorio → Settings
```

### 2. Busca "Workflow permissions"

```
Settings → Actions → General → Scroll down → Workflow permissions
```

### 3. Selecciona "Read and write permissions"

```
☑ Read and write permissions  ← MARCA ESTO
```

### 4. Guarda

```
Click "Save"
```

---

## Verificar que funcionó

Después de hacer esto:

1. Ve a **Actions** en tu repositorio
2. Deberías ver un nuevo workflow ejecutándose
3. Si está verde ✅, significa que funcionó
4. Tu sitio estará disponible en: `https://diegogzt.github.io/flowy-ui-kit/`

---

## Si aún no funciona

Si después de cambiar los permisos sigue sin funcionar:

### Opción A: Usar un Personal Access Token (PAT)

1. Ve a GitHub → **Settings** → **Developer settings** → **Personal access tokens**
2. Click en **"Generate new token (classic)"**
3. Dale nombre: `DEPLOY_TOKEN`
4. Selecciona permisos: `repo` y `workflow`
5. Click en **"Generate token"** y **copia el token**
6. En tu repositorio: **Settings** → **Secrets and variables** → **Actions**
7. Click en **"New repository secret"**
8. Nombre: `DEPLOY_TOKEN`
9. Valor: Pega el token que copiaste
10. En `.github/workflows/deploy.yml` cambiar:
    ```yaml
    github_token: ${{ secrets.DEPLOY_TOKEN }}
    ```

### Opción B: Usar GITHUB_TOKEN (más simple, YA CONFIGURADO)

El `GITHUB_TOKEN` es automático y debería funcionar ahora con los permisos que agregué.

---

## Resumen de lo que hice

✅ Agregué bloque `permissions` al inicio del workflow
✅ Agregué `permissions` al job específico
✅ Incluí `contents: write` para acceso al repositorio
✅ Incluí `pages: write` para despliegue en Pages

**Ahora necesitas habilitar los permisos en GitHub** siguiendo los pasos 2 y 3 arriba.

---

## ¿Preguntas?

Si aún tienes problemas:

1. Verifica que seguiste los pasos correctamente
2. Espera 2-3 minutos después de cambiar los permisos
3. Abre un issue en: https://github.com/diegogzt/flowy-ui-kit/issues

---

**Próximo paso:** Ve a tu repositorio GitHub y habilita los permisos del workflow.
