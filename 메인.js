document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.mask .mask-img');
    const prevButton = document.querySelector('.bx-prev');
    const nextButton = document.querySelector('.bx-next');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('current');
            } else {
                slide.classList.remove('current');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', function(event) {
        event.preventDefault();
        prevSlide();
    });

    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        nextSlide();
    });

    // Initialize the first slide
    showSlide(currentIndex);

    // Optional: Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
});
