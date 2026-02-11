let lastStarTime = 0;
document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastStarTime < 45) return;
  lastStarTime = now;

  const star = document.createElement("div");
  star.className = "star";
  star.textContent = "✦";
  star.style.setProperty("--drift", Math.random());
  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";

  document.body.appendChild(star);
  setTimeout(() => star.remove(), 2000);
});
