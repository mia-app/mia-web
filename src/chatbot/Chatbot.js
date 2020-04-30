import React from "./node_modules/react";
import { ConversationalForm } from "./node_modules/conversational-form";
import "../css/Chatbot.css";
import { flowStepCallback } from "./dynamic.js";
const chatBotStart = require("../chatData/chunks/triage.json");

export default class Chatbot extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = chatBotStart;
    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        flowStepCallback: flowStepCallback,
        showProgressBar: true,
        userInterfaceOptions: {
            controlElementsInAnimationDelay: 0,
            robot: {
                robotResponseTime: 0,
                chainedResponseTime: 500
            },
            user:{
                showThinking: false,
                showThumb: false
            }
        }
      },
      tags: this.formFields,
    });

    this.elem.appendChild(this.cf.el);

    console.log(this.cf);
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
    return (
      <div>
        <div ref={(ref) => (this.elem = ref)}></div>
      </div>
    );
  }
}