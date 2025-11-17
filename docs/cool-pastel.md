# ❄️ Cool Pastel

Paleta con tonos fríos pastel refrescantes y serenos.

**Colores:** `#A7C7E7` `#B8E0D2` `#D6EADF` `#89B5D6` `#E8F4F8` `#D4E7ED`

---

## 🔘 Botones

### Botón Primario

```html
<button
  style="padding: 12px 24px; background-color: #A7C7E7; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;"
>
  Primario
</button>
```

### Botón Secundario

```html
<button
  style="padding: 12px 24px; background-color: #B8E0D2; color: #89B5D6; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;"
>
  Secundario
</button>
```

### Botón Outline

```html
<button
  style="padding: 12px 24px; background-color: transparent; color: #A7C7E7; border: 2px solid #A7C7E7; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: background-color 0.2s;"
>
  Outline
</button>
```

### Botón Deshabilitado

```html
<button
  style="padding: 12px 24px; background-color: #D4E7ED; color: #89B5D6; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: not-allowed; opacity: 0.6;"
>
  Deshabilitado
</button>
```

---

## 🃏 Tarjetas

### Tarjeta de Reserva

```html
<div
  style="background-color: #ffffff; border: 2px solid #D4E7ED; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 320px;"
>
  <div style="margin-bottom: 12px;">
    <span
      style="display: inline-block; padding: 4px 12px; background-color: #A7C7E7; color: #ffffff; font-size: 14px; font-weight: 600; border-radius: 20px;"
    >
      Nuevo
    </span>
  </div>
  <h4
    style="font-size: 18px; font-weight: 700; color: #89B5D6; margin: 0 0 8px 0;"
  >
    Reserva Express
  </h4>
  <p
    style="color: #6B7280; margin: 0 0 16px 0; font-size: 14px; line-height: 1.5;"
  >
    Gestiona tus reservas de forma rápida y sencilla.
  </p>
  <button
    style="width: 100%; padding: 10px 16px; background-color: #B8E0D2; color: #89B5D6; border: none; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer;"
  >
    Ver más
  </button>
</div>
```

### Tarjeta Simple

```html
<div
  style="background-color: #E8F4F8; border: 2px solid #D4E7ED; border-radius: 12px; padding: 20px; max-width: 280px;"
>
  <h5
    style="font-size: 16px; font-weight: 600; color: #89B5D6; margin: 0 0 8px 0;"
  >
    Título
  </h5>
  <p style="color: #6B7280; margin: 0; font-size: 14px;">
    Contenido de la tarjeta.
  </p>
</div>
```

---

## ⚠️ Alertas

### Alerta de Éxito

```html
<div
  style="background-color: #E8F4F8; border-left: 4px solid #A7C7E7; padding: 16px; border-radius: 4px; max-width: 400px;"
>
  <p style="color: #89B5D6; font-weight: 600; margin: 0; font-size: 14px;">
    ✓ Reserva confirmada exitosamente
  </p>
</div>
```

### Alerta de Advertencia

```html
<div
  style="background-color: rgba(184, 224, 210, 0.3); border-left: 4px solid #B8E0D2; padding: 16px; border-radius: 4px; max-width: 400px;"
>
  <p style="color: #89B5D6; font-weight: 600; margin: 0; font-size: 14px;">
    ⚠ Verifica los datos de contacto
  </p>
</div>
```

### Alerta de Información

```html
<div
  style="background-color: #D6EADF; border-left: 4px solid #89B5D6; padding: 16px; border-radius: 4px; max-width: 400px;"
>
  <p style="color: #89B5D6; font-weight: 600; margin: 0; font-size: 14px;">
    ℹ Información importante
  </p>
</div>
```

---

## 📝 Formularios

### Input de Texto

```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label
    style="display: block; color: #89B5D6; font-weight: 600; margin-bottom: 8px; font-size: 14px;"
    >Nombre</label
  >
  <input
    type="text"
    placeholder="Ingresa tu nombre"
    style="width: 100%; padding: 10px 16px; border: 2px solid #D4E7ED; border-radius: 8px; font-size: 14px; outline: none; transition: border-color 0.2s;"
    onfocus="this.style.borderColor='#A7C7E7'"
    onblur="this.style.borderColor='#D4E7ED'"
  />
</div>
```

### Select

```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label
    style="display: block; color: #89B5D6; font-weight: 600; margin-bottom: 8px; font-size: 14px;"
    >Servicio</label
  >
  <select
    style="width: 100%; padding: 10px 16px; border: 2px solid #D4E7ED; border-radius: 8px; font-size: 14px; outline: none; background-color: white; cursor: pointer;"
    onfocus="this.style.borderColor='#A7C7E7'"
    onblur="this.style.borderColor='#D4E7ED'"
  >
    <option>Selecciona una opción</option>
    <option>Corte de cabello</option>
    <option>Manicura</option>
    <option>Masaje</option>
  </select>
</div>
```

### Textarea

```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label
    style="display: block; color: #89B5D6; font-weight: 600; margin-bottom: 8px; font-size: 14px;"
    >Comentarios</label
  >
  <textarea
    placeholder="Escribe aquí..."
    rows="4"
    style="width: 100%; padding: 10px 16px; border: 2px solid #D4E7ED; border-radius: 8px; font-size: 14px; outline: none; resize: vertical; font-family: inherit;"
    onfocus="this.style.borderColor='#A7C7E7'"
    onblur="this.style.borderColor='#D4E7ED'"
  ></textarea>
</div>
```

---

## 📅 Calendario

### Día con Reserva

```html
<div
  style="background-color: #ffffff; border: 2px solid #D4E7ED; border-radius: 8px; padding: 12px; min-height: 100px; width: 120px;"
>
  <div
    style="font-weight: 600; color: #89B5D6; margin-bottom: 8px; font-size: 16px;"
  >
    15
  </div>
  <div
    style="background-color: #A7C7E7; color: #ffffff; font-size: 12px; padding: 4px 6px; border-radius: 4px; margin-bottom: 4px;"
  >
    09:00 Ana M.
  </div>
  <div
    style="background-color: #B8E0D2; color: #89B5D6; font-size: 12px; padding: 4px 6px; border-radius: 4px;"
  >
    14:30 Carlos
  </div>
</div>
```

### Calendario Completo

```html
<div
  style="background-color: #ffffff; border: 2px solid #D4E7ED; border-radius: 12px; padding: 24px; max-width: 900px;"
>
  <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px;">
    <!-- Día 1 -->
    <div
      style="background-color: #E8F4F8; border: 1px solid #D4E7ED; border-radius: 6px; padding: 10px; min-height: 90px;"
    >
      <div
        style="font-weight: 600; color: #89B5D6; margin-bottom: 6px; font-size: 14px;"
      >
        1
      </div>
    </div>
    <!-- Día con reserva -->
    <div
      style="background-color: #ffffff; border: 1px solid #D4E7ED; border-radius: 6px; padding: 10px; min-height: 90px;"
    >
      <div
        style="font-weight: 600; color: #89B5D6; margin-bottom: 6px; font-size: 14px;"
      >
        2
      </div>
      <div
        style="background-color: #A7C7E7; color: #ffffff; font-size: 11px; padding: 3px 5px; border-radius: 3px;"
      >
        10:00 Reserva
      </div>
    </div>
  </div>
</div>
```
