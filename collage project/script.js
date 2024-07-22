let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    items.forEach((item, index) => {
        item.style.transform = `translateX(${-currentIndex * 100}%)`;
        item.style.opacity = index === currentIndex ? 1 : 0;
    });
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    updateCarousel();
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
    autoSlide();
});
