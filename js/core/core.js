import {event_random} from "./random_events.js";
import {getRandomInt} from "./common.js";
import {getChoice, updateStats} from "./io_handler.js";

let usedIndex = [];
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

    let index = getRandomInt(0, event_random.length - 1);
    while (usedIndex.includes(index)) {
        index = getRandomInt(0, event_random.length - 1);
    }
    usedIndex.push(index);

    console.log("Event list has .length: " + event_random.length);
    console.log("Getting event from index: " + index);

    const event = event_random[index];

    return event;
}

export function executeRandomEvent(event) {
    console.log(event["event_text"]);
    console.log(event["choices"]);
    
    // get choice from player
    alert(event["event_text"]);
    let choice = Number(getChoice(event["choices"]));

    // process input here

    for (let affected in event["choices"][choice]["effects"]) {
        console.log("Affected: " + affected);
        switch (affected) {
            case "finance":
                finance = finance + event["choices"][choice]["effects"][affected];
                console.log("current: " + finance);
                break;
            case "military":
                military = military + event["choices"][choice]["effects"][affected];
                console.log("current: " + military);
                break;
            case "population":
                population = population + event["choices"][choice]["effects"][affected];
                console.log("current: " + population);
                break;
            case "popularity":
                popularity = popularity + event["choices"][choice]["effects"][affected];
                console.log("current: " + popularity);
                break;
            default:
                break;
        }
    }

    updateStats(finance, military, population, popularity);

}

export function checkGameOver() {
    // finance, military, population, popularity
    // 1 is over and -1 is under
    let gameOverList = [0, 0, 0, 0];

    if (finance <= 0) {
        console.log("Game over: bankrupted country");
        gameOverList[0] = -1;
    } else if (finance >= 100) {
        console.log("Game over: the money got to your head");
        gameOverList[0] = 1;
    }

    if (military <= 0) {
        console.log("Game over: invaded by neighboring countries");
        gameOverList[1] = -1;
    } else if (military >= 100) {
        console.log("Game over: military takes over");
        gameOverList[1] = 1;
    }

    if (population <= 0) {
        console.log("Game over: deserted country");
        gameOverList[2] = -1;
    } else if (population >= 100) {
        console.log("Game over: overpopulated");
        gameOverList[2] = 1;
    }

    if (popularity <= 0) {
        console.log("Game over: they don't like you anymore");
        gameOverList[3] = -1;
    } else if (popularity >= 100) {
        console.log("Game over: assassinated ");
        gameOverList[3] = 1;
    }

    return gameOverList;
}

export let finance = 50;
export let military = 50;
export let population = 50;
export let popularity = 50;