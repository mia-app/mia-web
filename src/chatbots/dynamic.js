import Questions from "../chatData/questionBuilder";
var moment = require('moment');

export const flowStepCallback = (dto, success, error) => {
    const questionName = dto.tag.name;

    switch(questionName) {
      case "startChatbot":
        if (dto.tag.value.pop() === "startChatbot-1") {
          success();
        } else {
          window.location.href = "https://appmia.ch/#/about";
        }
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

            window.ConversationalForm.addTags([spreadPeriod, ...Questions.exposureStatic], true);

          // Store some global variables that we will need later
          window.symptomsDate = d
          window.startInfectivity = dStart
          window.stopInfectivity = dEnd
          window.infPeriod = enumerateDaysBetweenDates(dStart, dEnd)

          success();
        } else {
          error("Enter the date with the format, DD.MM.YYYY");
        }
        break;
      case "livingWithSomeone":
        var weekTags = [];
        if (dto.tag.value.pop() === "livingWithSomeone-1") { // Yes
          console.log('pop')
          weekTags.push(Questions.livingWithWhom);
        } 
        weekTags = [ ...weekTags, ...Questions.week ];
        window.ConversationalForm.addTags(weekTags, true);
        success()
        break;
      case "livingWithWhom":
        window.flatMate = dto.tag.value
        success()
        break;
      default:
        success();
        // Mh something went wrong;
        // error();
    }
  }

// looping over weeks and weekends (https://tinyurl.com/yace7khg)
const enumerateDaysBetweenDates = function(startDate, endDate) {
  var dates = [];

  var currDate = moment(startDate).startOf('day');
  var lastDate = moment.min(moment(), moment(endDate).startOf('day'));

  while(currDate.add(1, 'days').diff(lastDate) < 0) {
      console.log(currDate.toDate());
      dates.push(currDate.clone());
  }

  return dates;
};