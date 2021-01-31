(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{116:function(t,e,n){},117:function(t,e,n){"use strict";n.r(e);var r,c,a,u,o=n(5),i=n(0),s=n.n(i),d=n(40),b=n.n(d),l=n(33),j=n(20),f=n(73),O=n(15),h=n(6),g=n(24),p=n(75),x=n.n(p),v=n(4),k=n(13),m=Object(h.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isFetchingCurrentUser:!1,isLoggedIn:!1,registerPending:!1,registerError:null,logInPending:!1,logInError:null},extraReducers:(r={},Object(v.a)(r,k.d.pending,(function(t){t.registerPending=!0,t.registerError=null})),Object(v.a)(r,k.d.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0,t.registerPending=!1})),Object(v.a)(r,k.d.rejected,(function(t,e){t.registerPending=!1,t.registerError=e.payload})),Object(v.a)(r,k.b.pending,(function(t){t.logInPending=!0,t.logInError=null})),Object(v.a)(r,k.b.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0,t.logInPending=!1})),Object(v.a)(r,k.b.rejected,(function(t,e){t.logInPending=!1,t.logInError=e.payload})),Object(v.a)(r,k.c.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(v.a)(r,k.a.pending,(function(t){t.isFetchingCurrentUser=!0})),Object(v.a)(r,k.a.fulfilled,(function(t,e){t.user=e.payload,t.isFetchingCurrentUser=!1,t.isLoggedIn=!0})),Object(v.a)(r,k.a.rejected,(function(t){t.isFetchingCurrentUser=!1})),r)}),y=n(8),I=n(9),C=Object(h.d)([],(c={},Object(v.a)(c,I.j,(function(t,e){return e.payload})),Object(v.a)(c,I.c,(function(t,e){var n=e.payload;return[].concat(Object(O.a)(t),[n])})),Object(v.a)(c,I.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),w=Object(h.d)("",Object(v.a)({},I.d,(function(t,e){return e.payload}))),E=Object(h.d)(!1,(a={},Object(v.a)(a,I.i,(function(){return!0})),Object(v.a)(a,I.j,(function(){return!1})),Object(v.a)(a,I.h,(function(){return!1})),Object(v.a)(a,I.b,(function(){return!0})),Object(v.a)(a,I.c,(function(){return!1})),Object(v.a)(a,I.a,(function(){return!1})),Object(v.a)(a,I.f,(function(){return!0})),Object(v.a)(a,I.g,(function(){return!1})),Object(v.a)(a,I.e,(function(){return!1})),a)),P=Object(h.d)(null,(u={},Object(v.a)(u,I.h,(function(t,e){return e.payload})),Object(v.a)(u,I.a,(function(t,e){return e.payload})),Object(v.a)(u,I.e,(function(t,e){return e.payload})),u)),T=Object(y.c)({items:C,filter:w,isLoading:E,error:P}),L=Object(O.a)(Object(h.f)({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})),z={key:"auth",storage:x.a,whitelist:["token"]},F=Object(h.a)({reducer:{auth:Object(g.g)(z,m.reducer),contacts:T},middleware:L,devTools:!1}),S=Object(g.h)(F),U=n(7),V=n(29),W=n(45),R=n(28);function q(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,c=t.redirectTo,a=void 0===c?"/":c,u=Object(W.a)(t,["children","restricted","redirectTo"]),i=Object(j.c)(R.b)&&r;return Object(o.jsx)(U.b,Object(V.a)(Object(V.a)({},u),{},{children:i?Object(o.jsx)(U.a,{to:a}):e}))}function A(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,c=Object(W.a)(t,["children","redirectTo"]),a=Object(j.c)(R.b);return Object(o.jsx)(U.b,Object(V.a)(Object(V.a)({},c),{},{children:a?e:Object(o.jsx)(U.a,{to:r})}))}var B=n(132),J=n(134),M=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,209))})),D=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,214))})),G=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(2)]).then(n.bind(null,217))})),H=function(){var t=Object(j.c)(R.a),e=Object(j.b)();return Object(i.useEffect)((function(){e(Object(k.a)())}),[e]),Object(o.jsx)(o.Fragment,{children:t?Object(o.jsxs)(B.a,{sx:{marginTop:8,display:"flex",justifyContent:"center"},children:[Object(o.jsx)(J.a,{size:60}),Object(o.jsx)(J.a,{size:60,color:"secondary"})]}):Object(o.jsx)(i.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading"}),children:Object(o.jsxs)(U.d,{children:[Object(o.jsx)(q,{path:"/",exact:!0,restricted:!0,redirectTo:"/contacts",children:Object(o.jsx)(M,{})}),Object(o.jsx)(q,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(o.jsx)(M,{})}),Object(o.jsx)(q,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(o.jsx)(D,{})}),Object(o.jsx)(A,{path:"/contacts",redirectTo:"/login",children:Object(o.jsx)(G,{})}),Object(o.jsx)(U.b,{children:Object(o.jsx)(U.a,{to:"/"})})]})})})};n(115),n(116);b.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j.a,{store:F,children:Object(o.jsx)(f.a,{loading:null,persistor:S,children:Object(o.jsx)(l.a,{children:Object(o.jsx)(H,{})})})})}),document.getElementById("root"))},13:function(t,e,n){"use strict";n.d(e,"d",(function(){return b})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return f}));var r=n(23),c=n.n(r),a=n(35),u=n(26),o=n.n(u),i=n(6);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){o.a.defaults.headers.common.Authorization=""},b=Object(i.c)("auth/register",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/signup",e);case 3:if(201!==(r=t.sent).status){t.next=7;break}return s(r.data.token),t.abrupt("return",r.data);case 7:return t.abrupt("return",n.rejectWithValue(r.statusText));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()),l=Object(i.c)("auth/logIn",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("users/login",e);case 3:if(200!==(r=t.sent).status){t.next=7;break}return s(r.data.token),t.abrupt("return",r.data);case 7:return t.abrupt("return",n.rejectWithValue(r.statusText));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(i.c)("auth/logOut",Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/logout");case 3:d(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))),f=Object(i.c)("auth/refresh",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return s(a),t.prev=5,t.next=8,o.a.get("users/current");case 8:return u=t.sent,i=u.data,t.abrupt("return",i);case 13:return t.prev=13,t.t0=t.catch(5),t.abrupt("return",n.rejectWithValue(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())},28:function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return s}));var r=function(t){return t.auth.user.email},c=function(t){return t.auth.isFetchingCurrentUser},a=function(t){return t.auth.isLoggedIn},u=function(t){return t.auth.logInPending},o=function(t){return t.auth.logInError},i=function(t){return t.auth.registerPending},s=function(t){return t.auth.registerError}},9:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return b})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return j}));var r=n(6),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),o=Object(r.b)("contacts/addContactRequest"),i=Object(r.b)("contacts/addContactSuccess"),s=Object(r.b)("contacts/addContactError"),d=Object(r.b)("contacts/deleteContactRequest"),b=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),j=Object(r.b)("contacts/changeFilter")}},[[117,6,7]]]);
//# sourceMappingURL=main.ef8d472c.chunk.js.map