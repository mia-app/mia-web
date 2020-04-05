import React from "react";
import { ConversationalForm } from "conversational-form";
import "../css/Chatbot.css";

export default class Prevention extends React.Component {
  constructor(props) {
    super(props);
    var data = require("../chatData/preventionData.json");
    this.formFields = data;

    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },
      tags: this.formFields,
    });
    this.elem.appendChild(this.cf.el);
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("wash your hands and stay home");

    window.setTimeout(
      () => this.cf.addRobotChatResponse("Redirecting Home"),
      3000
    );
    window.setTimeout(() => this.props.history.push("/"), 5000);
  }

  render() {
    return (
      <div>
        <div ref={(ref) => (this.elem = ref)} />
      </div>
    );
  }
}
