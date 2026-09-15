// ============================================================
// Archivo: js/Reloj.js
// Ejercicio 3: Una clase nueva (POO + modulo)
// Muestra la hora en el footer y la actualiza cada segundo.
// ============================================================

// Exportamos la clase para usarla desde main.js
export default class Reloj {

  // constructor: se ejecuta al hacer "new Reloj('reloj')"
  // Guarda el elemento HTML donde vamos a escribir la hora
  constructor(idElemento) {
    this.elemento = document.getElementById(idElemento);
  }

  // iniciar: arranca el reloj
  iniciar() {
    // GUARDA: si no existe el elemento en el HTML, salimos sin error
    if (!this.elemento) return;

    // Mostramos la hora de una vez (sin esperar 1 segundo)
    this.actualizar();

    // setInterval repite una funcion cada X milisegundos (1000 = 1 segundo)
    // Usamos funcion flecha para no perder el "this"
    setInterval(() => this.actualizar(), 1000);
  }

  // actualizar: lee la hora actual y la escribe en pantalla
  actualizar() {
    // GUARDA: por seguridad, si el elemento desaparece, no hacemos nada
    if (!this.elemento) return;

    // new Date() crea un objeto con fecha y hora actual del PC/celular
    const ahora = new Date();

    // toLocaleTimeString convierte la hora a texto legible (ej: 3:25:10 p. m.)
    this.elemento.textContent = ahora.toLocaleTimeString();

    // datetime es un atributo util para accesibilidad y SEO
    this.elemento.setAttribute("datetime", ahora.toISOString());
  }
}
