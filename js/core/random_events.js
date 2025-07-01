const event_random = [
    {
        "event_text": "As bases do exército estão lotadas\! Nós estamos precisando de mais dinheiro para conseguir construir mais bases militares.",
        "choices": [
                        {
                "text": "Ajudar",
                "effects": {
                    "military": +10,
                    "finance": -5,
                    "population": +0,
                    "popularity": +0,
                }
            },
            {
                "text": "Não ajudar",
                "effects": {
                    "military": -10,
                    "finance": +5,
                    "population": +0,
                    "popularity": +0,
                }
            },
            {
                "text": "Demitir militares",
                "effects": {
                    "military": -20,
                    "finance": +20,
                    "population": +0,
                    "popularity": -5,
                }
            },

        ]
    },
    {
        "event_text": "Nós queremos fazer um evento em escala internacional para comemorar o aniversário do exército. O governo pode arcar com os custos?",
        "choices": [
                        {
                "text": "Pagar",
                "effects": {
                    "military": +10,
                    "finance": -20,
                    "population": +0,
                    "popularity": +10,
                }
            },
            {
                "text": "Não fazer evento",
                "effects": {
                    "military": -10,
                    "finance": +10,
                    "population": +0,
                    "popularity": -20,
                }
            },
            {
                "text": "Não pagar os custos",
                "effects": {
                    "military": -5,
                    "finance": +5,
                    "population": +0,
                    "popularity": -10,
                }
            },

        ]
    },
    {
        "event_text": "A aeronáutica do Brasil está chamando atenção do mundo afora. Muitos jovens de outros países querem entrar no país por isso.",
        "choices": [
                        {
                "text": "Permitir que entrem",
                "effects": {
                    "military": +10,
                    "finance": -15,
                    "population": +20,
                    "popularity": +10,
                }
            },
            {
                "text": "Não permitir",
                "effects": {
                    "military": -10,
                    "finance": +15,
                    "population": +0,
                    "popularity": -10,
                }
            },
            {
                "text": "Fazer exames de seleção",
                "effects": {
                    "military": +5,
                    "finance": -5,
                    "population": +10,
                    "popularity": +5,
                }
            },

        ]
    },
    {
        "event_text": "Avistou-se alguns navios estranhos no mar. Qual o procedimento?",
        "choices": [
                        {
                "text": "Ignorar",
                "effects": {
                    "military": -5,
                    "finance": +0,
                    "population": +0,
                    "popularity": +5,
                }
            },
            {
                "text": "Tentar se comunicar",
                "effects": {
                    "military": +5,
                    "finance": -5,
                    "population": +0,
                    "popularity": +0,
                }
            },
            {
                "text": "Atacar",
                "effects": {
                    "military": +15,
                    "finance": -10,
                    "population": -10,
                    "popularity": -10,
                }
            },

        ]
    },
    {
        "event_text": "O país está com uma grande dívida externa, precisamos pagar\! devemos aumentar os impostos?",
        "choices": [
                        {
                "text": "Pode aumentar\!",
                "effects": {
                    "military": +0,
                    "finance": +10,
                    "population": +0,
                    "popularity": -10,
                }
            },
            {
                "text": "Não aumentem\!",
                "effects": {
                    "military": +0,
                    "finance": -10,
                    "population": +0,
                    "popularity": +10,
                }
            },
            {
                "text": "TRIPLIQUEM OS IMPOSTOS\!",
                "effects": {
                    "military": +0,
                    "finance": +30,
                    "population": +0,
                    "popularity": -30,
                }
            },

        ]
    },
    {
        "event_text": "O exército está consumindo muitos dos recursos financeiros que poderiam ser re-estabelecidos em outras áreas. Podemos tomar esses recursos para nós?",
        "choices": [
                        {
                "text": "Pegue uma parte",
                "effects": {
                    "military": -15,
                    "finance": +15,
                    "population": +0,
                    "popularity": +0,
                }
            },
            {
                "text": "Não pegue nada\!",
                "effects": {
                    "military": +10,
                    "finance": -10,
                    "population": +0,
                    "popularity": +0,
                }
            },
            {
                "text": "Invista os recursos na população",
                "effects": {
                    "military": -10,
                    "finance": -10,
                    "population": +20,
                    "popularity": +10,
                }
            },

        ]
    },
    {
        "event_text": "Estamos com os cofres cheios\! As pessoas precisam de ajuda, Deveríamos criar um programa de auxílio para os necessitados?",
        "choices": [
                        {
                "text": "Crie um",
                "effects": {
                    "military": +0,
                    "finance": -20,
                    "population": +10,
                    "popularity": +10,
                }
            },
            {
                "text": "Não tem necessidade",
                "effects": {
                    "military": +0,
                    "finance": +10,
                    "population": -10,
                    "popularity": +0,
                }
            },
            {
                "text": "Ninguém toca no meu dinheiro\!",
                "effects": {
                    "military": +0,
                    "finance": +20,
                    "population": -20,
                    "popularity": -10,
                }
            },

        ]
    },
    {
        "event_text": "Uma nação vizinha está em ruínas graças a um terremoto na noite passada, acha que deveríamos mandar uma pequena doação?",
        "choices": [
                        {
                "text": "Mande uma pequena doação",
                "effects": {
                    "military": +0,
                    "finance": -10,
                    "population": +0,
                    "popularity": +10,
                }
            },
            {
                "text": "Eles conseguem se virar\!",
                "effects": {
                    "military": +0,
                    "finance": +10,
                    "population": +0,
                    "popularity": -10,
                }
            },
            {
                "text": "Mande uma grande doação\!",
                "effects": {
                    "military": +0,
                    "finance": -30,
                    "population": +0,
                    "popularity": +20,
                }
            },

        ]
    },
    {
        "event_text": "Senhor, a população aqui é péssima em pagar seus empréstimos\! Eu gostaria de uma pequena força militar para ‘dissuadir’ os devedores\!",
        "choices": [
                        {
                "text": "Junte alguns soldados e saia da frente",
                "effects": {
                    "military": -10,
                    "finance": +30,
                    "population": -10,
                    "popularity": -10,
                }
            },
            {
                "text": "Os soldados não vão trabalhar para você",
                "effects": {
                    "military": +10,
                    "finance": -10,
                    "population": +0,
                    "popularity": +0,
                }
            },
            {
                "text": "Isso não é agiotagem?",
                "effects": {
                    "military": +0,
                    "finance": -10,
                    "population": +0,
                    "popularity": +10,
                }
            },

        ]
    },
    {
        "event_text": "Senhor, os bancos foram assaltados recentemente\! é de facto uma pena, eu gostaria de pedir a honra de ser confiado um empréstimo de vossa excelência\!",
        "choices": [
                        {
                "text": "Claro, mas a 10% de juros ao mês\!",
                "effects": {
                    "military": +0,
                    "finance": -20,
                    "population": +0,
                    "popularity": +10,
                }
            },
            {
                "text": "Jamais, Não é culpa minha que você não proteje seu dinheiro",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +0,
                    "popularity": -10,
                }
            },
            {
                "text": "Pegue dinheiro da previdência\!",
                "effects": {
                    "military": +0,
                    "finance": +10,
                    "population": -20,
                    "popularity": -10,
                }
            },

        ]
    },
    {
        "event_text": "Senhor, queria apresentar uma proposta porque não lançamos uma nova medida de Juros compostos para todas as linhas de crédito do Brasil? certamente poderíamos lucrar com isso, metade de toda a renda será sua em impostos\!",
        "choices": [
                        {
                "text": "boa ideia\! vamos fazer isso",
                "effects": {
                    "military": +0,
                    "finance": +30,
                    "population": -10,
                    "popularity": -30,
                }
            },
            {
                "text": "o'que? Isso é impensável\! é abuso do consumidor",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +10,
                    "popularity": +10,
                }
            },
            {
                "text": "saia daqui seu agiota maldito\!",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +0,
                    "popularity": +20,
                }
            },

        ]
    },
    {
        "event_text": "Vossa excelência\! Deveríamos liberar crédito igualmente para as mulheres e homens? tendo em vista que as cidadãs do nosso grande país precisam ser independentes para gastar seu dinheiro\!",
        "choices": [
                        {
                "text": "Ue, mas as mulheres já podem abrir contas bancárias",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": -10,
                    "popularity": +0,
                }
            },
            {
                "text": "Claro, todos devem ter liberdade financeira",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +10,
                    "popularity": +10,
                }
            },
            {
                "text": "Libere crédito somente para os militares\!",
                "effects": {
                    "military": +10,
                    "finance": +0,
                    "population": +0,
                    "popularity": +10,
                }
            },

        ]
    },
    {
        "event_text": "Muitas pessoas começaram a vir para o Brasil; não existe uma cidade sequer sem turistas.",
        "choices": [
                        {
                "text": "Feche as fronteiras",
                "effects": {
                    "military": +0,
                    "finance": -10,
                    "population": -5,
                    "popularity": -20,
                }
            },
            {
                "text": "Investir no turismo",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +10,
                    "popularity": +20,
                }
            },
            {
                "text": "Deixe-os se divertir",
                "effects": {
                    "military": +0,
                    "finance": +20,
                    "population": +5,
                    "popularity": +10,
                }
            },

        ]
    },
    {
        "event_text": "Notamos que o país teve um aumento gigantesco na taxa de natalidade. Devemos fazer algum tipo de controle para isso?",
        "choices": [
                        {
                "text": "Não é necessário",
                "effects": {
                    "military": +0,
                    "finance": +5,
                    "population": +30,
                    "popularity": -5,
                }
            },
            {
                "text": "Controle de natalidade",
                "effects": {
                    "military": +0,
                    "finance": -5,
                    "population": +0,
                    "popularity": -15,
                }
            },

        ]
    },
    {
        "event_text": "Senhor, com as Olimpíadas se aproximando, gostaria de pedir uma quantidade significativa de fundos para abrir academias e Dojos de treinamento públicos para estimular o esporte nacional\!",
        "choices": [
                        {
                "text": "Claro, todos merecem acesso ao esporte\!",
                "effects": {
                    "military": +0,
                    "finance": -20,
                    "population": +10,
                    "popularity": +10,
                }
            },
            {
                "text": "Não, não temos dinheiro para essas coisas\!",
                "effects": {
                    "military": +0,
                    "finance": +10,
                    "population": -10,
                    "popularity": -10,
                }
            },
            {
                "text": "Claro, Mas somente os militares podem utilizar esses espaços",
                "effects": {
                    "military": +20,
                    "finance": -20,
                    "population": +0,
                    "popularity": -10,
                }
            },

        ]
    },
    {
        "event_text": "Senhor, Alguns Militares invadiram uma academia da região para capturar um Jornalista\! gostaria de pedir para que isso fosse evitado no futuro. alguns estão com medo de simplesmente sair de casa",
        "choices": [
                        {
                "text": "Irei reclamar com o Tenente a respeito disso",
                "effects": {
                    "military": -10,
                    "finance": +0,
                    "population": +10,
                    "popularity": +0,
                }
            },
            {
                "text": "Bom, se ele era um criminoso, não posso fazer nada",
                "effects": {
                    "military": +10,
                    "finance": +0,
                    "population": -10,
                    "popularity": -10,
                }
            },
            {
                "text": "Se ele era inocente, não tem nada a temer",
                "effects": {
                    "military": +20,
                    "finance": +0,
                    "population": +0,
                    "popularity": -10,
                }
            },

        ]
    },
    {
        "event_text": "Senhor, uma famosa equipe de atletas está protestando publicamente contra o governo. Peço que deixe-os protestar, o esporte deve ser uma área livre para a liberdade de expressão.",
        "choices": [
                        {
                "text": "Isso é ridículo, e não irei permitir",
                "effects": {
                    "military": +15,
                    "finance": +0,
                    "population": -10,
                    "popularity": -10,
                }
            },
            {
                "text": "Eles devem ser responsabilizados pelo que falarem",
                "effects": {
                    "military": +0,
                    "finance": +0,
                    "population": +0,
                    "popularity": -5,
                }
            },
            {
                "text": "Sim, Deixe-os falar oque quiserem",
                "effects": {
                    "military": -5,
                    "finance": +0,
                    "population": +0,
                    "popularity": +10,
                }
            },

        ]
    },

]