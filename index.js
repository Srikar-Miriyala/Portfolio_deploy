const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

leftArrow.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

rightArrow.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

Optional: Auto-play
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);