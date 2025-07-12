import { voltarHTMLAoNormal } from "./core/common.js";
import { checkGameOver, executeRandomEvent, getEvent } from "./core/core.js";
import { updateHtmlEvent } from "./core/io_handler.js";

let event_number = 0;
let current_event; // atual evento
let caracteristicaBtn = ""; // característica do botão para comparar os clicados
let first_press = true; // primeiro clique do jogo (botão de iniciar)
let firstPressButton = true; // boolean para saber se é o primeiro btn clicado no celular
let dia = 1;

// todos btn clicáveis do jogo
const btnGame = document.querySelectorAll("#clickarea1, #clickarea2, #clickarea3,  #clickBtn1, #clickBtn2, #clickBtn3, #mic");

btnGame.forEach((btn, index) => { // percorrer todos clicáveis e analisar se algum foi clicado, pegando seu elemento e seu index no array
    if (btn.id == "mic") {
        btn.addEventListener("click", () => { // se microfone foi clicado
            updateHtmlEvent(current_event); // edita o html atual para ficar comoo deveria

            // deixa todos botões visíveis
            document.getElementById("clickarea1").style.display = "";
            document.getElementById("clickarea2").style.display = "";
            document.getElementById("clickarea3").style.display = "";
            document.getElementById("btnPhone1").style.display = "";
            document.getElementById("btnPhone2").style.display = "";
            document.getElementById("btnPhone3").style.display = "";

            // deixa o microfone não clicável
            document.getElementById("mic").style.display = "none";

            // tira os + e - de mudança de atributo
            document.getElementById("varMilimg").src = "";
            document.getElementById("varDinimg").src = "";
            document.getElementById("varPopuimg").src = "";
            document.getElementById("varFamaimg").src = "";
            document.getElementById("seta").style.display = "none";
        });
    } else if (btn.id == "clickarea1" || btn.id == "clickarea2" || btn.id == "clickarea3") { // se os btn de PC forem clicados
        btn.addEventListener("mouseover", () => { // se mouse ficar em cima do btn, img de pressionado aparece
            caracteristicaBtn = btn.title;
            if (first_press) { // analisa se é a tela inicial do jogo
                highlight_choice(caracteristicaBtn, 1);
            } else {
                highlight_choice(caracteristicaBtn, 3);
                show_resource_changes(index);
            }
        });

        btn.addEventListener("click", () => {
            if (first_press) { // se for a tela inicial do jogo
                // pega a primeira ocasião e ativa o clique do mic para personagem entrar na sala
                first_press = false;

                document.getElementById("titleGame").innerText = `Presidential Order - Dia ${dia}`;
                document.getElementById("clickarea2").style.display = "none";

                // define evento e ativa mic a partir desse evento
                current_event = getEvent();
                ativarMic(current_event);
                return;
            }

            // se não for primeiro clique, ele executa os problemas do evento anterior e altera html a partir disso
            executeRandomEvent(current_event, index);
            updateHtmlEvent(current_event);
            checkGameOver(); // verifica se usuário perdeu

            document.getElementById("clickarea1").style.display = "none";
            document.getElementById("clickarea2").style.display = "none";
            document.getElementById("clickarea3").style.display = "none";
            document.getElementById("imagem2").src = "";
            // desativa os btn, tira antigo personagem de fundo, gera novo evento e ativa o mic
            current_event = getEvent();
            ativarMic(current_event);

            // mudar o fundo para o próximo horário
            avancarHorario(); // fundo
        });

        // se mouse sair de hover, volta a tela normal
        btn.addEventListener("mouseout", () => {
            if (first_press) {
                voltarHTMLAoNormal(1);
            } else {
                voltarHTMLAoNormal(3);
            }
        });
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
                console.log("First button press");
                // Change the button that was pressed to the current
                caracteristicaBtn = btn.title;
                if (!first_press) { // If not the greetings screen show the resource changes
                    highlight_choice(caracteristicaBtn, 3);
                    console.log("Showing resource changes for choice ", index);
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
                    first_press = false;
                    document.getElementById("titleGame").innerText = `Presidential Order - Dia ${dia}`;
                    document.getElementById("btnPhone2").style.display = "none";
                    voltarHTMLAoNormal(3);
                    ativarMic(current_event);
                    return;
                }
                console.log("Executing event");

                console.log("index for", current_event);
                console.log(index);
                voltarHTMLAoNormal(3);
                executeRandomEvent(current_event, index);
                updateHtmlEvent(current_event);
                checkGameOver();
                current_event = getEvent();
                document.getElementById("btnPhone1").style.display = "none";
                document.getElementById("btnPhone2").style.display = "none";
                document.getElementById("btnPhone3").style.display = "none";
                document.getElementById("imagem2").src = "";
                ativarMic(current_event);

                avancarHorario();
            }
        });
    }
});
document.addEventListener("click", (element) => { // clique em todo documento
    const clicaveis = ["clickBtn1", "clickBtn2", "clickBtn3", "imgBtn", "mic"]
    if (!clicaveis.includes(element.target.id)) { // só ocorre se o id do item clicado não for algum dos botões
        if (first_press) {
            voltarHTMLAoNormal(1);
        } else {
            voltarHTMLAoNormal(3);
        }
        firstPressButton = true;
        caracteristicaBtn = "";
    }
});

function avancarHorario() {
    event_number = (event_number + 1) % 4
    document.getElementById("imagem1").src = `../img/fundos/sala/fundo${event_number}.jpg`;
    if (event_number == 0) {
        dia += 1;
        document.getElementById("titleGame").innerText = `Presidential Order - Dia ${dia}`;
    }
}

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
            document.getElementById(ide[0]).src = "../img/atributos/mudancas/ball0.png";
        } else if (mudanca == -10 || mudanca == 10) {
            document.getElementById(ide[0]).src = "../img/atributos/mudancas/ball1.png";
        } else if (mudanca == -15 || mudanca == 15) {
            document.getElementById(ide[0]).src = "../img/atributos/mudancas/ball2.png";
        } else {
            document.getElementById(ide[0]).src = "../img/atributos/mudancas/ball3.png";
        }
    }
}

function ativarMic(event) {
    document.getElementById("mic").style.display = "";
    document.getElementById("characterName").innerHTML = event["character"];
    document.querySelectorAll("#ocasiaoText").forEach(text => {
        text.innerHTML = `${event["character"]} quer entrar para falar com você, parece ser importante.`;
    });
    document.getElementById("escolhaText").innerHTML = `Clique no microfone para permitir que ${event["character"]} entre.`;
    document.getElementById("escolha1").innerHTML = "";
    document.getElementById("escolha2").innerHTML = "";
    document.getElementById("escolha3").innerHTML = "";
    document.getElementById("seta").style.display = "";
}