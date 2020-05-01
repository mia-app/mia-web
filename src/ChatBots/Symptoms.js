import React from "react";
import { ConversationalForm } from "conversational-form";
import "../css/Chatbot.css";

export default class Symptoms extends React.Component {
  constructor(props) {
    super(props);
    var data = require("../chatData/symptomsData.json");
    this.formFields = data;
    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        flowStepCallback: this.flowStepCallback,
        showProgressBar: true,
        userInterfaceOptions: {
          controlElementsInAnimationDelay: 0,
          robot: {
            robotResponseTime: 0,
            chainedResponseTime: 500,
          },
          user: {
            showThinking: false,
            showThumb: false,
          },
        },
      },
      tags: this.formFields,
    });

    this.elem.appendChild(this.cf.el);

    console.log(this.cf);
  }

  flowStepCallback(dto, success, error) {
    success();
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("wash your hands and stay home");

    window.setTimeout(
      () => this.cf.addRobotChatResponse("Redirecting Home"),
      3000
    );
    window.setTimeout(() => this.props.setChatbot(""));
  }
  render() {
    return <div ref={(ref) => (this.elem = ref)} />;
  }
}
