const button = document.getElementById('submit'); // Correct ID

// Store a user preference in localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Retrieve a user preference from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Trigger animation on the button when clicked
button.addEventListener("click", () => {
  // Save a preference
  savePreference("clicked", "true");

  // Add animation class
  button.classList.add("animate");

  // Remove animation class after animation ends so it can be retriggered
  button.addEventListener("animationend", () => {
    button.classList.remove("animate");
  });
});


