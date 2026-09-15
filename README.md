# ⚡ Portafolio de Desarrollo — Dylan (v3)

Bienvenido al repositorio oficial del **Portafolio Profesional de Dylan**. Esta versión (**v3 — Actividad Clase 04: POO, JSON, guardas y reloj**) suma JavaScript modular sobre la base de la v2 (HTML5 semántico + CSS modular de la Clase 03): clases y módulos ES, datos externos en JSON, validación con cláusulas de guarda, reloj en vivo y mejoras de experiencia (tema claro/oscuro persistente, menú móvil, pantalla de carga y descarga de hoja de vida).

---

## 🚀 Características Principales

- **Estructura HTML5 Semántica Estricta:** Construido sin etiquetas genéricas innecesarias (`0 <div>`, `0 <span>`). Uso exhaustivo de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<address>`, `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<textarea>`, `<button>`, `<ul>`, `<li>`, `<h1>`–`<h3>`, `<p>`, `<a>`, `<img>`, `<video>`, `<strong>`, `<em>`, `<blockquote>` y `<time>`.
- **JavaScript Modular (Clase 04):** 4 archivos en `js/` con `import`/`export`, cargados desde un único punto de entrada (`js/main.js` con `type="module"`). Código simple y comentado en español.
  - `Portafolio.js` — clase `Portafolio` con `cargar()` y `pintarFrase()`: lee `datos.json` con `fetch` y muestra la frase en el hero. Si cambias la frase en el JSON y recargas, cambia en la página sin tocar HTML ni JS.
  - `Reloj.js` — clase `Reloj`: muestra la hora viva en el footer (`<time id="reloj">`) y la actualiza cada segundo con `setInterval`.
  - `Contacto.js` — validación con **cláusulas de guarda** (`if (...) return;`) más **guarda anti-spam**: si el mensaje contiene `http` muestra un aviso y sale con `return` antes de enviar; si pasa, envía con `fetch` (POST) y limpia el formulario.
  - `main.js` — importa y arranca todo: frase, reloj, formulario, interruptor de tema, menú móvil y año automático del footer.
- **Interruptor de Tema Sol/Luna:** pastilla con iconos `☀`/`☾` en el nav. Alterna tema oscuro/claro cambiando `data-theme` (solo variables CSS) y **recuerda la elección con `localStorage`** aunque se recargue la página. El icono MCP también cambia según el tema (`mcp.webp` en oscuro, `mcp-light.png` en claro).
- **Menú Móvil Abre/Cierra:** botón `☰`/`✖` que muestra u oculta los enlaces en pantallas pequeñas (menú tipo tarjeta) y se cierra solo al elegir un enlace.
- **Pantalla de Carga:** overlay con ruedita giratoria (`@keyframes girar`) que tapa la página hasta el evento `load` y luego se desvanece (con respaldo de 4 segundos).
- **Descarga de Hoja de Vida:** botón "Descargar HDV" en el hero con atributo `download` (`assets/HDV/HOJA DE VIDA DYLAN HERNÁNDEZ.pdf`).
- **Avatar Flotante:** la foto sube y baja suavemente en bucle (`@keyframes flotar`).
- **Formulario de Contacto:** validación nativa + guardas JS + aviso anti-spam (`#aviso-contacto`), seguido por las tarjetas de canales directos (GitHub y Gmail).
- **Catálogo de Tecnologías con Iconos Dedicados:** Python, PHP, MySQL, JavaScript, HTML5, CSS3, IA & Agentes y Protocolo MCP (con variante clara/oscura).
- **Proyectos de Ingeniería con Demostraciones Multimedia:**
  - **Proyecto 1: Sistema Automatizado con Arduino & Control Eléctrico:** Arduino, protoboard, sensores en tiempo real, módulo relé y electrobomba, con video demostrativo.
  - **Proyecto 2: Plataforma SIREC:** registro, control y seguimiento operativo con persistencia en MySQL.
- **Arquitectura CSS Modular:** 5 hojas (`reset.css`, `layout.css`, `components.css`, `animations.css`, `responsive.css`). `animations.css` es mínimo a propósito: ruedita + flotar + `prefers-reduced-motion`.
- **Paleta Dual:** modo oscuro `#090c15` con violeta eléctrico (`#6c63ff`) y cyan neón (`#00d4ff`) + modo claro `#f1f5f9` con las mismas variables.
- **Responsive verificado a 320/360px:** hero sin recortes (título fluido + badge que se parte en 2 líneas), grids a 1 columna y botones a ancho completo.

---

## 🎨 Paleta de Colores y Sistema de Diseño

