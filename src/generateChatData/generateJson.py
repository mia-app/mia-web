from formObjects import *
from jsonFormat import *

###

speakYet = question(
    qType = "Radiobuttons",
    question = "Did you speak to a healthcare professional yet?",
    placeholder = "Yes or No",
    answers = ["yes", "no"]
)

infected = question(
    qType = "Radiobuttons",
    question = "Are you infected with Covid-19?",
    placeholder = "Select an answer",
    answers = [
        "Yes, I did a laboratory test.",
        "Yes, I was diagnosed on the telephone by a professional."
        "Not sure."
    ]
)

infected.conditionOn("speakYet", "yes")


symptoms = question(
    qType = "Checkboxes",
    question = "Which of the these symptoms did or do you have?",
    placeholder = "Please select",
    answers = [
        "Fever",
        "Dry cough",
        "Tiredness",
        "Nasal congestion",
        "Sore throat",
        "Other"
    ]
)

symptoms.conditionOn("speakYet", "no")

whenSymptoms = question(
    qType = "date",
    question = "When did you first have your symptoms?",
    placeholder = "e.g. 01.04.2020"
)

### period of infectivity


### exposure to groups


### not certain I remember everyone

Q = [speakYet, infected, symptoms, whenSymptoms]


print(jsonFriendly(Q))





