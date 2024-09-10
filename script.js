document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("All fields are required.");
  } else {
    alert("Form submitted successfully!");
    // Further processing logic here...
  }
});

document.querySelectorAll('.circle').forEach(function(circle) {
  const percent = circle.getAttribute('data-percent');
  circle.style.setProperty('--percent', percent / 5 * 100); // Since it's out of 5, we scale it.
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
       
      index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }
    
    currentIndex = index;
    const newTransform = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;
  }

  function moveSlide(step) { showSlide(currentIndex + step); }    
