document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("contactForm");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.");
            formulario.reset();
        });
    }
});