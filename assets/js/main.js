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

// Parallax Scroll
const heroImage = document.getElementById("https://ik.imagekit.io/ruiminpiao/keroppi.jpg?updatedAt=1758200878516");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  heroImage.style.transform = `translateY(${scrollY * 0.2}px)`; 
});

// Typewriter animation
const typedText = document.getElementById("typed-text");
const textContent = "Welcome to Your Name's\nCreative Portfolio";
let i = 0;

function typeText() {
  if (i < textContent.length) {
    typedText.innerHTML += textContent.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}

window.onload = typeText;

// Drag images
const draggableImages = document.querySelectorAll(".draggable");

draggableImages.forEach(image => {
  let isDragging = false;
  let offsetX, offsetY;

  image.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - image.offsetLeft;
    offsetY = e.clientY - image.offsetTop;
    image.style.cursor = "grabbing";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    image.style.cursor = "grab";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      image.style.left = `${e.clientX - offsetX}px`;
      image.style.top = `${e.clientY - offsetY}px`;
    }
  });
});
