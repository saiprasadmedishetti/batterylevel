(this["webpackJsonpbattery-level"]=this["webpackJsonpbattery-level"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),i=(n(11),n(3)),o=n.n(i),l=n(6),b=n(4),u=(n(13),n(0));var j=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(b.a)(r,2),i=s[0],j=s[1],d=Object(a.useCallback)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.navigator||!window.navigator.getBattery){e.next=6;break}return e.next=3,window.navigator.getBattery();case 3:(t=e.sent).level!==n&&c(100*t.level),t.charging!==i&&j(t.charging);case 6:case"end":return e.stop()}}),e)}))),[i,n]),v=setInterval((function(){d()}),1e3);return Object(a.useEffect)((function(){return d(),function(){clearInterval(v)}}),[]),Object(u.jsx)("main",{className:"container",children:Object(u.jsxs)("div",{className:"battery-container ".concat(i?"scale-animation":""),children:[Object(u.jsxs)("div",{className:"battery-inner",children:[Object(u.jsx)("div",{className:"progress",style:{width:"".concat(n,"%")}}),Object(u.jsxs)("div",{className:"battery-result",children:[n,"%"]})]}),Object(u.jsx)("div",{className:"battery-handle"})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.e939d641.chunk.js.map