import {getRandomInt} from "./core/common.js";

function gerarCasoNormal() {
    const num = getRandomInt(0, casosNormais.length-1);
    const caso = casosNormais[num];
    return caso
}

const btnGame = document.getElementById("clickBtn");
btnGame.addEventListener("click", () => {
    const casoAtual = gerarCasoNormal();
    switch (casoAtual) {
        case "m1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "m2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "m3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "m4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "s1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "s2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "s3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "s4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "t1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "t2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "t3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "t4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "e1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "e2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "e3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "e4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "b1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "b2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "b3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "b4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "c1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "c2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "c3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "c4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "r1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "r2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "r3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "r4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "j1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "j2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "j3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "j4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "g1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "g2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "g3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "g4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "k1":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "k2":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "k3":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        case "k4":
            alert("O caso escolhido no random eh: " + casoAtual);
            break;
        default:
            alert("erro");
            break;
    }
})

const casosNormais = ["m1", "m2", "m3", "m4", 
    "s1", "s2", "s3", "s4", 
    "t1", "t2", "t3", "t4", 
    "e1", "e2", "e3", "e4", 
    "b1", "b2", "b3", "b4", 
    "c1", "c2", "c3", "c4", 
    "r1", "r2", "r3", "r4", 
    "j1", "j2", "j3", "j4", 
    "g1", "g2", "g3", "g4", 
    "k1", "k2", "k3", "k4"];