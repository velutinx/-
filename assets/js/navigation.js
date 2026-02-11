// assets/js/navigation.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navContainer");
  if (!container) {
    console.warn("Navigation container #navContainer not found");
    return;
  }

  fetch('/assets/includes/navigation.html')
    .then(response => {
      if (!response.ok) throw new Error("Failed to load navigation.html");
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;

      // Add hover effects to each blob after loading
      const blobs = container.querySelectorAll('.blob-btn');
      blobs.forEach(blob => {
        const text = blob.querySelector('.blob-text');

        blob.addEventListener('mouseenter', () => {
          if (text) {
            text.style.fontSize = '25px';
            text.style.fontWeight = '900';
          }
          blob.style.transform = 'scale(1.15)';
        });

        blob.addEventListener('mouseleave', () => {
          if (text) {
            text.style.fontSize = '19px';
            text.style.fontWeight = '900';
          }
          blob.style.transform = 'scale(1)';
        });
      });
    })
    .catch(err => {
      console.error('Error loading navigation:', err);
    });
});
