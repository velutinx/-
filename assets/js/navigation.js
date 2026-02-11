// navigation.js

fetch('/assets/includes/navigation.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navContainer').innerHTML = html;

    // Now that nav is loaded, set up links + language toggle
    setupNavLinks();

    // Initialize language toggle (now that .blob-text elements exist)
    import('/assets/js/language-toggle.js')
      .then(module => {
        module.initLanguageToggle();
      })
      .catch(err => console.error("Failed to init language toggle:", err));
  })
  .catch(err => console.error('Failed to load navigation:', err));

function setupNavLinks() {
  document.getElementById('navHome').onclick = () => location.href = "/";
  document.getElementById('navCom').onclick = () => location.href = "/commission.html";
  document.getElementById('navArt').onclick = () => location.href = "/artwork.html";
  document.getElementById('navContact').onclick = () => location.href = "/contact.html";
  document.getElementById('navPoll').onclick = () => location.href = "/poll-website/";
}
