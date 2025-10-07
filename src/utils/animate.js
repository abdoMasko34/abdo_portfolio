// Get a reference to the element to be animated
const box = document.querySelector(".box");

// Define the animation properties
const duration = 2000; // Animation duration in milliseconds
const targetWidth = 300; // Target width of the element

// Calculate the initial width of the element
const initialWidth = box.offsetWidth;

// Define the animation function
function animate() {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;

    const progress = timestamp - startTime;
    const width =
      (initialWidth + (targetWidth - initialWidth)) * (progress / duration);

    // Apply the width to the element
    box.style.width = `${width}px`;

    if (progress < duration) {
      // Continue the animation
      requestAnimationFrame(step);
    }
  }

  // Start the animation
  requestAnimationFrame(step);
}

// Call the animation function
animate();
