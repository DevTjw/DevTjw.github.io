// Efeito neon no scroll
window.addEventListener("scroll", () => {
    document.body.style.backgroundPositionY = -(window.scrollY * 0.1) + "px";
});

// --- TEMA CLARO/ESCURO ---

const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

// Carregar tema salvo
if (localStorage.getItem("tema") === "light") {
    body.classList.add("light");
    icon.classList.replace("fa-moon", "fa-sun");
}

// Alternar tema
toggleBtn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light");

    // Trocar ícone
    if (isLight) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("tema", "light");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("tema", "dark");
    }
});
