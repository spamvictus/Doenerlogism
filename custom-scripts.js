// Select the element that will be clicked
const toggleButton = document.querySelector('.navbar8-link4-dropdown-trigger');

// Select the element that you want to show/hide
const targetElement = document.querySelector('.navbar8-container7');

// Check if both elements exist
if (toggleButton && targetElement) {
  toggleButton.addEventListener('click', () => {
    // Toggle the 'hide' class on the target element
    targetElement.classList.toggle('hide');
  });
}
