import Questions from "../chatData/questionBuilder";
var moment = require('moment');

export const flowStepCallback = (dto, success, error) => {
    const questionName = dto.tag.name;

    switch(questionName) {
      case "startChatbot":
        startQuestion(dto, success, error);
        break;
      case "isInfected":
        success();
        break;
      case "startTracing":
        if (dto.tag.value.pop() === "startTracing-1") {
          window.ConversationalForm.addTags(Questions.periodOfInfectivity, true);
        }
        success();
        break;
      case "symptomsStartDate":
        // using moment 2.18.1 (https://tinyurl.com/y7kuuw54)
        var d = dto.tag.value
        if(moment(d, 'DD.MM.YYYY', true).isValid()){
          var dStart = moment(d, 'DD.MM.YYYY').subtract(7,'d')
          var dEnd = moment(d, 'DD.MM.YYYY').add(5,'d')
          var dStartPrint = dStart.format('dddd [the] Do [of] MMMM YYYY')
          if (dEnd > moment()) {
            var dEndPrint = "today";
          } else {
            var dEndPrint = dEnd.format('dddd [the] Do [of] MMMM YYYY')
          }
          const spreadPeriod = Object.assign(Questions.spreadPeriod, 
            { "cf-questions": Questions.spreadPeriod["cf-questions"]
              .replace('{dStartPrint}', dStartPrint)
              .replace('{dEndPrint}', dEndPrint)
            });
          console.log(spreadPeriod)
          window.ConversationalForm.addTags([spreadPeriod], true);
          success();
        } else {
          error("Enter the date with the format, DD.MM.YYYY");
        }
        break;
      default:
        success();
        // Mh something went wrong;
        // error();
    }
  }

const startQuestion = (dto, success, error) => {
  if (dto.tag.value.pop() === "startChatbot-1") {
    success();
  } else {
    window.location.href = "https://appmia.ch/#/about";
  }
}
