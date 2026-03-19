# CloneCars — Tarjetas de Testimonios

Proyecto mgit uestra una lista de tarjetas con testimonios de personas del mundo de la programación, con foto, nombre, país, cargo y empresa.

---

## Vista previa

Tres tarjetas en lista vertical sobre un fondo azul oscuro. Cada tarjeta muestra una foto redonda grande, el nombre, el país, el cargo y el testimonio en cursiva.

---

## Tecnologías utilizadas

| Tecnología | Versión |
|---|---|
| React | 19 |
| Vite | 8 |
| ESLint | 9 |
| CSS puro | — |

---

## Estructura del proyecto

```
cloneCars/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Testimonio.jsx       # Componente de tarjeta de testimonio
│   ├── images/
│   │   ├── Quincy.png           # Foto de Quincy Larson
│   │   ├── Naomi.png            # Foto de Naomi Carrillo
│   │   └── Yaw.png              # Foto de Yaw Anokwa
│   ├── App.css                  # Estilos principales
│   ├── App.jsx                  # Componente raíz
│   ├── index.css                # Reset y estilos globales
│   └── main.jsx                 # Punto de entrada
├── index.html
├── eslint.config.js
├── vite.config.js
└── package.json
```

---

## Componente Testimonio

Recibe las siguientes props:

| Prop | Tipo | Descripción |
|---|---|---|
| `nombre` | string | Nombre completo de la persona |
| `pais` | string | País de origen |
| `imagen` | string | Ruta a la imagen |
| `cargo` | string | Cargo profesional |
| `empresa` | string | Empresa donde trabaja |
| `testimonio` | string | Texto del testimonio |

Ejemplo de uso:

```jsx
<Testimonio
  nombre="Quincy Larson"
  pais="Estados Unidos"
  imagen={Quincy}
  cargo="Fundador"
  empresa="freeCodeCamp"
  testimonio="Aprender a programar transformó completamente mi vida."
/>
```

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Arrancar en local
npm run dev

# Build para producción
npm run build

# Previsualizar el build
npm run preview
```

---

## Diseño

- Fondo azul muy oscuro `#0d1f35`
- Tarjetas en azul grisáceo `#8a9db5`
- Fotos circulares de 180x180px con borde azul oscuro
- Efecto hover: las tarjetas suben ligeramente al pasar el ratón
