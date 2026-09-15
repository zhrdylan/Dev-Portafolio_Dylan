// ============================================================
// Archivo: js/Contacto.js
// Ejercicio 1 (clausulas de guarda) + Ejercicio 4 (anti-spam + fetch)
// Valida el formulario y envia el mensaje solo si pasa las guardas.
// ============================================================

// Esta funcion muestra el mensaje en pantalla (puedes cambiarla luego)
function publicarComentario(usuario, texto, correo, asunto) {
  // GUARDA 1: si no hay usuario o no esta activo, salir sin hacer nada
  if (!usuario || !usuario.activo) return false;

  // GUARDA 2: si el texto esta vacio o solo tiene espacios, salir
  if (!texto || texto.trim().length === 0) return false;

  // GUARDA 3: si el correo esta vacio, salir
  if (!correo || correo.trim().length === 0) return false;

  // GUARDA 4: si el asunto esta vacio, salir
  if (!asunto || asunto.trim().length === 0) return false;

  // Si paso todas las guardas, mostramos el resumen
  alert(
    "Nuevo Mensaje de Contacto\n\n" +
    "- Nombre: " + usuario.nombre + "\n" +
    "- Correo: " + correo + "\n" +
    "- Asunto: " + asunto + "\n" +
    "- Mensaje: " + texto
  );

  // Devolvemos true = "todo bien"
  return true;
}

// Esta funcion conecta el formulario HTML con la logica de arriba
// Se llama una sola vez desde main.js
export function activarFormularioContacto() {
  // Buscamos el formulario y el aviso en el HTML
  const formulario = document.querySelector(".formulario-contacto");
  const aviso = document.getElementById("aviso-contacto");

  // GUARDA: si no hay formulario en la pagina, salimos
  if (!formulario) return;

  // Escuchamos el evento "submit" (clic en Enviar o tecla Enter)
  formulario.addEventListener("submit", async (evento) => {
    // Evita que la pagina se recargue al enviar
    evento.preventDefault();

    // Leemos los valores escritos por el usuario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    // Limpiamos el aviso anterior
    if (aviso) {
      aviso.textContent = "";
    }

    // ---- EJERCICIO 4: GUARDA ANTI-SPAM ----
    // Si el mensaje contiene "http", es probable spam con enlace.
    // Mostramos aviso y salimos con return ANTES de enviar.
    if (mensaje.toLowerCase().includes("http")) {
      if (aviso) {
        aviso.textContent = "No se permiten enlaces en el mensaje.";
      } else {
        alert("No se permiten enlaces en el mensaje.");
      }
      return; // <-- clave: no sigue al fetch ni al alert
    }

    // Creamos el objeto usuario (siempre activo en este portafolio simple)
    const usuario = { nombre: nombre, activo: true };

    // Llamamos las guardas del Ejercicio 1
    // Si alguna falla, no seguimos
    const esValido = publicarComentario(usuario, mensaje, correo, asunto);
    if (!esValido) return;

    // ---- FETCH: envio simulado ----
    // Usamos una API de prueba gratuita para practicar fetch con POST
    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // POST = enviar datos
        headers: { "Content-Type": "application/json" }, // avisamos que enviamos JSON
        body: JSON.stringify({ nombre, correo, asunto, mensaje }) // convertimos a texto JSON
      });

      // GUARDA: si el servidor responde mal, avisamos y salimos
      if (!respuesta.ok) {
        if (aviso) aviso.textContent = "No se pudo enviar. Intenta de nuevo.";
        return;
      }

      // Si llega aqui, todo salio bien: limpiamos el formulario
      formulario.reset();
      if (aviso) aviso.textContent = "Mensaje enviado correctamente.";

    } catch (error) {
      // Si no hay internet o falla la red, mostramos error sin romper la pagina
      console.error("Error de red:", error);
      if (aviso) aviso.textContent = "Error de red. Revisa tu conexion.";
    }
  });
}
