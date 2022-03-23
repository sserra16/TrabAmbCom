const arrowRight = document.getElementById("right");
const arrowLeft = document.getElementById("left");
const arrowTop = document.getElementById("top");

function Details(idSelected) {
    const selec = document.querySelector(idSelected);

    selec.classList.remove("selected");
    selec.classList.add("details");

    document.getElementById("text").classList.remove("visible");

    hideArrows();

    arrowRight.setAttribute("onclick", "");
    arrowRight.style.cursor = "default";

    arrowLeft.setAttribute("onclick", "");
    arrowLeft.style.cursor = "default";
}

function backDetails(idDetails) {
    const detail = document.querySelector(idDetails);

    detail.classList.add("selected");
    detail.classList.remove("details");

   showArrows();

    document.getElementById("text").classList.add("visible");

    arrowRight.setAttribute("onclick", "nextImage()");
    arrowRight.style.cursor = "pointer";

    arrowLeft.setAttribute("onclick", "backImage()");
    arrowLeft.style.cursor = "pointer";
}

function hideArrows() {
    arrowRight.style.opacity = 0;
    arrowLeft.style.opacity = 0;
    arrowTop.style.opacity = 1;
}

function showArrows() {
    arrowRight.style.opacity = 1;
    arrowLeft.style.opacity = 1;
    arrowTop.style.opacity = 0;
}