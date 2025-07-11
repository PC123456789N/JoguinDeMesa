import { voltarHTMLAoNormal } from "./core/common.js";
import { checkGameOver, executeRandomEvent, getEvent } from "./core/core.js";
import { updateHtmlEvent } from "./core/io_handler.js";

let caracteristicaBtn = "";
let current_event;
let first_press = true;
let firstPressButton = true;

const btnGame = document.querySelectorAll("#clickarea1, #clickarea2, #clickarea3, #clickBtn1, #clickBtn2, #clickBtn3");
btnGame.forEach((btn, index) => {
    if (btn.id != "clickBtn1" && btn.id != "clickBtn2" && btn.id != "clickBtn3") { // For pc
        btn.addEventListener("mouseover", () => { // Show pressed button image
            caracteristicaBtn = btn.title;
            if (first_press) {
                highlight_choice(caracteristicaBtn, 1);
            } else { // If has already passed the 'greeting' screen
                highlight_choice(caracteristicaBtn, 3);
                show_resource_changes(index);
            }
        })

        btn.addEventListener("click", () => {
            if (first_press) { // Is greeting screen
                // Get event and update the html to it
                current_event = getEvent();
                updateHtmlEvent(current_event);
                first_press = false;
                document.getElementById("titleGame").innerText = "Presidential Order - Dia 1";
                document.getElementById("clickarea1").style.display = "";
                document.getElementById("clickarea3").style.display = "";
                voltarHTMLAoNormal(3);
                return;
            }
            executeRandomEvent(current_event, index);
    
            current_event = getEvent();
            updateHtmlEvent(current_event);
            checkGameOver();
            voltarHTMLAoNormal(3);
        })

        // On mouse out of the buttons return table to normal png
        btn.addEventListener("mouseout", () => {
            if (first_press) {
                voltarHTMLAoNormal(1);
            } else {
                voltarHTMLAoNormal(3);
            }
        })
    } else { // For mobile
        btn.addEventListener("click", () => {
            if (index > 2) {
                index = index - 3;
            } // offset by 3 due to being after the normal buttons
            
            if (caracteristicaBtn == btn.title) {
                console.log("previous button, current button", caracteristicaBtn, btn.title);
                
                // If pressed the same button, then set first press to false
                firstPressButton = false;
                
                console.log("Second button press");
            } else {
                voltarHTMLAoNormal(3);
            }
            if (firstPressButton) { // If is first press on the button
                console.log("First button press")
                // Change the button that was pressed to the current
                caracteristicaBtn = btn.title;
                if (!first_press) { // If not the greetings screen show the resource changes
                    highlight_choice(caracteristicaBtn, 3);
                    console.log("Showing resource changes for choice ", index)
                    show_resource_changes(index);
                } else {
                    highlight_choice(caracteristicaBtn, 1);
                }
            } else { // If is the second press of the button
                firstPressButton = true;
                caracteristicaBtn = "";
                if (first_press) {
                    console.log("Exiting greetings screen");
                    current_event = getEvent();
                    updateHtmlEvent(current_event);
                    first_press = false;
                    document.getElementById("titleGame").innerText = "Presidential Order - Dia 1";
                    document.getElementById("btnPhone1").style.display = "";
                    document.getElementById("btnPhone3").style.display = "";
                    voltarHTMLAoNormal(3);
                    return;
                }
                console.log("Executing event");

                console.log("index for", current_event);
                console.log(index)

                executeRandomEvent(current_event, index);
                current_event = getEvent();
                
                updateHtmlEvent(current_event);
                
                checkGameOver();
                
                voltarHTMLAoNormal(3);
            }
        })
    }
})
document.addEventListener("click", (element) => { // clique em todo documento
    const clicaveis = ["clickBtn1", "clickBtn2", "clickBtn3", "imgBtn"]
    if (!clicaveis.includes(element.target.id)) { // só ocorre se o id do item clicado não for algum dos botões
        if (first_press) {
            voltarHTMLAoNormal(1);
        } else {
            voltarHTMLAoNormal(3);
        }
        firstPressButton = true;
        caracteristicaBtn = "";
    }
})

function highlight_choice(caracteristicaBtn, qtdBotoes) {
    switch (caracteristicaBtn) {
        case "Escolha 1":
            document.getElementById(`imagem3`).src = `../img/fundos/mesa/mesa${qtdBotoes}_0.png`;
            document.getElementById(`escolha1`).style.fontWeight = `bold`;
            document.getElementById(`escolha1`).style.fontSize = `large`;
            break;
        case "Escolha 2":
            document.getElementById(`imagem3`).src = `../img/fundos/mesa/mesa${qtdBotoes}_1.png`;
            document.getElementById(`escolha2`).style.fontWeight = `bold`;
            document.getElementById(`escolha2`).style.fontSize = `large`;
            break;
        case "Escolha 3":
            document.getElementById(`imagem3`).src = `../img/fundos/mesa/mesa${qtdBotoes}_2.png`;
            document.getElementById(`escolha3`).style.fontWeight = `bold`;
            document.getElementById(`escolha3`).style.fontSize = `large`;
            break;
    }
}

function show_resource_changes(index) {
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

        // Add balls to each resource representing how much they will change
        if (mudanca == -5 || mudanca == 0 || mudanca == 5) {
            document.getElementById(ide[0]).src = "../img/atri/ball0.png";
        } else if (mudanca == -10 || mudanca == 10) {
            document.getElementById(ide[0]).src = "../img/atri/ball1.png";
        } else if (mudanca == -15 || mudanca == 15) {
            document.getElementById(ide[0]).src = "../img/atri/ball2.png";
        } else {
            document.getElementById(ide[0]).src = "../img/atri/ball3.png";
        }
    }
}
