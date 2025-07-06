import {executeRandomEvent, getEvent} from "./core/core.js";

const btnGame = document.querySelectorAll("#clickarea1, #clickarea2, #clickarea3");
btnGame.forEach(btn => {
    const img = document.getElementById("imagem3");
    btn.addEventListener("mouseover", () => {
        const title = btn.title;
        switch (title) {
            case "Escolha 1":
                img.src = "../../img/fundos/mesa1.png";
                break;
            case "Escolha 2":
                img.src = "../../img/fundos/mesa2.png";
                break;
            case "Escolha 3":
                img.src = "../../img/fundos/mesa3.png";
                break;
        }
    })

    btn.addEventListener("mouseout", () => {
        img.src = "../../img/fundos/mesa.png";
    })
})

btnGame.forEach(btn => {
    btn.addEventListener("click", () => {
        executeRandomEvent(getEvent());
    })
});