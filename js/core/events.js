// list of indexes of events to check if they have been seen
let seen_events = []


/**
 * name: str
 * event_text: str
 * choices: list [
 *   choice: dict {
 *     text: str
 *     effects: dict {
 *       resource: number
 *     }
 *   }
 * ]
 */
const event_random = [
    {
        "event_text": "Você recebeu uma doação anonima",
        "choices": [
            {
                "text": "Aumenta Recursos Financeiros em 20, mas diminui o exército",
                "effects": {
                    "finance": 20,
                    "military": -20
                }
            },
            {
                "text": "Diminui Popularidade em 10",
                "effects": {
                    "popularity": -10
                }
            }
        ]
    }
]

const event_history = [
    // pra ser determinado
]