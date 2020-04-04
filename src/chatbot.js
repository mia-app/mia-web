import React from 'react';
import { ConversationalForm } from 'conversational-form';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    var data = require("./chatData/chatData.json");
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
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
  }
  
  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);

    if (formDataSerialized["question-2"].includes("answer1") || formDataSerialized["question-2"].includes("answer2"))
    {
      this.cf.addRobotChatResponse("Please inform all concat persons asap.")
    }
    else
    {
      this.cf.addRobotChatResponse("You are done.")
    }

    console.log("Formdata, obj:", formDataSerialized);
  }
  
  render() {
    return (
      <div>
        <div
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}