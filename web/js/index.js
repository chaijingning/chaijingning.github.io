let containerElm = null;

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
}

document.addEventListener("DOMContentLoaded", () => {
    containerElm = document.getElementById("container");
    containerElm.addEventListener("click", switchToNext);
});