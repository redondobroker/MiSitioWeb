document.addEventListener("DOMContentLoaded", function () {
    function initMenu() {
        const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector(".nav-menu");
        const botonWassapMovil = document.querySelector(".boton-wassap-movil");

        if (!menuToggle || !navMenu) {
            console.error("❌ Error: No se encontraron los elementos del menú. Verifica header.html");
            return;
        }

        console.log("✅ Elementos del menú encontrados correctamente.");

        // Evento para abrir/cerrar el menú en móviles
        menuToggle.addEventListener("click", function () {
            const isActive = navMenu.classList.toggle("active");


        });

        // Cerrar el menú cuando se haga clic en un enlace
        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");

            });
        });

 
    }

    // Esperar a que el header se cargue antes de ejecutar el script
    setTimeout(initMenu, 500);
});
