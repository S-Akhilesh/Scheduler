(this.webpackJsonpaffle=this.webpackJsonpaffle||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(8),a=c.n(i),l=(c(15),c(16),c(17),c(2)),j=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("img",{src:"https://affle.com/images/Logo_Blue.png",alt:"logo"}),Object(l.jsx)("button",{className:"header__button",children:"Logout"})]})},r=c(10),o=c(3),u=(c(19),c(9)),b=(c(20),function(e){var t=e.setSlot;return Object(l.jsxs)("div",{className:"slot",children:[Object(l.jsx)("h3",{children:"Please select your preferred slot."}),Object(l.jsx)("div",{className:"slot__timings",children:[{time:"10.00 AM",value:"10:00:00"},{time:"10.30 AM",value:"10:30:00"},{time:"11.00 AM",value:"11:00:00"},{time:"11.30 AM",value:"11:30:00"},{time:"12.00 PM",value:"12:00:00"},{time:"12.30 PM",value:"12:30:00"},{time:"1.00 PM",value:"13:00:00"},{time:"1.30 PM",value:"13:30:00"},{time:"2.00 PM",value:"14:00:00"},{time:"2.30 PM",value:"14:30:00"},{time:"3.00 PM",value:"15:00:00"},{time:"3.30 PM",value:"15:30:00"},{time:"4.00 PM",value:"16:00:00"},{time:"4.30 PM",value:"16:30:00"},{time:"5.00 PM",value:"17:00:00"},{time:"5.30 PM",value:"17:30:00"},{time:"6.00 PM",value:"18:00:00"}].map((function(e,c){return Object(l.jsx)("button",{className:"slot__time",onClick:function(){return t(e.value)},value:e.time,children:e.time},c)}))})]})}),d=(c(21),function(e){var t=e.obj;return Object(l.jsx)("div",{className:"meet",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("p",{children:["Organised By: ",Object(l.jsx)("h6",{children:t.organisedBy})," "]}),Object(l.jsxs)("p",{children:["Meeting Description: ",Object(l.jsx)("h6",{children:t.meetingDesc})]}),Object(l.jsxs)("p",{children:["Date: ",Object(l.jsxs)("h6",{children:[" ",t.Date]})," "]}),Object(l.jsxs)("p",{children:["Venue: ",Object(l.jsx)("h6",{children:t.venue})," "]})]})})}),m=function(){var e=Object(n.useState)("Training Room"),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),a=Object(o.a)(i,2),j=a[0],m=a[1],O=Object(n.useState)(""),h=Object(o.a)(O,2),v=h[0],x=h[1],g=Object(n.useState)(""),f=Object(o.a)(g,2),p=f[0],M=f[1],N=Object(n.useState)(new Date),P=Object(o.a)(N,2),S=P[0],D=P[1],k=Object(n.useState)([]),B=Object(o.a)(k,2),C=B[0],y=B[1];Object(n.useEffect)((function(){var e=S.toString(),t=e.match(/ [0-9][0-9]:[0-9][0-9]:[0-9][0-9] /),c=e.replace(t[0].toString()," ".concat(j," ")),n=new Date(c);D(n)}),[j,C]);return Object(l.jsxs)("div",{className:"schedulerMain",children:[Object(l.jsxs)("div",{className:"scheduler",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{children:"Meeting Room Booking."})}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("form",{children:[Object(l.jsxs)("label",{children:["Meeting Room",Object(l.jsxs)("select",{value:c,onChange:function(e){s(e.target.value)},children:[Object(l.jsx)("option",{value:"Training Room",children:"Training Room"}),Object(l.jsx)("option",{value:"Conference Room",children:"Conference Room"})]})]}),Object(l.jsxs)("label",{children:["Name",Object(l.jsx)("input",{type:"text",value:v,placeholder:"Enter Your Name",onChange:function(e){return x(e.target.value)}})]}),Object(l.jsxs)("label",{children:["Meeting Description",Object(l.jsx)("input",{type:"text",value:p,placeholder:"Enter Meeting Description",onChange:function(e){return M(e.target.value)}})]})]}),Object(l.jsx)("div",{className:"calender",children:Object(l.jsx)(u.a,{onChange:D,value:S})}),Object(l.jsx)(b,{setSlot:m}),Object(l.jsx)("div",{className:"btnBook",children:Object(l.jsx)("button",{onClick:function(){var e={organisedBy:"".concat(v),meetingDesc:"".concat(p),Date:"".concat(S),venue:"".concat(c)};y([].concat(Object(r.a)(C),[e])),console.log(C)},children:"Book Slot"})})]})]}),Object(l.jsxs)("div",{className:"bookedMeet",children:[Object(l.jsx)("h2",{children:"Alloted Meetings"}),Object(l.jsx)("div",{className:"meetings",children:C.map((function(e,t){return Object(l.jsx)(d,{obj:e},t)}))})]})]})};var O=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(m,{})]})};c(24);a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.3c96ceab.chunk.js.map