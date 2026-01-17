function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } 
    else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } 
    else {
        currentSlideIndex = index;
    }

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function jumpToAdmissionSlide() {
    scrollToSection('slider-section');
    setTimeout(() => {
        showSlide(6); 
    }, 500);
}