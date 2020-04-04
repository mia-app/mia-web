
import json

with open('../chatData/genChatData.json', 'r') as handle:
    parsed = json.load(handle)

print(json.dumps(parsed, indent=4, sort_keys=True))
