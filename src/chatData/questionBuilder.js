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
    `Did you leave your household during the past weekends?`,
    ``,
    `Radiobuttons`,
    [`Yes`, `No`]);

const okWhatDidYouDo = new Question(
    `okWhatDidYouDo`,
    `Ok, what did you do?`,
    `Select and press the arrow`,
    `Checkboxes`,
    [`Visiting family and friends`, `Outdoor activities`,
     `Shopping`, `Work or school`, `Going out`, `Something else`]);
okWhatDidYouDo.conditionOn("didYouLeaveYourApartment", "didYouLeaveYourApartment-1")

const whatDidYouDo = new Question(
    `whatDidYouDo`,
    `What did you do?`,
    ``,
    `text`,
    [], false);

const enterContactsActivity = new Question(
    `enterContactsActivity`,
    `Can you give me the full name of the people you met for «{activity}»? Enter all names separately and then confirm by clicking "done".`,
    ``,
    `text`,
    [], false);

const enterLevelOfContact = new Question(
    `enterLevelOfContact`,
    `How have you been in contact with this person/these people?`,
    ``,
    `Radiobuttons`,
    [`We met in an open space with more than 1 meter distance`,
    `We were in close vicinity (less than 1 meter)`,
    `We stayed in the same room for a while`]);

const allGood = new Question(
    `allGood`,
    `Do you think you covered everyone for the last weeks?\n\nIf you're not sure, I have some techniques to help you remember.`,
    ``,
    `Radiobuttons`,
    [
        `All good`, 
        `Yes, help me remember`
    ]);

const haveCalendar = new Question(
    `haveCalendar`,
    `Do you have a calendar?`,
    ``,
    `Radiobuttons`,
    [
        `Yes`, 
        `No`
    ]);

const openCalendar = new Question(
    `openCalendar`,
    `Open up your calendar and have a look at your appointments. Even if you have them covered, they might help to recollect other details.\n\nDid you discover anything new?`,
    ``,
    `Radiobuttons`,
    [
        `Yes`, 
        `Nothing`
    ]);
openCalendar.conditionOn("haveCalendar", "haveCalendar-1")

const havePictures = new Question(
    `havePictures`,
    `Did you take some pictures on your phones?`,
    ``,
    `Radiobuttons`,
    [
        `Yes`, 
        `No`
    ]);

const openPictures = new Question(
    `openPictures`,
    `Ok, then go through pictures. They might contain memories that help. You can even see when the photo was taken.\n\nCan you remember anything more?`,
    ``,
    `Radiobuttons`,
    [
        `Yes`, 
        `Nothing`
    ]);
openPictures.conditionOn("havePictures", "havePictures-1")

const haveChat = new Question(
    `haveChat`,
    `Alright, last trick! Do you use messaging apps like Whatsapp or Messenger? `,
    ``,
    `Radiobuttons`,
    [
        `Yes`, 
        `No`
    ]);

const openChat = new Question(
    `openChat`,
    `Browsing through your chat history might trigger your memory. Or you can ask your friends to help.\n\nAny new memories?`,
    ``,
    `Radiobuttons`,
    [
        `Yes`, 
        `Nothing`
    ]);
openPictures.conditionOn("haveChat", "haveChat-1")

const reachOutIntro = new RobotMessage("Great, thanks for listing everyone you've been in touch with! I've arranged them into groups based on how you should best reach out to them. It's best to inform them as fast as possible.")
const reachOutExit = new RobotMessage("Ok, you listed no contacts, so there is noone to get in touch with. Thanks and get well soon!")
const reachOutOutro = new RobotMessage("Great, thank you for contributing to stopping the spread of coronavirus! We traced all your contacts and informed them. /n/nGet well soon!")

const reachOutFlatmate = new Question(
    `reachOutFlatmates`,
    `The people you live with {contacts}I suggest that you have a conversation with them as soon as possible (ideally by phone). If you actually have COVID-19, there is a high chance they have too. You should strongly recommend them to go into quarantine. `,
    ``,
    `Radiobuttons`,
    [
        `Ok`
    ]);
const reachOutEmployer1 = new RobotMessage("Your employer\n\n{employer}\n\nI suggest to inform your employer via messaging system or e-mail. You can copy/paste the following template:")

