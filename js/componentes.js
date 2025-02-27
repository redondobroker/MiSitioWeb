document.addEventListener("DOMContentLoaded", function () {
    cargarComponentes();
});

function cargarComponentes() {
    const componentes = [
        { id: "header-container", file: "header.html" },
        { id: "inicio-container", file: "inicio.html" },
        { id: "servicios-container", file: "servicios.html" },
        { id: "sobre-mi-container", file: "sobre-mi.html" },
        { id: "contacto-container", file: "contacto.html" },
        { id: "aseguradoras-container", file: "aseguradoras.html" },  // Nueva sección aseguradoras
        { id: "footer-container", file: "footer.html" }
    ];

    componentes.forEach(({ id, file }) => loadComponent(id, file));
}



/**
 * Carga un componente dentro de su contenedor.
 * @param {string} id - ID del contenedor donde se insertará el componente.
 * @param {string} file - Archivo HTML a cargar.
 */
function loadComponent(id, file) {
    const container = document.getElementById(id);
    if (!container) {
        console.error(`❌ Error: No se encontró el contenedor "${id}".`);
        return;
    }

    fetch(`components/${file}`)
        .then(response => response.ok ? response.text() : Promise.reject(`❌ Error ${response.status}`))
        .then(html => container.innerHTML = html)
        .catch(error => console.error(`⚠️ Error cargando "${file}":`, error));
}
