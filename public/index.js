const images = document.querySelectorAll("main section#imgs img");
const words = document.querySelectorAll("div.words");

const background = document.getElementById("background");

let max = images.length;
let index = 0;

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