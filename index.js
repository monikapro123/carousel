// Select all slides
const slides = document.querySelectorAll('.slide');
// Navigation buttons
const prevButtons = document.querySelectorAll('#prev');
const nextButtons = document.querySelectorAll('#next');
const surpriseButton = document.querySelector('#surprise');

let currentIndex = 0; // Start with the first slide

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Show the first slide on load
showSlide(currentIndex);

// Event listeners for navigation buttons
prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        resetTimer(); // Reset auto slideshow timer
    });
});

nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        resetTimer(); // Reset auto slideshow timer
    });
});

// Event listener for "Surprise me" button
surpriseButton.addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * slides.length);
    showSlide(currentIndex);
    resetTimer(); // Reset auto slideshow timer
});

// Auto slideshow function
function startAutoSlideshow() {
    autoSlideTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
        showSlide(currentIndex);
    }, 3000); // Change slide every 3 seconds
}

// Reset timer when user interacts manually
function resetTimer() {
    clearInterval(autoSlideTimer); // Stop the current timer
    startAutoSlideshow(); // Restart the timer
}

// Start the auto slideshow
let autoSlideTimer;
startAutoSlideshow();
