const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // × (cross)
        document.body.style.overflow = "hidden";
    } else {
        toggleButton.innerHTML = "&#9776;"; // ☰ (hamburger)
        document.body.style.overflow = "";
    }
});




