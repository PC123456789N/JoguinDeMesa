function getChoice(choices) {
    // lista de escolhas, cada uma com a estrutura
    /**
     * [
     *  text: str
     *  effects: dict {
     *   finance: number
     *   military: number
     *   population: number
     *   popularity: number
     *  }
     * ]
     */
    // dois ou mais botões

    //TODO: mudar
    let text = ""
    
    choices.forEach(choice => {
        text += choice["text"] + "\n"
        //TODO: Aviso, no futuro talvez eu remova todos os afetados que sejam apenas 0 para melhorar o tamanho do site
        text += `${choice["effects"]["finance"]} Finance, ${choice["effects"]["military"]} Military, ${choice["effects"]["population"]} Population, ${choice["effects"]["popularity"]} Popularity` + "\n"
    });

    const input = prompt(text)

    return input
}

function updateStats(finance, military, population, popularity) {
    document.getElementById("varDin").innerHTML = finance;
    document.getElementById("varMil").innerHTML = military;
    document.getElementById("varPopu").innerHTML = population;
    document.getElementById("varFama").innerHTML = popularity;
}

export {getChoice, updateStats}