const images = document.querySelectorAll("main section#imgs img");
const words = document.querySelectorAll("div.words");
const background = document.getElementById("background");

let max = images.length;
let index = 0;

function nextImage() {
    images[index].classList.remove("selected");

    removeText(index);

    index++

    if(index >= max){
        index = 0;
    }

    images[index].classList.add("selected");

    streetImg = images[index].getAttribute("src");

    addText(index);
    setBackground(streetImg);
}


function backImage() {
    images[index].classList.remove("selected");

    removeText(index);

    index--

    if(index < 0){
        index = images.length-1;
    }

    images[index].classList.add("selected");
    
    streetImg = images[index].getAttribute("src");

    setBackground(streetImg);
    addText(index);
}


function removeText(i) {
    words[i].classList.remove("visible");
    words[i].setAttribute("id", "");

}

function addText(i) {
    words[i].classList.add("visible");
    words[i].setAttribute("id", "text")
}

function setBackground(street) {
    background.setAttribute("src", street);
}