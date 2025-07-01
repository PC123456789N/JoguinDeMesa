import re

def generate_dict_text(groups):
    def generate_choice(groups, start):
        choice = groups[start:start+5]
        
        if not choice[1]:
            return ""
        
        return f'''\
            {{
                "text": "{choice[0]}",
                "effects": {{
                    "military": {choice[1]},
                    "finance": {choice[2]},
                    "population": {choice[3]},
                    "popularity": {choice[4]},
                }}
            }},'''
    
    choices = []
    choices.append(generate_choice(groups, 1))
    choices.append(generate_choice(groups, 6))
    
    thing = generate_choice(groups, 11)
    if thing:
        choices.append(thing)
    
    choices_text = ""
    for choice in choices:
        choices_text += choice + "\n"
    
    return f'''\
    {{
        "event_text": "{groups[0]}",
        "choices": [
            {choices_text}
        ]
    }},
'''

with open("choices_document.txt") as file:
    text = file.read()

pattern = r'''[\w] \\- [\"“]([\w\\!?.,;‘’\n -]+)[\"”]  
([\w\\%!?,' -]+):\s+\\([\+\-][\d]+)\s+militar\s+/\s+\\([\+\-][\d]+)\sdinheiro\s+/\s+\\([\+\-][\d]+)\s+população\s+/\s+\\([\+\-][\d]+)\s+popularidade\s+
([\w\\%!?,' -]+):\s+\\([\+\-][\d]+)\s+militar\s+/\s+\\([\+\-][\d]+)\sdinheiro\s+/\s+\\([\+\-][\d]+)\s+população\s+/\s+\\([\+\-][\d]+)\s+popularidade\s+
(?:([\w\\%!?,' -]+):\s+\\([\+\-][\d]+)\s+militar\s+/\s+\\([\+\-][\d]+)\sdinheiro\s+/\s+\\([\+\-][\d]+)\s+população\s+/\s+\\([\+\-][\d]+)\s+popularidade\s*)?(?:OBS: [\w ]+)?'''

do_write = bool(input("Coloque alguma coisa para escrever no arquivo auto_events.js: "))

if do_write:
    # Write to auto_events.js
    with open("random_events.js", "w") as file:
        file.write("const event_random = [\n")
        for match in re.findall(pattern, text):
            file.write(generate_dict_text(match))
        file.write("\n]")

for match in re.findall(pattern, text):
    print("const event_random = [\n")
    for match in re.findall(pattern, text):
        print(generate_dict_text(match))
    print("\n]")