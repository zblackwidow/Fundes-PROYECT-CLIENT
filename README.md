# FUNDES — Sitio Web Institucional

Sitio web institucional de **FUNDES**, organización de consultoría especializada en el desarrollo sostenible de mipymes en América Latina y el Caribe. Construido con **HTML5, CSS3 y JavaScript vanilla** — sin frameworks, sin build tools, sin dependencias.

---

## Índice

- [Vista general](#vista-general)
- [Tecnologías](#tecnologías)
- [Cómo correr el proyecto](#cómo-correr-el-proyecto)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Páginas](#páginas)
- [Secciones de index.html](#secciones-de-indexhtml)
- [CSS — arquitectura modular](#css--arquitectura-modular)
- [JavaScript — módulos](#javascript--módulos)
- [Design tokens](#design-tokens)
- [Breakpoints responsivos](#breakpoints-responsivos)
- [Patrones y componentes clave](#patrones-y-componentes-clave)
- [Assets](#assets)
- [Estrategia de ramas](#estrategia-de-ramas)

---

## Vista general

FUNDES impulsa el desarrollo sostenible a través de las mipymes. Este sitio comunica sus soluciones, metodología de impacto, alcance geográfico y memoria anual, permitiendo a organizaciones aliadas contactarlos para diseñar proyectos conjuntos.

---

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Marcado | HTML5 semántico |
| Estilos | CSS3 (Flexbox, Grid, custom properties, `@keyframes`) |
| Comportamiento | JavaScript vanilla (ES6+) |
| Fuentes | Google Fonts — Poppins, Open Sans, Manrope |
| Mapas | Genially (embeds iframe) |
| Build | Ninguno — servir archivos estáticos directamente |

---

## Cómo correr el proyecto

No requiere instalación ni build step. Serví los archivos directamente:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# VS Code
# Instalar extensión Live Server → click derecho en index.html → "Open with Live Server"
```

Abrí `http://localhost:8000` en el navegador.

> **Nota:** el video del hero y los iframes de Genially requieren conexión a internet.

---

## Estructura del proyecto

```
Fundes-PROYECT-CLIENT/
│
├── index.html                          # Landing page principal
├── cadenas-de-valor.html               # Página de solución: Cadenas de valor sostenible
├── inclusion-socioeconomica.html       # Página de solución: Inclusión socioeconómica
├── cambio-climatico-biodiversidad.html # Página de solución: Cambio climático y biodiversidad
│
├── assets/
│   ├── css/
│   │   ├── main.css        # Layout principal y todas las secciones (~1300 líneas)
│   │   ├── nav.css         # Header sticky y menú hamburguesa
│   │   ├── form.css        # Formulario de contacto
│   │   ├── footer.css      # Footer con grid y redes sociales
│   │   ├── contador.css    # Contadores animados con métricas
│   │   └── map.css         # Carrusel de mapas geográficos
│   │
│   ├── js/
│   │   ├── main.js         # Dropdown de países + acordeón de goal-cards
│   │   ├── nav.js          # Hamburguesa, submenús y cierre al hacer click fuera
│   │   ├── form.js         # Manejo del formulario (placeholder)
│   │   ├── contador.js     # Animación de contadores con IntersectionObserver
│   │   └── map.js          # Carrusel de slides del mapa
│   │
│   └── img/
│       ├── brands/         # Logos de organizaciones aliadas
│       ├── icons/          # Íconos SVG (goal-cards, navegación)
│       ├── images/         # Fotografías del sitio
│       ├── patterns/       # Elementos decorativos (círculos, patrones)
│       ├── social/         # Íconos SVG de redes sociales
│       ├── video/          # Video de fondo del hero
│       ├── logo.svg        # Logo FUNDES (header)
│       └── logo-footer.svg # Logo FUNDES (footer)
│
└── docs/
    └── memoria-anual-2025.pdf  # Descargable de la sección Book
```

---

## Páginas

| Archivo | Ruta | Descripción |
|---------|------|-------------|
| `index.html` | `/` | Landing page con todas las secciones principales |
| `cadenas-de-valor.html` | `/cadenas-de-valor.html` | Solución: Cadenas de valor sostenible |
| `inclusion-socioeconomica.html` | `/inclusion-socioeconomica.html` | Solución: Inclusión socioeconómica |
| `cambio-climatico-biodiversidad.html` | `/cambio-climatico-biodiversidad.html` | Solución: Cambio climático y biodiversidad |

---

## Secciones de index.html

### 1. Header / Navegación
- Logo enlazado al home
- Menú principal con submenús desplegables
- Botón hamburguesa para móvil (activa `main-nav`)
- Sticky: permanece fijo al hacer scroll

### 2. Hero
- Video de fondo en autoplay, muted, loop (`<video>`)
- Overlay semitransparente azul (`rgba(6, 36, 134, 0.384)`)
- Título h1 con spans de color resaltados (`.highlight`, `.highlight-secondary`)
- Altura fija: 749px desktop → 600px tablet → 500px mobile → 400px mobile small

### 3. Consulting (Consultoría de Impacto)
- Imagen principal con patrón decorativo superpuesto
- Badge de categoría, h2 y párrafo descriptivo
- Grid de 6 **goal-cards** en acordeón (3 columnas → 2 → 1 según breakpoint)
- Cada card muestra un ícono SVG, título, botón toggle `+`/`−` y lista de ítems

### 4. Methodology (Metodología)
- Fondo oscuro `#122140`
- Foto de equipo + patrón decorativo (escritorio) / solo foto recortada (tablet)
- Texto con h2, párrafo y botón CTA `.button-primary`

### 5. Impact (Nuestro Impacto)
- Párrafo introductorio
- 4 métricas animadas al hacer scroll (`IntersectionObserver`): `+40` años, `2.000.000` mipymes, `24` países, `+600` proyectos
- Nota "Desde el 2014"
- Carrusel de 2 mapas interactivos Genially (América y África)

### 6. Book (Memoria Anual)
- Fondo con gradiente azul (`#027592` → `#1D477E`)
- Título, subtítulo, descripción y botón de descarga del PDF
- Imagen del libro de memoria

### 7. Brands
- Título `+de 600 Organizaciones`
- Slider infinito con 7 logos: PepsiCo, Coca-Cola, Walmart, American Express, Visa, Corficolombiana, Nestlé
- Animación CSS `@keyframes scroll` con `translateX(-50%)` sobre track duplicado

### 8. Contact (Formulario de Contacto)
- Texto introductorio + imagen decorativa
- Formulario con: nombre, apellido, email, teléfono, país (dropdown dinámico con 200+ países), tipo de organización, tipo de solicitud, mensaje
- Botón de envío

### 9. Footer
- Grid 2 columnas: logo + redes sociales / información de contacto
- Links a LinkedIn, YouTube, Facebook, Instagram
- Barra inferior con copyright y link a políticas de privacidad

---

## CSS — arquitectura modular

Cada archivo CSS cubre un dominio específico. Todos se cargan en el `<head>` del HTML.

| Archivo | Responsabilidad |
|---------|----------------|
| `main.css` | Reset global, design tokens (`:root`), tipografía, layout de todas las secciones, breakpoints completos |
| `nav.css` | Header sticky, hamburger button, menú móvil off-canvas, submenús, z-index |
| `form.css` | Campos de formulario (input, select, textarea), label, botones del formulario |
| `footer.css` | Grid del footer, redes sociales, barra inferior, responsive |
| `contador.css` | `.metrics-list`, `.metric-number`, `.metric-label`, fuente Manrope |
| `map.css` | `.geo-map`, `.map-slide`, botones de navegación `.map-nav` |

---

## JavaScript — módulos

| Archivo | Qué hace |
|---------|---------|
| `main.js` | Puebla el `<select id="country">` con 226 países dinámicamente. Gestiona el toggle `.active` en cada `.goal-card` al hacer click en `.goal-card-header` |
| `nav.js` | Abre/cierra el menú hamburguesa, maneja submenús en móvil, cierra todo al hacer click fuera del nav |
| `contador.js` | Crea una animación de dígito por columna vertical (`animateCounterVertical`). Usa `IntersectionObserver` (threshold 0.5) para disparar la animación al entrar `.metrics-list` en viewport |
| `map.js` | Maneja el carrusel de mapas: botones `.map-prev` / `.map-next` activan la clase `.active` en el slide correspondiente |
| `form.js` | Placeholder para el envío del formulario (pendiente integración backend) |

---

## Design tokens

Definidos como custom properties en `:root` dentro de `main.css`:

```css
:root {
    --primary-color:    #1D477E;   /* Azul marino principal */
    --secondary-color:  #349CE6;   /* Azul claro / highlight */
    --btn-color:        #4B9ED9;   /* Azul botones */
    --title-form-color: #282943;   /* Azul oscuro para títulos */
    --footer-color:     #11203F;   /* Azul muy oscuro (footer y texto botones) */

    --fuente-principal:  'Poppins', sans-serif;    /* Títulos, badges, botones */
    --fuente-secundaria: 'Open Sans', sans-serif;  /* Cuerpo de texto */
}
```

Manrope (400 y 700) se usa exclusivamente en las métricas del counter, importada desde `contador.css`.

---

## Breakpoints responsivos

| Breakpoint | Contexto |
|------------|---------|
| `max-width: 1024px` | Tablet — menú hamburguesa, layouts apilados, methodology media reducida |
| `max-width: 768px` | Mobile landscape — goal-cards en 1 columna, contact en columna, nav ajustada |
| `max-width: 480px` | Mobile portrait — tipografía reducida, hero compacto, sliders reducidos |

Todos los breakpoints están contenidos en `main.css` al final del archivo, con secciones comentadas.

---

## Patrones y componentes clave

### Goal-cards (acordeón)
```
JS:   click en .goal-card-header → toggle clase .active en .goal-card
CSS:  .goal-card-content { max-height: 0 } → .goal-card.active .goal-card-content { max-height: 500px }
CSS:  .goal-card.active .toggle-icon → font-size: 0 + ::before { content: '−' }
```

### Slider de brands (CSS puro)
```
HTML: 7 logos originales + 7 logos duplicados = 14 items en .brands-track
CSS:  @keyframes scroll { translateX(0) → translateX(-50%) } en 8s linear infinite
```

### Contador animado
```
JS:   IntersectionObserver dispara animateCounterVertical() cuando .metrics-list entra al 50% del viewport
JS:   Cada dígito es un span con una columna de divs animada con CSS transform: translateY
HTML: data-target="40" → anima a 40 | data-target="2000000" → anima a 2000000
HTML: + en el texto inicial indica hasPlus (ej: "+40", "+600")
```

### Menú con submenú
```
JS:  click en .has-submenu abre .submenu con clase .open (móvil)
CSS: hover en desktop abre submenú con opacity/visibility
JS:  click fuera del header cierra todo
```

### Lazy loading de imágenes
```html
<img src="..." loading="lazy">
```
Aplicado en todas las imágenes que no están en el viewport inicial.

---

## Assets

### `assets/img/brands/`
| Archivo | Marca |
|---------|-------|
| `pepsico.png` | PepsiCo |
| `coca-cola.png` | Coca-Cola |
| `walmart.png` | Walmart |
| `american-express.png` | American Express |
| `visa.png` | Visa |
| `corficolombiana.png` | Corficolombiana |
| `nestle.png` | Nestlé |

### `assets/img/icons/`
SVGs para las goal-cards (`cadena de valor.svg`, `inclusión social.svg`, `sol.svg`, `transformacion digital.svg`, `Fondos.svg`, `Conocimiento.svg`) y navegación del mapa (`left.svg`, `right.svg`).

### `assets/img/social/`
SVGs para redes sociales: `Linkedin.svg`, `YouTube.svg`, `Facebook.svg`, `Instagram.svg`.
