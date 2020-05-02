import Questions from "../chatData/questionBuilder";

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
