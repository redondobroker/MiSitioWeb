document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".nav-menu a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto instantáneo

            const destinoId = this.getAttribute("href").substring(1); // Obtener el ID sin #
            const destino = document.getElementById(destinoId);

            if (destino) {
                const startPosition = window.scrollY; // Posición actual de la página
                const targetPosition = destino.getBoundingClientRect().top + window.scrollY - 70; // Ajuste para que el header no tape
                const distance = targetPosition - startPosition;
                const duration = 5000; // Duración extendida a 2s para un efecto más visual
                let startTime = null;

                function animacionScroll(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1); // Progreso entre 0 y 1

                    window.scrollTo(0, startPosition + distance * easeOutCubic(progress));

                    if (progress < 1) {
                        requestAnimationFrame(animacionScroll);
                    }
                }

                function easeOutCubic(t) {
                    return 1 - Math.pow(1 - t, 3);
                }

                requestAnimationFrame(animacionScroll);
            }

            // Cerrar el menú en móvil al hacer clic en un enlace
            const navMenu = document.querySelector(".nav-menu");
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
            }
        });
    });
});
