// 1. Animate a box when a button is clicked
function triggerBoxAnimation() {
  const box = document.getElementById('animateBox');
  box.classList.toggle('animated');
}

// 2. Card flip is handled by CSS on hover - no JS needed

// 3. Start/Stop loading animation with reusable function
function toggleLoading() {
  const loader = document.getElementById('loader');
  const isActive = loader.classList.contains('spin');
  updateClass(loader, 'spin', !isActive);
}

// 4. Modal open/close with animation
function toggleModal(show) {
  const modal = document.getElementById('modalOverlay');

  if (show) {
    modal.style.display = 'flex';
    modal.classList.remove('hide');
  } else {
    modal.classList.add('hide');

    // Wait for fadeOut animation to end before hiding
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('hide');
    }, 500); // match fadeOut duration
  }
}

// ✅ Reusable function to add/remove class
function updateClass(element, className, add) {
  if (add) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

// ✅ Demonstrates parameters and return value
function isElementVisible(elementId) {
  const el = document.getElementById(elementId);
  return window.getComputedStyle(el).display !== 'none';
}