class answer:

    def __init__(self, value, qType, name):
        self.cf_label = value
        self.value = value
        self.type = qType
        self.tag = "input"
        self.name = name

    def condition(self, question, answer):
        setattr(self, "cf_conditional_" + question, answer)

    def addName(self, name):
        self.name = name

class question: 

    def __init__(self, name, question, placeholder, qType, answers = None, fieldset = True):
        self.name = name
        self.cf_questions = question
        self.cf_input_placeholder = placeholder
        self.type = qType
        if fieldset:
            self.tag = "fieldset"
        else :
            self.tag = "input"
        if answers is not None:
            self.children = []
            for a in answers:
                if qType == "Checkboxes":
                    r = answer(a, "checkbox", name)
                else :
                    r = answer(a, "radio", name)
                # r.addName(type(self).__name__)
                self.children.append(r)

    def addChild(self, c):
        self.children.append(c)
        c.addName(type(self).__name__)

    def conditionOn(self, question, cond):
        if self.tag == "fieldset":
            for c in self.children:
                c.condition(question, cond)
        else :
            self.condition(question, cond)

    def condition(self, question, cond):
        setattr(self, "cf_conditional_" + question, cond)


class robotMessage:
    
  def __init__(self, message):
    self.cf_questions = message
    self.tag = "cf-robot-message"
  
  def conditionOn(self, question, cond):
    setattr(self, "cf_conditional_" + question, cond)
