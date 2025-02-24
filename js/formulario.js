document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("contactForm");
    const modal = document.getElementById("modal-confirmacion");
    const cerrarModal = document.getElementById("cerrar-modal");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault(); // ❌ Evitar recarga

            // Enviar datos a Formspree
            fetch("https://formspree.io/f/tu_codigo_aqui", {
                method: "POST",
                body: new FormData(formulario),
                headers: { "Accept": "application/json" }
            }).then(response => {
                if (response.ok) {
                    modal.style.display = "flex"; // ✅ Mostrar pop-up centrado
                    formulario.reset(); // ✅ Resetear formulario
                } else {
                    alert("❌ Hubo un error. Inténtalo de nuevo más tarde.");
                }
            }).catch(error => {
                alert("❌ Error al enviar el formulario.");
            });
        });
    }

    // ✅ Cerrar modal al hacer clic en el botón
    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // ✅ Cerrar modal si el usuario hace clic fuera del cuadro
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
