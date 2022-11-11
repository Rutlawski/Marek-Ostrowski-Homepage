{
    const Przywitanie = () => {
        console.log("Witajcie, drodzy programiści!");
        console.log("Zapraszam do rozejrzenia się po tym kodzie i jakiegokolwiek feedbacku =)");
    }

    const removePhoto = () => {
        const buttonElement = document.querySelector(".js-button");
        const photoElement = document.querySelector(".js-photo");
        photoElement.remove();
        buttonElement.remove();
    };

    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const darkBodyElement = document.querySelector(".js-darkBody");
        const lightButtonElement = document.querySelector(".js-lightButton");
        const darkButtonElement = document.querySelector(".js-darkButton");
        bodyElement.classList.toggle("js-darkBody");
        darkButtonElement.classList.toggle("js-lightButton");

        if (bodyElement.classList.contains("js-darkBody")) {
            darkButtonElement.innerText = "Jasny Motyw";
        } else {
            darkButtonElement.innerText = "Ciemny Motyw";
        };
    }

    const Init = () => {
        const darkButtonElement = document.querySelector(".js-darkButton");
        const buttonElement = document.querySelector(".js-button");
        darkButtonElement.addEventListener("click", toggleBackground);
        buttonElement.addEventListener("click", removePhoto);
    }

    Przywitanie();
    Init();
}