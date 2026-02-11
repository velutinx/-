// Shared tab title animation — used on all pages

// Configuration — edit here if you want to change timing or behavior
const BASE_TITLE = "VELUTINX";
const BLANK_DURATION = 300;     // ms — how long the title stays blank
const FULL_DURATION = 2000;     // ms — how long VELUTINX stays solid at start
const SHRINK_INTERVAL = 600;    // ms — speed of the shrinking animation (same as before)
const SHRINK_STEPS = ["VELUTINX", "ELUTINX", "LUTINX", "UTINX", "TINX", "INX", "NX", "X"];

// List of all possible page-specific titles (add new pages here)
const PAGE_TITLES = {
  "/":               "HOME",
  "/index.html":     "HOME",
  "/commission.html": "COMMISSIONS",
  "/artwork.html":   "ARTWORK",
  "/contact.html":   "CONTACT",
  "/poll-website/":  "POLL"
  // Add more pages here if needed, e.g. "/about.html": "ABOUT"
};

function animateTitle() {
  const currentPath = window.location.pathname;
  let pageTitle = "VELUTINX"; // fallback

  // Try to find a matching page title
  if (PAGE_TITLES[currentPath]) {
    pageTitle = PAGE_TITLES[currentPath];
  } else if (currentPath.includes("commission")) {
    pageTitle = "COMMISSIONS";
  } else if (currentPath.includes("artwork")) {
    pageTitle = "ARTWORK";
  } else if (currentPath.includes("contact")) {
    pageTitle = "CONTACT";
  } else if (currentPath.includes("poll")) {
    pageTitle = "POLL";
  }

  // Phase 1: Show VELUTINX solid for 2 seconds
  document.title = BASE_TITLE;
  setTimeout(() => {
    // Phase 2: Three quick blank flashes
    let blankCount = 0;
    const blankInterval = setInterval(() => {
      document.title = "";
      setTimeout(() => {
        document.title = BASE_TITLE;
        blankCount++;
        if (blankCount >= 3) {
          clearInterval(blankInterval);

          // Phase 3: Show page-specific title (e.g. ARTWORK) for 3s
          document.title = pageTitle;
          setTimeout(() => {
            // Phase 4: Shrink animation (like before)
            let step = 0;
            const shrink = setInterval(() => {
              document.title = SHRINK_STEPS[step] || "";
              step++;
              if (step >= SHRINK_STEPS.length) {
                clearInterval(shrink);
                // Loop back to start
                animateTitle();
              }
            }, SHRINK_INTERVAL);
          }, 3000); // 3 seconds of full page title
        }
      }, 300); // blank duration
    }, BLANK_DURATION * 2); // time between blanks
  }, FULL_DURATION);
}

// Start the animation
animateTitle();
