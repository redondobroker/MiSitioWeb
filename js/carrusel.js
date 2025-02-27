document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel-track");

    let isDragging = false;
    let startX, scrollLeft;
    let autoScrollInterval;

    function startAutoScroll() {
        if (window.innerWidth <= 768) {
            autoScrollInterval = setInterval(() => {
                carrusel.scrollLeft += 1; // Slow auto-scroll for mobile
                if (carrusel.scrollLeft >= carrusel.scrollWidth / 2) {
                    carrusel.scrollLeft = 0; // Loop back seamlessly
                }
            }, 30);
        } else {
            carrusel.style.animation = "scroll 40s linear infinite"; // Keep desktop animation
        }
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
        carrusel.style.animation = "none"; // Stop desktop animation
    }

    function handleTouchStart(e) {
        stopAutoScroll();
        isDragging = true;
        startX = e.touches ? e.touches[0].pageX - carrusel.offsetLeft : e.pageX - carrusel.offsetLeft;
        scrollLeft = carrusel.scrollLeft;
    }

    function handleTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches ? e.touches[0].pageX - carrusel.offsetLeft : e.pageX - carrusel.offsetLeft;
        const walk = (x - startX) * 2;
        carrusel.scrollLeft = scrollLeft - walk;
    }

    function handleTouchEnd() {
        isDragging = false;
        startAutoScroll(); // Resume auto-scroll after manual swipe
    }

    // Enable swipe interaction on mobile
    carrusel.addEventListener("mousedown", handleTouchStart);
    carrusel.addEventListener("mousemove", handleTouchMove);
    carrusel.addEventListener("mouseup", handleTouchEnd);
    carrusel.addEventListener("mouseleave", handleTouchEnd);

    carrusel.addEventListener("touchstart", handleTouchStart);
    carrusel.addEventListener("touchmove", handleTouchMove);
    carrusel.addEventListener("touchend", handleTouchEnd);

    // Start auto-scroll when the page loads
    startAutoScroll();
});
