import re

def generate_dict(match):
    def generate_choice(match, start):
        event_text = match[start]
        
        leads_to = match[start+1] + match[start+2]
        
        changes = match[start+3:start+7]
        
        return (leads_to, event_text, changes)
    
    def textify_choice(choice):
        return f"""\
            {{
                "text": "{choice[1]}",
                "effects": {{
                    "military": {choice[2][0]},
                    "finance": {choice[2][1]},
                    "population": {choice[2][2]},
                    "popularity": {choice[2][3]}
                }},
                "leads_to": "{choice[0]}"
            }},
"""

    text_dict = ""
    
    key = match[0] + match[1]
    
    character = match[2]
    
    text = match[3][1:-1] # Remove quote
    
    choices = []
    
    choices.append(generate_choice(match, 4))
    
    if match[11] != '':
        choices.append(generate_choice(match, 11))
        
    text_dict += f"""\
    "{key}": {{
        "character": "{character}",
        "event_text": "{text}",
        "choices": [
"""
    
    # Generate the text
    
    for choice in choices:
        text_dict += textify_choice(choice)
    text_dict += "        ],\n"
    text_dict += "    },\n"
    
    return text_dict


with open("history_document.txt", encoding="utf-8") as file:
    text = file.read()

pattern = r'''(.{1,2})-(\d) - (.+) - (.+)
(.+) \((.{1,2})-(\d)\): ([+-]\d+) militar \/ ([+-]\d+) dinheiro \/ ([+-]\d+) população \/ ([+-]\d+) popularidade
(?:(.+) \((.{1,2})-(\d)\): ([+-]\d+) militar \/ ([+-]\d+) dinheiro \/ ([+-]\d+) população \/ ([+-]\d+) popularidade)?'''

do_write = bool(input("Coloque alguma coisa para escrever no arquivo history_events.js: "))

if do_write:
    # Write to auto_events.js
    with open("history_events.js", "w", encoding="utf-8") as file:
        file.write("export const history_event = {\n")
        # print(re.findall(pattern, text)[1])
        for match in re.findall(pattern, text):
            file.write(generate_dict(match))
            
        file.write("}")