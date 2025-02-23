document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        const container = document.getElementById(id);

        if (!container) {
            console.error(`❌ Error: No se encontró el contenedor con ID "${id}".`);
            return;
        }

        console.log(`🔄 Intentando cargar "${file}" en el contenedor "#${id}"...`);

        fetch(`components/${file}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`❌ No se pudo cargar "${file}" (HTTP ${response.status})`);
                }
                return response.text();
            })
            .then(html => {
                console.log(`✅ "${file}" cargado correctamente en "#${id}".`);
                container.innerHTML = html;
            })
            .catch(error => console.error(`⚠️ Error cargando "${file}":`, error));
    }

    // 📌 Lista de componentes a cargar
    const componentes = [
        { id: "header-container", file: "header.html" },
        { id: "inicio-container", file: "inicio.html" },
        { id: "servicios-container", file: "servicios.html" },
        { id: "sobre-mi-container", file: "sobre-mi.html" },
        { id: "contacto-container", file: "contacto.html" },
        { id: "footer-container", file: "footer.html" }
    ];

    // 🔄 Cargar todos los componentes dinámicamente
    componentes.forEach(comp => loadComponent(comp.id, comp.file));
});
