import { event_random } from "./random_events.js";
import { getRandomInt } from "./common.js";
import { updateStats } from "./io_handler.js";

let usedIndex = [];
export function getEvent() {
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

    let index = getRandomInt(0, event_random.length - 1);
    let event = event_random[index];
    if (usedIndex.length != 0) {
        while (usedIndex.includes(index) || (usedIndex.length > 0 && event["character"] === event_random[usedIndex.at(-1)]["character"])) {        
            index = getRandomInt(0, event_random.length - 1);
            event = event_random[index];
        }
    }
    usedIndex.push(index);

    console.log("Event list has .length: " + event_random.length);
    console.log("Getting event from index: " + index);

    return event;
}

export function executeRandomEvent(event, choice) {
    console.log(event["event_text"]);
    console.log(event["choices"]);

    for (let affected in event["choices"][choice]["effects"]) {
        console.log("Affected: " + affected);
        const mudanca = event["choices"][choice]["effects"][affected];
        switch (affected) {
            case "military":
                military = military + mudanca;
                if (mudanca < 0) {
                    document.getElementById("varMilimg").src = "../img/atri/ball-.png";
                } else if (mudanca > 0) {
                    document.getElementById("varMilimg").src = "../img/atri/ball+.png";
                } else {
                    document.getElementById("varMilimg").src = "";
                }
                break;
            case "finance":
                finance = finance + mudanca;
                if (mudanca < 0) {
                    document.getElementById("varDinimg").src = "../img/atri/ball-.png";
                } else if (mudanca > 0) {
                    document.getElementById("varDinimg").src = "../img/atri/ball+.png";
                } else {
                    document.getElementById("varDinimg").src = "";
                }
                break;
            case "population":
                population = population + mudanca;
                if (mudanca < 0) {
                    document.getElementById("varPopuimg").src = "../img/atri/ball-.png";
                } else if (mudanca > 0) {
                    document.getElementById("varPopuimg").src = "../img/atri/ball+.png";
                } else {
                    document.getElementById("varPopuimg").src = "";
                }
                break;
            case "popularity":
                popularity = popularity + mudanca;
                if (mudanca < 0) {
                    document.getElementById("varFamaimg").src = "../img/atri/ball-.png";
                } else if (mudanca > 0) {
                    document.getElementById("varFamaimg").src = "../img/atri/ball+.png";
                } else {
                    document.getElementById("varFamaimg").src = "";
                }
                break;
            default:
                break;
        }
    }
    updateStats(finance, military, population, popularity);
}

export function checkGameOver() {
    if (military <= 0 || military >= 100 || finance <= 0 || finance >= 100 || population <= 0 || population >= 100 || popularity <= 0 || popularity >= 100) {
        if (military <= 0) {
            alert("Seu país foi envadido por falta de militar. Voltando para o menu.");
        } else if (military >= 100) {
            alert("Seu país sofreu um golpe militar. Voltando para o menu.");
        }
        if (finance <= 0) {
            alert("Seu país faliu. Voltando para o menu.");
        } else if (finance >= 100) {
            alert("Ao ver tanto dinheiro, você e sua família enlouqueceram e pegaram o dinheiro para si. Voltando para o menu.");
        }
        if (population <= 0) {
            alert("Seu não tem população. Voltando para o menu.");
        } else if (population >= 100) {
            alert("Seu país está com superlotação e você não consegue mais administrar o povo. Voltando para o menu.");
        }
        if (popularity <= 0) {
            alert("O povo não gosta de você, fizeram um golpe civil. Voltando para o menu.");
        } else if (popularity >= 100) {
            alert("As pessoas gostam muito de você; mas nem todos são tão amados assim. Você foi alvo de um assasino e morreu. Voltando para o menu.");
        }
        window.location.href = "../index.html";
    }
}

export let military = 50;
export let finance = 50;
export let population = 50;
export let popularity = 50;