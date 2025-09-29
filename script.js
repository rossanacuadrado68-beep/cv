document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll suave para navegación ---
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Animación de aparición para productos ---
    const productos = document.querySelectorAll('.card');
    const mostrarProductos = () => {
        const triggerBottom = window.innerHeight * 0.85;

        productos.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', mostrarProductos);
    mostrarProductos(); // inicial

    // --- Año automático en el footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
