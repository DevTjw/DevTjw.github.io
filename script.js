// Efeito neon no scroll
window.addEventListener("scroll", () => {
    document.body.style.backgroundPositionY = -(window.scrollY * 0.1) + "px";
});
