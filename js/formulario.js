document.addEventListener("DOMContentLoaded", function () {
    initFormulario();
});

/**
 * Inicializa el formulario de contacto y el modal de confirmación.
 */
function initFormulario() {
    const formulario = document.getElementById("contactForm");
    const modal = document.getElementById("modal-confirmacion");

    if (!formulario) return;

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        fetch("https://formspree.io/f/tu_codigo_aqui", {
            method: "POST",
            body: new FormData(formulario),
            headers: { "Accept": "application/json" }
        })
        .then(response => response.ok ? mostrarModal(modal, formulario) : alert("❌ Hubo un error. Inténtalo de nuevo."))
        .catch(() => alert("❌ Error al enviar el formulario."));
    });

    window.addEventListener("click", event => {
        if (event.target === modal) modal.style.display = "none";
    });
}

/**
 * Muestra el modal de confirmación y reinicia el formulario.
 * @param {HTMLElement} modal - Modal a mostrar.
 * @param {HTMLFormElement} formulario - Formulario a reiniciar.
 */
function mostrarModal(modal, formulario) {
    modal.style.display = "flex";
    formulario.reset();
}
