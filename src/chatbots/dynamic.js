import Questions from "../chatData/questionBuilder";
import { weekdaysShort } from "moment";
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
          window.ConversationalForm.addTags([spreadPeriod, ...Questions.exposureStatic], true);
          window.symptomsDate = d
          window.startInfectivity = dStart
          window.stopInfectivity = dEnd
          
          // looping over weeks and weekends (https://tinyurl.com/yace7khg)
          var enumerateDaysBetweenDates = function(startDate, endDate) {
            var dates = [];
        
            var currDate = moment(startDate).startOf('day');
            var lastDate = moment(endDate).startOf('day');
        
            while(currDate.add(1, 'days').diff(lastDate) < 0) {
                console.log(currDate.toDate());
                dates.push(currDate.clone());
            }
        
            return dates;
          };
          
          var checkWeekend = function(days){
            var isWeekend = new Array(days.length).fill(0);
            for (const [index, D] of days.entries()) {
              isWeekend[index] = D.format('dddd') === 'Sunday' || D.format('dddd') === 'Saturday';
            }
            return isWeekend;
          }
          
          const infPeriod = enumerateDaysBetweenDates(dStart, dEnd)
          const whichWeekend = checkWeekend(infPeriod)

          window.infPeriod = infPeriod
          window.whichWeekend = whichWeekend

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
