const images = document.querySelectorAll("main section#imgs img");
const words = document.querySelectorAll("div.words");

const selected = document.querySelector(".selected");

const arrowRight = document.getElementById("right");
const arrowLeft = document.getElementById("left");
const arrowTop = document.getElementById("top");

const background = document.getElementById("background");

let max = images.length;
let index = 0;

function Details() {
    selected.classList.remove("selected")
    selected.classList.add("details")

    arrowRight.style.opacity = 0;
    arrowLeft.style.opacity = 0;
    arrowTop.style.opacity = 1;
}

function nextImage() {
    images[index].classList.remove("selected");

    words[index].classList.remove("visible")

    index++

    if(index >= max){
        index = 0;
    }

    images[index].classList.add("selected");

    streetImg = images[index].getAttribute("src");

    background.setAttribute("src", streetImg);

    words[index].classList.add("visible");
}

function backImage() {
    images[index].classList.remove("selected");

    words[index].classList.remove("visible");

    index--

    if(index < 0){
        index = images.length-1;
    }

    images[index].classList.add("selected");
    
    streetImg = images[index].getAttribute("src");

    words[index].classList.add("visible");

    background.setAttribute("src", streetImg);
}