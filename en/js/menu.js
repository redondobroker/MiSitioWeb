document.addEventListener("DOMContentLoaded", function () {
    // Esperar a que el header se cargue
    function checkMenuElements() {
        const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector(".nav-menu");

        if (!menuToggle || !navMenu) {
            setTimeout(checkMenuElements, 100); // Vuelve a intentarlo en 100ms
            return;
        }

        // Evento para abrir/cerrar menú en móviles
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        // Cerrar el menú al hacer clic en una opción
        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }

    checkMenuElements(); // Llamar la función para verificar que los elementos existen
});
