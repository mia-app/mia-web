import { Question, RobotMessage } from "./formChatbotObjects";

/// START

const introduction = new RobotMessage("Hi, I’m Mia.\nHelp me flatten the curve!");
const startChatbot = new Question(
        "startChatbot", 
        "My goal is to help you remembering the people you've been in contact with if you get infected \
with COVID-19. Together we can warn them and therefore stop the spread of the virus.\n\n \
Let's figure out if you might have infected anyone. Ready?", 
        "", 
        "Radiobuttons", 
        ["Yes, let's find out", "Tell me more about the project"]
    );

const isInfected = new Question( 
        "isInfected",
        "Do you think you have Corona (COVID-19)?",
        "",
        "Radiobuttons",
        ["Yes, I think so", "I am not sure", "No, I don't"]
)

const checkInfection = new RobotMessage(
    `Ok. You don't need to warn others about possible infections if you don't have COVID-19. \
If you feel unsure that you might have it, I would recommend you to get informed about the \
official check-up of the BAG.\n\nhttps://check.foph-coronavirus.ch/screening \n\nThanks \
for taking the time!`
);
checkInfection.conditionOn("isInfected", "isInfected-2");
checkInfection.conditionOn("isInfected", "isInfected-3");

const startTracing = new Question(
    `startTracing`,
    `Alright. You should let the people you have been in contact with know. Should we start that?`,
    ``,
    `Radiobuttons`,
    [`Yes, let's start`, `Maybe later`]);
startTracing.conditionOn("isInfected", "isInfected-1");

const remindMe = new RobotMessage(`Sure. I can remind you via text message or email to do that. The sooner the better!`);
remindMe.conditionOn("startTracing", "startTracing-2");

/// PERIOD OF INFECTIVITY

const moreDetails = new RobotMessage("Let’s start with some questions to get more details.");

const symptomsStartDate = new Question(
    "symptomsStartDate",
    "When did the symptoms start?",
    `e.g. 01.06.2020`,
    `text`, [], false
);

const spreadPeriod = new RobotMessage(`Alright. This means that you might have been spreading \
the virus between {dStartPrint} and {dEndPrint}.`);
const contactGathering = new RobotMessage("Let's start gathering the contacts of the people you \
met in that time frame.")

/// EXPOSURE STATIC

const livingWithSomeone = new Question(
    `livingWithSomeone`,
    `Are you living with someone in the same household?`,
    ``,
    `Radiobuttons`,
    [`Yes`, `No`]);

const livingWithWhom = new Question(
    `livingWithWhom`,
    `Who are you living with? Can you enter their first and last name?`,
    `First + last name`,
    `text`,
    [], false);

const didYouGoToWork = new Question(
    `didYouGoToWork`,
    `Did you go to work during the past weeks?`,
    ``,
    `Radiobuttons`,
    [`Yes`, `No`]);

const giveCompanyName = new Question(
    `giveCompanyName`,
    `Alright, you did. Can you give the name of the company?`,
    ``,
    `text`,
    [], false);
giveCompanyName.conditionOn("didYouGoToWork", "didYouGoToWork-1")

const giveManagerName = new Question(
    `giveManagerName`,
    `How about the name of your manager?`,
    `First + last name`,
    `text`,
    [], false);
giveManagerName.conditionOn("didYouGoToWork", "didYouGoToWork-1")

const didYouLeaveYourApartment = new Question(
    `didYouLeaveYourApartment`,
    `Did you leave your apartment during the past weekends?`,
    ``,
    `Radiobuttons`,
    [`Yes`, `No`]);

const okWhatDidYouDo = new Question(
    `okWhatDidYouDo`,
    `Ok, what did you do?`,
    `Select and press the arrow`,
    `Checkboxes`,
    [`Visiting family/friends`, `Outdoor activities`,
     `Shopping`, `Work/school`, `Went out`, `Something else`]);
okWhatDidYouDo.conditionOn("didYouLeaveYourApartment", "didYouLeaveYourApartment-1")

const whatDidYouDo = new Question(
    `whatDidYouDo`,
    `What exactly?`,
    ``,
    `text`,
    [], false);

const enterContactsActivity = new Question(
    `enterContactsActivity`,
    `Can you give me the full name of the people you met for {activity}? Enter all names separately and then confirm by clicking "done".`,
    ``,
    `text`,
    [], false);

const enterLevelOfContact = new Question(
    `enterContactsActivity`,
    `How have you been in contact with this person/these people?`,
    ``,
    `Radiobuttons`,
    [`We met in an open space with more than 1 meter distance`,
    `We were in close vicinity (less than 1 meter)`,
    `We stayed in the same room for a while`]);    

export default {
    start: [
        // start
        introduction,
        startChatbot,
        isInfected,
        checkInfection,
        startTracing,
        remindMe
    ],
    periodOfInfectivity: [
        moreDetails,
        symptomsStartDate
    ],
    spreadPeriod,
    exposureStatic: [
        contactGathering,
        livingWithSomeone
    ],
    livingWithWhom,
    week: [
        didYouGoToWork,
        giveCompanyName,
        giveManagerName,
        didYouLeaveYourApartment,
        okWhatDidYouDo
    ],
    whatDidYouDo,
    activityTrace: [
        enterContactsActivity,
        enterLevelOfContact
    ]
}
