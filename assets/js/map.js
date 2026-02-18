const mapSlides = document.querySelectorAll('.map-slide');
const prevBtn = document.querySelector('.map-prev');
const nextBtn = document.querySelector('.map-next');

let currentSlide = 0;

function showSlide(index) {
    mapSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    mapSlides[index].classList.add('active');
    updateButtons();
}

function updateButtons() {
    if (currentSlide === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
    }
    else if (currentSlide === mapSlides.length - 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
    }
    else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < mapSlides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

updateButtons();
