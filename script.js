function actualizarFechaHora() {
    const ahora = new Date();

    const fecha = ahora.toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const hora = ahora.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    document.getElementById("fecha").textContent = fecha;
    document.getElementById("hora").textContent = hora;
}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);
