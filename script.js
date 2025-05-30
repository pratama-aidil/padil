let slideIndex = 1;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlides(n) {
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => (slide.style.display = 'none'));
  dots.forEach((dot) => dot.classList.remove('active'));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Event listener tombol navigasi
prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));

// Event listener dots
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentSlide(idx + 1);
  });
});

showSlides(slideIndex);
