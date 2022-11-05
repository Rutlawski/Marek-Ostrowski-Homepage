console.log("Witajcie, drodzy programiści!")
console.log("Zapraszam do rozejrzenia się po tym kodzie i jakiegokolwiek feedbacku =)")

let buttonElement = document.querySelector(".js-button");
let photoElement = document.querySelector(".js-photo");

let bodyElement = document.querySelector(".js-body");
let darkBodyElement = document.querySelector(".js-darkBody");
let darkButtonElement = document.querySelector(".js-darkButton");
let lightButtonElement = document.querySelector(".js-lightButton");


buttonElement.addEventListener("click", () => {
    photoElement.remove();
    buttonElement.remove();
}
)

darkButtonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("js-darkBody");
    darkButtonElement.classList.toggle("js-lightButton");

    if (bodyElement.classList.contains("js-darkBody")) {
        darkButtonElement.innerText = "Jasny Motyw"
    } else {
        darkButtonElement.innerText = "Ciemny Motyw"
    };
}
)