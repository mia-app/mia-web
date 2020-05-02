import history from "../utils/history";

export const flowStepCallback = (dto, success, error) => {
    const questionName = dto.tag.name;

    switch(questionName) {
      case "start":
        startQuestion(dto, success, error);
        break;
      default:
        // Mh something went wrong;
        error();
    }
    console.log(dto);
  }

const startQuestion = (dto, success, error) => {
  // No answer was submitted, let's move on
  if (dto.tag.value.length === 0) {
    return success();
  }

  const answerNames = dto.tag.value.pop();
  const questionName = dto.tag.name;
  
  switch(answerNames) {
    case `start_1`:
      // redirect to about page
      window.location.href = "https://appmia.ch/#/about";
      break;
    case "start_2":
      // redirect to survey
      success();
      window.location.href = "http://www.w3schools.com";
      break;
    default:
      error();
  }
}
