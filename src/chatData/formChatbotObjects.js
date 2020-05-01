class Answer {
    constructor(value, qType, name) {
        this.cf_label = value;
        this.value = value;
        this.type = qType;
        this.tag = "input";
        this.name = name;
    }
    condition(question, answer) { // not working
        this["cf_conditional_" + question] = answer
    }
    addName(name){
        this.name = name;
    }
    printObj() {
        return {
            cf_label: this.cf_label,
            value: this.value,
            type: this.type,
            tag: this.tag,
            name: this.name
        }
    }
}

export class Question {
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
            for(a of answers) {
                var r
                if(qType === "Checkboxes") {
                    r = new Answer(a, "checkbox", name)
                } else {
                    r = new Answer(a, "radio", name)
                }
                this.children.push(r)
            }
        }
    }

    printObj() {
        return {
            cf_input_placeholder: this.cf_input_placeholder,
            cf_questions: this.cf_questions,
            children: this.children.map(c => c.printObj()),
            name: this.name,
            type: this.type,
            tag: this.tag
        }
    }

    addChild(c){
        this.children.push(c)
        c.addName(this.name)
    }

    conditionOn(question, cond) {
        if(this.tag === "fieldset") {
            var c
            for (c of this.children) {
                c.condition(question, cond)
            }
        } else {
            this.condition(question, cond)
        }
    }

    condition(question, cond) {
        this["cf_conditional_" + question] = cond;
    }

}

export class RobotMessage {
    constructor(message){
        this.questions = message;
        this.tag = "cf-robot-message"
    }

    printObj() {
        return {
            cf_questions: this.questions,
            tag: this.tag
        }
    }
}