def jsonFriendly(d):
    d = todict(d)
    d = str(d)
    return(jsonChars(d))

def jsonChars(j):
    return(j.replace("'", "\"").replace("_", "-").replace("`", "'"))

# https://stackoverflow.com/questions/1036409/recursively-convert-python-object-graph-to-dictionary
def todict(obj, classkey=None):
    if isinstance(obj, dict):
        data = {}
        for (k, v) in obj.items():
            data[k] = todict(v, classkey)
        return data
    elif hasattr(obj, "_ast"):
        return todict(obj._ast())
    elif hasattr(obj, "__iter__") and not isinstance(obj, str):
        return [todict(v, classkey) for v in obj]
    elif hasattr(obj, "__dict__"):
        data = dict([(key, todict(value, classkey)) 
            for key, value in obj.__dict__.items() 
            if not callable(value) and not key.startswith('_')])
        if classkey is not None and hasattr(obj, "__class__"):
            data[classkey] = obj.__class__.__name__
        return data
    else:
        return obj



# import json
# print(json.dumps(todict(speakYet), indent=4, sort_keys=True))