const reachOutEmployer2 = new Question(
    `reachOutEmployer2`,
    `Dear {employer},\n\n
    
    I regret to inform you that I am feeling ill and learned after a diagnosis that there is a good chance I have COVID-19.\n\n
    
    If that is the case, I was probably infecting others between the 4th of July until yesterday.\n\n
    
    Mia (www.appmia.ch) has recommended that I stay in home office. But, to really slow down the spread of the virus, it is important to warn exposed colleagues to go into quarantine as soon as possible.\n\n
    
    Obviously, it is up to you to take the right decision here.\n\n
    
    You can have a look at my calendar to see in which building I was. Also I remember meeting the following people in that time : Michael J Scott, Pam, and Dwight K. Shrute.\n\n
    
    Best regards,\n\n
    {myName}`,
    ``,
    `Radiobuttons`,
    [
        `Ok`
    ]);

const reachOutVicinity1 = new RobotMessage("You were in close vicinity with \n\n{vicinity}\n\n I suggest to inform those people right now via text message. You can copy/paste the following template:")

const reachOutVicinity2 = new Question(
    `reachOutVicinity2`,
    `
    Hi,\n\n
    
    Sadly I am feeling ill and I learned that there is a good chance I have COVID-19.\n\n
    
    If that's the case, it's very likely that I infected others between July 4th and yesterday. We met personally during that time and were close to each other (less than 1 metre distance) for more than 15 minutes. \n\n
    
    The contact tracing chatbot Mia has recommended to stay in quarantine for the 14(?) days to reduce the spread of the virus. \n\n
    
    I just wanted to inform you but obviously, it's up to you to decide. \n\n
    
    Cheers,\n\n
    {myName}`,
    ``,
    `Radiobuttons`,
    [
        `Ok`
    ]);

const reachOutSameRoom1 = new RobotMessage("You were in close vicinity with {sameRoom} I suggest to inform those people right now via text message. You can copy/paste the following template:")

const reachOutSameRoom2 = new Question(
    `reachOutSameRoom2`,
    `
    Hi {sameRoom},\n\n
    
    Sadly I am feeling ill and I learned that there is a good chance I have COVID-19. \n\n
    
    If that's the case, it's very likely that I infected others between July 4th and yesterday. We met personally during that time and were close to each other (less than 1 metre distance) for more than 15 minutes. \n\n
    
    The contact tracing chatbot Mia has recommended to stay in quarantine for the 14(?) days to reduce the spread of the virus. \n\n
    
    I just wanted to inform you but obviously, it's up to you to decide. \n\n
    
    Cheers,\n\n
    {myName}`,
    ``,
    `Radiobuttons`,
    [
        `Ok`
    ]);

const reachOutOpenSpace1 = new RobotMessage("You were in close vicinity with {openSpace} I suggest to inform those people right now via text message. You can copy/paste the following template:")

const reachOutOpenSpace2 = new Question(
    `reachOutOpenSpace2`,
    `
    Hi {openSpace},\n\n
    
    Sadly I am feeling ill and I learned that there is a good chance I have COVID-19. \n\n
    
    If that's the case, it's very likely that I infected others between July 4th and yesterday. We met personally during that time and were close to each other (less than 1 metre distance) for more than 15 minutes.\n\n 
    
    The contact tracing chatbot Mia has recommended to stay in quarantine for the 14(?) days to reduce the spread of the virus. \n\n
    
    I just wanted to inform you but obviously, it's up to you to decide. \n\n
    
    Cheers,\n\n
    {myName}`,
    ``,
    `Radiobuttons`,
    [
        `Ok`
    ]);

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
    ],
    allGood,
    recollectionHacks: [
        haveCalendar,
        openCalendar,
        havePictures,
        openPictures,
        haveChat,
        openChat
    ],
    reachOut: {
        reachOutIntro,
        reachOutExit,
        reachOutOutro,
        reachOutFlatmate,
        reachOutEmployer1,
        reachOutEmployer2,
        reachOutVicinity1,
        reachOutVicinity2,
        reachOutSameRoom1,
        reachOutSameRoom2,
        reachOutOpenSpace1,
        reachOutOpenSpace2
    }
}
