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

// Dragging elements
const draggableImages = document.querySelectorAll(".draggable");

draggableImages.forEach(image => {
  image.addEventListener("mousedown", (e) => {
    const initialX = e.clientX;
    const initialY = e.clientY;
    const offsetX = image.offsetLeft;
    const offsetY = image.offsetTop;

    function dragMove(e) {
      const newX = offsetX + (e.clientX - initialX);
      const newY = offsetY + (e.clientY - initialY);
      image.style.left = newX + 'px';
      image.style.top = newY + 'px';
    }

    function dragEnd() {
      window.removeEventListener('mousemove', dragMove);
      window.removeEventListener('mouseup', dragEnd);
    }

    window.addEventListener('mousemove', dragMove);
    window.addEventListener('mouseup', dragEnd);
  });
});

