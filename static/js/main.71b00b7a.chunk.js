(this.webpackJsonpfacefinder=this.webpackJsonpfacefinder||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/AI.8846bd05.png"},43:function(e,a,t){e.exports=t(97)},48:function(e,a,t){},49:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),s=t.n(l),c=(t(48),t(42)),m=(t(49),t(9));var i=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(m.b,{to:"/sign"},r.a.createElement("h3",null,"Sign Out")))},o=t(38),d=t.n(o),u=(t(54),t(39)),p=t.n(u),b=function(){return r.a.createElement(d.a,{className:"Tilt",options:{max:25},style:{height:200,width:200}},r.a.createElement("img",{src:p.a,alt:"",style:{width:"100px",height:"100px"}}))},E=(t(55),function(e){var a=e.onsubmit,t=e.onchange,n=e.value;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"inputtext flex justify-center"},r.a.createElement("input",{type:"text",onChange:t,value:n,className:"w-75"}),r.a.createElement("button",{onClick:a,className:"w-25 bn grow silver bg-navy"},"Detect"))))}),h=(t(56),function(e){var a=e.val;return r.a.createElement("div",{id:"imgcontainer"},r.a.createElement("div",{id:"image"},r.a.createElement("img",{id:"img",src:a,alt:""}),r.a.createElement("div",{id:"bounding"})))}),g=(t(57),t(40)),v=t.n(g),f=function(){return r.a.createElement(v.a,{className:"particle",params:{particles:{number:{value:100},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}})},w=t(11),N=(t(58),function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"signinheader"},r.a.createElement(m.b,{to:"/register"},r.a.createElement("h3",null,"Register"))),r.a.createElement(f,null),r.a.createElement("article",{className:"mw5 center bg-transparent br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5",style:{marginTop:"20vh"}},r.a.createElement("div",{className:"tc"},r.a.createElement("main",{className:"black-80"},r.a.createElement("form",{className:"measure center"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",required:!0})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",required:!0}))),r.a.createElement("div",{className:""},r.a.createElement(m.b,{to:"/"},r.a.createElement("input",{className:"b pv2 input-reset ba b--black bg-transparent grow pointer f6",type:"submit",value:"Sign in",style:{width:"100%"}}))))))))}),y=t(41),x=t.n(y),k=function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("article",{className:"mw5 center bg-transparent br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5",style:{marginTop:"20vh"}},r.a.createElement("div",{className:"tc"},r.a.createElement("main",{className:"black-80"},r.a.createElement("form",{className:"measure center"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"username"},"Username"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"",id:"",required:!0})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-id"},"Email"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",required:!0})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",required:!0}))),r.a.createElement("div",{className:""},r.a.createElement(m.b,{to:"/"},r.a.createElement("input",{className:"b pv2 input-reset ba b--black bg-transparent grow pointer f6",type:"submit",value:"Register",style:{width:"100%"}}))))))))};var _=function(){var e=new x.a.App({apiKey:"69ced5c2d63348d4adc9c5abe1135329"});onsubmit=function(){e.models.predict("a403429f2ddf4b49b307e318f00e528b",l).then((function(e){console.log(e);var a=document.getElementById("img"),t=a.width,n=a.height,r=e.outputs[0].data.regions[0].region_info.bounding_box,l=r.left_col*t,s=r.top_row*n,c=t-r.right_col*t,m=n-r.bottom_row*n,i=document.getElementById("bounding");console.log(i),i.style.border="3px solid rgb(26, 73, 85)",i.style.top=s+"px",i.style.left=l+"px",i.style.right=c+"px",i.style.bottom=m+"px"}),(function(e){console.log(e)}))};var a=Object(n.useState)(""),t=Object(c.a)(a,2),l=t[0],s=t[1];return r.a.createElement(m.a,{basename:"/FaceRecognition"},r.a.createElement("div",null,r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",exact:!0},r.a.createElement(i,null),r.a.createElement(b,null),r.a.createElement(E,{onsubmit:onsubmit,onchange:function(e){s(e.target.value),document.getElementById("bounding").style="0px"},value:l}),r.a.createElement(f,null),r.a.createElement(h,{val:l})),r.a.createElement(w.a,{path:"/sign",component:N}),r.a.createElement(w.a,{path:"/register",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(96);s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.71b00b7a.chunk.js.map