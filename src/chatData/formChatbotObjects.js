class Answer {
    constructor(value, qType, name, nr) {
        this["cf-label"] = value;
        this.value = name + "-" + nr;
        this.type = qType;
        this.tag = "input";
        this.name = name;
    }
    condition(question, answer) { // not working
        if(typeof this["cf-conditional-" + question] != "undefined"){
            this["cf-conditional-" + question] = this["cf-conditional-" + question] + "||" + answer
        } else {
            this["cf-conditional-" + question] = answer
        }
        // this["cf-conditional-" + question] = answer
    }
    addName(name){
        this.name = name;
    }
  }

export class Question {
    constructor(name, question, placeholder, qType, answers = null, fieldset = true){
        this.name = name;
        this["cf-questions"] = question;
        this["cf-input-placeholder"] = placeholder;
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
                    r = new Answer(a, "checkbox", name, nr)
                } else {
                    r = new Answer(a, "radio", name, nr)
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
        if(typeof this["cf-conditional-" + question] != "undefined"){
            this["cf-conditional-" + question] = this["cf-conditional-" + question] + "||" + cond
        } else {
            this["cf-conditional-" + question] = cond
        }
    }
}

export class RobotMessage {
    constructor(message){
        this["cf-questions"] = message;
        this.tag = "cf-robot-message";
    }

    conditionOn(question, cond) {
        if(typeof this["cf-conditional-" + question] != "undefined"){
            this["cf-conditional-" + question] = this["cf-conditional-" + question] + "||" + cond
        } else {
            this["cf-conditional-" + question] = cond
        }
    }
}