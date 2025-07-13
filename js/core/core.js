import { event_random } from "./random_events.js";
import { history_event} from "./history_events.js";
import { getRandomInt } from "./common.js";
import { updateStats, showResourceChangesBalls } from "./io_handler.js";

// atributos gerais do jogo
export let military = 50;
export let finance = 50;
export let population = 50;
export let popularity = 50;
let atributo;
let valor;

let nextEvent = "N1"; // próximo evento importante a ser chamado

let usedIndex = [];
export function getEvent() { // função escolhe um evento aleatório da lista de eventos não usáveis
    /** event structure
     * character: str, should be single char
     * name: str
     * event_text: str
     * choices: list [
     *   choice: dict {
     *     text: str
     *     effects: dict {
     *       resource1: number
     *       resource2: number
     *       ...
     *     }
     *   }
     * ]
     */

    // escolhe um número aleatório entre 0 e o tamanho do array de eventos e define o atual evento como o evento do número aleatório
    let index = getRandomInt(0, event_random.length - 1);
    let event = event_random[index];

    if (usedIndex.length > 0) {
        while (usedIndex.includes(index) || (event["character"] === event_random[usedIndex.at(-1)]["character"])) { 
            // isso ocorre para não se repetir personagens entre os eventos aleatórios       
            index = getRandomInt(0, event_random.length - 1);
            event = event_random[index];
        }
    }
    usedIndex.push(index); // se for possível utilizar o evento analisado, ele adiciona o número usado como último elemento desse array

    return event;
}

export function getHistoryEvent() {
    return history_event[nextEvent];
}

export function executeRandomEvent(event, choice) {
    // função que executa o evento aleatório
    for (let affected in event["choices"][choice]["effects"]) {
        // loop que se repete alterando as variáveis a partir do efeito da escolha do usuário
        const mudanca = event["choices"][choice]["effects"][affected];
        const ide = [];
        switch (affected) {
            case "military":
                military = military + mudanca;
                ide[0] = "varMilimg";
                break;
            case "finance":
                finance = finance + mudanca;
                ide[0] = "varDinimg";
                break;
            case "population":
                population = population + mudanca;
                ide[0] = "varPopuimg";
                break;
            case "popularity":
                popularity = popularity + mudanca;
                ide[0] = "varFamaimg";
                break;
        }
        showResourceChangesBalls(mudanca, ide);
    }
    // upload dos novos atributos atualizados
    updateStats(finance, military, population, popularity); 
}

export function executeHistoryEvent(event, choice) {
    // função que executa evento de história e já define próximo evento
    executeRandomEvent(event, choice);
    nextEvent = event["choices"][choice]["leads_to"];
}

export function checkGameOver() {
    // função que analisa se os atributos chegaram no pé de 0 ou menor ou 100 ou maior
    // se tiver chegado nisso: GAME OVER
    if (military <= 0 || military >= 100 || finance <= 0 || finance >= 100 || population <= 0 || population >= 100 || popularity <= 0 || popularity >= 100) {
        if (military <= 0) {
            alert("Seu país foi envadido por falta de militar. Voltando para o menu.");
            atributo = "militar";
            valor = 0;
        } else if (military >= 100) {
            alert("Seu país sofreu um golpe militar. Voltando para o menu.");
            atributo = "militar";
            valor = 100;
        }
        if (finance <= 0) {
            alert("Seu país faliu. Voltando para o menu.");
            atributo = "dinheiro";
            valor = 0;
        } else if (finance >= 100) {
            alert("Ao ver tanto dinheiro, você e sua família enlouqueceram e pegaram o dinheiro para si. Voltando para o menu.");
            atributo = "dinheiro";
            valor = 100;
        }
        if (population <= 0) {
            alert("Seu não tem população. Voltando para o menu.");
            atributo = "populacao";
            valor = 0;
        } else if (population >= 100) {
            alert("Seu país está com superlotação e você não consegue mais administrar o povo. Voltando para o menu.");
            atributo = "populacao";
            valor = 100;
        }
        if (popularity <= 0) {
            alert("O povo não gosta de você, fizeram um golpe civil. Voltando para o menu.");
            atributo = "fama";
            valor = 0;
        } else if (popularity >= 100) {
            alert("As pessoas gostam muito de você; mas nem todos são tão amados assim. Você foi alvo de um assasino e morreu. Voltando para o menu.");
            atributo = "fama";
            valor = 100;
        }
        localStorage.setItem("atributo", atributo);
        localStorage.setItem("valor", valor);
        window.location.href = "../html/final.html"; // redireciona para a página de final
    }
}