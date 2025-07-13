import { voltarHTMLAoNormal } from "./core/common.js";
import { checkGameOver, executeHistoryEvent, executeRandomEvent, getEvent, getHistoryEvent } from "./core/core.js";
import { updateHtmlEvent } from "./core/io_handler.js";

let escolhaIndex; // índice de escolha do usuário -> pode ser mutável
let current_event; // atual evento

let event_number = 0;
let dia = 1; // dia do jogo atual e seu momento.

let caracteristicaBtn = ""; // característica do botão para comparar os clicados

let first_press = true; // primeiro clique do jogo (botão de iniciar)
let firstPressButton = true; // boolean para saber se é o primeiro btn clicado no celular

// todos btn clicáveis do jogo
const btnGame = document.querySelectorAll("#clickarea1, #clickarea2, #clickarea3,  #clickBtn1, #clickBtn2, #clickBtn3, #mic");

btnGame.forEach((btn, index) => { // percorrer todos clicáveis e analisar se algum foi clicado, pegando seu elemento e seu index no array
    if (btn.id == "mic") {
        btn.addEventListener("click", () => { // se microfone foi clicado
            updateHtmlEvent(current_event); // edita o html atual para ficar comoo deveria

            // deixa todos botões que serão usados clicáveis
            if (current_event["choices"].length == 1) {
                document.getElementById("clickarea2").style.display = "";
                document.getElementById("btnPhone2").style.display = "";
            } else if (current_event["choices"].length == 2) {
                document.getElementById("clickarea1").style.display = "";
                document.getElementById("clickarea3").style.display = "";
                document.getElementById("btnPhone1").style.display = "";
                document.getElementById("btnPhone3").style.display = "";
            } else {
                document.getElementById("clickarea1").style.display = "";
                document.getElementById("clickarea2").style.display = "";
                document.getElementById("clickarea3").style.display = "";
                document.getElementById("btnPhone1").style.display = "";
                document.getElementById("btnPhone2").style.display = "";
                document.getElementById("btnPhone3").style.display = "";
            }
            
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
            caracteristicaBtn = btn.title; // define carac do botão para análise futura
            if (caracteristicaBtn == "Escolha 1") {
                escolhaIndex = 0;
            } else if (caracteristicaBtn == "Escolha 2") {
                escolhaIndex = 1;
            } else if (caracteristicaBtn == "Escolha 3") {
                escolhaIndex = 2;
            }

            if (first_press) { // analisa se é a tela inicial do jogo
                highlight_choice(caracteristicaBtn, 1);
            } else { // se não for tela inicial; ele vê a qtd de escolhas atual e coloca imagem a partir do analisado
                if (current_event["choices"].length == 1) {
                    highlight_choice(caracteristicaBtn, 1); // coloca mesa de 1 btn
                    // desativa os btn que nao usaveis
                    document.getElementById("clickarea1").style.display = "none";
                    document.getElementById("clickarea3").style.display = "none";
                    document.getElementById("clickBtn1").style.display = "none";
                    document.getElementById("clickBtn3").style.display = "none";

                    escolhaIndex = 0; // pegar o item 0 da lista choices
                } else if (current_event["choices"].length == 2) {
                    highlight_choice(caracteristicaBtn, 2); // coloca mesa de 2 btn
                    // desativa o btn nao usavel
                    document.getElementById("clickarea2").style.display = "none";
                    document.getElementById("clickBtn2").style.display = "none";

                    if (escolhaIndex == 2) {
                        escolhaIndex = 1; // se for o item 0, permanece, se for o item 2, pega o item 1 da lista choices
                    }
                } else {
                    highlight_choice(caracteristicaBtn, 3); // tela normal e padrão
                }
                show_resource_changes(escolhaIndex); // faz as mudanças com o índice mutável
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

            // se não for tela inicial, ele executa os problemas do evento anterior e altera html a partir disso
            if (dia % 1 != 0.75) { // se não for noite, executa evento normal
                executeRandomEvent(current_event, escolhaIndex);
            } else if (dia == 8) {
                alert("função que chama os finais alternativos. indo para créditos");
                window.location.href = "../html/creditos.html";
            }
             else { // se for noite, executa evento de história
                executeHistoryEvent(current_event, escolhaIndex);
            }
            updateHtmlEvent(current_event); // muda html a partir do evento definido
            checkGameOver(); // verifica se usuário perdeu
            
            // gera novo evento e ativa o mic
            if (dia % 1 != 0.5) {
                current_event = getEvent(); // se não estiver indo para noite, define-se evento normal
            } else {
                current_event = getHistoryEvent(); // se estiver indo para noite, define-se evento de história
            }
            ativarMic(current_event);

            // mudar o fundo para o próximo horário
            avancarHorario();
        });

        // se mouse sair de hover, volta a tela normal
        btn.addEventListener("mouseout", () => { // analisa a qtd de escolhas para saber quantos botões tem a mesa
            if (first_press || current_event["choices"].length == 1) {
                voltarHTMLAoNormal(1);
            } else if (current_event["choices"].length == 2) {
                voltarHTMLAoNormal(2);
            } else if (current_event["choices"].length == 3) {
                voltarHTMLAoNormal(3);
            }
        });
    } else { // para cliques feitos no celular
        btn.addEventListener("click", () => {
            if (caracteristicaBtn == btn.title) { // verifica se a variavel de carac porta o mesmo title de btn; se sim, é um dblclik
                firstPressButton = false; // se agora é segundo, o próximo será o primeiro
            } else { // se não for btn repetido
                // analisa a qtd de escolhas para saber quantos botões tem a mesa
                if (first_press || current_event["choices"].length == 1) {
                    voltarHTMLAoNormal(1);
                } else if (current_event["choices"].length == 2) {
                    voltarHTMLAoNormal(2);
                } else if (current_event["choices"].length == 3) {
                    voltarHTMLAoNormal(3);
                }
            }

            if (firstPressButton) { // se for o primeiro click do btn (equivalente ao hover do pc)
                caracteristicaBtn = btn.title; // define carac do botão para análise futura
                if (caracteristicaBtn == "Escolha 1") {
                    escolhaIndex = 0;
                } else if (caracteristicaBtn == "Escolha 2") {
                    escolhaIndex = 1;
                } else if (caracteristicaBtn == "Escolha 3") {
                    escolhaIndex = 2;
                }

                if (first_press) { // se for a tela inicial do jogo
                    highlight_choice(caracteristicaBtn, 1);
                } else { // se não for tela inicial; ele vê a qtd de escolhas atual e coloca imagem a partir do analisado
                    if (current_event["choices"].length == 1) {
                        highlight_choice(caracteristicaBtn, 1); // coloca mesa de 1 btn
                        // desativa os btn que nao usaveis
                        document.getElementById("clickarea1").style.display = "none";
                        document.getElementById("clickarea3").style.display = "none";
                        document.getElementById("btnPhone1").style.display = "none";
                        document.getElementById("btnPhone3").style.display = "none";

                        escolhaIndex = 0; // pegar o item 0 da lista choices
                    } else if (current_event["choices"].length == 2) {
                        highlight_choice(caracteristicaBtn, 2); // coloca mesa de 2 btn
                        // desativa o btn nao usavel
                        document.getElementById("clickarea2").style.display = "none";
                        document.getElementById("clickBtn2").style.display = "none";

                        if (escolhaIndex == 2) {
                            escolhaIndex = 1; // se for o item 0, permanece, se for o item 2, pega o item 1 da lista choices
                        }
                    } else {
                        highlight_choice(caracteristicaBtn, 3); // tela normal e padrão
                    }
                    show_resource_changes(escolhaIndex); // faz as mudanças com o índice mutável
                }
            } else { // se for o segundo clique do botão (equivalente ao click normal de pc)
                firstPressButton = true; // define que o próximo clique será o primeiro
                caracteristicaBtn = "";
                
                if (first_press) { // se for a tela inicial do jogo
                    // pega a primeira ocasião e ativa o clique do mic para personagem entrar na sala
                    first_press = false;

                    document.getElementById("titleGame").innerText = `Presidential Order - Dia ${dia}`;
                    document.getElementById("btnPhone2").style.display = "none";

                    current_event = getEvent();
                    voltarHTMLAoNormal(3);
                    ativarMic(current_event);
                    return;
                }

                // se não for tela inicial, ele executa os problemas do evento anterior e altera html a partir disso
                if (dia % 1 != 0.75) { // se não for noite, executa evento normal
                    executeRandomEvent(current_event, escolhaIndex);
                } else if (dia == 8) {
                    alert("função que chama os finais alternativos. indo para créditos");
                    window.location.href = "../html/creditos.html";
                }
                else { // se for noite, executa evento de história
                    executeHistoryEvent(current_event, escolhaIndex);
                }
                updateHtmlEvent(current_event); // muda html a partir do evento definido
                checkGameOver(); // verifica se usuário perdeu
                
                // gera novo evento e ativa o mic
                if (dia % 1 != 0.5) {
                    current_event = getEvent(); // se não estiver indo para noite, define-se evento normal
                } else {
                    current_event = getHistoryEvent(); // se estiver indo para noite, define-se evento de história
                }
                // abaixo um "limpa tela" para deixar o jogo da maneira visualmente correta
                if (current_event["choices"].length == 1) {
                    voltarHTMLAoNormal(1);
                    document.getElementById("clickarea1").style.display = "none";
                    document.getElementById("clickarea3").style.display = "none";
                    document.getElementById("btnPhone1").style.display = "none";
                    document.getElementById("btnPhone3").style.display = "none";
                } else if (current_event["choices"].length == 2) {
                    voltarHTMLAoNormal(2);
                    document.getElementById("clickarea2").style.display = "none";
                    document.getElementById("btnPhone2").style.display = "none";
                } else if (current_event["choices"].length == 3) {
                    voltarHTMLAoNormal(3);
                }
                ativarMic(current_event);

                // mudar o fundo para o próximo horário
                avancarHorario();
            }
        });
    }
});
document.addEventListener("click", (element) => { // clique em todo documento
    const clicaveis = ["clickBtn1", "clickBtn2", "clickBtn3", "imgBtn", "mic"]
    if (!clicaveis.includes(element.target.id)) { // só ocorre se o id do item clicado não for algum dos botões
        // analisa a qtd de escolhas do choices para saber quantos btn tem a mesa
        if (first_press || current_event["choices"].length == 1) {
            voltarHTMLAoNormal(1);
        } else if (current_event["choices"].length == 2) {
            voltarHTMLAoNormal(2);
        } else if (current_event["choices"].length == 3) {
            voltarHTMLAoNormal(3);
        }
        // após clique na tela, define-se que não há primeiro clique
        firstPressButton = true;
        caracteristicaBtn = "";
    }
});

function avancarHorario() { // função que muda o turno do dia e o próprio dia
    event_number = (event_number + 1) % 4 // número que vai variar sempre de 0 a 3 (iniciando em 1)
    document.getElementById("imagem1").src = `../img/fundos/sala/fundo${event_number}.jpg`;
    dia += 0.25 // variável que inicia em 1; quando há num inteiro, significa que é o dia desse número pela manhã
    if (event_number == 0) {
        document.getElementById("titleGame").innerText = `Presidential Order - Dia ${dia}`;
    }
}

// função que marca a escolha do usuário e muda a imagem da mesa de acordo com o número de botões
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

// função que demonstra as mudanças da escolha analisada pelo usuário
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
        // com o id do elemento capturado; ele fala se muda quase nada, pouco, médio ou muito do elemento com a variável mudança
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

// função que ativa a tela de microfone (para permitir entrada de personagem na sala)
function ativarMic(event) {
    document.getElementById("imagem2").src = ""; // tira o antigo personagem de fundo

    // faz aparecer na tela o microfone clicável e seta que aponte para o microfone
    document.getElementById("mic").style.display = "";
    document.getElementById("seta").style.display = "";

    // muda o nome do personagem do texto
    document.getElementById("characterName").innerHTML = event["character"];
    document.querySelectorAll("#ocasiaoText").forEach(text => {
        text.innerHTML = `${event["character"]} quer entrar para falar com você, parece ser importante.`;
    });
    document.getElementById("escolhaText").innerHTML = `Clique no microfone para permitir que ${event["character"]} entre.`;
    
    // limpa as antigas escolhas assim como os botões
    document.getElementById("escolha1").innerHTML = "";
    document.getElementById("escolha2").innerHTML = "";
    document.getElementById("escolha3").innerHTML = "";

    document.getElementById("btnPhone1").style.display = "none"; // phone
    document.getElementById("btnPhone2").style.display = "none"; // phone
    document.getElementById("btnPhone3").style.display = "none"; // phone

    document.getElementById("clickarea1").style.display = "none"; //
    document.getElementById("clickarea2").style.display = "none"; // pc
    document.getElementById("clickarea3").style.display = "none"; // pc
}