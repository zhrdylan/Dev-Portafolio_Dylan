# ⚡ Portafolio de Desarrollo — Dylan (v2)

Bienvenido al repositorio oficial del **Portafolio Profesional de Dylan**. Esta versión (**v2**) implementa una arquitectura web moderna, interactiva y de alto impacto visual orientada al desarrollo **Full Stack**, la ingeniería de **sistemas automatizados IoT con Arduino** y el ecosistema de **Inteligencia Artificial (Agentes de IA y Protocolo MCP)**, construida con **HTML5 100% Semántico** y **CSS Modular**, aplicando los fundamentos avanzados de la **Clase 03**.

---

## 🚀 Características Principales

- **Estructura HTML5 Semántica Estricta:** Construido sin etiquetas genéricas innecesarias (`0 <div>`, `0 <span>`). Uso exhaustivo de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<address>`, `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<textarea>`, `<button>`, `<ul>`, `<li>`, `<h1>`–`<h3>`, `<p>`, `<a>`, `<img>`, `<video>`, `<strong>` y `<em>`.
- **Enfoque Tecnológico Full Stack, IoT & IA:** Presentación especializada en aplicaciones web completas, ingeniería electrónica con microcontroladores Arduino, automatización de fluidos con relés y bombas, y desarrollo de sistemas basados en Inteligencia Artificial, Agentes Autónomos y Protocolo MCP (Model Context Protocol).
- **Proyectos de Ingeniería con Demostraciones Multimedia:**
  - **Proyecto 1: Sistema Automatizado con Arduino & Control Eléctrico:** Microcontrolador Arduino, circuito integrado en protoboard, sensores de lectura en tiempo real, módulo de relé (*relay*) para conmutación de potencia y electrobomba sumergible para control autónomo de flujo con video demostrativo.
  - **Proyecto 2: Plataforma SIREC:** Sistema especializado de registro, control y seguimiento operativo con persistencia en MySQL y arquitectura web responsiva.
- **Formulario de Contacto en la Cabecera de la Sección:** Formulario interactivo principal con validación nativa y campos completos, seguido por las tarjetas de canales directos (GitHub y Gmail).
- **Catálogo de Tecnologías con Iconos Dedicados:** Iconos nítidos para Python, PHP, MySQL, JavaScript, HTML5, CSS3, IA & Agentes y Protocolo MCP.
- **Arquitectura CSS Modular:** 5 hojas de estilo estructuradas (`reset.css`, `layout.css`, `components.css`, `animations.css`, `responsive.css`).
- **Paleta Dark Tech:** Fondo oscuro `#090c15`, acentos en violeta eléctrico (`#6c63ff`) y cyan neón (`#00d4ff`), resplandor *glow* y *glassmorphism*.
- **Animaciones a 60 FPS:** Entradas con `@keyframes fadeInUp`, flotación del avatar `floatAvatar` y pulso `pulseGlow`, con soporte de accesibilidad `prefers-reduced-motion`.

---

## 🎨 Paleta de Colores y Sistema de Diseño

| Variable CSS | Valor Hexadecimal / RGBA | Propósito en la UI |
|---|---|---|
| `--bg-main` | `#090c15` | Fondo principal (negro azulado profundo) |
| `--bg-surface` | `#101526` | Superficie de secciones y tarjetas secundarias |
| `--bg-card` | `#151b33` | Fondo de tarjetas de proyectos y componentes |
| `--accent-primary` | `#6c63ff` | Violeta eléctrico (acento primario) |
| `--accent-secondary` | `#00d4ff` | Cyan neón (acento secundario y estados activos) |
| `--accent-glow` | `rgba(108, 99, 255, 0.35)` | Resplandor difuminado para botones y avatar |
| `--text-main` | `#f8fafc` | Texto principal de alto contraste |
| `--text-muted` | `#94a3b8` | Texto secundario y descripciones |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Bordes sutiles para delimitar tarjetas |

---

## 📁 Estructura del Proyecto

```text
Dev-Portafolio_Dylan/
├── index.html                  # Maquetación semántica principal (0 divs, 0 spans)
├── README.md                   # Documentación técnica del proyecto
├── GUIA.md                     # Guía de referencia de la Clase 03
├── css/
│   ├── reset.css               # Reset de caja, variables CSS (:root) y estilos base
│   ├── layout.css              # Header sticky, nav, contenedor main, secciones y footer
│   ├── components.css          # Tarjetas de proyectos, grid tech, formulario y botones
│   ├── animations.css          # Keyframes (@keyframes), transiciones y microinteracciones
│   └── responsive.css          # Media queries para móviles, tablets y pantallas pequeñas
└── assets/
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
    │   │   └── mcp.webp        # Icono de Model Context Protocol
    │   └── proyectos/
    │       ├── Project_1.png   # Portada de Proyecto 1 (Sistema Automatizado con Arduino)
    │       └── Project_2.png   # Portada de Proyecto 2 (Plataforma SIREC)
    └── vid/
        ├── automatizado.mp4    # Demostración en video de Proyecto 1 (Circuito y Bomba)
        └── sirec.mp4           # Demostración en video de Proyecto 2
```

---

## 📬 Contacto Directo

- **Formulario de Mensaje:** Integrado directamente en la sección `#contacto` de la web.
- **GitHub Oficial:** [github.com/zhrdylan](https://github.com/zhrdylan)
- **Correo Electrónico:** [stiven052008@gmail.com](mailto:stiven052008@gmail.com)

---

## 💻 Cómo Visualizar el Portafolio

1. Clona o descarga este repositorio en tu equipo local.
2. Abre la carpeta del proyecto en tu editor de código preferido (ej. Visual Studio Code).
3. Abre el archivo `index.html` directamente en tu navegador web o mediante una extensión de servidor local como *Live Server*.
4. Prueba la interactividad de las tarjetas de proyectos, la reproducción de videos, el catálogo de tecnologías y el formulario de contacto.
