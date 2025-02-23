document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        const container = document.getElementById(id);
        if (!container) {
            console.error(`❌ Error: No se encontró el contenedor con ID "${id}"`);
            return;
        }

        console.log(`🔄 Cargando ${file} en ${id}...`);

        fetch(`./components/${file}`)  // 👈 IMPORTANTE: Asegura que la ruta sea correcta
            .then(response => {
                if (!response.ok) {
                    throw new Error(`❌ No se pudo cargar ${file} (HTTP ${response.status})`);
                }
                return response.text();
            })
            .then(html => {
                console.log(`✅ ${file} cargado correctamente`);
                container.innerHTML = html;
            })
            .catch(error => console.error(`⚠️ Error cargando ${file}:`, error));
    }

    // Cargar los componentes
    loadComponent("header-container", "header.html");
    loadComponent("inicio-container", "inicio.html");
    loadComponent("servicios-container", "servicios.html");
    loadComponent("sobre-mi-container", "sobre-mi.html");
    loadComponent("contacto-container", "contacto.html");
    loadComponent("footer-container", "footer.html");
});
