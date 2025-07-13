import { military, finance, population, popularity } from "./core.js";

export function updateStats(finance, military, population, popularity) {
    document.getElementById("varMil").innerHTML = military;
    document.getElementById("varDin").innerHTML = finance;
    document.getElementById("varPopu").innerHTML = population;
    document.getElementById("varFama").innerHTML = popularity;
}

export function updateHtmlEvent(event) {
    if (military >= 75 || military <= 25) {
        document.getElementById("varMil").style.color = "red";
    } else {
        document.getElementById("varMil").style.color = "black";
    }
    if (finance >= 75 || finance <= 25) {
        document.getElementById("varDin").style.color = "red";
    } else {
        document.getElementById("varDin").style.color = "black";
    }
    if (population >= 75 || population <= 25) {
        document.getElementById("varPopu").style.color = "red";
    } else {
        document.getElementById("varPopu").style.color = "black";
    }
    if (popularity >= 75 || popularity <= 25) {
        document.getElementById("varFama").style.color = "red";
    } else {
        document.getElementById("varFama").style.color = "black";
    }

    document.getElementById("characterName").innerHTML = event["character"];
    document.querySelectorAll("#ocasiaoText").forEach(text => {
        text.innerHTML = event["event_text"];
    });
    document.getElementById("escolhaText").innerHTML = "";
    if (event["choices"].length == 1) {
        document.getElementById("escolha2").innerHTML = "1. " + event["choices"][0]["text"];
    }
    if (event["choices"].length == 2) {
        document.getElementById("escolha1").innerHTML = "1. " + event["choices"][0]["text"];
        document.getElementById("escolha3").innerHTML = "2. " + event["choices"][1]["text"];
    }
    if (event["choices"].length >= 3) {
        document.getElementById("escolha1").innerHTML = "1. " + event["choices"][0]["text"];
        document.getElementById("escolha2").innerHTML = "2. " + event["choices"][1]["text"];
        document.getElementById("escolha3").innerHTML = "3. " + event["choices"][2]["text"];
    }
    
    switch (event["character"]) {
        case "Marechal Silva":
            document.getElementById("imagem2").src = "../img/personagens/marechal.png";
            break;
        case "Tenente Taísa Torres":
            document.getElementById("imagem2").src = "../img/personagens/tenente.png";
            break;
        case "Sargento Márcio":
            document.getElementById("imagem2").src = "../img/personagens/sargento.png";
            break;
        case "Economista Síntia":
            document.getElementById("imagem2").src = "../img/personagens/economista.png";
            break;
        case "Banqueiro Bruno Barros":
            document.getElementById("imagem2").src = "../img/personagens/banqueiro.png";
            break;
        case "Contador Roberto":
            document.getElementById("imagem2").src = "../img/personagens/contador.png";
            break;
        case "Recenseadora do IBGE Maria":
            document.getElementById("imagem2").src = "../img/personagens/recenseadora.png";
            break;
        case "Jornalista Jaime Jason":
            document.getElementById("imagem2").src = "../img/personagens/jornalista.png";
            break;
        case "Guarda Glória Góis":
            document.getElementById("imagem2").src = "../img/personagens/guarda.png";
            break;
        case "Karateca Kátia Kane":
            document.getElementById("imagem2").src = "../img/personagens/karateca.png";
            break;
    }
}

export function showResourceChangesBalls(mudanca, ide) {
    if (mudanca < 0) {
        document.getElementById(ide[0]).src = "../img/atributos/mudancas/ball-.png";
    } else if (mudanca > 0) {
        document.getElementById(ide[0]).src = "../img/atributos/mudancas/ball+.png";
    } else {
        document.getElementById(ide[0]).src = "";
    }
}