import { checkGameOver, executeRandomEvent, getEvent } from "./core/core.js";
import { updateHtmlEvent } from "./core/io_handler.js";

const btnGame = document.querySelectorAll("#clickarea1, #clickarea2, #clickarea3, #clickBtn");
btnGame.forEach(btn => {
    if (btn.id != "clickBtn") {
        const img = document.getElementById("imagem3");
        btn.addEventListener("mouseover", () => {
            const title = btn.title;
            switch (title) {
                case "Escolha 1":
                    img.src = "../img/fundos/mesa1.png";
                    document.getElementById("escolha1").style.fontWeight = "bold";
                    document.getElementById("escolha1").style.fontSize = "large";
                    break;
                case "Escolha 2":
                    img.src = "../img/fundos/mesa2.png";
                    document.getElementById("escolha2").style.fontWeight = "bold";
                    document.getElementById("escolha2").style.fontSize = "large";
                    break;
                case "Escolha 3":
                    img.src = "../img/fundos/mesa3.png";
                    document.getElementById("escolha3").style.fontWeight = "bold";
                    document.getElementById("escolha3").style.fontSize = "large";
                    break;
            }
        })

        btn.addEventListener("mouseout", () => {
            img.src = "../img/fundos/mesa.png";
            document.getElementById("escolha1").style.fontWeight = "";
            document.getElementById("escolha1").style.fontSize = "";
            document.getElementById("escolha2").style.fontWeight = "";
            document.getElementById("escolha2").style.fontSize = "";
            document.getElementById("escolha3").style.fontWeight = "";
            document.getElementById("escolha3").style.fontSize = "";
        })
    }
})

let current_event;
let first_press = true;

btnGame.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (first_press) {
            current_event = getEvent();
            updateHtmlEvent(current_event);
            first_press = false;
            document.getElementById("titleGame").innerText = "Presidential Order - Dia 1";
            return;
        }

        executeRandomEvent(current_event, index);

        current_event = getEvent();
        updateHtmlEvent(current_event);
        checkGameOver();
    })
});