| Variable CSS | Modo oscuro | Modo claro | Propósito en la UI |
|---|---|---|---|
| `--bg-main` | `#090c15` | `#f1f5f9` | Fondo principal |
| `--bg-surface` | `#101526` | `#ffffff` | Superficie de secciones y tarjetas secundarias |
| `--bg-card` | `#151b33` | `#ffffff` | Fondo de tarjetas y componentes |
| `--accent-primary` | `#6c63ff` | `#6c63ff` | Violeta eléctrico (acento primario) |
| `--accent-secondary` | `#00d4ff` | `#00d4ff` | Cyan neón (acento secundario) |
| `--accent-glow` | `rgba(108, 99, 255, 0.35)` | `rgba(108, 99, 255, 0.35)` | Resplandor de botones y avatar |
| `--text-main` | `#f8fafc` | `#0f172a` | Texto principal |
| `--text-muted` | `#94a3b8` | `#475569` | Texto secundario |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | `rgba(15, 23, 42, 0.1)` | Bordes sutiles |

El tema se cambia con `<html data-theme="light">` (lo pone `main.js`); todo el sitio reacciona solo con variables.

---

## 📁 Estructura del Proyecto

```text
Dev-Portafolio_Dylan/
├── index.html                  # Maquetación semántica principal (0 divs, 0 spans)
├── README.md                   # Documentación técnica del proyecto
├── datos.json                  # Datos del perfil (nombre, titulo, frase para el hero)
├── js/
│   ├── main.js                 # Punto de entrada: arranca frase, reloj, form, tema y menú
│   ├── Portafolio.js           # Clase Portafolio: fetch del JSON + pintarFrase()
│   ├── Reloj.js                # Clase Reloj: hora viva del footer con setInterval
│   └── Contacto.js             # Guardas de validación + anti-spam http + fetch POST
├── css/
│   ├── reset.css               # Reset de caja, variables y tema claro, scroll suave
│   ├── layout.css              # Header sticky, nav, interruptor sol/luna, main y footer
│   ├── components.css          # Hero, frase, aviso, reloj, grids, formulario y botones
│   ├── animations.css          # Ruedita de carga (girar) + avatar flotante (flotar)
│   └── responsive.css          # Menú móvil tipo tarjeta + ajustes 768px / 480px
└── assets/
    ├── HDV/
    │   └── HOJA DE VIDA DYLAN HERNÁNDEZ.pdf  # Hoja de vida descargable
    ├── img/
    │   ├── dev/
    │   │   └── Dylan.png       # Fotografía del desarrollador
    │   ├── iconos/
    │   │   ├── git_hub.png     # Icono de GitHub
    │   │   ├── gmail.png       # Icono de Gmail
    │   │   ├── python.png      # Icono de Python
    │   │   ├── php.png         # Icono de PHP
    │   │   ├── mysql.svg       # Icono de MySQL
    │   │   ├── js.svg          # Icono de JavaScript
    │   │   ├── html-5.png      # Icono de HTML5
    │   │   ├── css.png         # Icono de CSS3
    │   │   ├── IA.png          # Icono de IA & Agentes
    │   │   ├── mcp.webp        # Icono MCP (tema oscuro)
    │   │   └── mcp-light.png   # Icono MCP (tema claro)
    │   └── proyectos/
    │       ├── Project_1.png   # Portada de Proyecto 1 (Sistema Automatizado con Arduino)
    │       └── Project_2.png   # Portada de Proyecto 2 (Plataforma SIREC)
    └── vid/
        ├── automatizado.mp4    # Demostración en video de Proyecto 1 (Circuito y Bomba)
        └── sirec.mp4           # Demostración en video de Proyecto 2
```

---

## ✅ Criterios de la Actividad (cómo probarlos)

1. **Frase desde JSON:** cambia `frase` en `datos.json`, recarga → cambia en el hero sin tocar HTML ni JS.
2. **Reloj:** mira el footer unos segundos → la hora avanza sola; el código vive en `js/Reloj.js`, `main.js` solo la usa.
3. **Anti-spam:** envía `visita http://algo` → se bloquea con aviso y no se envía; un mensaje normal sí se envía (alerta + POST de prueba).
4. **Tema:** pon oscuro, recarga → sigue oscuro (y al revés con claro).
5. **Menú móvil:** en vista ≤768px, `☰` abre/cierra el menú.
6. **Consola:** F12 → sin errores rojos.

---

## 📬 Contacto Directo

- **Formulario de Mensaje:** Integrado directamente en la sección `#contacto` de la web.
- **GitHub Oficial:** [github.com/zhrdylan](https://github.com/zhrdylan)
- **Correo Electrónico:** [stiven052008@gmail.com](mailto:stiven052008@gmail.com)

---

## 💻 Cómo Visualizar el Portafolio

> ⚠️ Usa **Live Server** (no abras con doble clic como `file://`): el `fetch` de `datos.json` y los módulos ES (`import`/`export`) requieren servidor local.

1. Clona o descarga este repositorio en tu equipo local.
2. Abre la carpeta del proyecto en tu editor de código preferido (ej. Visual Studio Code).
3. Inicia Live Server (o `npx serve`) y abre la URL local en tu navegador.
4. Prueba: ruedita de carga, frase del hero, reloj del footer, interruptor sol/luna (recarga para ver que se recuerda), menú móvil, formulario con y sin `http`, y descarga del HDV.
