import { military, finance, population, popularity } from "./core.js";
import { voltarHTMLAoNormal } from "./common.js";

export function updateStats(finance, military, population, popularity) {
    // função atualiza o html com o atual atributo do usuário
    document.getElementById("varMil").innerHTML = military;
    document.getElementById("varDin").innerHTML = finance;
    document.getElementById("varPopu").innerHTML = population;
    document.getElementById("varFama").innerHTML = popularity;
}

export function updateHtmlEvent(event) { // função responsável por alterar partes do html com base evento atual
    // se atributos estiverem próximo de game over, deixa eles na cor vermelha. Se não, volta ao normal
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

    // do evento pega-se o texto da ocasião e coloca no html
    document.querySelectorAll("#ocasiaoText").forEach(text => {
        text.innerHTML = event["event_text"];
    });

    // do eveto analisa a quantidade de escolhas e coloca elas de forma coerente à situação
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
    
    // do evento pega-se personagem e muda seu nome e põe sua foto no html
    document.getElementById("characterName").innerHTML = event["character"];
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
    // função que vê a mudança a ser feita em uma string que representa um id; se ela for positiva, bota +; negativa, bota -
    if (mudanca < 0) {
        document.getElementById(ide[0]).src = "../img/atributos/mudancas/ball-.png";
    } else if (mudanca > 0) {
        document.getElementById(ide[0]).src = "../img/atributos/mudancas/ball+.png";
    } else {
        document.getElementById(ide[0]).src = "";
    }
}

// funcao usada quando o jogador perder por chegar em atributo 0 ou 100
export function finalAtributo(atributo, valor) {
    let endTitle, endText;
    switch (atributo) {
        case "militar":
            if (valor == 0) {
                endTitle = "O Brasil foi invadido, seu exército é fraco demais para responder.";
                endText = `Com o completo desmantelamento das forças armadas, o país tornou-se um alvo fácil.
                        Sem resistência, tropas estrangeiras invadiram fronteiras, ocuparam cidades e derrubaram seu governo em dias.
                        A população assistiu à queda de uma nação sem força para se defender.
                        Você governou com pacifismo... mas esqueceu que paz sem preparo é convite à ruína.`;
            } else {
                endTitle = "Os militares lhe removeram do poder, eles não precisão mais de você.";
                endText = `As forças armadas ficaram com mais influencia e poder do que você, Sem uma presença forte,
                         você foi rapidamente substituido por generais e marechais. No entanto, sua execução foi um lembrete frio e brutal
                         de que a força não é a forma mais eficaz de governar.`;
            }
            break;
        case "dinheiro":
            if (valor == 0) {
                endTitle = "Seu país quebrou, a recessão é brutal.";
                endText = `Suas decisões mal executadas e falta de pensamento econômico levaram seu país a ruina.
                 A sua moeda já não vale mais nada frente as moedas estrangeiras. Além disso, com a hiper inflação crescente
                 e a impressão de mais dinheiro, o Brasil contraiu milhões de dolares em dívida externa. A população prefere
                 queimar dinheiro em protesto do que usa-lo.`;
            } else {
                endTitle = "Com tanto dinheiro, você foi assasinado por corruptos.";
                endText = `Você trouxe uma quantidade exorbitante de fundos para os cofres nacionais e internacionais, você foi
                considerado como um heroí para uma população cada vez mais pobre. No entanto, como recompensa do seus esforços e governo,
                você atraiu a atenção de diversos senadores e políticos corruptos, os quais com sede pelo seu dinheiro, o assinaram numa
                tarde de domingo.`;
            }
            break;
        case "populacao":
            if (valor == 0) {
                endTitle = "Você governa um reino sem sûditos.";
                endText = `As suas más decisões a respeito da população geral lhe renderam a fama de um pessimo governante, 
                suas políticas extremas de controla populacional e descaso civil fizeram com que boa parte da população
                deixasse o país, e a pouca população que restou é incapaz de manter a nação funcionando. Sem outra opção,
                você deixa o Brasil a sua própria ruína.`;
            } else {
                endTitle = "O Brasil esta superlotado, não haverá comida para todos.";
                endText = `Suas decisões políticas para a população aumentaram o numero de filhos por mulher de 6 para impressionantes 13.
                Graças a isso, a taxa de natalidade superou muito a taxa de mortalidade. Com o tempo, As fazendas e as poucas industrias
                brasileiras não possuiam mais a capacidade de produzir comida o suficiente para toda essa população, Comida se tornou um bem
                mais raro que ouro. em alguns anos sua população começa a morrer de subnutrição...`;
            }
            break;
        case "fama":
            if (valor == 0) {
                endTitle = "Você foi o presidente mais odiado da historia.";
                endText = `Sua taxa de aprovação é quase nula, aproximadamente 0,0001%, o povo força você a abdicar
                e com o apoio do exército, em poucos meses você e é removido do cargo, o povo comemora sua saída e transforma o dia em um feriado nacional.
                Você acaba de marcar a história do Brasil como o pior presidente da história nacional. alguns meses após
                seu impeachment, você é assasinado numa viela.`;
            } else {
                endTitle = "Famoso John F. Kennedy Brasileiro.";
                endText = `Sua taxa de aprovação era de quase 98%, um recorde absoluto em qualquer país do mundo.
                as pessoas te amavam, independente de posição social ou emprego, você fez milagres numa pequena nação
                emergente, que agora possuia um grande heroi nacional para lidera-la até a grandeza. No entanto,
                algumas poucas pessoas se reuniram contra você, e em meio a um discurso televionado para toda a nação,
                você foi assasinado por um Sniper, e até hoje, o paradeiro desse assasino permanesce desconhecido...`;
            }
            break;
    }
    document.getElementById("titleGame").innerHTML = endTitle;
    document.getElementById("imagemFinal").src = `../img/finais/alternativos/${atributo}${valor}.png`;
    document.getElementById("textoFinal").innerHTML = endText;
    document.getElementById("telaFinal").style.display = "";
    document.getElementById("telaGeral").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    voltarHTMLAoNormal();
}