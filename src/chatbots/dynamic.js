import Questions from "../chatData/questionBuilder";
import { Question } from "../chatData/formChatbotObjects";
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
      case "giveCompanyName":
        window.companyName = dto.tag.value;
        success()
        break;
      case "giveManagerName":
        window.companyManager = dto.tag.value;
        success()
        break;
      case "didYouLeaveYourApartment":
        if (dto.tag.value[0] === "didYouLeaveYourApartment-2") {
          window.ConversationalForm.addTags([ Questions.whatDidYouDo ], true);
        }
        success()
        break;
      case "okWhatDidYouDo":
        // Something else 
        if (dto.tag.value[0] === dto.tag.elements[dto.tag.elements.length - 1].defaultValue) {
          window.ConversationalForm.addTags([ Questions.whatDidYouDo ], true);
        } else {
          window.activities = window.activities || [];
          var tags = [];
          dto.tag.value.forEach(v => {
            const activity = dto.tag.elements.find(e => e.defaultValue === v).label;
            window.activities.push(activity);
            var enterContactsActivity = Object.assign({}, Questions.activityTrace[0]);
            enterContactsActivity = Object.assign({}, enterContactsActivity, { "cf-questions": enterContactsActivity["cf-questions"].replace(`{activity}`, activity.toLowerCase()) });
            tags.push(enterContactsActivity);
            tags.push(Questions.activityTrace[1]);

          })
          window.ConversationalForm.addTags([ ...tags, Questions.allGood], true);
        }
        success()
        break;
      case "whatDidYouDo":
        window.activities = window.activities || [];
        window.activities.push(dto.text)
        var enterContactsActivity = Object.assign({}, Questions.activityTrace[0]);
        enterContactsActivity = Object.assign({}, enterContactsActivity, { "cf-questions": enterContactsActivity["cf-questions"].replace(`{activity}`, dto.text.toLowerCase()) });
        window.ConversationalForm.addTags([ enterContactsActivity, Questions.activityTrace[1], Questions.allGood ] , true);
        success()
        break;
      case "enterContactsActivity":
        var i = window.activities.findIndex(a => typeof a === "string");
        window.activities[i] = {actvitiyNames: window.activities[i], contactNames: dto.text}
        success()
        break
      case "enterLevelOfContact":
        var i = window.activities.findIndex(a => a.levelOfContact === undefined);
        window.activities[i].levelOfContact = dto.text;
        success()
        break
      case "allGood":
        if (dto.tag.value.pop() === "allGood-1") {
          const tags = [];
          if (window.flatMate) {
            tags.push(Object.assign({}, Questions.reachOut.reachOutFlatmate, {
              "cf-questions": Questions.reachOut.reachOutFlatmate["cf-questions"].replace(`{contacts}`, "\n\n-" + window.flatMate + "\n\n")
            }));
          }
          if (window.companyName || window.companyManager) {
            tags.push(Object.assign({}, Questions.reachOut.reachOutEmployer1, {
              "cf-questions": Questions.reachOut.reachOutEmployer1["cf-questions"].replace(`{employer}`, window.companyManager + " at " + window.companyName )
            }));
            tags.push(Object.assign({}, Questions.reachOut.reachOutEmployer2, {
              "cf-questions": Questions.reachOut.reachOutEmployer2["cf-questions"].replace(`{employer}`, window.companyManager)
            }));
          }
          var activityNames = "";
          window.activities.map(a => {
            if (a.contactNames) {
              activityNames = activityNames + "//" + a;
            }
          });
          if (activityNames) {
            tags.push(Object.assign({}, Questions.reachOut.reachOutVicinity1, {
              "cf-questions": Questions.reachOut.reachOutVicinity1["cf-questions"]
                    .replace(
                      `{vicinity}`, 
                      activityNames.split("//").reduce((a,c) => {                      
                        a = a + `\n<label><input type="checkbox" name="occupation" id="occupation-3" value="curious-mind">${c}</label> </input>`
                      }, "")
                    )
            }));
            tags.push(Questions.reachOut.reachOutVicinity2);
            // contact reach out
          }
          if (tags.length > 0) {
            tags.push(Questions.reachOut.reachOutVicinity2);
            // add intro in the beginning
            tags = [ 
              Questions.reachOut.reachOutIntro,
              ...tags,
              Questions.reachOut.reachOutOutro
            ];
          } else {
            tags.push(Questions.reachOut.reachOutExit)
          }
          window.ConversationalForm.addTags(tags, true);
        } else {
          // start memory lane
          window.ConversationalForm.addTags(Questions.recollectionHacks, true);
        }
        success()
        break;
      case "openCalendar":
      case "openPictures":
      case "openChat":
        window.ConversationalForm.addTags(Questions.whatDidYouDo, true);
        success()
        break;
      default:
        // window.ConversationalForm.remapTagsAndStartFrom
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