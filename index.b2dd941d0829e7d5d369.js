!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function d(){}function y(){}var m={};m[o]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(S([])));g&&g!==e&&n.call(g,o)&&(m=g);var p=y.prototype=f.prototype=Object.create(m);function v(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=p.constructor=y,y.constructor=d,d.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(p),t},t.awrap=function(t){return{__await:t}},v(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(p),c(p,a,"Generator"),p[o]=function(){return this},p.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.now=new Date,this.twentyFourHours=[{time:"morning",next:"afternoon"},{time:"afternoon",next:"evening"},{time:"evening",next:"night"},{time:"night",next:"morning"}]}var e,n,o;return e=t,(n=[{key:"getDate",value:function(){var t=new Date,e=t.toLocaleString("en-US",{day:"numeric",month:"long"}),n=t.toLocaleString("en-US",{weekday:"long"});return"".concat(e,", ").concat(n)}},{key:"getTime",value:function(){return(new Date).toLocaleString("en-GB",{hour:"numeric",minute:"numeric",second:"numeric"})}},{key:"getTimesOfDay",value:function(){var t,e=(new Date).getHours();return e>5&&e<=11&&(t="morning"),e>11&&e<=17&&(t="afternoon"),e>17&&e<=23&&(t="evening"),e>-1&&e<=5&&(t="night"),t}},{key:"checkNewDay",value:function(){return this.now.getDate()!==(new Date).getDate()}},{key:"checkMinutesAndSeconds",value:function(){var t=new Date;return 0===t.getMinutes()&&0===t.getSeconds()}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.checkPersonAndFocus()}var e,n,r;return e=t,(n=[{key:"checkPersonAndFocus",value:function(){null===localStorage.getItem("name")&&localStorage.setItem("name","[enter name]"),null===localStorage.getItem("focus")&&localStorage.setItem("focus","[enter focus]"),null===localStorage.getItem("city")&&localStorage.setItem("city","Minsk"),null===localStorage.getItem("lastCity")&&localStorage.setItem("lastCity","Minsk")}},{key:"getPerson",value:function(){return localStorage.getItem("name")}},{key:"setPerson",value:function(t){localStorage.setItem("name",t)}},{key:"getFocus",value:function(){return localStorage.getItem("focus")}},{key:"setFocus",value:function(t){localStorage.setItem("focus",t)}},{key:"getCity",value:function(){return localStorage.getItem("city")}},{key:"setCity",value:function(t){this.setLastCity(localStorage.getItem("city")),localStorage.setItem("city",t)}},{key:"getLastCity",value:function(){return localStorage.getItem("lastCity")}},{key:"setLastCity",value:function(t){localStorage.setItem("lastCity",t)}}])&&i(e.prototype,n),r&&i(e,r),t}();function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.arrayImages=this.getRandomImages(),this.location=""}var e,n,r;return e=t,(n=[{key:"getRandomImages",value:function(){for(var t=[],e=1;e<=20;e++)e<10?t.push("0".concat(e,".jpg")):t.push("".concat(e,".jpg"));return this.shuffle(t).splice(0,6)}},{key:"shuffle",value:function(t){return t.sort((function(){return Math.random()-.5})),t}},{key:"getFirstImage",value:function(t){var e=this.arrayImages.shift();return this.arrayImages.push(e),"/".concat(t,"/").concat(e)}},{key:"getAllImages",value:function(t){return"/".concat(t,"/").concat(this.getFirstImage())}}])&&c(e.prototype,n),r&&c(e,r),t}();n(1),n(2);function s(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,c,"next",t)}function c(t){s(i,r,o,a,c,"throw",t)}a(void 0)}))}}var f=document.querySelector(".content__items_person-name_name"),d=document.querySelector(".content__items_person-target_edit"),y=document.querySelector(".content__items_date-time"),m=document.querySelector(".content__items_date-date"),h=document.querySelector(".content__items_person-name_hello"),g=document.querySelector(".refresh"),p=document.querySelector(".content__quote-text"),v=document.querySelector(".content__quote-btn"),w=document.querySelector(".city"),b=document.querySelector(".popup"),L=document.querySelector(".popup__content_text-text"),x=document.querySelector(".weather-icon"),k=document.querySelector(".temperature"),S=document.querySelector(".weather-description"),T=document.querySelector(".weather-humidity"),_=document.querySelector(".weather-speed"),E=new o,I=new a,C=new u;m.innerHTML=E.getDate(),h.innerHTML="Good ".concat(E.getTimesOfDay()," ,"),f.innerHTML=I.getPerson(),d.innerHTML=I.getFocus(),w.innerHTML=I.getCity(),document.body.style.backgroundImage='url("./src/assets/images'.concat(C.getFirstImage(E.getTimesOfDay()),'")'),C.location="".concat(E.getTimesOfDay()),setInterval((function(){if(y.innerHTML=E.getTime(),E.checkNewDay()&&(m.innerHTML=E.getDate()),E.checkMinutesAndSeconds()){h.innerHTML="Good ".concat(E.getTimesOfDay()," ,");var t="./src/assets/images".concat(C.getFirstImage(E.getTimesOfDay()));C.location="".concat(E.getTimesOfDay());var e=document.createElement("img");e.src=t,e.onload=function(){document.body.style.backgroundImage='url("'.concat(t,'")')}}}),1e3);var M="",q=function(t){"keypress"===t.type?13!=t.which&&13!=t.keyCode||O(t):(f.innerHTML=I.getPerson(),f.blur())},O=function(t){""!==t.target.innerText.trim()?(I.setPerson(t.target.innerText.trim()),f.blur()):(f.innerHTML=I.getPerson(),f.blur())},H=function(t){"keypress"===t.type?13!=t.which&&13!=t.keyCode||j(t):(d.innerHTML=I.getFocus(),w.blur())},j=function(t){""!==t.target.innerText.trim()?(I.setFocus(t.target.innerText.trim()),d.blur()):(d.innerHTML=I.getFocus(),d.blur())},P=1,D=E.getTimesOfDay(),F=function(t){"keypress"===t.type?13!=t.which&&13!=t.keyCode||G(t):(w.innerHTML=I.getCity(),w.blur())},G=function(t){""!==t.target.innerText.trim()?(A(t.target.innerText.trim()),I.setCity(t.target.innerText.trim()),w.blur()):(w.innerHTML=I.getCity(),A(I.getCity()),w.blur())},N="";function A(t){return R.apply(this,arguments)}function R(){return(R=l(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&\n    lang=en&appid=d83ab80ee35b01325a8da58fdb648777&units=metric"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:"404"===(o=t.sent).cod?(w.innerHTML=I.getLastCity(),I.setCity(I.getLastCity()),I.setLastCity(I.getLastCity()),b.style.display="flex",L.innerHTML="City not found"):(""!==N&&x.classList.remove(N),x.classList.add("owf-".concat(o.weather[0].id)),N="owf-".concat(o.weather[0].id),S.textContent="".concat(o.weather[0].description),k.textContent="".concat(o.main.temp,"°C"),T.textContent="Humidity: ".concat(o.main.humidity,"%"),_.textContent="Wind: ".concat(o.wind.speed,"m/s"));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(){return U.apply(this,arguments)}function U(){return(U=l(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Y(),t.prev=1,"https://favqs.com/api/qotd",t.next=5,fetch("https://favqs.com/api/qotd");case 5:return e=t.sent,t.next=8,e.json();case 8:n=t.sent,M!==n.quote.body?(p.innerHTML="".concat(n.quote.body," &copy; ").concat(n.quote.author),M=n.quote.body):W(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(1),b.style.display="flex",L.innerHTML="The quote server is overloaded. Try later.",console.log("Превышен лимит запросов к серверу");case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}var Y=function(){v.style.transform="rotate(360deg)",v.style.transition=" transform 1s",setTimeout((function(){v.style.transition="",v.style.transform="rotate(0)"}),1e3)};f.addEventListener("keypress",q),f.addEventListener("blur",q),f.addEventListener("click",(function(){f.innerHTML="&nbsp;"})),w.addEventListener("keypress",F),w.addEventListener("blur",F),w.addEventListener("click",(function(){w.innerHTML="&nbsp;"})),d.addEventListener("keypress",H),d.addEventListener("blur",H),d.addEventListener("click",(function(){d.innerHTML="&nbsp;"})),g.addEventListener("click",(function(t){if(document.querySelector(".next").style.display="none",4===P){var e=E.twentyFourHours.filter((function(t){return t.time===D}));C.location="".concat(e[0].next),console.log("444")}if(5===P){P=0;var n=E.twentyFourHours.filter((function(t){return t.time===D}));D=n[0].next}var r="./src/assets/images".concat(C.getFirstImage(D)),o=document.createElement("img");o.src=r,o.onload=function(){document.body.style.backgroundImage='url("'.concat(r,'")')},P++,g.disabled=!0,setTimeout((function(){g.disabled=!1}),1e3)})),g.onmouseover=function(){if(document.documentElement.clientWidth>1199){var t="./src/assets/images/".concat(C.location,"/").concat(C.arrayImages[0]),e=document.createElement("img");e.src=t,e.onload=function(){document.querySelector(".nextImage").setAttribute("src",t),document.querySelector(".next").style.display="block"}}},g.onmouseout=function(){document.documentElement.clientWidth>1199&&(document.querySelector(".next").style.display="none")},document.addEventListener("DOMContentLoaded",W()),document.addEventListener("DOMContentLoaded",A(I.getCity())),v.addEventListener("click",W),document.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.closest(".popup__content_button"))&&(b.style.display="none")})),window.onresize=function(){document.location.reload()}}]);