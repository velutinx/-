// assets/js/navigation.js
fetch('/assets/includes/navigation.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('#navContainer').innerHTML = html;
    setupNavLinks();
  })
  .catch(err => console.error('Failed to load navigation:', err));

function setupNavLinks() {
  document.getElementById('navHome').onclick = () => {
    location.href = "https://velutinx.github.io/";  // or simply "/"
  };
  document.getElementById('navCom').onclick = () => {
    location.href = "/commission.html";
  };
  document.getElementById('navArt').onclick = () => {
    location.href = "/artwork.html";
  };
  document.getElementById('navContact').onclick = () => {
    location.href = "/contact.html";
  };
  document.getElementById('navPoll').onclick = () => {
    location.href = "/poll-website/";
  };
}
