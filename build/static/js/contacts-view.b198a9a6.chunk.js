(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{187:function(e,t,n){e.exports={form:"ContactForm_form__11B-A",label:"ContactForm_label__1r6Mk",input:"ContactForm_input__1hna5",btn:"ContactForm_btn__3yYCW",text:"ContactForm_text__1mP5m"}},188:function(e,t,n){e.exports={list:"ContactList_list__1d8wi"}},217:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(223),a=n(132),s=n(224),i=n(215),o=n(230),u=n(231),l=n(20),b=n(13),j=n(28),m=n(226),d=function(){var e=Object(l.b)(),t=Object(l.c)(j.g);return Object(r.jsxs)(a.a,{sx:{display:"flex",alignItems:"center"},children:[Object(r.jsx)(s.a,{color:"textPrimary",sx:{marginRight:5},children:t}),Object(r.jsx)(m.a,{color:"inherit",onClick:function(){return e(Object(b.c)())},children:"Exit"})]})},f=Object(i.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}})),O=function(){var e=f();return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(o.a,{position:"static",children:Object(r.jsx)(c.a,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(s.a,{variant:"h3",className:e.title,component:"div",children:"Contacts"}),Object(r.jsx)(d,{})]})})})})},x=n(153),h=n(186),p=n(43),v=function(e){return e.contacts.items},C=function(e){return e.contacts.filter},_=Object(p.a)([v,C],(function(e,t){return e.filter((function(e){return null===e||void 0===e?void 0:e.name.toLowerCase().includes(t.toLowerCase())}))})),g=n(23),w=n.n(g),k=n(35),y=n(26),N=n.n(y),F=n(9),L=n(187),q=n.n(L),P=function(){var e,t=Object(l.c)(v),n=Object(l.b)(),c=Object(x.b)(),a=c.register,s=c.control,i=c.handleSubmit,o=c.errors,u=c.reset;return Object(r.jsxs)("form",{className:q.a.form,onSubmit:i((function(e){var r=e.name,c=e.number;if(t.find((function(e){return e.name.toLowerCase()===r.toLowerCase()})))return alert("".concat(r," is already in contacts.")),void u({name:"",number:""});n(function(e){return function(){var t=Object(k.a)(w.a.mark((function t(n){var r,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(F.b)()),t.prev=1,t.next=4,N.a.post("/contacts",e);case 4:r=t.sent,c=r.data,n(Object(F.c)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Object(F.a)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}({name:r,number:c})),u({name:"",number:""})})),autoComplete:"off",children:[Object(r.jsx)("label",{className:q.a.label,htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{className:q.a.input,name:"name",type:"text",ref:a({required:!0})}),o.name&&Object(r.jsx)("p",{className:q.a.text,children:"This field is required!"}),Object(r.jsx)("label",{className:q.a.label,htmlFor:"number",children:"Number"}),Object(r.jsx)(x.a,{name:"number",control:s,defaultValue:!1,rules:{required:!0,pattern:/^\+380\s\(([0-9]{2})\)\s([0-9]{3})-([0-9]{4})$/},render:function(e){var t=e.value,n=e.onChange;return Object(r.jsx)(h.a,{className:q.a.input,type:"tel",format:"+380 (##) ###-####",mask:"_",allowEmptyFormatting:!0,value:t,onChange:n})}}),o.number&&Object(r.jsx)("p",{className:q.a.text,children:"This field is required!"}),"pattern"===(null===(e=o.number)||void 0===e?void 0:e.type)&&Object(r.jsx)("p",{className:q.a.text,children:"Phone number is not valid!"}),Object(r.jsx)("button",{className:q.a.btn,type:"submit",children:"Add contact"})]})},E=n(0),A=function(e){var t=e.id,n=e.name,c=e.number,a=e.deleteContact;return Object(r.jsxs)("li",{children:[n,": ",c,Object(r.jsx)("button",{type:"button",onClick:function(){return a(t)},children:"Delete"})]})},G=n(188),J=n.n(G),S=function(){var e=Object(l.c)(_),t=Object(l.b)();return Object(E.useEffect)((function(){t(function(){var e=Object(k.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(F.i)()),e.prev=1,e.next=4,N.a.get("/contacts");case 4:n=e.sent,r=n.data,t(Object(F.j)(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(Object(F.h)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(r.jsx)("ul",{className:J.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(r.jsx)(A,{id:n,name:c,number:a,deleteContact:function(e){return t((n=e,function(){var e=Object(k.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(F.f)()),e.prev=1,e.next=4,N.a.delete("/contacts/".concat(n));case 4:t(Object(F.g)(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t(Object(F.e)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()));var n}},n)}))})},T=function(){var e=Object(l.c)(C),t=Object(l.b)();return Object(r.jsxs)("label",{children:["Find contacts by name",Object(r.jsx)("input",{type:"text",value:e,onChange:function(e){return t(Object(F.d)(e.target.value))}})]})};t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsx)(c.a,{children:Object(r.jsxs)(a.a,{children:[Object(r.jsx)(s.a,{variant:"h4",children:"Phonebook"}),Object(r.jsx)(P,{}),Object(r.jsx)(s.a,{variant:"h4",children:"Contacts"}),Object(r.jsx)(T,{}),Object(r.jsx)(S,{})]})})]})}}}]);
//# sourceMappingURL=contacts-view.b198a9a6.chunk.js.map