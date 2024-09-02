console.log('Script is loaded and running');

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Dziękujemy za zapisanie się na lekcję próbną!");
        });
    }

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');

    if (prevBtn && nextBtn && testimonialContainer && testimonials.length > 0) {
        let currentIndex = 0;

        function updateSlider() {
            testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = testimonials.length - 1; // Ostatnia opinia
            }
            updateSlider();
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < testimonials.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Powrót do pierwszej opinii
            }
            updateSlider();
        });
    }
});

