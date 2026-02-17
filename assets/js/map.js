// Carrusel de mapas
const mapSlides = document.querySelectorAll('.map-slide');
const prevBtn = document.querySelector('.map-prev');
const nextBtn = document.querySelector('.map-next');

let currentSlide = 0;

function showSlide(index) {
    // Ocultar todos los slides
    mapSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Mostrar el slide actual
    mapSlides[index].classList.add('active');

    // Mostrar/ocultar botones según la posición
    updateButtons();
}

function updateButtons() {
    // Ocultar botón prev si estamos en el primer slide
    if (currentSlide === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
    }
    // Ocultar botón next si estamos en el último slide
    else if (currentSlide === mapSlides.length - 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
    }
    // Mostrar ambos si estamos en medio (por si agregas más slides)
    else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

// Botón anterior
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

// Botón siguiente
nextBtn.addEventListener('click', () => {
    if (currentSlide < mapSlides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

// Inicializar
updateButtons();
