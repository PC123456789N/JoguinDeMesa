export const history_event = {
    "N1": {
        "character": "Tenente Taísa Torres",
        "event_text": "Vossa excelência, ocorreu uma explosão numa plataforma de petróleo conhecida como OL-1. Há sinais de sabotagem. Devemos investigar?",
        "choices": [
            {
                "text": "Investigar",
                "effects": {
                    "military": +0,
                    "finance": +0,
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
                "text": "Culpe os “terroristas”",
                "effects": {
                    "military": +10,
                    "finance": +0,
                    "population": +0,
                    "popularity": +5
                },
                "leads_to": "M3"
            },
            {
                "text": "Culpe o exército",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +0,
                    "popularity": +0
                },
                "leads_to": "R3"
            },
        ],
    },
    "M3": {
        "character": "Marechal Silva",
        "event_text": "Presidente, estou pensando em criar uma força paramilitar para combater esses terroristas comunista!",
        "choices": [
            {
                "text": "Crie, temos que nos livrar desse problema",
                "effects": {
                    "military": +0,
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
                "text": "Permita, deixe eles falarem",
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
        "event_text": "Vossa Excelência; nós do exército queremos mais fundos, especialmente com os novos rebeldes ameaçando o governo. Precisamos fortalecer nossa reputação com a população!",
        "choices": [
            {
                "text": "Ceder fundos",
                "effects": {
                    "military": +20,
                    "finance": -20,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "MP5"
            },
            {
                "text": "Não ceder",
                "effects": {
                    "military": -20,
                    "finance": +0,
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
        "character": "Guarda Glória Góis ",
        "event_text": "Senhor, os rebeldes estão invadindo escolas e estádios públicos para protestar! Deveremos intervir?",
        "choices": [
            {
                "text": "Deixe-os protestar",
                "effects": {
                    "military": -5,
                    "finance": +0,
                    "population": +5,
                    "popularity": +5
                },
                "leads_to": "RP5"
            },
            {
                "text": "Impeça-os, prendam todos",
                "effects": {
                    "military": +10,
                    "finance": +5,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "RG5"
            },
        ],
    },
    "RG4": {
        "character": "Guarda Glória Góis",
        "event_text": "Senhor, recebemos informações e boatos que os rebeldes estão tramando uma revolta armada, devemos mandar a policia prender os rebeldes?",
        "choices": [
            {
                "text": "Não devemos confiar em boatos nessas horas.",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +10,
                    "popularity": +10
                },
                "leads_to": "RP5"
            },
            {
                "text": "Mande a polícia e o Exército, matem todos.",
                "effects": {
                    "military": +20,
                    "finance": -10,
                    "population": -5,
                    "popularity": -10
                },
                "leads_to": "RG5"
            },
        ],
    },
    "MP5": {
        "character": "Banqueiro Bruno Barros",
        "event_text": "Amigo, os bancos nacionais estão recebendo constantes ameaças,opositores dizem que irão explodir os bancos. a população exige que o exército proteja eles!",
        "choices": [
            {
                "text": "enviar a proteção do exército.",
                "effects": {
                    "military": +20,
                    "finance": +20,
                    "population": +10,
                    "popularity": +10
                },
                "leads_to": "MP6"
            },
            {
                "text": "Isso deve ser apenas um rumor.",
                "effects": {
                    "military": -20,
                    "finance": -20,
                    "population": -5,
                    "popularity": -10
                },
                "leads_to": "MG6"
            },
        ],
    },
    "MP5": {
        "character": "Banqueiro Bruno Barros",
        "event_text": "Amigo, descobrimos que o marechal tinha um montante secreto devido seu alto nível de corrupção! Além disso, todos os soldados do marechal acabaram se revoltando contra ele, eles desejam assassiná-lo para que o senhor fique no poder.",
        "choices": [
            {
                "text": "Matar o Marechal e assumir o lugar dele.",
                "effects": {
                    "military": +20,
                    "finance": +20,
                    "population": +0,
                    "popularity": +10
                },
                "leads_to": "MG6"
            },
            {
                "text": "Prenda-o, não temos direito de matar ele.",
                "effects": {
                    "military": -20,
                    "finance": -10,
                    "population": -5,
                    "popularity": +10
                },
                "leads_to": "MP6"
            },
        ],
    },
    "RP5": {
        "character": "Jornalista Jaime Jason",
        "event_text": "Senhor, Os rebeldes querem Falar com o Senhor. eles esperam demandas de você. eles dizem que irão parar de atacar-nos caso essas demandas sejam atendidas.",
        "choices": [
            {
                "text": "Atender as demandas deles.",
                "effects": {
                    "military": -20,
                    "finance": +20,
                    "population": +10,
                    "popularity": +10
                },
                "leads_to": "RP6"
            },
            {
                "text": "Não responder os rebeldes.",
                "effects": {
                    "military": +20,
                    "finance": -20,
                    "population": +0,
                    "popularity": -10
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
                "text": "Prenda Qualquer um que se opor.",
                "effects": {
                    "military": +10,
                    "finance": -10,
                    "population": -20,
                    "popularity": -20
                },
                "leads_to": "RG6"
            },
            {
                "text": "Acalmar a população, atendendo aos pedidos dela,",
                "effects": {
                    "military": +20,
                    "finance": +0,
                    "population": +5,
                    "popularity": +10
                },
                "leads_to": "RP6"
            },
        ],
    },
    "MP6": {
        "character": "Sargento Márcio",
        "event_text": "Senhor, um ataque aos bancos nacionais foi impedido com sucesso! , capturamos diversos opositores dizendo que eles foram financiados pelo marechal para explodir os bancos. A população exige respostas!",
        "choices": [
            {
                "text": "Não acreditar em “Comunistas”.",
                "effects": {
                    "military": +5,
                    "finance": +0,
                    "population": +0,
                    "popularity": -5
                },
                "leads_to": "MP7"
            },
            {
                "text": "Executar o Marechal.",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +0,
                    "popularity": +5
                },
                "leads_to": "MG7"
            },
        ],
    },
    "MG6": {
        "character": "Tenente Taísa Torres",
        "event_text": "Senhor, com a morte do Marechal, precisamos de alguém para assumir o lugar dele, as forças armadas apontam o senhor para essa posição! propomos que una as posições de Marechal e Presidente",
        "choices": [
            {
                "text": "Eu aceito a “promoção”.",
                "effects": {
                    "military": +10,
                    "finance": +0,
                    "population": +0,
                    "popularity": -10
                },
                "leads_to": "MG7"
            },
            {
                "text": "Isso seria contra a constituição, eu proíbo isso.",
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
        "event_text": "Senhor, Os rebeldes estão satisfeitos com as mudanças que o senhor promoveu. No entanto, eles esperam demandas de você. eles dizem que querem uma democracia verdadeira, e que eleições sejam convocadas imediatamente!",
        "choices": [
            {
                "text": "Convocar eleições.",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +0,
                    "popularity": +15
                },
                "leads_to": "RP7"
            },
            {
                "text": "Não permitir as eleições.",
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
        "event_text": "Senhor, Os rebeldes estão liderando uma revolta armada no interior do país, ele tem o apoio popular e eles esperam demandas de você. eles dizem que irão parar a revolta caso essas demandas sejam atendidas.",
        "choices": [
            {
                "text": "Responder fogo com fogo.",
                "effects": {
                    "military": +10,
                    "finance": +0,
                    "population": +0,
                    "popularity": +0
                },
                "leads_to": "RG7"
            },
            {
                "text": "Atender as demandas com urgência.",
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
        "event_text": "Senhor, Agradeçemos por aceitar o novo cargo, estou certa de que haverá um futuro brilhante pela frente. o exército está extremamente satisfeito, o povo não está lidando muito bem com isso, mas com o tempo tenho certeza que ficará tudo bem. ",
        "choices": [
            {
                "text": "Vida longa ao Brasil!",
                "effects": {
                    "military": +5,
                    "finance": +5,
                    "population": +5,
                    "popularity": -5
                },
                "leads_to": "final"
            },
        ],
    },
    "MG7": {
        "character": "Tenente Taísa Torres",
        "event_text": "Senhor, Agradeçemos por aceitar o novo cargo, estou certa de que haverá um futuro turbulento pela frente. o exército está extremamente satisfeito, o povo não está lidando muito bem com isso, mas com o tempo tenho certeza que ficará tudo bem.",
        "choices": [
            {
                "text": "Vida longa ao Brasil!",
                "effects": {
                    "military": +15,
                    "finance": +0,
                    "population": +0,
                    "popularity": -10
                },
                "leads_to": "final"
            },
        ],
    },
    "RP7": {
        "character": " Jornalista Jaime Jason ",
        "event_text": "Senhor, Você não foi eleito pelo voto popular, mas o importante de tudo, é que graças aos seus esforços, a democracia foi restaurada, o povo está lidando muito bem com isso, mas com o tempo tenho certeza que ficará tudo bem. ",
        "choices": [
            {
                "text": "Sair do cargo",
                "effects": {
                    "military": -20,
                    "finance": +0,
                    "population": +0,
                    "popularity": +20
                },
                "leads_to": "final"
            },
        ],
    },
    "RG7": {
        "character": " Jornalista Jaime Jason ",
        "event_text": "Presidente! os rebeldes estão na porta do palácio do planalto!, o exército tentou impedir a revolta, mas, o exército acabou se unindo a revolta, o povo não está lidando bem com isso, o seu governo causou uma guerra civil!",
        "choices": [
            {
                "text": "Se render e ser removido do cargo!",
                "effects": {
                    "military": -20,
                    "finance": +0,
                    "population": +0,
                    "popularity": -20
                },
                "leads_to": "final"
            },
        ],
    },
}