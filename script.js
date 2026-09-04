const slides = [...document.querySelectorAll('.slide')];
const dots = document.querySelector('.dots');
let currentSlide = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = `dot${index === 0 ? ' active' : ''}`;
  dot.type = 'button';
  dot.setAttribute('aria-label', `Show recipe preview ${index + 1}`);
  dot.addEventListener('click', () => showSlide(index));
  dots.appendChild(dot);
});

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === currentSlide));
  [...dots.children].forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentSlide));
}

document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));

const timerElement = document.getElementById('timer');
const timerKey = 'highProteinOfferEnd';
let offerEnd = Number(localStorage.getItem(timerKey));
if (!offerEnd || offerEnd <= Date.now()) {
  offerEnd = Date.now() + 15 * 60 * 1000;
  localStorage.setItem(timerKey, String(offerEnd));
}

function updateTimer() {
  const remaining = Math.max(0, offerEnd - Date.now());
  const minutes = String(Math.floor(remaining / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');
  timerElement.textContent = `${minutes}:${seconds}`;
}
updateTimer();
setInterval(updateTimer, 1000);
