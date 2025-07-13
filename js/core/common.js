export function getRandomInt(min, max) {
    // função de geração aleatória de número
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function voltarHTMLAoNormal(qtdBotoes) {
    // função que volta a tela html a como ele é antes de efeitos (como de hover, firts click, circles etc)

    // define o fundo da mesa de botões com nenhum pressionado
    document.getElementById("imagem3").src = `../img/fundos/mesa/mesa${qtdBotoes}.png`;

    // tira negrito e tamanho das escolhas
    document.getElementById("escolha1").style.fontWeight = "";
    document.getElementById("escolha1").style.fontSize = "";
    document.getElementById("escolha2").style.fontWeight = "";
    document.getElementById("escolha2").style.fontSize = "";
    document.getElementById("escolha3").style.fontWeight = "";
    document.getElementById("escolha3").style.fontSize = "";

    // tira as bolinhas de representação de mudança
    document.getElementById("varMilMud").src = "";
    document.getElementById("varDinMud").src = "";
    document.getElementById("varPopuMud").src = "";
    document.getElementById("varFamaMud").src = "";
}