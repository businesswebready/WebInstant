// ============================
// NAVIGATION - MOBILE TOGGLE
// ============================
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', mainNav.classList.contains('open'));
  });
}

// ============================
// HERO SLIDER
// ============================
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;
let sliderInterval;

// Create dots dynamically
if (slides.length && dotsContainer) {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
    slide.setAttribute('aria-hidden', i !== index);
  });

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
  resetSliderInterval();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 5000);
}

function resetSliderInterval() {
  clearInterval(sliderInterval);
  startSlider();
}

if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);

if (slides.length) {
  showSlide(currentIndex);
  startSlider();
}

// ============================
// FOOTER YEAR
// ============================
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ============================
// IMAGE LOADING ENHANCEMENT
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.thumb img');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => {
        img.style.display = 'none';
        // Optional: Add a placeholder or fallback here
      });
    }
  });
});
document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('mainNav').classList.toggle('show');
});
