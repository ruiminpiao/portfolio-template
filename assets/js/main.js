// Show/Hide Menu
window.addEventListener('scroll', function () {
  const menu = document.querySelector('.topmenu');
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
const heroParagraph = document.querySelector(".herotext p");
const typedText = document.getElementById("typedtext");
const textContent = "Ruimin Piao's \ncreative portfolio";
let i = 0;

function typeText() {
  if (i < textContent.length) {
    typedText.innerHTML += textContent.charAt(i);
    i++;
    setTimeout(typeText, 100);
  } else {
    heroParagraph.classList.add("show");
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

    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      image.style.position = "absolute";
      image.style.left = `${e.clientX - offsetX}px`;
      image.style.top = `${e.clientY - offsetY}px`;
    }
  });

  image.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      image.style.cursor = "grab";
    }
  });

  window.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      image.style.cursor = "grab";
    }
  });
});

// Send button
const contactForm = document.querySelector(".contactform");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stops page reload

  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector("textarea").value;

  console.log("Email:", email);
  console.log("Message:", message);

  // Optional feedback
  alert("Your message has been successfully sent!");

  // Optional reset
  contactForm.reset();
});

