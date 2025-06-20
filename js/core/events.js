/*
evento:
  nome:
  efeito em texto:
  efeito encodado em um dict{
    recurso afetado: operação, quantidade
  }

talvez adicionar opções de resposta depois
*/

const event_random = [
    {
        "name": "Doação anonima",
        "effect_text": "Aumenta Recursos Financeiros em 20",
        "effects": {
            "finance": 20
        }
    },
    {
        "name": "Bancos roubados",
        "effect_text": "Diminui Recursos Financeiros em 20",
        "effects": {
            "finance": -20
        }
    },
    {
        "name": "Insurreição militar",
        "effect_text": "Aumenta Militarismo em 40",
        "effects": {
            "military": 40
        }
    },
    {
        "name": "Alguma coisa que diminui poder militar",
        "effect_text": "Diminui Militarismo em 30",
        "effects": {
            "military": -30
        }
    },
    {
        "name": "Fazer doação",
        "effect_text": "Aumenta Popularidade em 10 e diminui Recursos Financeiros em 15",
        "effects": {
            "approval": 10,
            "finance": -15
        }
    },
    {
        "name": "Se mijar",
        "effect_text": "Diminui Popularidade em 10",
        "effects": {
            "approval": -10
        }
    }
]

const event_history = [
    // pra ser determinado
]