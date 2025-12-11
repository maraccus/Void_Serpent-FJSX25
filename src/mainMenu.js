const flash = document.getElementById("crt-flash");
const menu = document.getElementById("main-menu-container");

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();

        flash.classList.add("active");
        menu.style.display = "none";

        setTimeout(() => {
            window.location.href = "game.html";
        }, 500);
    }
});