(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),r=n.n(i),o=n(3),s=n.n(o),u=n(4),a=n(5),l=n(7),T=n(6),m=n(17),S=(n(13),function(t){Object(l.a)(n,t);var e=Object(T.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).ComandWatch=function(t){"START"===t?c.Timer(t):"STOP"===t?(c.Timer(t),c.setState({hour:0,min:0,second:0,StartStop:"START"})):"RESTART"===t&&(c.setState({hour:0,min:0,second:0}),c.Timer("START"))},c.Timer=function(t){if("WAIT"===t)c.setState({StartStop:"START"}),c.Timer(null);else if("START"===t)c.setState({StartStop:"STOP"}),setTimeout((function(){return c.Timer(null)}),1e3);else if(null===t&&"STOP"===c.state.StartStop){c.state.min>=59?c.setState((function(t){return{min:0,hour:t.hour+1}})):c.state.second>=59?c.setState((function(t){return{second:0,min:t.min+1}})):c.setState((function(t){return{second:t.second+1}}));var e=m.a.create((function(t){var e=setTimeout((function(){c.Timer(null)}),1e3);return function(){clearInterval(e)}})).subscribe((function(t){return console.log("next:",t)}),(function(t){return console.error("error:",t)}),(function(){return console.log("completed")}));setTimeout((function(){return e.unsubscribe()}),4500)}},c.onClick=function(t){clearTimeout(c.timer),!1===c.state.Click?(c.setState({Click:!0}),c.timer=setTimeout((function(){c.setState({Click:!1})}),200)):(clearTimeout(c.timer),setTimeout((function(){return c.Timer("WAIT")})),c.setState({Click:!1}))},c.state={hour:0,min:0,second:0,StartStop:"START",Click:!1},c}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"stopwatch",children:[Object(c.jsxs)("div",{className:"stopwatch_timer",children:[this.state.hour,":",this.state.min,":",this.state.second]}),Object(c.jsxs)("div",{className:"stopwatch_buttons",children:[Object(c.jsx)("button",{onClick:function(){return t.ComandWatch(t.state.StartStop)},children:this.state.StartStop}),Object(c.jsx)("button",{onClick:function(){return t.onClick()},children:"WAIT"}),Object(c.jsx)("button",{onClick:function(){return t.ComandWatch("RESTART")},children:"RESTART"})]})]})}}]),n}(i.Component));n(14);var h=function(){return Object(c.jsx)("div",{className:"example",children:Object(c.jsx)(S,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.a9b63919.chunk.js.map