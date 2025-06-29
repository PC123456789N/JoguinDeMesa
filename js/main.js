import { getRandomInt } from "./core/common.js";

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

let casoAtual = "main";
let casoAnterior = "";
let indice = 0;
function gerarCasoNormal() {
    const num = getRandomInt(0, casosNormais.length-1);
    casoAtual = casosNormais[num];
    indice = num;
}

const btnGame = document.getElementById("clickBtn");
btnGame.addEventListener("click", () => {
    gerarCasoNormal()
    while (casoAtual[0] == casoAnterior[0]) {
        gerarCasoNormal()
    }
    casoAnterior = casoAtual;
    switch (casoAtual) {
        case "m1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "m2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "m3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "m4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "s1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "s2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "s3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "s4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "t1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "t2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "t3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "t4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "e1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "e2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "e3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "e4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "b1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "b2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "b3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "b4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "c1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "c2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "c3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "c4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "r1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "r2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "r3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "r4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "j1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "j2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "j3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "j4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "g1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "g2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "g3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "g4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "k1":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "k2":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "k3":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
        case "k4":
            alert("O caso escolhido no random eh: "  + casoAtual); 
            casosNormais.splice(indice, 1);
            break;
    }
})