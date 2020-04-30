import history from "../utils/history";

export const flowStepCallback = (dto, success, error) => {
    const questionName = dto.tag.name;

    switch(questionName) {
      case "infected":
        console.log("1");
        startQuestion(dto, success, error);
        console.log("4");
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
    console.log("success");
    return success();
  }
  console.log("2");

  const answerNames = dto.tag.value.pop();
  const questionName = dto.tag.name;
  
  console.log(answerNames);

  switch(answerNames) {
    case `${questionName}_1`:
      // redirect to about page
      console.log("3");
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
