// Show/Hide Menu
window.addEventListener('scroll', function () {
  const menu = document.querySelector('.top-menu');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 20) {
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
  }
});

// Typewriter animation
const typedText = document.getElementById("typed-text");
const textContent = "Welcome to Your Name's Creative Portfolio";
let i = 0;

function typeText() {
  if (i < textContent.length) {
    typedText.innerHTML += textContent.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}

window.onload = typeText;