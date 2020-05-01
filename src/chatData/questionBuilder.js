import { Question, RobotMessage } from "./formChatbotObjects";

const introduction = new RobotMessage("Hi I'm Mia. Help me flatten the curve");
const firstQuestion = new Question(
        "infected", 
        "Do you have Rona?", 
        "Rona", 
        "Radiobuttons", 
        ["Yes", "No"]
    );

export default {
    start: [
        introduction.printObj(),
        firstQuestion.printObj(),
        introduction.printObj(),
        firstQuestion.printObj()
    ]
}
