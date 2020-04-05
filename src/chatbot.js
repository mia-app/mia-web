import React from 'react';
import { ConversationalForm } from 'conversational-form';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    var data = require("./chatData/genChatData.json");
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
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("wash your hands and stay home")
  }
  
  // submitCallback() {
  //   var formDataSerialized = this.cf.getFormData(true);

  //   if (formDataSerialized["infected"].includes("Yes, I did a laboratory test.") || formDataSerialized["infected"].includes("Yes, I was diagnosed on the telephone by a professional.Not sure."))
  //   {
  //     this.cf.addRobotChatResponse("Ok. Please warn others.")
  //   }
  //   else
  //   {
  //     this.cf.addRobotChatResponse("You have Covid-19 symptoms. Please reach out to your Doctor or call +41 58 463 00 00.")
  //   }

  //   console.log("Formdata, obj:", formDataSerialized);
  // }
  
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
