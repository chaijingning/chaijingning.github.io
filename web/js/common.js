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


document.querySelectorAll('.type').forEach((typeDiv, index) => {
    typeDiv.addEventListener('click', function () {
        // Toggle persistent active style
        document.querySelectorAll('.type').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Hide all introduce divs
        document.querySelectorAll('.introduce').forEach(intro => {
            intro.style.display = 'none';
        });

        // Show the corresponding introduce div
        const introduceDiv = document.querySelectorAll('.introduce')[index];
        if (introduceDiv) {
            introduceDiv.style.display = 'flex';
        }
    });
});

// Optional: Show the first intro on page load
window.addEventListener('load', function () {
    const types = document.querySelectorAll('.type');
    const introduces = document.querySelectorAll('.introduce');

    // Default selected card mirrors hover look
    if (types.length) {
        types.forEach(t => t.classList.remove('active'));
        types[0].classList.add('active');
        // Make focusable for CSS-only focus fallback
        types.forEach(t => t.setAttribute('tabindex', '0'));
    }

    introduces.forEach((intro, index) => {
        intro.style.display = index === 0 ? 'flex' : 'none';
    });
});