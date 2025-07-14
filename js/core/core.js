import { event_random } from "./random_events.js";
import { history_event} from "./history_events.js";
import { getRandomInt } from "./common.js";
import { updateStats, showResourceChangesBalls, finalAtributo } from "./io_handler.js";

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

export function executeEndGame() {
    switch (nextEvent) {
        case "MP7":
            document.getElementById("imagemFinal").src = `../img/finais/principais/mp.png`;
            document.getElementById("titleGame").innerHTML = "Final Militar Pacifista";
            document.getElementById("textoFinal").innerHTML = `Seu governo foi exemplar aos olhos dos militares.
            No entanto, boa parte da população ainda te vê de uma maneira negativa, como se você fosse um ditador,
            protestos e mais protestos eclodiam pedindo o fim do regime militar, protestos esses que eram reprimidos com força
            . No entanto, até que em uma tarde, enquanto você discursava para o congresso. Um homem se levantou da mesa dos deputados,
            arma em mãos, e ceifou sua vida.`;
            break;
        case "MG7":
            document.getElementById("imagemFinal").src = `../img/finais/principais/mg.png`;
            document.getElementById("titleGame").innerHTML = "Final Militar Genocida";
            document.getElementById("textoFinal").innerHTML = `Ao Descobrir o esquema de corrupção do marechal,
            a população e o exército ficaram fortemente contra ele. o povo e as forças armadas no geral desejaram a
            execução do marechal por traição do alto escalão, você representando a vontade do povo. ordena a pena do homem,
            com a posição do lider das forças armadas vaga, você une o cargo de marechal e presidente. O povo lhe adora,
            e você cria uma nova ditadura no Brasil!`;
            break;
        case "RP7":
            document.getElementById("imagemFinal").src = `../img/finais/principais/rp.png`;
            document.getElementById("titleGame").innerHTML = "Final Rebelde Pacifista";
            document.getElementById("textoFinal").innerHTML = `Você atendeu as exigências dos rebeldes. Com isso, 
            novas eleições livres foram feitas, infelizmente, você não foi eleito pelo voto popular. E portanto, 
            foi removido do cargo, você tambem foi reconhecido na história como um heroi. Mesmo que tenha perdido
            a eleição, a população ainda te ama, suas decisões foram fundamentais para a restauração da democracia no país e o fim da ditadura militar.`;
            break;
        case "RG7":
            document.getElementById("imagemFinal").src = `../img/finais/principais/rg.png`;
            document.getElementById("titleGame").innerHTML = "Final Rebelde Genocida";
            document.getElementById("textoFinal").innerHTML = `Os grupos rebeldes que diversas vezes tentaram utilizar da diplomacia
            com você finalmente se cansaram. Com isso, um levante armado aconteceu no interior do país. o levante foi
            recrutando as populações locais para se unir a luta contra você. o seu exército não foi capaz de parar os rebeldes
            e eles invadiram o Palacio do Planalto. Eles o renderam, e o eliminaram, assumindo o poder para eles. Mergulhando o Brasil
            numa sangrenta guerra civil pelo poder...`;
            break;
    }
    document.getElementById("telaFinal").style.display = "";
    document.getElementById("telaGeral").style.display = "none";
    document.getElementById("buttons").style.display = "none";
}

export function checkGameOver() {
    // função que analisa se os atributos chegaram no pé de 0 ou menor ou 100 ou maior
    // se tiver chegado nisso: GAME OVER
    if (military <= 0 || military >= 100 || finance <= 0 || finance >= 100 || population <= 0 || population >= 100 || popularity <= 0 || popularity >= 100) {
        if (military <= 0) {
            atributo = "militar";
            valor = 0;
        } else if (military >= 100) {
            atributo = "militar";
            valor = 100;
        }
        if (finance <= 0) {
            atributo = "dinheiro";
            valor = 0;
        } else if (finance >= 100) {
            atributo = "dinheiro";
            valor = 100;
        }
        if (population <= 0) {
            atributo = "populacao";
            valor = 0;
        } else if (population >= 100) {
            atributo = "populacao";
            valor = 100;
        }
        if (popularity <= 0) {
            atributo = "fama";
            valor = 0;
        } else if (popularity >= 100) {
            atributo = "fama";
            valor = 100;
        }
        finalAtributo(atributo, valor);
    }
}
