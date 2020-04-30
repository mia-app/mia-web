import history from "../utils/history";

export const flowStepCallback = (dto, success, error) => {
    const questionName = dto.tag.name;

    switch(questionName) {
      case "infected":
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
  console.log(dto.tag.value.length);
  if (dto.tag.value.length === 0) {
    return success();
  }

  const answerNames = dto.tag.value.pop();
  const questionName = dto.tag.name;
  
  switch(answerNames) {
    case `${questionName}_1`:
      // redirect to about page
      history.push("/about");
      break;
    case "infected_2":
      // redirect to survey
      success();
      window.location.href = "http://www.w3schools.com";
      break;
    default:
      error();
  }
}
