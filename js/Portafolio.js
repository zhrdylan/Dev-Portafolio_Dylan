// ============================================================
// Archivo: js/Portafolio.js
// Ejercicio 2: Datos desde JSON
// Esta clase carga datos.json y muestra la frase en el hero.
// ============================================================

// Exportamos la clase para poder usarla desde main.js
export default class Portafolio {

  // Metodo principal: se llama una sola vez desde main.js
  async cargar() {
    // GUARDA 1: buscar el contenedor de la frase en el HTML
    // Si no existe el elemento con id="frase-perfil", salimos sin romper la pagina
    const contenedor = document.getElementById("frase-perfil");
    if (!contenedor) return;

    try {
      // Pedimos el archivo JSON (fetch es como "ir a traer" un archivo)
      const respuesta = await fetch("datos.json");

      // GUARDA 2: si el archivo no responde bien (error 404, etc.), avisamos y salimos
      if (!respuesta.ok) {
        contenedor.textContent = "No se pudo cargar la frase.";
        return;
      }

      // Convertimos la respuesta a objeto de JavaScript
      const datos = await respuesta.json();

      // Sacamos la frase de datos.perfil.frase (? = "si existe, usalo")
      const frase = datos?.perfil?.frase;

      // GUARDA 3: si no hay frase o esta vacia, mostramos texto por defecto y salimos
      if (!frase || frase.trim() === "") {
        contenedor.textContent = "Bienvenido a mi portafolio.";
        return;
      }

      // Si todo esta bien, pintamos la frase en pantalla
      this.pintarFrase(frase);

    } catch (error) {
      // Si hay error de red o el JSON esta mal escrito, no rompemos la pagina
      console.error("Error cargando datos.json:", error);
      contenedor.textContent = "Bienvenido a mi portafolio.";
    }
  }

  // Metodo pequeño que solo se encarga de escribir la frase en el HTML
  pintarFrase(texto) {
    // Buscamos el contenedor otra vez (es barato y seguro)
    const contenedor = document.getElementById("frase-perfil");

    // GUARDA: si no existe, salimos
    if (!contenedor) return;

    // textContent es seguro (no interpreta HTML, evita inyecciones)
    contenedor.textContent = "“" + texto + "”";
  }
}
