//Imagens e Palavras
const images = document.querySelectorAll("main section#imgs img");
const words = document.querySelectorAll("div.words");
const background = document.getElementById("background");

//Setas
const arrowRight = document.getElementById("right");
const arrowLeft = document.getElementById("left");
const arrowTop = document.getElementById("top");

//Variáveis para o cálculo do slide
let max = images.length;
let index = 0;

//Objeto para guardar todas funções do slide
const Slide = {

    setBackground(index) {
        let streetImg = images[index].getAttribute("src");
        background.setAttribute("src", streetImg);
    },

    nextImage() {
        images[index].classList.remove("selected");
        Slide.removeText(index);

        index++

        if (index >= max) {
            index = 0;
        }

        images[index].classList.add("selected");

        Slide.addText(index);
        Slide.setBackground(index);
    },


    backImage() {
        images[index].classList.remove("selected");

        Slide.removeText(index);

        index--

        if (index < 0) {
            index = images.length - 1;
        }

        images[index].classList.add("selected");

        Slide.setBackground(index);
        Slide.addText(index);
    },


    removeText(i) {
        words[i].classList.remove("visible");
        words[i].setAttribute("id", "");
    },

    addText(i) {
        words[i].classList.add("visible");
        words[i].setAttribute("id", "text")
    }

}

//Objeto para guardar todas as funções dos detalhes

/* -----CORRIGIR ERRO DAS SETAS ----- */
const Details = {
    text_details: document.querySelectorAll(".text-details"), 

    showDetails(idSelected) {
        const selec = document.querySelector(idSelected);

        selec.classList.remove("selected");
        selec.classList.add("details");

        document.getElementById("text").classList.remove("visible");

        Details.hideArrows();

        //Desabilitando as setas laterais e habilitando a top
        arrowRight.setAttribute("onclick", "");
        arrowRight.style.cursor = "default";

        arrowLeft.setAttribute("onclick", "");
        arrowLeft.style.cursor = "default";

        arrowTop.setAttribute("onclick", "Details.backDetails('.details')");
        arrowTop.style.cursor = "pointer";
    },

    backDetails(idDetails) {
        const detail = document.querySelector(idDetails);

        detail.classList.add("selected");
        detail.classList.remove("details");

        Details.showArrows();

        document.getElementById("text").classList.add("visible");

        //Habilitando as setas laterais e desabilitando a top
        arrowRight.setAttribute("onclick", "Slide.nextImage()");
        arrowRight.style.cursor = "pointer";

        arrowLeft.setAttribute("onclick", "Slide.backImage()");
        arrowLeft.style.cursor = "pointer";

        arrowTop.setAttribute("onclick", "");
        Details.hiddenText();
        arrowTop.style.cursor = "default";
    },

    hideArrows() {
        arrowRight.style.opacity = 0;
        arrowLeft.style.opacity = 0;
        arrowTop.style.opacity = 1;
    },

    showArrows() {
        arrowRight.style.opacity = 1;
        arrowLeft.style.opacity = 1;
        arrowTop.style.opacity = 0;
    },

    showText() {
        this.text_details[index].classList.add("visible");
    },

    hiddenText(idText) {
        this.text_details[index].classList.remove("visible");
    }
}