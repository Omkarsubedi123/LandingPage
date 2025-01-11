function toggleMenu() {
  const mobileMenu = document.querySelector(".MobileMenu");
  mobileMenu.classList.toggle("hidden");
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        flipY: {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "33%": { transform: "rotateY(-90deg)" },
          "66%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        flipY: "flipY 3s infinite",
      },
    },
  },
};
