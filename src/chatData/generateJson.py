class radio:

    def __init__(self, name, label, value):
        self.name = name
        self.cf_label = label
        self.value = value
        self.type = "radio"
        self.tag = "input"
        

class radioButtons:

    def __init__(self, question, placeholder):
        self.cf_questions = question
        self.cf_input_placeholder = placeholder
        self.type = "Radiobuttons"
        self.tag = "fieldset"
        self.children = []

    def addChild(self, c):
        self.children.append(c)

    def addCondition(self, c):
        self.condition = c



r1 = radio("n1", "l1", "v1")
r2 = radio("n2", "l2", "v2")
b = radioButtons("why?", "why?")
b.addChild(r1)
b.addChild(r2)
jsonFriendly(b)

def jsonFriendly(d):
    d = todict(d)
    d = str(d)
    return(jsonChars(d))

def jsonChars(j):
    return(j.replace("'", "\"").replace("_", "-"))

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
