let isJapanese = false;
const blobTexts = document.querySelectorAll(".blob-text");
const heroSub = document.getElementById("heroSub");

langToggle.onclick = () => {
  langSwipe.classList.remove("active");
  void langSwipe.offsetWidth; // trigger reflow
  langSwipe.classList.add("active");

  setTimeout(() => {
    isJapanese = !isJapanese;

    blobTexts.forEach(t => {
      t.textContent = isJapanese ? t.dataset.jp : t.dataset.en;
    });

    heroSub.textContent = isJapanese
      ? "♡ フリーランスイラストレーター ♡"
      : "♡ Freelance Illustrator ♡";

    langToggle.textContent = isJapanese ? "EN" : "日本語";
  }, 180);
};
