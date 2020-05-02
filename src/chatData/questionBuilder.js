import { Question, RobotMessage } from "./formChatbotObjects";

const introduction = new RobotMessage("Hi, I’m Mia.\nHelp me flatten the curve!");
const startChatbot = new Question(
        "startChatbot", 
        "My goal is to help you remembering the people you've been in contact with if you get infected with COVID-19. Together we can warn them and therefore stop the spread of the virus.", 
        "Yes, let's find out", 
        "Radiobuttons", 
        ["Yes, let's find out", "Tell me more about the project"]
    );

const isInfected = new Question( 
        "isInfected",
        "Radiobuttons",
        "Do you think you have Corona (COVID-19)?",
        "I am not sure",
        ["Yes, I think so", "I am not sure", "No, I didn't"]
)

const checkInfection = new RobotMessage(`Ok. You don't need to warn others about possible infections if you don't have COVID-19. If you feel unsure that you might have it, I would recommend you to get informed about the official check-up of the BAG. Here \n\nhttps://check.foph-coronavirus.ch/screening\n\nThanks for taking the time!`);
checkInfection.conditionOn("isInfected", "isInfected_1");

export default {
    start: [
        introduction.printObj(),
        startChatbot.printObj(),
        isInfected.printObj()
    ],


}
