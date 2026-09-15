// ============================================================
// Archivo: js/main.js
// Punto de entrada: aqui se ejecutan todos los ejercicios.
// 1. Portafolio (frase desde JSON)
// 2. Reloj (hora en footer)
// 3. Contacto (guardas + anti-spam + fetch)
// 4. Mejoras: tema claro/oscuro + menu movil + año automatico
// ============================================================

// Importamos las clases/funciones de los otros archivos (modulos)
import Portafolio from "./Portafolio.js";
import Reloj from "./Reloj.js";
import { activarFormularioContacto } from "./Contacto.js";

// ---- EJERCICIO 2: frase desde JSON ----
const miPortafolio = new Portafolio();
miPortafolio.cargar();

// ---- EJERCICIO 3: reloj en el footer ----
const miReloj = new Reloj("reloj");
miReloj.iniciar();

// ---- EJERCICIOS 1 y 4: formulario con guardas ----
activarFormularioContacto();

// ============================================================
// MEJORA 1: Tema claro / oscuro que se recuerda (localStorage)
// ============================================================

// Buscamos el boton del tema en el nav
const botonTema = document.getElementById("btn-tema");

// Funcion que aplica el tema ("dark" u "light") a toda la pagina
function aplicarTema(tema) {
  // data-theme se lee desde el CSS para cambiar colores
  document.documentElement.setAttribute("data-theme", tema);
  // Guardamos la eleccion para que sobreviva a la recarga
  localStorage.setItem("tema", tema);
  // Solo actualizamos el texto de ayuda (no tocamos los iconos sol/luna)
  if (botonTema) {
    botonTema.setAttribute("aria-label", tema === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
  }
}

// GUARDA: solo activamos el tema si existe el boton en el HTML
if (botonTema) {
  // Al abrir la pagina, leemos el tema guardado (si no hay, usamos "dark")
  const temaGuardado = localStorage.getItem("tema") || "dark";
  aplicarTema(temaGuardado);

  // Al hacer clic, cambiamos al tema contrario
  botonTema.addEventListener("click", () => {
    const actual = document.documentElement.getAttribute("data-theme") || "dark";
    const nuevo = actual === "dark" ? "light" : "dark";
    aplicarTema(nuevo);
  });
}

// ============================================================
// MEJORA 2: Menu que se abre / cierra en movil
// ============================================================

const botonMenu = document.getElementById("btn-menu");
const menuEnlaces = document.getElementById("menu-enlaces");

// GUARDA: si faltan los elementos, no hacemos nada
if (botonMenu && menuEnlaces) {
  botonMenu.addEventListener("click", () => {
    // toggle = si tiene la clase la quita, si no la tiene la pone
    const abierto = menuEnlaces.classList.toggle("abierto");
    // Cambiamos icono y avisamos a lectores de pantalla
    botonMenu.textContent = abierto ? "✖" : "☰";
    botonMenu.setAttribute("aria-expanded", abierto);
  });

  // Buen detalle: al hacer clic en un enlace, cerrar el menu en movil
  menuEnlaces.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menuEnlaces.classList.remove("abierto");
      botonMenu.textContent = "☰";
      botonMenu.setAttribute("aria-expanded", "false");
    }
  });
}

// ============================================================
// MEJORA 4: Ruedita de carga (simple)
// Tapa la pagina hasta que todo termina de cargar y luego se quita.
// ============================================================

// Buscamos la ruedita en el HTML
const cargador = document.getElementById("cargador");

// Funcion que oculta la ruedita con transicion y luego la elimina
function ocultarCargador() {
  // GUARDA: si no existe o ya esta oculta, no hacemos nada
  if (!cargador || cargador.classList.contains("oculto")) return;

  // Le ponemos la clase que la desvanece (el CSS hace la animacion)
  cargador.classList.add("oculto");

  // Despues de 600ms la borramos del todo para que no estorbe
  setTimeout(() => cargador.remove(), 600);
}

// Caso 1: si la pagina YA termino de cargar, quitarla de una vez
if (document.readyState === "complete") {
  ocultarCargador();
} else {
  // Caso 2: si aun esta cargando, esperar al evento "load" (imagenes y videos listos)
  window.addEventListener("load", ocultarCargador);
}

// Caso 3 (seguridad): aunque algo se demore, quitarla a los 4 segundos igual
setTimeout(ocultarCargador, 4000);

// ============================================================
// MEJORA 3: Año automatico en el footer (jefe final simple)
// ============================================================

const anoFooter = document.getElementById("ano-footer");
if (anoFooter) {
  anoFooter.textContent = new Date().getFullYear();
}
