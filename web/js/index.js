let containerElm = null;
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    containerElm = document.getElementById("container");

    const btns = containerElm.querySelectorAll('.btn');
    const featureImages = document.querySelector('.featureimage');
    const images = featureImages.querySelectorAll('img');

    function switchToNext(evt) {
        const { target } = evt;
        if (!target.classList.contains("btn")) {
            return;
        }

        const clickedBtn = target;
        if (clickedBtn.classList.contains("active")) {
            return;
        }

        const activeBtn = containerElm.getElementsByClassName("active")[0];
        activeBtn?.classList.remove("active");
        clickedBtn.classList.add("active");

        // Get index of clicked button
        const index = Array.from(btns).indexOf(clickedBtn);
        currentIndex = index;

        // Scroll to the corresponding image
        const scrollAmount = images[0].offsetWidth * index;
        featureImages.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Update buttons when swiping/scrolling
    featureImages.addEventListener('scroll', () => {
        const scrollLeft = featureImages.scrollLeft;
        const imageWidth = images[0].offsetWidth;

        // Calculate which image is in view
        const activeImageIndex = Math.round(scrollLeft / imageWidth);

        // Update button active state
        btns.forEach((btn, index) => {
            btn.classList.remove('active');
            if (index === activeImageIndex) {
                btn.classList.add('active');
            }
        });

        currentIndex = activeImageIndex;
    });

    containerElm.addEventListener("click", switchToNext);
});