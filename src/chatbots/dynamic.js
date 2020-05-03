import Questions from "../chatData/questionBuilder";
import { Question, RobotMessage } from "../chatData/formChatbotObjects";

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
        var moment = require('moment');
        var d = dto.tag.value
        if(moment(d, 'DD.MM.YYYY',true).isValid()){
          var dStart = moment(d).subtract(7,'d')
          var dEnd = moment(d).add(5,'d')
          var dStartPrint = dStart.format('dddd [the] Do [of] MMMM YYYY')
          var dEndPrint = dEnd.format('dddd [the] Do [of] MMMM YYYY')
          var m = `Alright. This means that you might have been spreading the virus between ${dStartPrint} and ${dEndPrint}.`
          const spreadPeriod = new RobotMessage(m);
          window.ConversationalForm.addTags(spreadPeriod, true);
          success()

        } else {
          error("please try again (make sure the date format is DD.MM.YYYY)");
        }
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
