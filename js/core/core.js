import {event_random} from "./random_events.js";
import {getRandomInt} from "./common.js";
//import {getChoice} from "./input.js";

export function getEvent() {
    /** event structure
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

    const event = event_random[getRandomInt(0, event_random.length - 1) - 1]

    return event
}

export function executeRandomEvent(event) {
    console.log(event["event_text"]);
    
    // get choice from player
    alert(event["event_text"])
    alert("Escolhendo escolha 0")
    const choice = 0//getChoice(event["accept"]["text"], event["deny"]["text"])

    // process input here
    

    for (let affected in event["choices"][choice]["effects"]) {

        switch (affected) {
            case "finance":
                finance = finance + event["choices"][choice]["effects"][affected];
                break;
            case "military":
                military = military + event["choices"][choice]["effects"][affected];
                break;
            case "population":
                population = population + event["choices"][choice]["effects"][affected];
                break;
            case "popularity":
                popularity = popularity + event["choices"][choice]["effects"][affected];
                break;
            default:
                break;
        }
    }

}

export function checkGameOver() {
    // finance, military, population, popularity
    // 1 is over and -1 is under
    let gameOverList = [0, 0, 0, 0]

    if (finance <= 0) {
        console.log("Game over: bankrupted country");
        gameOverList[0] = -1
    } else if (finance >= 100) {
        console.log("Game over: the money got to your head");
        gameOverList[0] = 1
    }

    if (military <= 0) {
        console.log("Game over: invaded by neighboring countries");
        gameOverList[1] = -1
    } else if (military >= 100) {
        console.log("Game over: military takes over");
        gameOverList[1] = 1
    }

    if (population <= 0) {
        console.log("Game over: deserted country");
        gameOverList[2] = -1
    } else if (population >= 100) {
        console.log("Game over: overpopulated");
        gameOverList[2] = 1
    }

    if (popularity <= 0) {
        console.log("Game over: they don't like you anymore");
        gameOverList[3] = -1
    } else if (popularity >= 100) {
        console.log("Game over: assassinated ");
        gameOverList[3] = 1
    }

    return gameOverList
}

export let finance = 30;
export let military = 30;
export let population = 30;
export let popularity = 30;

console.log("core.js loaded")

window.finance = finance
window.military = military
window.population = population
window.popularity = popularity
window.getEvent = getEvent
window.executeRandomEvent = executeRandomEvent
window.checkGameOver = checkGameOver