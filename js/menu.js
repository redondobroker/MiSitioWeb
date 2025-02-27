document.addEventListener("DOMContentLoaded", function () {
    setTimeout(initMenu, 500); // Se mantiene el delay por si el menú aún no está cargado.
});

/**
 * Inicializa el menú de navegación.
 */
function initMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuToggle || !navMenu) {
        console.error("❌ No se encontraron los elementos del menú.");
        return;
    }

    menuToggle.addEventListener("click", () => navMenu.classList.toggle("active"));

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => navMenu.classList.remove("active"));
    });

    console.log("✅ Menú inicializado correctamente.");
}
