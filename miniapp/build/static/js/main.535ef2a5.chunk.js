(this.webpackJsonpminiapp=this.webpackJsonpminiapp||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),i=a.n(r),c=(a(16),a(6)),s=a.n(c),l=(a(17),a(7)),u=a(8),m=a(1),p=a(9),d=a(10),h=a(2),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).formFields=[{tag:"input",type:"text",name:"firstname","cf-questions":"What is your firstname?"},{tag:"input",type:"text",name:"lastname","cf-questions":"What is your lastname?"}],n.submitCallback=n.submitCallback.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.cf=h.ConversationalForm.startTheConversation({options:{submitCallback:this.submitCallback,preventAutoFocus:!0},tags:this.formFields}),this.elem.appendChild(this.cf.el)}},{key:"submitCallback",value:function(){var e=this.cf.getFormData(!0);console.log("Formdata, obj:",e),this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{ref:function(t){return e.elem=t}}))}}]),a}(o.a.Component);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.535ef2a5.chunk.js.map