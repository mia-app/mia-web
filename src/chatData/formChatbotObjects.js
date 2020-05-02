class answer {
    constructor(value, qType, name, nr) {
        this.cf_label = value;
        this.value = value;
        this.type = qType;
        this.tag = "input";
        this.name = name + "_" + nr;
    }
    condition(question, answer) { // not working
        this["cf_conditional_" + question] = answer
    }
    addName(name){
        this.name = name;
    }
  }

class question {
    constructor(name, question, placeholder, qType, answers = null, fieldset = true){
        this.name = name;
        this.cf_questions = question;
        this.cf_input_placeholder = placeholder;
        this.type = qType;
        if(fieldset) {
            this.tag = "fieldset"
        } else {
            this.tag = "input"
        }
        if(answers !== null) {
            this.children = [];
            var a
            var nr = 1
            for(a of answers) {
                var r
                if(qType == "Checkboxes") {
                    r = new answer(a, "checkbox", name, nr)
                } else {
                    r = new answer(a, "radio", name, nr)
                }
                this.children.push(r)
                nr = nr + 1
            }
        }
    }

    addChild(c){
        this.children.push(c)
        c.addName(this.name)
    }

    conditionOn(question, cond) {
        if(this.tag == "fieldset") {
            var c
            for (c of this.children) {
                c.condition(question, cond)
            }
        } else {
            this.condition(question, cond)
        }
    }

    condition(question, cond) {
        this["cf_conditional_" + question] = cond
    }

}

class robotMessage {
    constructor(message){
        this.questions = message;
        this.tag = "cf-robot-message"
    }
    conditionOn(question, cond) {
        this["cf_conditional_" + question] = answer
    }
}