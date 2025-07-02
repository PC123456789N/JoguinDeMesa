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
        text += `${choice["effects"]["finance"]} Finance, ${choice["effects"]["military"]} Military, ${choice["effects"]["population"]} Population, ${choice["effects"]["popularity"]} Popularity` + "\n"
    });

    const input = prompt(text)

    return input
}

function updateStats(finance, military, population, popularity) {
    // @BrasilicioHenrique, @brasilicioh
    // implementar função para mudar os valores nos elementos do html
}

export {getChoice, updateStats}