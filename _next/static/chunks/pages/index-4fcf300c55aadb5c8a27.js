_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,r,t){"use strict";t.r(r);var n=t("q1tI"),o=t.n(n);function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=t("EHL0"),u=Array.isArray;function p(e,r){var t=[];if(u(e))for(var n=e.length;n--;)t[n]=r(n,e[n]);else for(var o in e)t.push(r(o,e[o]));return t}var l=t("ceT1");function f(e){var r={};for(var t in e){var n=e[t];r["data-".concat(t)]="string"===typeof n?n:"".concat(n)}return r}function g(e){return{id:e,href:"#".concat(e)}}var v=o.a.createElement;function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=m(m({},l.a.stack),l.a.subjects);function b(e){var r=e.stack,t=e.subjects,n=e.items,c=e.locations,u=e.description,g=Object(s.classBeming)();return v(o.a.Fragment,null,v("div",g({article__description:!0}),u,null===c||void 0===c?void 0:c.map((function(e,r){var t=e.title,n=e.description,o=e.city;return v("div",i({key:r},g({location:!0})),t&&v("span",g({location__title:!0}),t),n&&v("span",g({location__description:!0}),n),o&&v("span",g({location__city:!0}),o))}))),p({stack:r,subjects:t,goals:n},(function(e,r){return r&&v("ul",i({key:e},g(a({},"article__".concat(e),!0))),p(r,(function(r,t){var n,o=null!==(n=O[t])&&void 0!==n?n:e in l.a?{group:t}:void 0,c=null!==o&&void 0!==o?o:{},a=c.favor,s=c.group,u="string"===typeof t?{title:t,href:void 0}:t,p=u.href,d=u.title;return v("li",i({key:r},o&&g({term:-1!==a||"deprecated"}),f({hover:s})),p?v("a",{href:p},d):d)})))})))}var y=o.a.createElement;function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function P(e){var r=e.className,t=e.type,n=e.value,o="string"===typeof n?function(e,r){switch(e){case"phex":return j({href:"tel:".concat(parseInt(r,16))},f({content:"+".concat(parseInt(r,16))}));case"email":return{href:"mailto:".concat(r),children:r};case"skype":return{href:"skype:".concat(r,"?chat"),children:"skype: ".concat(r)};case"linkedin":return{href:"https://linkedin.com/in/".concat(r,"/"),children:"linkedin.com/in/".concat(r)};case"github":return{href:"https://github.com/".concat(r),children:"github.com/".concat(r)};default:return{href:r,children:"".concat(e,": ").concat(r)}}}(t,n):{children:n.title,href:n.href},a=o.children,i=c(o,["children"]);return y("a",j({className:r},i),a)}var _=o.a.createElement;function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function N(e){var r=e.title,t=e.description,n=e.links,u=e.items,l=e.properties,v=Object(s.classBeming)();return _(o.a.Fragment,null,_("header",v({header:!0}),_("span",v({header__title:!0}),r),_("span",v({header__description:!0}),t)),_("main",v({cv:!0}),_("aside",v({cv__links:!0}),p(n,(function(e,r){return _("div",i({key:e},v({links_group:!0})),p(r,(function(e,r){return"location"===e?_("span",i({key:e},v({link:e})),r):_(P,i({key:e},function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({type:e,value:r},v({link:"phex"===e?"phone":e}))))})))}))),_("hr",v({cv__delimiter:!0})),p(u,(function(e,r){var t,n=r.title,o=c(r,["title"]);return _("article",i({key:e},v((a(t={},"cv__".concat(e),!0),a(t,"article",!0),t))),_("a",i({},v({cv__chapter:!0}),g(e)),n),_(b,o))})),p(l,(function(e,r){var t,n=r.title,o=r.items;return _("section",i({key:e},v((a(t={},"cv__".concat(e),!0),a(t,"article",!0),t))),_("a",i({},v({cv__chapter:!0}),g(e)),n),p(o,(function(e,r){var t=r.min,n=r.max,o=r.title,a=r.href,s=c(r,["min","max","title","href"]);return _("article",i({key:e},v({article:!0})),_("a",i({},v({article__title:[a?"external":"anchor",void 0!==t&&"range"]}),a?{href:a}:g(e),f({min:t,max:n})),o),_(b,s))})))}))))}var w=o.a.createElement,E=function(e){return w(N,e)};E.getInitialProps=function(e){return e.query};r.default=E},"6ZOg":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.joinWithLead=r.picker=r.resolver=r.wrapper=void 0;var n=t("eNmV"),o=Object.defineProperty,c=Symbol.toPrimitive,a={value:function(){return this.className}};function i(e,r){if(!e)return r;for(var t=r.length;t--;){var n=e[r[t]];void 0!==n&&(r[t]=n)}return r}r.wrapper=function(e,r){return e.className=r,e.hasOwnProperty(c)||o(e,c,a),e},r.picker=i,r.resolver=function(e,r){var t=[];for(var o in r){var c=r[o];void 0===c||!0===c?t.push(o):c&&t.push(c)}return 0===t.length?n.EMPTY_ARRAY:i(e,t)},r.joinWithLead=function(e,r){var t=e||"";if(!r||!r.length)return t;var n="string"===typeof r?r:r.join(" ");return t?t+" "+n:n}},DQMz:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.classNamesMap=void 0;var n=t("6ZOg"),o=Object.keys;r.classNamesMap=function(e){return function(r,t){return function(e,r,t){for(var c=o(t),a={},i=c.length;i--;){var s=c[i],u=t[s];void 0!==u&&(a[s]="function"===typeof u?""+u:n.resolver(e,u).join(" "))}return a}(e,0,t)}}},EHL0:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.setOptions=r.classBeming=r.classNamesMap=r.classNamesCheck=r.classNaming=void 0;var n=t("r6ky");Object.defineProperty(r,"classNaming",{enumerable:!0,get:function(){return n.classNaming}}),r.default=n.classNaming;var o=t("f3d3");Object.defineProperty(r,"classNamesCheck",{enumerable:!0,get:function(){return o.classNamesCheck}});var c=t("DQMz");Object.defineProperty(r,"classNamesMap",{enumerable:!0,get:function(){return c.classNamesMap}});var a=t("uTIc");Object.defineProperty(r,"classBeming",{enumerable:!0,get:function(){return a.classBeming}});var i=t("rG3K");Object.defineProperty(r,"setOptions",{enumerable:!0,get:function(){return i.setOptions}})},Qetd:function(e,r,t){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},ceT1:function(e){e.exports=JSON.parse('{"a":{"subjects":{"Software and Systems Engineering":{"group":"eng"},"XP":{"group":"eng"},"KISS":{"group":"eng"},"YAGNI":{"group":"eng"},"DRY":{"group":"eng"},"RESTful":{"group":"contracts"},"Design by contract":{"group":"contracts"},"SOLID":{"group":"oop"},"OOP-PBP":{"group":"oop"},"Coverage 100%":{"group":"test"},"TDD":{"group":"test"},"Databases":{"group":"db"},"BEM":{"group":"css"},"Pure-CSS":{"group":"css"},"Geometry":{"group":"css"},"Programming language theory":{"group":"trpl"},"Neural networks":{"group":"neural"},"Parallel programming":{"group":"parprog"},"Discrete mathematics":{"group":"c"},"Algorithms and Data structures":{"group":"c"}},"stack":{"PHP":{"favor":-1,"group":"server"},"Apache":{"favor":-1,"group":"server"},"WordPress":{"favor":-1,"group":"server"},"Monolith":{"favor":-1,"group":"eng"},"JsonSchema":{"group":"contracts"},"TypeScript":{"group":"contracts"},"RESTful":{"group":"contracts"},"C++":{"group":"oop"},"JavaScript":{"group":"oop"},"ES6":{"group":"oop"},"Cypress":{"group":"test"},"Puppeteer":{"group":"test"},"Jest":{"group":"test"},"MySQL":{"group":"db"},"MongoDB":{"group":"db"},"Node":{"group":"cli"},"bash":{"group":"cli"},"git":{"group":"cli"},"ExpressJs":{"group":"server"},"nginx":{"group":"server"},"CSS3":{"group":"css"},"Sass":{"group":"css"},"React":{"group":"react"},"Redux":{"group":"react"},"Next.js":{"group":"react"},"Webpack":{"group":"react"},"RxJs":{"group":"react"},"Python":{"group":"trpl"},"Haxe":{"group":"trpl"},"HTML5":{"group":"html"},"<canvas>":{"group":"html"},"pixi.js":{"group":"html"},"jQuery":{"group":"html"},"JS DOM":{"group":"html"},"OpenCV":{"group":"neural"},"OpenMPI":{"group":"parprog"},"C":{"group":"c"},"Compilers":{"group":"trpl"}}}}')},eNmV:function(e){e.exports=JSON.parse('{"EMPTY_ARRAY":[],"EMPTY_OBJECT":{}}')},f3d3:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.classNamesCheck=void 0;var n=t("eNmV");r.classNamesCheck=function(e,r){return void 0===e&&(e=n.EMPTY_OBJECT),void 0===r&&(r=n.EMPTY_OBJECT),e}},r6ky:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.classNaming=void 0;var n=t("6ZOg"),o=t("eNmV");function c(e,r,t){var o=e.className,a=e.classnames,i=e.stacked,s="object"===typeof r?r:t,u=s&&n.resolver(a,s),p=n.joinWithLead(i,u),l=!0===r&&o?n.joinWithLead(o,p):p;return n.wrapper((function(e,r){return c({classnames:a,className:o,stacked:l},e,r)}),l)}r.classNaming=function(e){void 0===e&&(e=o.EMPTY_OBJECT);var r=e.className;return n.wrapper((function(r,t){return c(e,r,t)}),r)}},rG3K:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.setOptions=r.bem2arr=void 0;var n=Array.isArray,o="--",c="__";r.bem2arr=function(e){var r=[];for(var t in e){var c=e[t];if(r.push(t),c)if("object"===typeof c){var a=n(c);for(var i in c){var s=c[i];s&&r.push(t+(a?"":""+o+i)+("string"!==typeof s?"":""+o+s))}}else"string"===typeof c&&r.push(""+t+o+c)}return r},r.setOptions=function(e){var r=e.elementDelimiter,t=void 0===r?c:r,n=e.modDelimiter;o=void 0===n?o:n,c=t}},uTIc:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.classBeming=void 0;var n=t("rG3K"),o=t("6ZOg"),c=t("eNmV");r.classBeming=function(e){void 0===e&&(e=c.EMPTY_OBJECT);var r=e.className;return o.wrapper((function(r,t){return function(e,r,t){var c=e.className,a=e.classnames,i="object"===typeof r?r:t,s=i&&n.bem2arr(i),u=s&&o.picker(a,s);return{className:o.joinWithLead(!0===r&&c,u)}}(e,r,t)}),r)}}},[["/EDR",0,1]]]);