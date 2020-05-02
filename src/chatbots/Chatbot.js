import React from "react";
import { ConversationalForm } from "conversational-form";
import "../css/Chatbot.css";
import { flowStepCallback } from "./dynamic.js";
import ChatbotData from "../chatData/questionBuilder";
const triage = require("../chatData/chunks/triage.json");

export default class Chatbot extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = ChatbotData.start;
    console.log(this.formFields)
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
    
  }
  render() {
    return (
      <div>
        <div ref={(ref) => (this.elem = ref)}></div>
      </div>
    );
  }
}