class answer:

    def __init__(self, value, qType):
        self.cf_label = value
        self.value = value
        self.type = qType
        self.tag = "input"

    def condition(self, question, answer):
        setattr(self, "cf_conditional_" + question, answer)

    def addName(self, name):
        self.name = name

class question:

    def __init__(self, question, placeholder, qType, answers = None):
        self.cf_questions = question
        self.cf_input_placeholder = placeholder
        self.type = qType
        self.tag = "fieldset"
        if answers is not None:
            self.children = []
            for a in answers:
                if qType == "Checkboxes":
                    r = answer(a, "checkbox")
                else :
                    r = answer(a, "radio")
                r.addName(type(self).__name__)
                self.children.append(r)

    def addChild(self, c):
        self.children.append(c)
        c.addName(type(self).__name__)

    def conditionOn(self, question, answer):
        for c in self.children:
            c.condition(question, answer)
