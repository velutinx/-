// Load shared nav HTML
fetch('assets/includes/navigation.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('#navContainer').innerHTML = html; // Assumes a <div id="navContainer"></div> where nav goes
    setupNavLinks(); // Call after HTML is loaded
  });

function setupNavLinks() {
  document.getElementById('navHome').onclick = () => location.href = "/";
  document.getElementById('navCom').onclick = () => location.href = "/commission.html";
  document.getElementById('navArt').onclick = () => location.href = "/artwork.html";
  document.getElementById('navContact').onclick = () => location.href = "/contact.html";
  document.getElementById('navPoll').onclick = () => location.href = "/poll-website/";
}
