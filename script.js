// Przykładowy kod JavaScript dla dodatkowej funkcjonalności

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Dziękujemy za zapisanie się na lekcję próbną!");
});

document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function updateSlider() {
        testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = testimonials.length - 1;
        }
        updateSlider();
    });

    nextBtn.addEventListener('click', function () {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });
});
