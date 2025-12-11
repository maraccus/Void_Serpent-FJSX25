const flash = document.getElementById("crt-flash");
const menu = document.getElementById("main-menu");

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();

        flash.classList.add("active");

        setTimeout(() => {
            window.location.href = "game.html";
        }, 400);
    }
});