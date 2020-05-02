import history from "../utils/history";

export const flowStepCallback = (dto, success, error) => {
    const questionName = dto.tag.name;

    switch(questionName) {
      case "startChatbot":
        startQuestion(dto, success, error);
        break;
      case "isInfected":
        success();
        break;
      default:
        success();
        // Mh something went wrong;
        error();
    }
  }

const startQuestion = (dto, success, error) => {
  // No answer was submitted, let's move on
  if (dto.tag.value.length === 0) {
    return success();
  }

  const answerNames = dto.tag.value.pop();
  
  switch(answerNames) {
    case "startChatbot-1":
      success();
      break;
    case "startChatbot-2":
      // redirect to about page
      success();
      window.location.href = "https://appmia.ch/#/about";
      break;
    default:
      error();
  }
}
