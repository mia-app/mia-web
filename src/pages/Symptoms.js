import React from "react";
import { ConversationalForm } from "conversational-form";
import "../css/Chatbot.css";
import { Modal } from "../components/modal";

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
        preventAutoFocus: false,
        flowStepCallback: this.flowStepCallback,
        // loadExternalStyleSheet: false
      },

      tags: this.formFields,
    });

    this.elem.appendChild(this.cf.el);

    console.log(this.cf);
  }

  flowStepCallback(dto, success, error) {
    console.log(dto);
    success();
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("wash your hands and stay home");
  }

  render() {
    console.log(this.cf);
    return (
      <div>
        <Modal
          title="Coronavirus check-up"
          body="Answer all the questions in the check-up. Then you will be given a recommendation of what to do."
          link="Go to check.bag-coronavirus.ch"
          href="https://check.bag-coronavirus.ch/screening"
        />

        <div ref={(ref) => (this.elem = ref)}></div>
      </div>
    );
  }
}
