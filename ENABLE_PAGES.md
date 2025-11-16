# 🔧 Habilitar GitHub Pages - Instrucciones

## ⚠️ Problema
GitHub Pages no está habilitado en tu repositorio. Necesita ser activado desde la configuración.

## ✅ Solución (3 pasos)

### 1. Ir a Settings del repositorio
1. Ve a: `https://github.com/diegogzt/flowy-ui-kit/settings`
2. O desde GitHub: Repositorio → **Settings** (pestaña superior)

### 2. Encontrar "Pages" en el menú izquierdo
- En el menú izquierdo, busca: **Pages** (en la sección "Code and automation")
- Click en **Pages**

### 3. Configurar GitHub Pages
En la sección "Build and deployment":

1. **Source**: Selecciona `Deploy from a branch`
2. **Branch**: Selecciona `gh-pages` (si existe) o deja `main` por ahora
3. **Folder**: Selecciona `/ (root)`
4. Click en **Save**

## 🚀 Después de habilitar

GitHub Pages debería mostrar:
```
Your site is ready to be published at https://diegogzt.github.io/flowy-ui-kit/
```

## ✅ Próximos pasos

1. Una vez que hayas habilitado Pages en Settings
2. Ve a **Actions** en tu repositorio
3. El workflow debería ejecutarse automáticamente
4. Una vez que termine (✅ verde), accede a:
   ```
   https://diegogzt.github.io/flowy-ui-kit/
   ```

## 🔑 Alternativa: Usar token de GitHub (si tienes problemas)

Si los pasos anteriores no funcionan, puedes usar la API de GitHub:

```bash
# Requiere un GitHub Personal Access Token (PAT) con permisos 'repo'
GITHUB_TOKEN="tu_token_aqui"
REPO="diegogzt/flowy-ui-kit"

curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/$REPO/pages \
  -d '{"source":{"branch":"gh-pages","path":"/"},"build_type":"workflow"}'
```

---

**⏱️ Una vez habilitado:** El siguiente push a `main` ejecutará el workflow y desplegará automáticamente.
