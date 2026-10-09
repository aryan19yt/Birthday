
const pages = [
  document.getElementById("welcome"),
  document.getElementById("photoReveal"),
  document.getElementById("galleryPage"),
  document.getElementById("letterPage"),
  document.getElementById("birthdayPage")
];

function showPage(page) {
  pages.forEach((section) => {
    section.hidden = section !== page;
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("enterBtn").addEventListener("click", () => {
  showPage(pages[1]);
});

document.getElementById("continueBtn").addEventListener("click", () => {
  showPage(pages[2]);
});

document.getElementById("letterBtn").addEventListener("click", () => {
  showPage(pages[3]);
});

document.getElementById("birthdayBtn").addEventListener("click", () => {
  showPage(pages[4]);
});

function updateCountdown() {
  const now = new Date();
  let birthday = new Date(now.getFullYear(), 9, 20, 0, 0, 0);

  if (now >= birthday) {
    birthday = new Date(now.getFullYear() + 1, 9, 20, 0, 0, 0);
  }

  const difference = birthday.getTime() - now.getTime();
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);

  document.getElementById("countdown").textContent =
    `${days} days and ${hours} hours to go 💙`;
}

updateCountdown();

document.getElementById("celebrateBtn").addEventListener("click", () => {
  const wish = document.getElementById("birthdayWish");
  wish.hidden = false;

  document.getElementById("celebrateBtn").textContent = "Sending you love 💙";

  if (typeof confetti === "function") {
    confetti({
      particleCount: 140,
      spread: 100,
      startVelocity: 35,
      origin: { y: 0.65 }
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 120,
        origin: { x: 0.15, y: 0.7 }
      });

      confetti({
        particleCount: 80,
        spread: 120,
        origin: { x: 0.85, y: 0.7 }
      });
    }, 350);
  }

  createPetals();
});

function createPetals() {
  const container = document.getElementById("petals");
  const flowers = ["💙", "🌸", "🌹", "✨", "💜"];

  for (let i = 0; i < 24; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDelay = Math.random() * 2 + "s";
    petal.style.fontSize = (15 + Math.random() * 13) + "px";

    container.appendChild(petal);

    setTimeout(() => petal.remove(), 6500);
  }
}
