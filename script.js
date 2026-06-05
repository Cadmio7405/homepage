function actualizarFechaHora() {
  const ahora = new Date();

  const hora = ahora.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const fecha = ahora.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  document.getElementById("hora").textContent = hora;
  document.getElementById("fecha").textContent = fecha;
}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);
