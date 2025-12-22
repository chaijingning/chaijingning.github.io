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

const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        answer.classList.toggle('active');

        const moreIcon = this.querySelector('.moreicon');
        const lessIcon = this.querySelector('.lessicon');
        const isOpen = answer.classList.contains('active');

        if (isOpen) {
            moreIcon.style.display = 'none';
            lessIcon.style.display = 'block';
        } else {
            moreIcon.style.display = 'block';
            lessIcon.style.display = 'none';
        }
    });
});

