class answer {
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
            for(a of answers) {
                var r
                if(qType == "Checkboxes") {
                    r = new answer(a, "checkbox", name)
                } else {
                    r = new answer(a, "radio", name)
                }
                this.children.push(r)
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
        this["cf_conditional_" + question] = answer
    }

}

class robotMessage {
    constructor(message){
        this.questions = message;
        this.tag = "cf-robot-message"
    }
    condition(question, cond) {
        this["cf_conditional_" + question] = answer
    }
}

// myanswer = new answer("Ford", "bla", "name");
// myanswer.addName("2ndName");
// myanswer.condition("cond", "ans")
// myquestion = new question("first", "q", "ph", "text", ["answerA", "answerB"]);

// console.log(myanswer);
// console.log(myquestion);