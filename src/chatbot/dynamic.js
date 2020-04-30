import history from "../utils/history";

export const flowStepCallback = (dto, success, error) => {
    const questionName = dto.tag.name;

    switch(questionName) {
      case "speakYet":
        startQuestion(dto, success, error);
        break;
      default:
        // Mh something went wrong;
        error();
    }
    console.log(dto);
  }

const startQuestion = (dto, success, error) => {
  const answerNames = dto.tag.values.pop();
  const questionName = dto.tag.name;

  switch(answerNames) {
    case `${questionName}_1`:
      break;
    case `${questionName}_2`:
      // redirect to about page
      history.push("/about");
      break;
      // redirect to survey
      window.location.href = "http://www.w3schools.com";
      break;
    default:
      error();
