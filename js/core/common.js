export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function voltarHTMLAoNormal() {
    document.getElementById("imagem3").src = "../img/fundos/mesa.png";
    document.getElementById("escolha1").style.fontWeight = "";
    document.getElementById("escolha1").style.fontSize = "";
    document.getElementById("escolha2").style.fontWeight = "";
    document.getElementById("escolha2").style.fontSize = "";
    document.getElementById("escolha3").style.fontWeight = "";
    document.getElementById("escolha3").style.fontSize = "";
    document.getElementById("varMilMud").src = "";
    document.getElementById("varDinMud").src = "";
    document.getElementById("varPopuMud").src = "";
    document.getElementById("varFamaMud").src = "";
}