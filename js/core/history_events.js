export const history_event = {
    "N1": {
        "character": "Tenente Taísa Torres",
        "event_text": "Vossa Excelência, ocorreu uma explosão numa plataforma de petróleo conhecida como OL-1. Há sinais de sabotagem. Devemos investigar?",
        "choices": [
            {
                "text": "Investiguem",
                "effects": {
                    "military": +0,
                    "finance": -5,
                    "population": +0,
                    "popularity": +0
                },
                "leads_to": "N2"
            },
        ],
    },
    "N2": {
        "character": "Marechal Silva",
        "event_text": "Senhor, as pesquisas do laboratório forense identificaram a presença de explosivos na plataforma. Tudo indica um ataque terrorista.",
        "choices": [
            {
                "text": "A culpa é dos “terroristas”",
                "effects": {
                    "military": +10,
                    "finance": +0,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "M3"
            },
            {
                "text": "A culpa é do exército",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +0,
                    "popularity": +5
                },
                "leads_to": "R3"
            },
        ],
    },
    "M3": {
        "character": "Marechal Silva",
        "event_text": "Presidente, estou pensando em criar uma força paramilitar para combater esses terroristas comunistas!",
        "choices": [
            {
                "text": "Crie, temos que nos livrar desse problema",
                "effects": {
                    "military": +5,
                    "finance": +0,
                    "population": +0,
                    "popularity": +0
                },
                "leads_to": "MG4"
            },
            {
                "text": "Não, a polícia deverá tomar conta disso",
                "effects": {
                    "military": -5,
                    "finance": +0,
                    "population": +0,
                    "popularity": +0
                },
                "leads_to": "MP4"
            },
        ],
    },
    "R3": {
        "character": "Jornalista Jaime Jason",
        "event_text": "Presidente! Um dos grupos “terroristas” entrou em contato com o nosso jornal. Eles desejam fazer um pronunciamento para toda a nação. Devemos permitir?",
        "choices": [
            {
                "text": "Deixe eles falarem",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +0,
                    "popularity": +10
                },
                "leads_to": "RP4"
            },
            {
                "text": "Não permita. Você será preso se continuar",
                "effects": {
                    "military": +5,
                    "finance": +0,
                    "population": +0,
                    "popularity": -10
                },
                "leads_to": "RG4"
            },
        ],
    },
    "MP4": {
        "character": "Sargento Márcio",
        "event_text": "Vossa Excelência; nós da marinha queremos mais fundos, especialmente com os novos rebeldes ameaçando o governo. Precisamos fortalecer nossa reputação com a população!",
        "choices": [
            {
                "text": "Ceder fundos",
                "effects": {
                    "military": +15,
                    "finance": -15,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "MP5"
            },
            {
                "text": "Não ceder",
                "effects": {
                    "military": -20,
                    "finance": +5,
                    "population": +5,
                    "popularity": +10
                },
                "leads_to": "MG5"
            },
        ],
    },
    "MG4": {
        "character": "Sargento Márcio",
        "event_text": "A nova unidade especial do Marechal Silva vem se metendo em muitos problemas recentemente. Eles executaram um jornalista na praça da cidade.",
        "choices": [
            {
                "text": "Garanta que essa unidade “desapareça”",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +5,
                    "popularity": +5
                },
                "leads_to": "MG5"
            },
            {
                "text": "Eles serão punidos de forma justa",
                "effects": {
                    "military": -20,
                    "finance": +0,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "MP5"
            },
        ],
    },
    "RP4": {
        "character": "Guarda Glória Góis",
        "event_text": "Senhor, os rebeldes estão invadindo escolas e estádios públicos para protestar! Deveremos intervir?",
        "choices": [
            {
                "text": "Deixem-os protestar",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +5,
                    "popularity": +5
                },
                "leads_to": "RP5"
            },
            {
                "text": "Impeçam-os, prendam todos",
                "effects": {
                    "military": +10,
                    "finance": +5,
                    "population": +0,
                    "popularity": -10
                },
                "leads_to": "RG5"
            },
        ],
    },
    "RG4": {
        "character": "Guarda Glória Góis",
        "event_text": "Senhor, recebemos informações e boatos que os rebeldes estão tramando uma revolta armada, devemos mandar a polícia prender os rebeldes?",
        "choices": [
            {
                "text": "Não podemos confiar em boatos sem provas",
                "effects": {
                    "military": -5,
                    "finance": +0,
                    "population": +5,
                    "popularity": +5
                },
                "leads_to": "RP5"
            },
            {
                "text": "Mande a polícia e o exército, façam o que for preciso",
                "effects": {
                    "military": +15,
                    "finance": -10,
                    "population": -5,
                    "popularity": -5
                },
                "leads_to": "RG5"
            },
        ],
    },
    "MP5": {
        "character": "Banqueiro Bruno Barros",
        "event_text": "Senhor, os bancos nacionais estão recebendo constantes ameaças. Opositores dizem que irão explodir os bancos. A população exige que o exército os proteja!",
        "choices": [
            {
                "text": "Enviar a proteção do exército",
                "effects": {
                    "military": +10,
                    "finance": -5,
                    "population": +0,
                    "popularity": +10
                },
                "leads_to": "MP6"
            },
            {
                "text": "Isso deve ser apenas um rumor",
                "effects": {
                    "military": -10,
                    "finance": -20,
                    "population": +0,
                    "popularity": -10
                },
                "leads_to": "MG6"
            },
        ],
    },
    "MG5": {
        "character": "Banqueiro Bruno Barros",
        "event_text": "Senhor, descobrimos que o marechal tinha um montante secreto devido seu alto nível de corrupção! Além disso, todos os soldados dele acabaram se revoltando contra ele. Eles desejam assassiná-lo para que o senhor fique no poder!",
        "choices": [
            {
                "text": "Façam o que quiserem com o marechal",
                "effects": {
                    "military": +15,
                    "finance": +10,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "MG6"
            },
            {
                "text": "Prendam-o, não temos direito de matar ele",
                "effects": {
                    "military": -15,
                    "finance": -10,
                    "population": +0,
                    "popularity": +10
                },
                "leads_to": "MP6"
            },
        ],
    },
    "RP5": {
        "character": "Jornalista Jaime Jason",
        "event_text": "Senhor, os rebeldes querem falar com o senhor. Eles esperam demandas de você. Dizem que irão parar de nos atacar caso essas demandas sejam atendidas.",
        "choices": [
            {
                "text": "Fazer tudo que pedirem",
                "effects": {
                    "military": -15,
                    "finance": +10,
                    "population": +0,
                    "popularity": +10
                },
                "leads_to": "RP6"
            },
            {
                "text": "Eles não mandam em mim",
                "effects": {
                    "military": +15,
                    "finance": -20,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "RG6"
            },
        ],
    },
    "RG5": {
        "character": "Jornalista Jaime Jason",
        "event_text": "Presidente, a população está furiosa, a morte do grupo rebelde serviu de mártir para milhares civis para contestar o seu governo.",
        "choices": [
            {
                "text": "Prenderemos todos que se oporem",
                "effects": {
                    "military": +10,
                    "finance": -10,
                    "population": -10,
                    "popularity": -15
                },
                "leads_to": "RG6"
            },
            {
                "text": "Vamos atender os pedidos do povo",
                "effects": {
                    "military": -5,
                    "finance": -10,
                    "population": +5,
                    "popularity": +15
                },
                "leads_to": "RP6"
            },
        ],
    },
    "MP6": {
        "character": "Sargento Márcio",
        "event_text": "Senhor, os ataques aos bancos nacionais foram impedidos com sucesso! Capturamos diversos opositores dizendo que foram financiados pelo marechal para explodir os bancos. A população exige respostas!",
        "choices": [
            {
                "text": "Os “comunistas” estão mentindo",
                "effects": {
                    "military": +5,
                    "finance": +0,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "MP7"
            },
            {
                "text": "Matem imediatamente o marechal",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +0,
                    "popularity": +10
                },
                "leads_to": "MG7"
            },
        ],
    },
    "MG6": {
        "character": "Tenente Taísa Torres",
        "event_text": "Senhor, o marechal morreu. Agora precisamos de alguém para assumir o lugar dele. As forças armadas apontam o senhor para essa posição! Propomos que o senhor seja o Presidente Marechal da nossa nação!",
        "choices": [
            {
                "text": "Eu aceito a “promoção”",
                "effects": {
                    "military": +10,
                    "finance": +0,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "MG7"
            },
            {
                "text": "Isso seria contra a constituição, eu proíbo isso",
                "effects": {
                    "military": -5,
                    "finance": +0,
                    "population": +0,
                    "popularity": +10
                },
                "leads_to": "MP7"
            },
        ],
    },
    "RP6": {
        "character": "Jornalista Jaime Jason",
        "event_text": "Senhor, os rebeldes estão satisfeitos com as mudanças que o senhor promoveu. No entanto, eles esperam demandas de você. Eles dizem que querem uma democracia verdadeira, e que eleições sejam convocadas imediatamente!",
        "choices": [
            {
                "text": "Faremos uma eleição",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +0,
                    "popularity": +15
                },
                "leads_to": "RP7"
            },
            {
                "text": "Apenas eu decido quando eu deixarei de ser o Presidente",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +0,
                    "popularity": -10
                },
                "leads_to": "RG7"
            },
        ],
    },
    "RG6": {
        "character": "Jornalista Jaime Jason",
        "event_text": "Senhor, os rebeldes estão liderando uma revolta armada no interior do país, eles têm o apoio da população e esperam demandas de você. Eles dizem que irão parar a revolta caso essas demandas sejam atendidas.",
        "choices": [
            {
                "text": "Se quiserem briga, eles terão briga",
                "effects": {
                    "military": +10,
                    "finance": +0,
                    "population": -5,
                    "popularity": -10
                },
                "leads_to": "RG7"
            },
            {
                "text": "Atender as demandas dos rebeldes",
                "effects": {
                    "military": -15,
                    "finance": +0,
                    "population": +0,
                    "popularity": +10
                },
                "leads_to": "RP7"
            },
        ],
    },
    "MP7": {
        "character": "Tenente Taísa Torres",
        "event_text": "Senhor, nós agradeçemos por aceitar o novo cargo, estou certa de que haverá um futuro brilhante pela frente. O militarismo da nossa pátria está extremamente satisfeito; já o povo não está lidando muito bem com isso. Com o tempo, tenho certeza que ficará tudo bem. ",
        "choices": [
            {
                "text": "Vida longa ao Brasil",
                "effects": {
                    "military": +5,
                    "finance": +5,
                    "population": +5,
                    "popularity": -5
                },
                "leads_to": "F1"
            },
        ],
    },
    "MG7": {
        "character": "Tenente Taísa Torres",
        "event_text": "Senhor, nós agradeçemos por aceitar o novo cargo, estou certa de que haverá um futuro turbulento pela frente. O exército está extremamente satisfeito, o povo não está lidando muito bem com isso, mas com o tempo tenho certeza que ficará tudo bem.",
        "choices": [
            {
                "text": "Vida longa ao Brasil",
                "effects": {
                    "military": +15,
                    "finance": +0,
                    "population": +0,
                    "popularity": -10
                },
                "leads_to": "F2"
            },
        ],
    },
    "RP7": {
        "character": "Jornalista Jaime Jason",
        "event_text": "Senhor, você não foi eleito pelo voto popular, mas o importante de tudo, é que, graças aos seus esforços, a democracia foi restaurada. O povo está lidando muito bem com isso. Com o tempo tenho certeza que ficará tudo bem. ",
        "choices": [
            {
                "text": "Sair do cargo",
                "effects": {
                    "military": -20,
                    "finance": +0,
                    "population": +0,
                    "popularity": +20
                },
                "leads_to": "F3"
            },
        ],
    },
    "RG7": {
        "character": "Jornalista Jaime Jason",
        "event_text": "Presidente! Os rebeldes estão na porta do Palácio do Planalto! O exército tentou impedir a revolta, mas acabaram se unindo. O povo não está lidando bem com isso, o seu governo causou uma guerra civil!",
        "choices": [
            {
                "text": "Se render e ser removido do cargo",
                "effects": {
                    "military": -20,
                    "finance": +0,
                    "population": +0,
                    "popularity": -20
                },
                "leads_to": "F4"
            },
        ],
    },
}