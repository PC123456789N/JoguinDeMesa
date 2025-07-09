import { voltarHTMLAoNormal } from "./core/common.js";
import { checkGameOver, executeRandomEvent, getEvent } from "./core/core.js";
import { updateHtmlEvent } from "./core/io_handler.js";

let current_event;
let first_press = true;

const btnGame = document.querySelectorAll("#clickarea1, #clickarea2, #clickarea3, #clickBtn1, #clickBtn2, #clickBtn3");
btnGame.forEach((btn, index) => {
    if (btn.id != "clickBtn1" && btn.id != "clickBtn2" && btn.id != "clickBtn3") {
        btn.addEventListener("mouseover", () => {
            const title = btn.title;
            switch (title) {
                case "Escolha 1":
                    document.getElementById("imagem3").src = "../img/fundos/mesa3_0.png";
                    document.getElementById("escolha1").style.fontWeight = "bold";
                    document.getElementById("escolha1").style.fontSize = "large";
                    break;
                case "Escolha 2":
                    document.getElementById("imagem3").src = "../img/fundos/mesa3_1.png";
                    document.getElementById("escolha2").style.fontWeight = "bold";
                    document.getElementById("escolha2").style.fontSize = "large";
                    break;
                case "Escolha 3":
                    document.getElementById("imagem3").src = "../img/fundos/mesa3_2.png";
                    document.getElementById("escolha3").style.fontWeight = "bold";
                    document.getElementById("escolha3").style.fontSize = "large";
                    break;
            }
            if (!first_press) {
                for (let affected in current_event["choices"][index]["effects"]) {
                    const mudanca = Number(current_event["choices"][index]["effects"][affected]);
                    const ide = [];
                    switch (affected) {
                        case "military":
                            ide[0] = "varMilMud";
                            break;
                        case "finance":
                            ide[0] = "varDinMud";
                            break;
                        case "population":
                            ide[0] = "varPopuMud";
                            break;
                        case "popularity":
                            ide[0] = "varFamaMud";
                            break;
                    }
                    if (mudanca == -5 || mudanca == 0 || mudanca == 5) {
                        document.getElementById(ide[0]).src = "../img/atri/ball0.png";
                    } else if (mudanca == -15 || mudanca == -10 || mudanca == 10 || mudanca == 15) {
                        document.getElementById(ide[0]).src = "../img/atri/ball1.png";
                    } else if (mudanca == -25 || mudanca == -20 || mudanca == 20 || mudanca == 25) {
                        document.getElementById(ide[0]).src = "../img/atri/ball2.png";
                    } else {
                        document.getElementById(ide[0]).src = "../img/atri/ball3.png";
                    }
                }
            }
        })

        btn.addEventListener("click", () => {
            if (first_press) {
                current_event = getEvent();
                updateHtmlEvent(current_event);
                first_press = false;
                document.getElementById("titleGame").innerText = "Presidential Order - Dia 1";
                return;
            }
            if (index > 2) {
                index = index - 3;
            }
            executeRandomEvent(current_event, index);
    
            current_event = getEvent();
            updateHtmlEvent(current_event);
            checkGameOver();
            voltarHTMLAoNormal();
        })

        btn.addEventListener("mouseout", () => {
            voltarHTMLAoNormal();
        })
    } else {
        btn.addEventListener("click", () => {
            const title = btn.alt;
            switch (title) {
                case "escolha1":
                    document.getElementById("imagem3").src = "../img/fundos/mesa3_0.png";
                    document.getElementById("escolha1").style.fontWeight = "bold";
                    document.getElementById("escolha1").style.fontSize = "large";
                    break;
                case "escolha2":
                    document.getElementById("imagem3").src = "../img/fundos/mesa3_1.png";
                    document.getElementById("escolha2").style.fontWeight = "bold";
                    document.getElementById("escolha2").style.fontSize = "large";
                    break;
                case "escolha3":
                    document.getElementById("imagem3").src = "../img/fundos/mesa3_2.png";
                    document.getElementById("escolha3").style.fontWeight = "bold";
                    document.getElementById("escolha3").style.fontSize = "large";
                    break;
            }
            if (!first_press) {
                for (let affected in current_event["choices"][index]["effects"]) {
                    const mudanca = Number(current_event["choices"][index]["effects"][affected]);
                    const ide = [];
                    switch (affected) {
                        case "military":
                            ide[0] = "varMilMud";
                            break;
                        case "finance":
                            ide[0] = "varDinMud";
                            break;
                        case "population":
                            ide[0] = "varPopuMud";
                            break;
                        case "popularity":
                            ide[0] = "varFamaMud";
                            break;
                    }
                    if (mudanca == -5 || mudanca == 0 || mudanca == 5) {
                        document.getElementById(ide[0]).src = "../img/atri/ball0.png";
                    } else if (mudanca == -15 || mudanca == -10 || mudanca == 10 || mudanca == 15) {
                        document.getElementById(ide[0]).src = "../img/atri/ball1.png";
                    } else if (mudanca == -25 || mudanca == -20 || mudanca == 20 || mudanca == 25) {
                        document.getElementById(ide[0]).src = "../img/atri/ball2.png";
                    } else {
                        document.getElementById(ide[0]).src = "../img/atri/ball3.png";
                    }
                }
            }
        })

        btn.addEventListener("dblclick", () => {
            if (first_press) {
                current_event = getEvent();
                updateHtmlEvent(current_event);
                first_press = false;
                document.getElementById("titleGame").innerText = "Presidential Order - Dia 1";
                return;
            }
            index -= 3;
            executeRandomEvent(current_event, index);
    
            current_event = getEvent();
            updateHtmlEvent(current_event);
            checkGameOver();
            voltarHTMLAoNormal();
        })
    }
})