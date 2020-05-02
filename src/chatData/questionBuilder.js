import { Question, RobotMessage } from "./formChatbotObjects";

const introduction = new RobotMessage("Hi, I’m Mia.\nHelp me flatten the curve!");
const firstQuestion = new Question(
        "start", 
        "My goal is to help you remembering the people you've been in contact with if you get infected with COVID-19. Together we can warn them and therefore stop the spread of the virus.", 
        "start", 
        "Radiobuttons", 
        ["Yes, let's find out", "Tell me more about the project"]
    );

export default {
    start: [
        introduction.printObj(),
        firstQuestion.printObj()
    ]
}
