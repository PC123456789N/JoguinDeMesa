function getEvent() {
    //TODO: add logic to avoid repeats
    const event = event_random[getRandomInt(0, event_random.length - 1) - 1]

    return event
}

function executeRandomEvent(event) {
    console.log("Evento \"" + event["name"] + "\": " +event["effect_text"]);
    
    for (let affected in event["effects"]) {
        switch (affected) {
            case "finance":
                finance = finance + event["effects"][affected];
                break;
            case "military":
                military = military + event["effects"][affected];
                break;
            case "population":
                population = population + event["effects"][affected];
                break;
            case "approval":
                approval = approval + event["effects"][affected];
                break;
            default:
                break;
        }
    }

}

function checkGameOver() {
    // finance, military, population, approval
    // 1 is over and -1 is under
    let gameOverList = [0, 0, 0, 0]

    if (finance <= 0) {
        console.log("Game over: bankrupted country");
        gameOverList[0] = -1
    } else if (finance >= 100) {
        console.log("Game over: too rich?");
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

    if (approval <= 0) {
        console.log("Game over: they don't like you anymore");
        gameOverList[3] = -1
    } else if (approval >= 100) {
        console.log("Game over: too popular??");
        gameOverList[3] = 1
    }

    return gameOverList
}

let finance = 50;
let military = 50;
let population = 50;
let approval = 50;

