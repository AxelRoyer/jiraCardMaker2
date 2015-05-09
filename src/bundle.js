(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var JiraApiHandler = require("./services/JiraApiHandler");
var templateService = require("./services/templateService");

require("./../lib/webcomponents-lite.min.js");
require("./../lib/knockout.js");

require("./SelectUtilities");
require("./CardView");
require("./Card");
require("./IssueChecklistHandler");
require("./navigators/JiraNavigator");
require("./RapidBoardHandler");

require("./navigators/FixVersionNavigator.js");
require("./navigators/RapidBoardNavigator.js");
require("./navigators/CSVNavigator.js");
require("./navigators/XBoardNavigator.js");

require("./services/JiraApi.js");
require("./services/JiraCommunicationHandler.js");

require("./components/authentication-panel/authentication-panel.js");
require("./components/selection-page/selection-page.js");
require("./components/sprint-selection-panel/sprint-selection-panel.js");

var JiraCardMakerApp = Object.create(HTMLElement.prototype);

JiraCardMakerApp.createdCallback = function() {
	this.authenticationPanel = null;
};

JiraCardMakerApp.attachedCallback = function() {
	this.template = document.importNode(templateService.getTemplate("app"), true);
    this.appendChild(this.template);
	window.location.hash = "request";

	this.authenticationPanel = document.querySelector("jcm-authentication-panel");
	// this.authenticationPanel.on("authentication-complete", this.connect, this);
};

JiraCardMakerApp.connect = function (parameters) {
	debugger;
};

JiraCardMakerApp.onReleaseButtonClicked = function() {
	this.authenticationPanel.off("authentication-complete", this.connect, this);
};

document.registerElement('jcm-app', {prototype: JiraCardMakerApp});

},{"./../lib/knockout.js":2,"./../lib/webcomponents-lite.min.js":3,"./Card":4,"./CardView":5,"./IssueChecklistHandler":6,"./RapidBoardHandler":7,"./SelectUtilities":8,"./components/authentication-panel/authentication-panel.js":9,"./components/selection-page/selection-page.js":10,"./components/sprint-selection-panel/sprint-selection-panel.js":11,"./navigators/CSVNavigator.js":12,"./navigators/FixVersionNavigator.js":13,"./navigators/JiraNavigator":14,"./navigators/RapidBoardNavigator.js":15,"./navigators/XBoardNavigator.js":16,"./services/JiraApi.js":17,"./services/JiraApiHandler":18,"./services/JiraCommunicationHandler.js":19,"./services/templateService":21}],2:[function(require,module,exports){
// Knockout JavaScript library v2.3.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {function F(q){return function(){return q}};(function(q){var w=this||(0,eval)("this"),s=w.document,H=w.navigator,t=w.jQuery,y=w.JSON;(function(q){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?q(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],q):q(w.ko={})})(function(C){function G(b,c,d,f){a.d[b]={init:function(b){a.a.f.set(b,I,{});return{controlsDescendantBindings:!0}},update:function(b,e,m,h,k){m=a.a.f.get(b,I);e=a.a.c(e());h=!d!==!e;var l=!m.fb;if(l||c||h!==m.vb)l&&(m.fb=
a.a.Oa(a.e.childNodes(b),!0)),h?(l||a.e.P(b,a.a.Oa(m.fb)),a.Ja(f?f(k,e):k,b)):a.e.ba(b),m.vb=h}};a.g.S[b]=!1;a.e.L[b]=!0}function J(b,c,d){d&&c!==a.h.n(b)&&a.h.W(b,c);c!==a.h.n(b)&&a.q.I(a.a.Ga,null,[b,"change"])}var a="undefined"!==typeof C?C:{};a.b=function(b,c){for(var d=b.split("."),f=a,g=0;g<d.length-1;g++)f=f[d[g]];f[d[d.length-1]]=c};a.r=function(a,c,d){a[c]=d};a.version="2.3.0";a.b("version",a.version);a.a=function(){function b(a,b){for(var e in a)a.hasOwnProperty(e)&&b(e,a[e])}function c(b,
e){if("input"!==a.a.u(b)||!b.type||"click"!=e.toLowerCase())return!1;var k=b.type;return"checkbox"==k||"radio"==k}var d={},f={};d[H&&/Firefox\/2/i.test(H.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(d,function(a,b){if(b.length)for(var e=0,c=b.length;e<c;e++)f[b[e]]=a});var g={propertychange:!0},e=s&&function(){for(var a=3,b=s.createElement("div"),e=b.getElementsByTagName("i");b.innerHTML=
"\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",e[0];);return 4<a?a:q}();return{Ta:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],p:function(a,b){for(var e=0,c=a.length;e<c;e++)b(a[e])},k:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var e=0,c=a.length;e<c;e++)if(a[e]===b)return e;return-1},La:function(a,b,e){for(var c=0,d=a.length;c<d;c++)if(b.call(e,a[c]))return a[c];return null},ka:function(b,e){var c=a.a.k(b,e);0<=c&&
b.splice(c,1)},Ma:function(b){b=b||[];for(var e=[],c=0,d=b.length;c<d;c++)0>a.a.k(e,b[c])&&e.push(b[c]);return e},Z:function(a,b){a=a||[];for(var e=[],c=0,d=a.length;c<d;c++)e.push(b(a[c]));return e},Y:function(a,b){a=a||[];for(var e=[],c=0,d=a.length;c<d;c++)b(a[c])&&e.push(a[c]);return e},R:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var e=0,c=b.length;e<c;e++)a.push(b[e]);return a},ja:function(b,e,c){var d=b.indexOf?b.indexOf(e):a.a.k(b,e);0>d?c&&b.push(e):c||b.splice(d,1)},
extend:function(a,b){if(b)for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},w:b,oa:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Mb:function(b){b=a.a.N(b);for(var e=s.createElement("div"),c=0,d=b.length;c<d;c++)e.appendChild(a.H(b[c]));return e},Oa:function(b,e){for(var c=0,d=b.length,g=[];c<d;c++){var f=b[c].cloneNode(!0);g.push(e?a.H(f):f)}return g},P:function(b,e){a.a.oa(b);if(e)for(var c=0,d=e.length;c<d;c++)b.appendChild(e[c])},eb:function(b,e){var c=b.nodeType?[b]:b;if(0<
c.length){for(var d=c[0],g=d.parentNode,f=0,r=e.length;f<r;f++)g.insertBefore(e[f],d);f=0;for(r=c.length;f<r;f++)a.removeNode(c[f])}},hb:function(a,b){7>e?a.setAttribute("selected",b):a.selected=b},F:function(a){return null===a||a===q?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Wb:function(b,e){for(var c=[],d=(b||"").split(e),g=0,f=d.length;g<f;g++){var r=a.a.F(d[g]);""!==r&&c.push(r)}return c},Tb:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===
b},yb:function(a,b){if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;null!=a;){if(a==b)return!0;a=a.parentNode}return!1},aa:function(b){return a.a.yb(b,b.ownerDocument)},pb:function(b){return!!a.a.La(b,a.a.aa)},u:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},o:function(b,d,k){var f=e&&g[d];if(f||"undefined"==typeof t)if(f||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var n=function(a){k.call(b,a)},p="on"+d;b.attachEvent(p,n);
a.a.C.ia(b,function(){b.detachEvent(p,n)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(d,k,!1);else{if(c(b,d)){var r=k;k=function(a,b){var e=this.checked;b&&(this.checked=!0!==b.sb);r.call(this,a);this.checked=e}}t(b).bind(d,k)}},Ga:function(a,b){if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");if("undefined"!=typeof t){var e=[];c(a,b)&&e.push({sb:a.checked});t(a).trigger(b,e)}else if("function"==typeof s.createEvent)if("function"==
typeof a.dispatchEvent)e=s.createEvent(f[b]||"HTMLEvents"),e.initEvent(b,!0,!0,w,0,0,0,0,0,!1,!1,!1,!1,0,a),a.dispatchEvent(e);else throw Error("The supplied element doesn't support dispatchEvent");else if("undefined"!=typeof a.fireEvent)c(a,b)&&(a.checked=!0!==a.checked),a.fireEvent("on"+b);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.T(b)?b():b},ya:function(b){return a.T(b)?b.t():b},ga:function(b,e,c){if(e){var d=/\S+/g,g=b.className.match(d)||[];a.a.p(e.match(d),
function(b){a.a.ja(g,b,c)});b.className=g.join(" ")}},ib:function(b,e){var c=a.a.c(e);if(null===c||c===q)c="";var d=a.e.firstChild(b);!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.P(b,[s.createTextNode(c)]):d.data=c;a.a.Bb(b)},gb:function(a,b){a.name=b;if(7>=e)try{a.mergeAttributes(s.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},Bb:function(a){9<=e&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},zb:function(a){if(e){var b=a.style.width;a.style.width=0;a.style.width=
b}},Qb:function(b,e){b=a.a.c(b);e=a.a.c(e);for(var c=[],d=b;d<=e;d++)c.push(d);return c},N:function(a){for(var b=[],e=0,c=a.length;e<c;e++)b.push(a[e]);return b},Ub:6===e,Vb:7===e,ca:e,Ua:function(b,e){for(var c=a.a.N(b.getElementsByTagName("input")).concat(a.a.N(b.getElementsByTagName("textarea"))),d="string"==typeof e?function(a){return a.name===e}:function(a){return e.test(a.name)},g=[],f=c.length-1;0<=f;f--)d(c[f])&&g.push(c[f]);return g},Nb:function(b){return"string"==typeof b&&(b=a.a.F(b))?
y&&y.parse?y.parse(b):(new Function("return "+b))():null},Ca:function(b,e,c){if(!y||!y.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return y.stringify(a.a.c(b),e,c)},Ob:function(e,c,d){d=d||{};var g=d.params||{},f=d.includeFields||this.Ta,p=e;if("object"==typeof e&&"form"===a.a.u(e))for(var p=e.action,r=f.length-1;0<=r;r--)for(var z=
a.a.Ua(e,f[r]),D=z.length-1;0<=D;D--)g[z[D].name]=z[D].value;c=a.a.c(c);var q=s.createElement("form");q.style.display="none";q.action=p;q.method="post";for(var v in c)e=s.createElement("input"),e.name=v,e.value=a.a.Ca(a.a.c(c[v])),q.appendChild(e);b(g,function(a,b){var e=s.createElement("input");e.name=a;e.value=b;q.appendChild(e)});s.body.appendChild(q);d.submitter?d.submitter(q):q.submit();setTimeout(function(){q.parentNode.removeChild(q)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.p);
a.b("utils.arrayFirst",a.a.La);a.b("utils.arrayFilter",a.a.Y);a.b("utils.arrayGetDistinctValues",a.a.Ma);a.b("utils.arrayIndexOf",a.a.k);a.b("utils.arrayMap",a.a.Z);a.b("utils.arrayPushAll",a.a.R);a.b("utils.arrayRemoveItem",a.a.ka);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Ta);a.b("utils.getFormFields",a.a.Ua);a.b("utils.peekObservable",a.a.ya);a.b("utils.postJson",a.a.Ob);a.b("utils.parseJson",a.a.Nb);a.b("utils.registerEventHandler",a.a.o);a.b("utils.stringifyJson",
a.a.Ca);a.b("utils.range",a.a.Qb);a.b("utils.toggleDomNodeCssClass",a.a.ga);a.b("utils.triggerEvent",a.a.Ga);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.w);a.b("utils.addOrRemoveItem",a.a.ja);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments);a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){var b=0,c="__ko__"+(new Date).getTime(),
d={};return{get:function(b,c){var e=a.a.f.pa(b,!1);return e===q?q:e[c]},set:function(b,c,e){if(e!==q||a.a.f.pa(b,!1)!==q)a.a.f.pa(b,!0)[c]=e},pa:function(a,g){var e=a[c];if(!e||"null"===e||!d[e]){if(!g)return q;e=a[c]="ko"+b++;d[e]={}}return d[e]},clear:function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.C=new function(){function b(b,c){var g=a.a.f.get(b,d);g===q&&c&&(g=[],a.a.f.set(b,d,g));return g}function c(e){var d=
b(e,!1);if(d)for(var d=d.slice(0),f=0;f<d.length;f++)d[f](e);a.a.f.clear(e);"function"==typeof t&&"function"==typeof t.cleanData&&t.cleanData([e]);if(g[e.nodeType])for(d=e.firstChild;e=d;)d=e.nextSibling,8===e.nodeType&&c(e)}var d="__ko_domNodeDisposal__"+(new Date).getTime(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{ia:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},cb:function(e,c){var g=b(e,!1);g&&(a.a.ka(g,c),0==g.length&&a.a.f.set(e,d,q))},H:function(b){if(f[b.nodeType]&&
(c(b),g[b.nodeType])){var d=[];a.a.R(d,b.getElementsByTagName("*"));for(var h=0,k=d.length;h<k;h++)c(d[h])}return b},removeNode:function(b){a.H(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.H=a.a.C.H;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.H);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.C.ia);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.cb);(function(){a.a.xa=function(b){var c;if("undefined"!=typeof t)if(t.parseHTML)c=
t.parseHTML(b)||[];else{if((c=t.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var d=a.a.F(b).toLowerCase();c=s.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof w.innerShiv?
c.appendChild(w.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.N(c.lastChild.childNodes)}return c};a.a.fa=function(b,c){a.a.oa(b);c=a.a.c(c);if(null!==c&&c!==q)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof t)t(b).html(c);else for(var d=a.a.xa(c),f=0;f<d.length;f++)b.appendChild(d[f])}})();a.b("utils.parseHtmlFragment",a.a.xa);a.b("utils.setHtml",a.a.fa);a.s=function(){function b(c,f){if(c)if(8==c.nodeType){var g=a.s.$a(c.nodeValue);null!=g&&f.push({xb:c,Kb:g})}else if(1==c.nodeType)for(var g=
0,e=c.childNodes,m=e.length;g<m;g++)b(e[g],f)}var c={};return{va:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},mb:function(a,b){var g=c[a];if(g===q)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return g.apply(null,b||[]),
!0}finally{delete c[a]}},nb:function(c,f){var g=[];b(c,g);for(var e=0,m=g.length;e<m;e++){var h=g[e].xb,k=[h];f&&a.a.R(k,f);a.s.mb(g[e].Kb,k);h.nodeValue="";h.parentNode&&h.parentNode.removeChild(h)}},$a:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.s);a.b("memoization.memoize",a.s.va);a.b("memoization.unmemoize",a.s.mb);a.b("memoization.parseMemoText",a.s.$a);a.b("memoization.unmemoizeDomNodeAndDescendants",a.s.nb);a.Sa={throttle:function(b,c){b.throttleEvaluation=
c;var d=null;return a.j({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(b,c){b.equalityComparer="always"==c?F(!1):a.m.fn.equalityComparer;return b}};a.b("extenders",a.Sa);a.kb=function(b,c,d){this.target=b;this.la=c;this.wb=d;a.r(this,"dispose",this.B)};a.kb.prototype.B=function(){this.Hb=!0;this.wb()};a.V=function(){this.G={};a.a.extend(this,a.V.fn);a.r(this,"subscribe",this.Da);a.r(this,"extend",this.extend);a.r(this,"getSubscriptionsCount",this.Db)};
a.V.fn={Da:function(b,c,d){d=d||"change";var f=new a.kb(this,c?b.bind(c):b,function(){a.a.ka(this.G[d],f)}.bind(this));this.G[d]||(this.G[d]=[]);this.G[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";this.G[c]&&a.q.I(function(){a.a.p(this.G[c].slice(0),function(a){a&&!0!==a.Hb&&a.la(b)})},this)},Db:function(){var b=0;a.a.w(this.G,function(a,d){b+=d.length});return b},extend:function(b){var c=this;b&&a.a.w(b,function(b,f){var g=a.Sa[b];"function"==typeof g&&(c=g(c,f))});return c}};
a.Wa=function(a){return null!=a&&"function"==typeof a.Da&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.V);a.b("isSubscribable",a.Wa);a.q=function(){var b=[];return{rb:function(a){b.push({la:a,Ra:[]})},end:function(){b.pop()},bb:function(c){if(!a.Wa(c))throw Error("Only subscribable things can act as dependencies");if(0<b.length){var d=b[b.length-1];!d||0<=a.a.k(d.Ra,c)||(d.Ra.push(c),d.la(c))}},I:function(a,d,f){try{return b.push(null),a.apply(d,f||[])}finally{b.pop()}}}}();var L=
{undefined:!0,"boolean":!0,number:!0,string:!0};a.m=function(b){function c(){if(0<arguments.length)return c.equalityComparer&&c.equalityComparer(d,arguments[0])||(c.K(),d=arguments[0],c.J()),this;a.q.bb(c);return d}var d=b;a.V.call(c);c.t=function(){return d};c.J=function(){c.notifySubscribers(d)};c.K=function(){c.notifySubscribers(d,"beforeChange")};a.a.extend(c,a.m.fn);a.r(c,"peek",c.t);a.r(c,"valueHasMutated",c.J);a.r(c,"valueWillMutate",c.K);return c};a.m.fn={equalityComparer:function(a,c){return null===
a||typeof a in L?a===c:!1}};var A=a.m.Pb="__ko_proto__";a.m.fn[A]=a.m;a.qa=function(b,c){return null===b||b===q||b[A]===q?!1:b[A]===c?!0:a.qa(b[A],c)};a.T=function(b){return a.qa(b,a.m)};a.Xa=function(b){return"function"==typeof b&&b[A]===a.m||"function"==typeof b&&b[A]===a.j&&b.Eb?!0:!1};a.b("observable",a.m);a.b("isObservable",a.T);a.b("isWriteableObservable",a.Xa);a.U=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
b=a.m(b);a.a.extend(b,a.U.fn);return b};a.U.fn={remove:function(a){for(var c=this.t(),d=[],f="function"==typeof a?a:function(e){return e===a},g=0;g<c.length;g++){var e=c[g];f(e)&&(0===d.length&&this.K(),d.push(e),c.splice(g,1),g--)}d.length&&this.J();return d},removeAll:function(b){if(b===q){var c=this.t(),d=c.slice(0);this.K();c.splice(0,c.length);this.J();return d}return b?this.remove(function(c){return 0<=a.a.k(b,c)}):[]},destroy:function(a){var c=this.t(),d="function"==typeof a?a:function(c){return c===
a};this.K();for(var f=c.length-1;0<=f;f--)d(c[f])&&(c[f]._destroy=!0);this.J()},destroyAll:function(b){return b===q?this.destroy(F(!0)):b?this.destroy(function(c){return 0<=a.a.k(b,c)}):[]},indexOf:function(b){var c=this();return a.a.k(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.K(),this.t()[d]=c,this.J())}};a.a.p("pop push reverse shift sort splice unshift".split(" "),function(b){a.U.fn[b]=function(){var a=this.t();this.K();a=a[b].apply(a,arguments);this.J();return a}});a.a.p(["slice"],
function(b){a.U.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.U);a.j=function(b,c,d){function f(){a.a.p(v,function(a){a.B()});v=[]}function g(){var a=m.throttleEvaluation;a&&0<=a?(clearTimeout(t),t=setTimeout(e,a)):e()}function e(){if(!n)if(l&&D())x();else{n=!0;try{var b=a.a.Z(v,function(a){return a.target});a.q.rb(function(e){var c;0<=(c=a.a.k(b,e))?b[c]=q:v.push(e.Da(g))});for(var e=p.call(c),d=b.length-1;0<=d;d--)b[d]&&v.splice(d,1)[0].B();l=!0;m.notifySubscribers(k,
"beforeChange");k=e;m.notifySubscribers(k)}finally{a.q.end(),n=!1}v.length||x()}}function m(){if(0<arguments.length){if("function"===typeof r)r.apply(c,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}l||e();a.q.bb(m);return k}function h(){return!l||0<v.length}var k,l=!1,n=!1,p=b;p&&"object"==typeof p?(d=p,p=d.read):(d=d||{},p||(p=d.read));if("function"!=typeof p)throw Error("Pass a function that returns the value of the ko.computed");
var r=d.write,z=d.disposeWhenNodeIsRemoved||d.$||null,D=d.disposeWhen||d.Qa||F(!1),x=f,v=[],t=null;c||(c=d.owner);m.t=function(){l||e();return k};m.Cb=function(){return v.length};m.Eb="function"===typeof d.write;m.B=function(){x()};m.ta=h;a.V.call(m);a.a.extend(m,a.j.fn);a.r(m,"peek",m.t);a.r(m,"dispose",m.B);a.r(m,"isActive",m.ta);a.r(m,"getDependenciesCount",m.Cb);!0!==d.deferEvaluation&&e();if(z&&h()){x=function(){a.a.C.cb(z,x);f()};a.a.C.ia(z,x);var s=D,D=function(){return!a.a.aa(z)||s()}}return m};
a.Gb=function(b){return a.qa(b,a.j)};C=a.m.Pb;a.j[C]=a.m;a.j.fn={};a.j.fn[C]=a.j;a.b("dependentObservable",a.j);a.b("computed",a.j);a.b("isComputed",a.Gb);(function(){function b(a,g,e){e=e||new d;a=g(a);if("object"!=typeof a||null===a||a===q||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var m=a instanceof Array?[]:{};e.save(a,m);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":m[c]=d;break;case "object":case "undefined":var l=
e.get(d);m[c]=l!==q?l:b(d,g,e)}});return m}function c(a,b){if(a instanceof Array){for(var e=0;e<a.length;e++)b(e);"function"==typeof a.toJSON&&b("toJSON")}else for(e in a)b(e)}function d(){this.keys=[];this.Ha=[]}a.lb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var e=0;a.T(b)&&10>e;e++)b=b();return b})};a.toJSON=function(b,c,e){b=a.lb(b);return a.a.Ca(b,c,e)};d.prototype={save:function(b,c){var e=a.a.k(this.keys,
b);0<=e?this.Ha[e]=c:(this.keys.push(b),this.Ha.push(c))},get:function(b){b=a.a.k(this.keys,b);return 0<=b?this.Ha[b]:q}}})();a.b("toJS",a.lb);a.b("toJSON",a.toJSON);(function(){a.h={n:function(b){switch(a.a.u(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.wa):7>=a.a.ca?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.h.n(b.options[b.selectedIndex]):q;default:return b.value}},W:function(b,
c){switch(a.a.u(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.d.options.wa,q);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.d.options.wa,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":""===c&&(c=q);if(null===c||c===q)b.selectedIndex=-1;for(var d=b.options.length-1;0<=d;d--)if(a.h.n(b.options[d])==c){b.selectedIndex=d;break}1<b.size||-1!==b.selectedIndex||(b.selectedIndex=
0);break;default:if(null===c||c===q)c="";b.value=c}}}})();a.b("selectExtensions",a.h);a.b("selectExtensions.readValue",a.h.n);a.b("selectExtensions.writeValue",a.h.W);a.g=function(){function b(a,b){for(var d=null;a!=d;)d=a,a=a.replace(c,function(a,c){return b[c]});return a}var c=/\@ko_token_(\d+)\@/g,d=["true","false","null","undefined"],f=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;return{S:[],da:function(c){var e=a.a.F(c);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-
1));c=[];for(var d=null,f,k=0;k<e.length;k++){var l=e.charAt(k);if(null===d)switch(l){case '"':case "'":case "/":d=k,f=l}else if(l==f&&"\\"!==e.charAt(k-1)){l=e.substring(d,k+1);c.push(l);var n="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+n+e.substring(k+1),k=k-(l.length-n.length),d=null}}f=d=null;for(var p=0,r=null,k=0;k<e.length;k++){l=e.charAt(k);if(null===d)switch(l){case "{":d=k;r=l;f="}";break;case "(":d=k;r=l;f=")";break;case "[":d=k,r=l,f="]"}l===r?p++:l===f&&(p--,0===p&&(l=e.substring(d,
k+1),c.push(l),n="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+n+e.substring(k+1),k-=l.length-n.length,d=null))}f=[];e=e.split(",");d=0;for(k=e.length;d<k;d++)p=e[d],r=p.indexOf(":"),0<r&&r<p.length-1?(l=p.substring(r+1),f.push({key:b(p.substring(0,r),c),value:b(l,c)})):f.push({unknown:b(p,c)});return f},ea:function(b){var e="string"===typeof b?a.g.da(b):b,c=[];b=[];for(var h,k=0;h=e[k];k++)if(0<c.length&&c.push(","),h.key){var l;a:{l=h.key;var n=a.a.F(l);switch(n.length&&n.charAt(0)){case "'":case '"':break a;
default:l="'"+n+"'"}}h=h.value;c.push(l);c.push(":");c.push(h);h=a.a.F(h);0<=a.a.k(d,a.a.F(h).toLowerCase())?h=!1:(n=h.match(f),h=null===n?!1:n[1]?"Object("+n[1]+")"+n[2]:h);h&&(0<b.length&&b.push(", "),b.push(l+" : function(__ko_value) { "+h+" = __ko_value; }"))}else h.unknown&&c.push(h.unknown);e=c.join("");0<b.length&&(e=e+", '_ko_property_writers' : { "+b.join("")+" } ");return e},Jb:function(b,c){for(var d=0;d<b.length;d++)if(a.a.F(b[d].key)==c)return!0;return!1},ha:function(b,c,d,f,k){if(b&&
a.T(b))!a.Xa(b)||k&&b.t()===f||b(f);else if((b=c()._ko_property_writers)&&b[d])b[d](f)}}}();a.b("expressionRewriting",a.g);a.b("expressionRewriting.bindingRewriteValidators",a.g.S);a.b("expressionRewriting.parseObjectLiteral",a.g.da);a.b("expressionRewriting.preProcessBindings",a.g.ea);a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.ea);(function(){function b(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(e)}function c(a){return 8==a.nodeType&&
(g?a.text:a.nodeValue).match(m)}function d(a,e){for(var d=a,g=1,f=[];d=d.nextSibling;){if(c(d)&&(g--,0===g))return f;f.push(d);b(d)&&g++}if(!e)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function f(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var g=s&&"\x3c!--test--\x3e"===s.createComment("test").text,e=g?/^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/:/^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/,m=g?/^\x3c!--\s*\/ko\s*--\x3e$/:
/^\s*\/ko\s*$/,h={ul:!0,ol:!0};a.e={L:{},childNodes:function(a){return b(a)?d(a):a.childNodes},ba:function(c){if(b(c)){c=a.e.childNodes(c);for(var e=0,d=c.length;e<d;e++)a.removeNode(c[e])}else a.a.oa(c)},P:function(c,e){if(b(c)){a.e.ba(c);for(var d=c.nextSibling,g=0,f=e.length;g<f;g++)d.parentNode.insertBefore(e[g],d)}else a.a.P(c,e)},ab:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Va:function(c,e,d){d?b(c)?c.parentNode.insertBefore(e,
d.nextSibling):d.nextSibling?c.insertBefore(e,d.nextSibling):c.appendChild(e):a.e.ab(c,e)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=f(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},ob:function(a){return(a=b(a))?a[1]:null},Za:function(e){if(h[a.a.u(e)]){var d=e.firstChild;if(d){do if(1===d.nodeType){var g;g=d.firstChild;var m=null;if(g){do if(m)m.push(g);else if(b(g)){var r=f(g,!0);r?g=r:m=
[g]}else c(g)&&(m=[g]);while(g=g.nextSibling)}if(g=m)for(m=d.nextSibling,r=0;r<g.length;r++)m?e.insertBefore(g[r],m):e.appendChild(g[r])}while(d=d.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.L);a.b("virtualElements.emptyNode",a.e.ba);a.b("virtualElements.insertAfter",a.e.Va);a.b("virtualElements.prepend",a.e.ab);a.b("virtualElements.setDomNodeChildren",a.e.P);(function(){a.M=function(){this.Na={}};a.a.extend(a.M.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind");case 8:return null!=a.e.ob(b);default:return!1}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a):null},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.ob(b);default:return null}},parseBindingsString:function(b,c,d){try{var f;if(!(f=this.Na[b])){var g=this.Na,e,m="with($context){with($data||{}){return{"+a.g.ea(b)+"}}}";e=new Function("$context","$element",m);
f=g[b]=e}return f(c,d)}catch(h){throw h.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+h.message,h;}}});a.M.instance=new a.M})();a.b("bindingProvider",a.M);(function(){function b(b,e,d){for(var f=a.e.firstChild(e);e=f;)f=a.e.nextSibling(e),c(b,e,d)}function c(c,e,f){var h=!0,k=1===e.nodeType;k&&a.e.Za(e);if(k&&f||a.M.instance.nodeHasBindings(e))h=d(e,null,c,f).Sb;h&&b(c,e,!k)}function d(b,c,d,h){function k(a){return function(){return p[a]}}function l(){return p}var n=0,p,r,
z=a.a.f.get(b,f);if(!c){if(z)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,f,!0)}a.j(function(){var f=d&&d instanceof a.A?d:new a.A(a.a.c(d)),x=f.$data;!z&&h&&a.jb(b,f);if(p=("function"==typeof c?c(f,b):c)||a.M.instance.getBindings(b,f))0===n&&(n=1,a.a.w(p,function(c){var e=a.d[c];if(e&&8===b.nodeType&&!a.e.L[c])throw Error("The binding '"+c+"' cannot be used with virtual elements");if(e&&"function"==typeof e.init&&(e=(0,e.init)(b,k(c),l,x,f))&&e.controlsDescendantBindings){if(r!==
q)throw Error("Multiple bindings ("+r+" and "+c+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");r=c}}),n=2),2===n&&a.a.w(p,function(c){var e=a.d[c];e&&"function"==typeof e.update&&(0,e.update)(b,k(c),l,x,f)})},null,{$:b});return{Sb:r===q}}a.d={};a.A=function(b,c,d){c?(a.a.extend(this,c),this.$parentContext=c,this.$parent=c.$data,this.$parents=(c.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=
[],this.$root=b,this.ko=a);this.$data=b;d&&(this[d]=b)};a.A.prototype.createChildContext=function(b,c){return new a.A(b,this,c)};a.A.prototype.extend=function(b){var c=a.a.extend(new a.A,this);return a.a.extend(c,b)};var f="__ko_boundElement";a.jb=function(b,c){if(2==arguments.length)a.a.f.set(b,"__ko_bindingContext__",c);else return a.a.f.get(b,"__ko_bindingContext__")};a.Ka=function(b,c,f){1===b.nodeType&&a.e.Za(b);return d(b,c,f,!0)};a.Ja=function(a,c){1!==c.nodeType&&8!==c.nodeType||b(a,c,!0)};
a.Ia=function(a,b){if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||w.document.body;c(a,b,!0)};a.na=function(b){switch(b.nodeType){case 1:case 8:var c=a.jb(b);if(c)return c;if(b.parentNode)return a.na(b.parentNode)}return q};a.ub=function(b){return(b=a.na(b))?b.$data:q};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Ia);a.b("applyBindingsToDescendants",a.Ja);a.b("applyBindingsToNode",a.Ka);
a.b("contextFor",a.na);a.b("dataFor",a.ub)})();var K={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.w(d,function(c,d){d=a.a.c(d);var e=!1===d||null===d||d===q;e&&b.removeAttribute(c);8>=a.a.ca&&c in K?(c=K[c],e?b.removeAttribute(c):b[c]=d):e||b.setAttribute(c,d.toString());"name"===c&&a.a.gb(b,e?"":d.toString())})}};a.d.checked={init:function(b,c,d){a.a.o(b,"click",function(){var f;if("checkbox"==b.type)f=b.checked;else if("radio"==b.type&&b.checked)f=
b.value;else return;var g=c(),e=a.a.c(g);"checkbox"==b.type&&e instanceof Array?a.a.ja(g,b.value,b.checked):a.g.ha(g,d,"checked",f,!0)});"radio"!=b.type||b.name||a.d.uniqueName.init(b,F(!0))},update:function(b,c){var d=a.a.c(c());"checkbox"==b.type?b.checked=d instanceof Array?0<=a.a.k(d,b.value):d:"radio"==b.type&&(b.checked=b.value==d)}};a.d.css={update:function(b,c){var d=a.a.c(c());"object"==typeof d?a.a.w(d,function(c,d){d=a.a.c(d);a.a.ga(b,c,d)}):(d=String(d||""),a.a.ga(b,b.__ko__cssValue,!1),
b.__ko__cssValue=d,a.a.ga(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,f){var g=c()||{};a.a.w(g,function(e){"string"==typeof e&&a.a.o(b,e,function(b){var g,k=c()[e];if(k){var l=d();try{var n=a.a.N(arguments);n.unshift(f);g=k.apply(f,n)}finally{!0!==g&&(b.preventDefault?b.preventDefault():b.returnValue=
!1)}!1===l[e+"Bubble"]&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={Ya:function(b){return function(){var c=b(),d=a.a.ya(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.D.sa};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.D.sa}}},init:function(b,c){return a.d.template.init(b,a.d.foreach.Ya(c))},
update:function(b,c,d,f,g){return a.d.template.update(b,a.d.foreach.Ya(c),d,f,g)}};a.g.S.foreach=!1;a.e.L.foreach=!0;a.d.hasfocus={init:function(b,c,d){function f(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(l){g=f.body}e=g===b}f=c();a.g.ha(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var g=f.bind(null,!0),e=f.bind(null,!1);a.a.o(b,"focus",g);a.a.o(b,"focusin",g);a.a.o(b,"blur",e);a.a.o(b,"focusout",e)},
update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.q.I(a.a.Ga,null,[b,d?"focusin":"focusout"]))}};a.d.hasFocus=a.d.hasfocus;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.fa(b,c())}};var I="__ko_withIfBindingData";G("if");G("ifnot",!1,!0);G("with",!0,!1,function(a,c){return a.createChildContext(c)});a.d.options={init:function(b){if("select"!==a.a.u(b))throw Error("options binding applies only to SELECT elements");
for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(b,c){if(p){var d=0<=a.a.k(p,a.h.n(c[0]));a.a.hb(c[0],d)}}var e=0==b.length,m=!e&&b.multiple?b.scrollTop:null;c=a.a.c(c());var h=d(),k=h.optionsIncludeDestroyed,l={},n,p;b.multiple?p=a.a.Z(b.selectedOptions||a.a.Y(b.childNodes,function(b){return b.tagName&&"option"===a.a.u(b)&&b.selected}),function(b){return a.h.n(b)}):0<=
b.selectedIndex&&(p=[a.h.n(b.options[b.selectedIndex])]);if(c){"undefined"==typeof c.length&&(c=[c]);var r=a.a.Y(c,function(b){return k||b===q||null===b||!a.a.c(b._destroy)});"optionsCaption"in h&&(n=a.a.c(h.optionsCaption),null!==n&&n!==q&&r.unshift(l))}else c=[];d=g;h.optionsAfterRender&&(d=function(b,c){g(0,c);a.q.I(h.optionsAfterRender,null,[c[0],b!==l?b:q])});a.a.Aa(b,r,function(b,c,d){d.length&&(p=d[0].selected&&[a.h.n(d[0])]);c=s.createElement("option");b===l?(a.a.fa(c,n),a.h.W(c,q)):(d=f(b,
h.optionsValue,b),a.h.W(c,a.a.c(d)),b=f(b,h.optionsText,d),a.a.ib(c,b));return[c]},null,d);p=null;e&&"value"in h&&J(b,a.a.ya(h.value),!0);a.a.zb(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.d.options.wa="__ko.optionValueDomData__";a.d.selectedOptions={init:function(b,c,d){a.a.o(b,"change",function(){var f=c(),g=[];a.a.p(b.getElementsByTagName("option"),function(b){b.selected&&g.push(a.h.n(b))});a.g.ha(f,d,"selectedOptions",g)})},update:function(b,c){if("select"!=a.a.u(b))throw Error("values binding applies only to SELECT elements");
var d=a.a.c(c());d&&"number"==typeof d.length&&a.a.p(b.getElementsByTagName("option"),function(b){var c=0<=a.a.k(d,a.h.n(b));a.a.hb(b,c)})}};a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.w(d,function(c,d){d=a.a.c(d);b.style[c]=d||""})}};a.d.submit={init:function(b,c,d,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.o(b,"submit",function(a){var d,m=c();try{d=m.call(f,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};
a.d.text={update:function(b,c){a.a.ib(b,c())}};a.e.L.text=!0;a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.tb;a.a.gb(b,d)}}};a.d.uniqueName.tb=0;a.d.value={init:function(b,c,d){function f(){m=!1;var e=c(),f=a.h.n(b);a.g.ha(e,d,"value",f)}var g=["change"],e=d().valueUpdate,m=!1;e&&("string"==typeof e&&(e=[e]),a.a.R(g,e),g=a.a.Ma(g));!a.a.ca||("input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete)||-1!=a.a.k(g,"propertychange")||
(a.a.o(b,"propertychange",function(){m=!0}),a.a.o(b,"blur",function(){m&&f()}));a.a.p(g,function(c){var d=f;a.a.Tb(c,"after")&&(d=function(){setTimeout(f,0)},c=c.substring(5));a.a.o(b,c,d)})},update:function(b,c){var d="select"===a.a.u(b),f=a.a.c(c()),g=a.h.n(b);f!==g&&(g=function(){a.h.W(b,f)},g(),d&&setTimeout(g,0));d&&0<b.length&&J(b,f,!1)}};a.d.visible={update:function(b,c){var d=a.a.c(c()),f="none"!=b.style.display;d&&!f?b.style.display="":!d&&f&&(b.style.display="none")}};(function(b){a.d[b]=
{init:function(c,d,f,g){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},f,g)}}})("click");a.v=function(){};a.v.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.v.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.v.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||s;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.l.i(d)}if(1==
b.nodeType||8==b.nodeType)return new a.l.Q(b);throw Error("Unknown template type: "+b);};a.v.prototype.renderTemplate=function(a,c,d,f){a=this.makeTemplateSource(a,f);return this.renderTemplateSource(a,c,d)};a.v.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.v.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.v);
a.Ea=function(){function b(b,c,d,m){b=a.g.da(b);for(var h=a.g.S,k=0;k<b.length;k++){var l=b[k].key;if(h.hasOwnProperty(l)){var n=h[l];if("function"===typeof n){if(l=n(b[k].value))throw Error(l);}else if(!n)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.ea(b)+" } })()},'"+d.toLowerCase()+"')";return m.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Ab:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Ea.Lb(b,c)},d)},Lb:function(a,g){return a.replace(c,function(a,c,d,f,l){return b(l,c,d,g)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",g)})},qb:function(b,c){return a.s.va(function(d,m){var h=d.nextSibling;h&&h.nodeName.toLowerCase()===c&&a.Ka(h,b,m)})}}}();a.b("__tr_ambtns",a.Ea.qb);(function(){a.l={};a.l.i=function(a){this.i=a};a.l.i.prototype.text=
function(){var b=a.a.u(this.i),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.i[b];var c=arguments[0];"innerHTML"===b?a.a.fa(this.i,c):this.i[b]=c};a.l.i.prototype.data=function(b){if(1===arguments.length)return a.a.f.get(this.i,"templateSourceData_"+b);a.a.f.set(this.i,"templateSourceData_"+b,arguments[1])};a.l.Q=function(a){this.i=a};a.l.Q.prototype=new a.l.i;a.l.Q.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.i,"__ko_anon_template__")||
{};b.Fa===q&&b.ma&&(b.Fa=b.ma.innerHTML);return b.Fa}a.a.f.set(this.i,"__ko_anon_template__",{Fa:arguments[0]})};a.l.i.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.i,"__ko_anon_template__")||{}).ma;a.a.f.set(this.i,"__ko_anon_template__",{ma:arguments[0]})};a.b("templateSources",a.l);a.b("templateSources.domElement",a.l.i);a.b("templateSources.anonymousTemplate",a.l.Q)})();(function(){function b(b,c,d){var f;for(c=a.e.nextSibling(c);b&&(f=b)!==c;)b=a.e.nextSibling(f),1!==
f.nodeType&&8!==f.nodeType||d(f)}function c(c,d){if(c.length){var f=c[0],g=c[c.length-1];b(f,g,function(b){a.Ia(d,b)});b(f,g,function(b){a.s.nb(b,[d])})}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function f(b,f,h,k,l){l=l||{};var n=b&&d(b),n=n&&n.ownerDocument,p=l.templateEngine||g;a.Ea.Ab(h,p,n);h=p.renderTemplate(h,k,l,n);if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(f){case "replaceChildren":a.e.P(b,
h);n=!0;break;case "replaceNode":a.a.eb(b,h);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+f);}n&&(c(h,k),l.afterRender&&a.q.I(l.afterRender,null,[h,k.$data]));return h}var g;a.Ba=function(b){if(b!=q&&!(b instanceof a.v))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.za=function(b,c,h,k,l){h=h||{};if((h.templateEngine||g)==q)throw Error("Set a template engine before calling renderTemplate");l=l||"replaceChildren";if(k){var n=d(k);return a.j(function(){var g=
c&&c instanceof a.A?c:new a.A(a.a.c(c)),r="function"==typeof b?b(g.$data,g):b,g=f(k,l,r,g,h);"replaceNode"==l&&(k=g,n=d(k))},null,{Qa:function(){return!n||!a.a.aa(n)},$:n&&"replaceNode"==l?n.parentNode:n})}return a.s.va(function(d){a.za(b,c,h,d,"replaceNode")})};a.Rb=function(b,d,g,k,l){function n(a,b){c(b,r);g.afterRender&&g.afterRender(b,a)}function p(c,d){r=l.createChildContext(a.a.c(c),g.as);r.$index=d;var k="function"==typeof b?b(c,r):b;return f(null,"ignoreTargetNode",k,r,g)}var r;return a.j(function(){var b=
a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.Y(b,function(b){return g.includeDestroyed||b===q||null===b||!a.a.c(b._destroy)});a.q.I(a.a.Aa,null,[k,b,p,g,n])},null,{$:k})};a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||(d.name||1!=b.nodeType&&8!=b.nodeType)||(d=1==b.nodeType?b.childNodes:a.e.childNodes(b),d=a.a.Mb(d),(new a.l.Q(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,f,g){c=a.a.c(c());d={};f=!0;var n,p=null;"string"!=typeof c&&(d=
c,c=a.a.c(d.name),"if"in d&&(f=a.a.c(d["if"])),f&&"ifnot"in d&&(f=!a.a.c(d.ifnot)),n=a.a.c(d.data));"foreach"in d?p=a.Rb(c||b,f&&d.foreach||[],d,b,g):f?(g="data"in d?g.createChildContext(n,d.as):g,p=a.za(c||b,g,d,b)):a.e.ba(b);g=p;(n=a.a.f.get(b,"__ko__templateComputedDomDataKey__"))&&"function"==typeof n.B&&n.B();a.a.f.set(b,"__ko__templateComputedDomDataKey__",g&&g.ta()?g:q)}};a.g.S.template=function(b){b=a.g.da(b);return 1==b.length&&b[0].unknown||a.g.Jb(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};
a.e.L.template=!0})();a.b("setTemplateEngine",a.Ba);a.b("renderTemplate",a.za);a.a.Pa=function(){function a(b,d,f,g,e){var m=Math.min,h=Math.max,k=[],l,n=b.length,p,r=d.length,q=r-n||1,t=n+r+1,s,v,w;for(l=0;l<=n;l++)for(v=s,k.push(s=[]),w=m(r,l+q),p=h(0,l-1);p<=w;p++)s[p]=p?l?b[l-1]===d[p-1]?v[p-1]:m(v[p]||t,s[p-1]||t)+1:p+1:l+1;m=[];h=[];q=[];l=n;for(p=r;l||p;)r=k[l][p]-1,p&&r===k[l][p-1]?h.push(m[m.length]={status:f,value:d[--p],index:p}):l&&r===k[l-1][p]?q.push(m[m.length]={status:g,value:b[--l],
index:l}):(m.push({status:"retained",value:d[--p]}),--l);if(h.length&&q.length){b=10*n;var E;for(d=f=0;(e||d<b)&&(E=h[f]);f++){for(g=0;k=q[g];g++)if(E.value===k.value){E.moved=k.index;k.moved=E.index;q.splice(g,1);d=g=0;break}d+=g}}return m.reverse()}return function(c,d,f){c=c||[];d=d||[];return c.length<=d.length?a(c,d,"added","deleted",f):a(d,c,"deleted","added",f)}}();a.b("utils.compareArrays",a.a.Pa);(function(){function b(b){for(;b.length&&!a.a.aa(b[0]);)b.splice(0,1);if(1<b.length){for(var c=
b[0],g=b[b.length-1],e=[c];c!==g;){c=c.nextSibling;if(!c)return;e.push(c)}Array.prototype.splice.apply(b,[0,b.length].concat(e))}return b}function c(c,f,g,e,m){var h=[];c=a.j(function(){var c=f(g,m,b(h))||[];0<h.length&&(a.a.eb(h,c),e&&a.q.I(e,null,[g,c,m]));h.splice(0,h.length);a.a.R(h,c)},null,{$:c,Qa:function(){return!a.a.pb(h)}});return{O:h,j:c.ta()?c:q}}a.a.Aa=function(d,f,g,e,m){function h(a,c){u=n[c];x!==c&&(E[a]=u);u.ra(x++);b(u.O);t.push(u);w.push(u)}function k(b,c){if(b)for(var d=0,e=c.length;d<
e;d++)c[d]&&a.a.p(c[d].O,function(a){b(a,d,c[d].X)})}f=f||[];e=e||{};var l=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===q,n=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],p=a.a.Z(n,function(a){return a.X}),r=a.a.Pa(p,f,e.dontLimitMoves),t=[],s=0,x=0,v=[],w=[];f=[];for(var E=[],p=[],u,B=0,y,A;y=r[B];B++)switch(A=y.moved,y.status){case "deleted":A===q&&(u=n[s],u.j&&u.j.B(),v.push.apply(v,b(u.O)),e.beforeRemove&&(f[B]=u,w.push(u)));s++;break;case "retained":h(B,
s++);break;case "added":A!==q?h(B,A):(u={X:y.value,ra:a.m(x++)},t.push(u),w.push(u),l||(p[B]=u))}k(e.beforeMove,E);a.a.p(v,e.beforeRemove?a.H:a.removeNode);for(var B=0,l=a.e.firstChild(d),C;u=w[B];B++){u.O||a.a.extend(u,c(d,g,u.X,m,u.ra));for(s=0;r=u.O[s];l=r.nextSibling,C=r,s++)r!==l&&a.e.Va(d,r,C);!u.Fb&&m&&(m(u.X,u.O,u.ra),u.Fb=!0)}k(e.beforeRemove,f);k(e.afterMove,E);k(e.afterAdd,p);a.a.f.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",t)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",
a.a.Aa);a.D=function(){this.allowTemplateRewriting=!1};a.D.prototype=new a.v;a.D.prototype.renderTemplateSource=function(b){var c=(9>a.a.ca?0:b.nodes)?b.nodes():null;if(c)return a.a.N(c.cloneNode(!0).childNodes);b=b.text();return a.a.xa(b)};a.D.sa=new a.D;a.Ba(a.D.sa);a.b("nativeTemplateEngine",a.D);(function(){a.ua=function(){var a=this.Ib=function(){if("undefined"==typeof t||!t.tmpl)return 0;try{if(0<=t.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=
function(b,f,g){g=g||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var e=b.data("precompiled");e||(e=b.text()||"",e=t.template(null,"{{ko_with $item.koBindingContext}}"+e+"{{/ko_with}}"),b.data("precompiled",e));b=[f.$data];f=t.extend({koBindingContext:f},g.templateOptions);f=t.tmpl(e,b,f);f.appendTo(s.createElement("div"));t.fragments={};return f};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){s.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(t.tmpl.tag.ko_code={open:"__.push($1 || '');"},t.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.ua.prototype=new a.v;var b=new a.ua;0<b.Ib&&a.Ba(b);a.b("jqueryTmplTemplateEngine",a.ua)})()})})();
})();

},{}],3:[function(require,module,exports){
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.5.0-b9bf47c
window.WebComponents=window.WebComponents||{},function(e){var t=e.flags||{},n="webcomponents.js",r=document.querySelector('script[src*="'+n+'"]'),t={};if(!t.noOpts){if(location.search.slice(1).split("&").forEach(function(e){e=e.split("="),e[0]&&(t[e[0]]=e[1]||!0)}),r)for(var o,i=0;o=r.attributes[i];i++)"src"!==o.name&&(t[o.name]=o.value||!0);if(t.log){var a=t.log.split(",");t.log={},a.forEach(function(e){t.log[e]=!0})}else t.log={}}t.shadow=t.shadow||t.shadowdom||t.polyfill,t.shadow="native"===t.shadow?!1:t.shadow||!HTMLElement.prototype.createShadowRoot,t.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=t.register),e.flags=t}(WebComponents),"undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];return r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return t&&t[0]===e?(t[0]=t[1]=void 0,!0):!1},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=n}(),function(e){function t(e){_.push(e),w||(w=!0,h(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){w=!1;var e=_;_=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=v.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function i(e,t){for(var n=e;n;n=n.parentNode){var r=v.get(n);if(r)for(var o=0;o<r.length;o++){var i=r[o],a=i.options;if(n===e||a.subtree){var s=t(a);s&&i.enqueue(s)}}}}function a(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++E}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function d(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function c(e,t){return y=new s(e,t)}function u(e){return M?M:(M=d(y),M.oldValue=e,M)}function l(){y=M=void 0}function f(e){return e===M||e===y}function m(e,t){return e===t?e:M&&f(e)?M:null}function p(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var h,v=new WeakMap;if(/Trident/.test(navigator.userAgent))h=setTimeout;else if(window.setImmediate)h=window.setImmediate;else{var g=[],b=String(Math.random());window.addEventListener("message",function(e){if(e.data===b){var t=g;g=[],t.forEach(function(e){e()})}}),h=function(e){g.push(e),window.postMessage(b,"*")}}var w=!1,_=[],E=0;a.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=v.get(e);r||v.set(e,r=[]);for(var o,i=0;i<r.length;i++)if(r[i].observer===this){o=r[i],o.removeListeners(),o.options=t;break}o||(o=new p(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=v.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var y,M;p.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],i=m(o,e);if(i)return void(n[r-1]=i)}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=v.get(e);t||v.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=v.get(e),n=0;n<t.length;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new c("attributes",r);o.attributeName=t,o.attributeNamespace=n;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;i(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?u(a):o});break;case"DOMCharacterDataModified":var r=e.target,o=c("characterData",r),a=e.prevValue;i(r,function(e){return e.characterData?e.characterDataOldValue?u(a):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,d,r=e.relatedNode,f=e.target;"DOMNodeInserted"===e.type?(s=[f],d=[]):(s=[],d=[f]);var m=f.previousSibling,p=f.nextSibling,o=c("childList",r);o.addedNodes=s,o.removedNodes=d,o.previousSibling=m,o.nextSibling=p,i(r,function(e){return e.childList?o:void 0})}l()}},e.JsMutationObserver=a,e.MutationObserver||(e.MutationObserver=a)}(this),window.HTMLImports=window.HTMLImports||{flags:{}},function(e){function t(e,t){t=t||p,r(function(){i(e,t)},t)}function n(e){return"complete"===e.readyState||e.readyState===g}function r(e,t){if(n(t))e&&e();else{var o=function(){("complete"===t.readyState||t.readyState===g)&&(t.removeEventListener(b,o),r(e,t))};t.addEventListener(b,o)}}function o(e){e.target.__loaded=!0}function i(e,t){function n(){s==d&&e&&e()}function r(e){o(e),s++,n()}var i=t.querySelectorAll("link[rel=import]"),s=0,d=i.length;if(d)for(var c,u=0;d>u&&(c=i[u]);u++)a(c)?r.call(c,{target:c}):(c.addEventListener("load",r),c.addEventListener("error",r));else n()}function a(e){return l?e.__loaded||e.import&&"loading"!==e.import.readyState:e.__importParsed}function s(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)d(t)&&c(t)}function d(e){return"link"===e.localName&&"import"===e.rel}function c(e){var t=e.import;t?o({target:e}):(e.addEventListener("load",o),e.addEventListener("error",o))}var u="import",l=Boolean(u in document.createElement("link")),f=Boolean(window.ShadowDOMPolyfill),m=function(e){return f?ShadowDOMPolyfill.wrapIfNeeded(e):e},p=m(document),h={get:function(){var e=HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return m(e)},configurable:!0};Object.defineProperty(document,"_currentScript",h),Object.defineProperty(p,"_currentScript",h);var v=/Trident/.test(navigator.userAgent),g=v?"complete":"interactive",b="readystatechange";l&&(new MutationObserver(function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.addedNodes&&s(t.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var e,t=document.querySelectorAll("link[rel=import]"),n=0,r=t.length;r>n&&(e=t[n]);n++)c(e)}()),t(function(){HTMLImports.ready=!0,HTMLImports.readyTime=(new Date).getTime(),p.dispatchEvent(new CustomEvent("HTMLImportsLoaded",{bubbles:!0}))}),e.IMPORT_LINK_TYPE=u,e.useNative=l,e.rootDocument=p,e.whenReady=t,e.isIE=v}(HTMLImports),function(e){var t=[],n=function(e){t.push(e)},r=function(){t.forEach(function(t){t(e)})};e.addModule=n,e.initializeModules=r}(HTMLImports),HTMLImports.addModule(function(e){var t=/(url\()([^)]*)(\))/g,n=/(@import[\s]+(?!url\())([^;]*)(;)/g,r={resolveUrlsInStyle:function(e){var t=e.ownerDocument,n=t.createElement("a");return e.textContent=this.resolveUrlsInCssText(e.textContent,n),e},resolveUrlsInCssText:function(e,r){var o=this.replaceUrls(e,r,t);return o=this.replaceUrls(o,r,n)},replaceUrls:function(e,t,n){return e.replace(n,function(e,n,r,o){var i=r.replace(/["']/g,"");return t.href=i,i=t.href,n+"'"+i+"'"+o})}};e.path=r}),HTMLImports.addModule(function(e){xhr={async:!0,ok:function(e){return e.status>=200&&e.status<300||304===e.status||0===e.status},load:function(t,n,r){var o=new XMLHttpRequest;return(e.flags.debug||e.flags.bust)&&(t+="?"+Math.random()),o.open("GET",t,xhr.async),o.addEventListener("readystatechange",function(){if(4===o.readyState){var e=o.getResponseHeader("Location"),t=null;if(e)var t="/"===e.substr(0,1)?location.origin+e:e;n.call(r,!xhr.ok(o)&&o,o.response||o.responseText,t)}}),o.send(),o},loadDocument:function(e,t,n){this.load(e,t,n).responseType="document"}},e.xhr=xhr}),HTMLImports.addModule(function(e){var t=e.xhr,n=e.flags,r=function(e,t){this.cache={},this.onload=e,this.oncomplete=t,this.inflight=0,this.pending={}};r.prototype={addNodes:function(e){this.inflight+=e.length;for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)this.require(t);this.checkDone()},addNode:function(e){this.inflight++,this.require(e),this.checkDone()},require:function(e){var t=e.src||e.href;e.__nodeUrl=t,this.dedupe(t,e)||this.fetch(t,e)},dedupe:function(e,t){if(this.pending[e])return this.pending[e].push(t),!0;return this.cache[e]?(this.onload(e,t,this.cache[e]),this.tail(),!0):(this.pending[e]=[t],!1)},fetch:function(e,r){if(n.load&&console.log("fetch",e,r),e.match(/^data:/)){var o=e.split(","),i=o[0],a=o[1];a=i.indexOf(";base64")>-1?atob(a):decodeURIComponent(a),setTimeout(function(){this.receive(e,r,null,a)}.bind(this),0)}else{var s=function(t,n,o){this.receive(e,r,t,n,o)}.bind(this);t.load(e,s)}},receive:function(e,t,n,r,o){this.cache[e]=r;for(var i,a=this.pending[e],s=0,d=a.length;d>s&&(i=a[s]);s++)this.onload(e,i,r,n,o),this.tail();this.pending[e]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},e.Loader=r}),HTMLImports.addModule(function(e){var t=function(e){this.addCallback=e,this.mo=new MutationObserver(this.handler.bind(this))};t.prototype={handler:function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)"childList"===t.type&&t.addedNodes.length&&this.addedNodes(t.addedNodes)},addedNodes:function(e){this.addCallback&&this.addCallback(e);for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.children&&t.children.length&&this.addedNodes(t.children)},observe:function(e){this.mo.observe(e,{childList:!0,subtree:!0})}},e.Observer=t}),HTMLImports.addModule(function(e){function t(e){return"link"===e.localName&&e.rel===u}function n(e){var t=r(e);return"data:text/javascript;charset=utf-8,"+encodeURIComponent(t)}function r(e){return e.textContent+o(e)}function o(e){var t=e.ownerDocument;t.__importedScripts=t.__importedScripts||0;var n=e.ownerDocument.baseURI,r=t.__importedScripts?"-"+t.__importedScripts:"";return t.__importedScripts++,"\n//# sourceURL="+n+r+".js\n"}function i(e){var t=e.ownerDocument.createElement("style");return t.textContent=e.textContent,a.resolveUrlsInStyle(t),t}var a=e.path,s=e.rootDocument,d=e.flags,c=e.isIE,u=e.IMPORT_LINK_TYPE,l="link[rel="+u+"]",f={documentSelectors:l,importsSelectors:[l,"link[rel=stylesheet]","style","script:not([type])",'script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},dynamicElements:[],parseNext:function(){var e=this.nextToParse();e&&this.parse(e)},parse:function(e){if(this.isParsed(e))return void(d.parse&&console.log("[%s] is already parsed",e.localName));var t=this[this.map[e.localName]];t&&(this.markParsing(e),t.call(this,e))},parseDynamic:function(e,t){this.dynamicElements.push(e),t||this.parseNext()},markParsing:function(e){d.parse&&console.log("parsing",e),this.parsingElement=e},markParsingComplete:function(e){e.__importParsed=!0,this.markDynamicParsingComplete(e),e.__importElement&&(e.__importElement.__importParsed=!0,this.markDynamicParsingComplete(e.__importElement)),this.parsingElement=null,d.parse&&console.log("completed",e)},markDynamicParsingComplete:function(e){var t=this.dynamicElements.indexOf(e);t>=0&&this.dynamicElements.splice(t,1)},parseImport:function(e){if(HTMLImports.__importsParsingHook&&HTMLImports.__importsParsingHook(e),e.import&&(e.import.__importParsed=!0),this.markParsingComplete(e),e.dispatchEvent(e.__resource&&!e.__error?new CustomEvent("load",{bubbles:!1}):new CustomEvent("error",{bubbles:!1})),e.__pending)for(var t;e.__pending.length;)t=e.__pending.shift(),t&&t({target:e});this.parseNext()},parseLink:function(e){t(e)?this.parseImport(e):(e.href=e.href,this.parseGeneric(e))},parseStyle:function(e){var t=e;e=i(e),e.__importElement=t,this.parseGeneric(e)},parseGeneric:function(e){this.trackElement(e),this.addElementToDocument(e)},rootImportForElement:function(e){for(var t=e;t.ownerDocument.__importLink;)t=t.ownerDocument.__importLink;return t},addElementToDocument:function(e){for(var t=this.rootImportForElement(e.__importElement||e),n=t.__insertedElements=t.__insertedElements||0,r=t.nextElementSibling,o=0;n>o;o++)r=r&&r.nextElementSibling;t.parentNode.insertBefore(e,r)},trackElement:function(e,t){var n=this,r=function(r){t&&t(r),n.markParsingComplete(e),n.parseNext()};if(e.addEventListener("load",r),e.addEventListener("error",r),c&&"style"===e.localName){var o=!1;if(-1==e.textContent.indexOf("@import"))o=!0;else if(e.sheet){o=!0;for(var i,a=e.sheet.cssRules,s=a?a.length:0,d=0;s>d&&(i=a[d]);d++)i.type===CSSRule.IMPORT_RULE&&(o=o&&Boolean(i.styleSheet))}o&&e.dispatchEvent(new CustomEvent("load",{bubbles:!1}))}},parseScript:function(t){var r=document.createElement("script");r.__importElement=t,r.src=t.src?t.src:n(t),e.currentScript=t,this.trackElement(r,function(){r.parentNode.removeChild(r),e.currentScript=null}),this.addElementToDocument(r)},nextToParse:function(){return this._mayParse=[],!this.parsingElement&&(this.nextToParseInDoc(s)||this.nextToParseDynamic())},nextToParseInDoc:function(e,n){if(e&&this._mayParse.indexOf(e)<0){this._mayParse.push(e);for(var r,o=e.querySelectorAll(this.parseSelectorsForNode(e)),i=0,a=o.length;a>i&&(r=o[i]);i++)if(!this.isParsed(r))return this.hasResource(r)?t(r)?this.nextToParseInDoc(r.import,r):r:void 0}return n},nextToParseDynamic:function(){return this.dynamicElements[0]},parseSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentSelectors:this.importsSelectors},isParsed:function(e){return e.__importParsed},needsDynamicParsing:function(e){return this.dynamicElements.indexOf(e)>=0},hasResource:function(e){return t(e)&&void 0===e.import?!1:!0}};e.parser=f,e.IMPORT_SELECTOR=l}),HTMLImports.addModule(function(e){function t(e){return n(e,i)}function n(e,t){return"link"===e.localName&&e.getAttribute("rel")===t}function r(e,t){var n=document.implementation.createHTMLDocument(i);n._URL=t;var r=n.createElement("base");r.setAttribute("href",t),n.baseURI||(n.baseURI=t);var o=n.createElement("meta");return o.setAttribute("charset","utf-8"),n.head.appendChild(o),n.head.appendChild(r),n.body.innerHTML=e,window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(n),n}var o=e.flags,i=e.IMPORT_LINK_TYPE,a=e.IMPORT_SELECTOR,s=e.rootDocument,d=e.Loader,c=e.Observer,u=e.parser,l={documents:{},documentPreloadSelectors:a,importsPreloadSelectors:[a].join(","),loadNode:function(e){f.addNode(e)},loadSubtree:function(e){var t=this.marshalNodes(e);f.addNodes(t)},marshalNodes:function(e){return e.querySelectorAll(this.loadSelectorsForNode(e))},loadSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(e,n,i,a,s){if(o.load&&console.log("loaded",e,n),n.__resource=i,n.__error=a,t(n)){var d=this.documents[e];void 0===d&&(d=a?null:r(i,s||e),d&&(d.__importLink=n,this.bootDocument(d)),this.documents[e]=d),n.import=d}u.parseNext()},bootDocument:function(e){this.loadSubtree(e),this.observer.observe(e),u.parseNext()},loadedAll:function(){u.parseNext()}},f=new d(l.loaded.bind(l),l.loadedAll.bind(l));if(l.observer=new c,!document.baseURI){var m={get:function(){var e=document.querySelector("base");return e?e.href:window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",m),Object.defineProperty(s,"baseURI",m)}e.importer=l,e.importLoader=f}),HTMLImports.addModule(function(e){var t=e.parser,n=e.importer,r={added:function(e){for(var r,o,i,a=0,s=e.length;s>a&&(i=e[a]);a++)r||(r=i.ownerDocument,o=t.isParsed(r)),loading=this.shouldLoadNode(i),loading&&n.loadNode(i),this.shouldParseNode(i)&&o&&t.parseDynamic(i,loading)},shouldLoadNode:function(e){return 1===e.nodeType&&o.call(e,n.loadSelectorsForNode(e))},shouldParseNode:function(e){return 1===e.nodeType&&o.call(e,t.parseSelectorsForNode(e))}};n.observer.addCallback=r.added.bind(r);var o=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector}),function(e){function t(){HTMLImports.importer.bootDocument(n)}if(initializeModules=e.initializeModules,!e.useNative){"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){var n=document.createEvent("HTMLEvents");return n.initEvent(e,t.bubbles===!1?!1:!0,t.cancelable===!1?!1:!0,t.detail),n}),initializeModules();var n=e.rootDocument;"complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?t():document.addEventListener("DOMContentLoaded",t)}}(HTMLImports),window.CustomElements=window.CustomElements||{flags:{}},function(e){var t=e.flags,n=[],r=function(e){n.push(e)},o=function(){n.forEach(function(t){t(e)})};e.addModule=r,e.initializeModules=o,e.hasNative=Boolean(document.registerElement),e.useNative=!t.register&&e.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||HTMLImports.useNative)}(CustomElements),CustomElements.addModule(function(e){function t(e,t){n(e,function(e){return t(e)?!0:void r(e,t)}),r(e,t)}function n(e,t,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)t(o,r)!==!0&&n(o,t,r),o=o.nextElementSibling;return null}function r(e,n){for(var r=e.shadowRoot;r;)t(r,n),r=r.olderShadowRoot}function o(e,t){a=[],i(e,t),a=null}function i(e,t){if(e=wrap(e),!(a.indexOf(e)>=0)){a.push(e);for(var n,r=e.querySelectorAll("link[rel="+s+"]"),o=0,d=r.length;d>o&&(n=r[o]);o++)n.import&&i(n.import,t);t(e)}}var a,s=window.HTMLImports?HTMLImports.IMPORT_LINK_TYPE:"none";e.forDocumentTree=o,e.forSubtree=t}),CustomElements.addModule(function(e){function t(e){return n(e)||r(e)}function n(t){return e.upgrade(t)?!0:void s(t)}function r(e){_(e,function(e){return n(e)?!0:void 0})}function o(e){s(e),f(e)&&_(e,function(e){s(e)})}function i(e){L.push(e),M||(M=!0,setTimeout(a))}function a(){M=!1;for(var e,t=L,n=0,r=t.length;r>n&&(e=t[n]);n++)e();L=[]}function s(e){y?i(function(){d(e)}):d(e)}function d(e){e.__upgraded__&&(e.attachedCallback||e.detachedCallback)&&!e.__attached&&f(e)&&(e.__attached=!0,e.attachedCallback&&e.attachedCallback())}function c(e){u(e),_(e,function(e){u(e)})}function u(e){y?i(function(){l(e)}):l(e)}function l(e){e.__upgraded__&&(e.attachedCallback||e.detachedCallback)&&e.__attached&&!f(e)&&(e.__attached=!1,e.detachedCallback&&e.detachedCallback())}function f(e){for(var t=e,n=wrap(document);t;){if(t==n)return!0;t=t.parentNode||t.host}}function m(e){if(e.shadowRoot&&!e.shadowRoot.__watched){w.dom&&console.log("watching shadow-root for: ",e.localName);for(var t=e.shadowRoot;t;)v(t),t=t.olderShadowRoot}}function p(e){if(w.dom){var n=e[0];if(n&&"childList"===n.type&&n.addedNodes&&n.addedNodes){for(var r=n.addedNodes[0];r&&r!==document&&!r.host;)r=r.parentNode;var o=r&&(r.URL||r._URL||r.host&&r.host.localName)||"";o=o.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",e.length,o||"")}e.forEach(function(e){"childList"===e.type&&(N(e.addedNodes,function(e){e.localName&&t(e)}),N(e.removedNodes,function(e){e.localName&&c(e)}))}),w.dom&&console.groupEnd()}function h(e){for(e=wrap(e),e||(e=wrap(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(p(t.takeRecords()),a())}function v(e){if(!e.__observer){var t=new MutationObserver(p);t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function g(e){e=wrap(e),w.dom&&console.group("upgradeDocument: ",e.baseURI.split("/").pop()),t(e),v(e),w.dom&&console.groupEnd()}function b(e){E(e,g)}var w=e.flags,_=e.forSubtree,E=e.forDocumentTree,y=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;e.hasPolyfillMutations=y;var M=!1,L=[],N=Array.prototype.forEach.call.bind(Array.prototype.forEach),T=Element.prototype.createShadowRoot;Element.prototype.createShadowRoot=function(){var e=T.call(this);return CustomElements.watchShadow(this),e},e.watchShadow=m,e.upgradeDocumentTree=b,e.upgradeSubtree=r,e.upgradeAll=t,e.attachedNode=o,e.takeRecords=h}),CustomElements.addModule(function(e){function t(t){if(!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var r=t.getAttribute("is"),o=e.getRegisteredDefinition(r||t.localName);if(o){if(r&&o.tag==t.localName)return n(t,o);if(!r&&!o.extends)return n(t,o)}}}function n(t,n){return a.upgrade&&console.group("upgrade:",t.localName),n.is&&t.setAttribute("is",n.is),r(t,n),t.__upgraded__=!0,i(t),e.attachedNode(t),e.upgradeSubtree(t),a.upgrade&&console.groupEnd(),t}function r(e,t){Object.__proto__?e.__proto__=t.prototype:(o(e,t.prototype,t.native),e.__proto__=t.prototype)}function o(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLElement.prototype;){for(var i,a=Object.getOwnPropertyNames(o),s=0;i=a[s];s++)r[i]||(Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i)),r[i]=1);o=Object.getPrototypeOf(o)}}function i(e){e.createdCallback&&e.createdCallback()}var a=e.flags;e.upgrade=t,e.upgradeWithDefinition=n,e.implementPrototype=r}),CustomElements.addModule(function(e){function t(t,r){var d=r||{};if(!t)throw new Error("document.registerElement: first argument `name` must not be empty");if(t.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(t)+"'.");if(o(t))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(t)+"'. The type name is invalid.");if(c(t))throw new Error("DuplicateDefinitionError: a type with name '"+String(t)+"' is already registered");return d.prototype||(d.prototype=Object.create(HTMLElement.prototype)),d.__name=t.toLowerCase(),d.lifecycle=d.lifecycle||{},d.ancestry=i(d.extends),a(d),s(d),n(d.prototype),u(d.__name,d),d.ctor=l(d),d.ctor.prototype=d.prototype,d.prototype.constructor=d.ctor,e.ready&&v(document),d.ctor}function n(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){r.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){r.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function r(e,t,n){e=e.toLowerCase();var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function o(e){for(var t=0;t<E.length;t++)if(e===E[t])return!0}function i(e){var t=c(e);return t?i(t.extends).concat([t]):[]}function a(e){for(var t,n=e.extends,r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function s(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag),r=Object.getPrototypeOf(n);r===e.prototype&&(t=r)}for(var o,i=e.prototype;i&&i!==t;)o=Object.getPrototypeOf(i),i.__proto__=o,i=o;e.native=t}}function d(e){return b(L(e.tag),e)}function c(e){return e?y[e.toLowerCase()]:void 0}function u(e,t){y[e]=t}function l(e){return function(){return d(e)}}function f(e,t,n){return e===M?m(t,n):N(e,t)}function m(e,t){var n=c(t||e);if(n){if(e==n.tag&&t==n.is)return new n.ctor;if(!t&&!n.is)return new n.ctor}var r;return t?(r=m(e),r.setAttribute("is",t),r):(r=L(e),e.indexOf("-")>=0&&w(r,HTMLElement),r)}function p(e){var t=T.call(this,e);return g(t),t}var h,v=e.upgradeDocumentTree,g=e.upgrade,b=e.upgradeWithDefinition,w=e.implementPrototype,_=e.useNative,E=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],y={},M="http://www.w3.org/1999/xhtml",L=document.createElement.bind(document),N=document.createElementNS.bind(document),T=Node.prototype.cloneNode;h=Object.__proto__||_?function(e,t){return e instanceof t}:function(e,t){for(var n=e;n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},document.registerElement=t,document.createElement=m,document.createElementNS=f,Node.prototype.cloneNode=p,e.registry=y,e.instanceof=h,e.reservedTagList=E,e.getRegisteredDefinition=c,document.register=document.registerElement}),function(e){function t(){i(wrap(document)),window.HTMLImports&&(HTMLImports.__importsParsingHook=function(e){i(wrap(e.import))}),CustomElements.ready=!0,setTimeout(function(){CustomElements.readyTime=Date.now(),window.HTMLImports&&(CustomElements.elapsed=CustomElements.readyTime-HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})}var n=e.useNative,r=e.initializeModules;if(n){var o=function(){};e.watchShadow=o,e.upgrade=o,e.upgradeAll=o,e.upgradeDocumentTree=o,e.upgradeSubtree=o,e.takeRecords=o,e.instanceof=function(e,t){return e instanceof t}}else r();var i=e.upgradeDocumentTree;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}),"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n},window.CustomEvent.prototype=window.Event.prototype),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var a=window.HTMLImports&&!HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(a,t)}else t()}(window.CustomElements),function(){var e=document.createElement("style");e.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var t=document.querySelector("head");t.insertBefore(e,t.firstChild)}(window.WebComponents);
},{}],4:[function(require,module,exports){
var Card = function (issueId, issueUrl, issueType, estimate, summary, component, tag, businessValue, epic, parentIssueId, subtasks) {
	if (issueId == null) throw new Error("An Issue must have an id.");

	this.issueId = issueId;
	this.issueUrl = issueUrl;
	this.issueType = issueType;
	this.estimate = estimate;
	this.summary = summary;
	this.component = component;
	this.tag = tag;
	this.businessValue = businessValue;
    this.epic = epic;
	this.parentIssueId = parentIssueId;
    this.subtasks = subtasks;
};

module.exports = Card;
},{}],5:[function(require,module,exports){
var CardView = function(cardModel, issueMap, checkBoxes, isParentDescriptionEnabled, isComponentEnabled, isTagEnabled, isColorEnabled, isQRCodeEnabled, isBusinessValueEnabled, isEpicEnabled) {
	this.cardModel = cardModel;
	this.issueMap = issueMap;
	this.checkBoxes = checkBoxes;
	this.isParentDescriptionEnabled = isParentDescriptionEnabled;
	this.isComponentEnabled = isComponentEnabled;
	this.isTagEnabled = isTagEnabled;
	this.isColorEnabled = isColorEnabled;
	this.isQRCodeEnabled = isQRCodeEnabled;
	this.isBusinessValueEnabled = isBusinessValueEnabled;
    this.isEpicEnabled = isEpicEnabled;
	this.element = null;
};

CardView.prototype.getElement = function () {
	if (this.element == null) {
		this.element = document.createElement('div');
		this.element.className = "ticket "+(this.isColorEnabled ? "color" : "mono")+" "+this.cardModel.issueType.replace(" ", "_");

		this.addTitle(this.cardModel.issueId, this.cardModel.estimate, this.cardModel.parentIssueId);
		this.addSideBar(this.isQRCodeEnabled, this.cardModel.issueUrl);
		this.addSummary(this.cardModel.summary, this.getCardParentSummary(), this.cardModel.component, this.cardModel.tag, this.cardModel.businessValue, this.cardModel.epic);
	}
	return this.element;
};

CardView.prototype.getCardParentSummary = function() {
	if (location.hash.match(/parentIdOnly/)) {
		return this.cardModel.parentIssueId;
	}
	var parentIssue = this.issueMap[this.cardModel.parentIssueId];
	return parentIssue != null ? parentIssue.summary : null;
}

CardView.prototype.addTitle = function (issueId, estimate, parent) {
	var titleElement = document.createElement("div");
	titleElement.className = "titleRow";

	var issueIdElement = this.createSummaryElement(issueId || "Issue Id");
	issueIdElement.className += " key";

	var estimateElement = this.createTitleElement(estimate || "Estimate");
	estimateElement.className += " estimate";

	var actualElement = this.createTitleElement("Actual");
	actualElement.className += " actual";

	var ownerElement = this.createTitleElement("Owner");
	ownerElement.className += " owner";

	titleElement.appendChild(issueIdElement);
	titleElement.appendChild(estimateElement);
	titleElement.appendChild(actualElement);
	titleElement.appendChild(ownerElement);

	this.element.appendChild(titleElement);
};

CardView.prototype.addSummary = function (summary, parentSummary, component, tag, businessvalue, epic) {
	var sideElement = document.createElement("div");
	sideElement.className = "summaryElement";

    if (this.isComponentEnabled && component != null) {
        sideElement.innerHTML += "<span class='component'>" + component + "</span>";
    }

    if (this.isEpicEnabled && epic != null && typeof epics !== "undefined") {
        var epicData = epics.filter(function(_) {
            return _.key === epic
        })[0];
        sideElement.innerHTML += "<span class='epic' style='background-color: " + epicData.epicColor + "'>" + epicData.epicLabel + "</span>";
    }

	if (this.isParentDescriptionEnabled && parentSummary != null) {
		sideElement.innerHTML += "<span class='parentSummary'>" + parentSummary + "</span>"
	}

	sideElement.innerHTML += "<span class='summary'>" + summary + "</span>";

	if (this.isTagEnabled) {
		var tagElement = document.createElement("div");
		tagElement.className = "tag";
		tagElement.innerHTML = tag;
		this.element.appendChild(tagElement);
	}

	if (this.isBusinessValueEnabled) {
		var tagElement = document.createElement("div");
		tagElement.className = "businessvalue cat" + businessvalue;
		tagElement.innerHTML = "";
		this.element.appendChild(tagElement);
	}

	this.element.appendChild(sideElement);
};

CardView.prototype.addSideBar = function (bAddQRCode, url) {
	var sideElement = document.createElement("div");
	sideElement.className = "sidebar";

	for (var i = 0; i < this.checkBoxes.length; ++i) {
		var checkBoxName = this.checkBoxes[i];
		var element = this.createTitleElement(checkBoxName);
		element.className += " "+checkBoxName.replace(" ", "_");
		sideElement.appendChild(element);
	}

	if (bAddQRCode) {
		var qrcodeElement = this.createTitleElement("QRCode");
		qrcodeElement.className += " qrcode";
		qrcodeElement.innerHTML = '<img src="http://qr.kaywa.com/?s=8&d=' + encodeURIComponent(url) + '" alt="QRCode"/>';
		sideElement.appendChild(qrcodeElement);
	}

	this.element.appendChild(sideElement);
};

CardView.prototype.createTitleElement = function (text) {
	var titleElement = document.createElement("span");
	titleElement.className = "titleElement";

	if (typeof text != 'number') {
		var textArray = text.split("\n");
		for (var i = 0; i < textArray.length; i++) {
			titleElement.appendChild(document.createTextNode(textArray[i]));
		}
	} else {
		titleElement.appendChild(document.createTextNode(text));
	}

	return titleElement;
};

CardView.prototype.createSummaryElement = function (text) {
	var multiline;
	var titleElement = document.createElement("span");
	titleElement.className = "titleElement";

	var textArray = text.split("\n");
	for (var i = 0; i < 1; i++) {
		var project = textArray[i].split("-")[0];
		var number = textArray[i].split("-")[1];
		var projectDiv = document.createElement("div");
		projectDiv.className = "project";
		projectDiv.innerHTML = project;
		var numberDiv = document.createElement("div");
		numberDiv.className = "number";
		numberDiv.innerHTML = number;
		titleElement.appendChild(projectDiv);
		titleElement.appendChild(numberDiv);
		titleElement.appendChild(document.createElement("br"));
	}
	multiline = textArray.length > 1;

	if (multiline) {
		titleElement.className += " multiline";
	}

	return titleElement;
};


},{}],6:[function(require,module,exports){
var IssueChecklistHandler = function(issueChecklistUl, issues) {
	this.issueChecklistUl = issueChecklistUl;
	this.addJirasToInterface(issues);
}

IssueChecklistHandler.prototype.addCheckList = function(ul, name, callback, className) {
	var jiraList = this.issueChecklistUl;
	var li = document.createElement("li");

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = className;
	checkbox.name = name;
	checkbox.checked = true;

	if (callback != null && callback != undefined) {
		checkbox.onclick = callback;
	}

	var label = document.createTextNode(name);

	li.appendChild(checkbox);
	li.appendChild(label);

	jiraList.appendChild(li);
}


IssueChecklistHandler.prototype.addJirasToInterface = function(issues) {
	this.issueChecklistUl.innerHTML = "";
	this.addCheckList("jiraListUrl", "All", this.allJirasClicked, null);
	for (var i = 0; i < issues.length; i++) {
		var issue = issues[i];
		this.addCheckList(this.issueChecklistUl, issue, null, "jiracheck");
	}
}


IssueChecklistHandler.prototype.allJirasClicked = function() {
	var jiraChecklists = document.getElementsByClassName("jiracheck");
	for (var i = 0; i < jiraChecklists.length; i++) {
		jiraChecklists[i].checked = this.checked;
	}
}

function getChecked(className) {
	var columnsChecklists = document.getElementsByClassName(className);
	var checklistToDisplay = [];
	for (var i = 0; i < columnsChecklists.length; i++) {
		var columnCheck = columnsChecklists[i];
		if (columnCheck.checked) {
			checklistToDisplay.push(columnCheck.name);
		}
	}
	return checklistToDisplay;
}

module.exports = IssueChecklistHandler;
},{}],7:[function(require,module,exports){
var RapidBoardHandler = function () {
};

RapidBoardHandler.getSprintIfFromURL = function(url) {
	return url.split("=")[1];
}

RapidBoardHandler.getOpenSprintsFromJSON = function(json) {
	var object = json;
	var sprints = object.sprints;
	var openSprintIds = [];
	for (var i=0; i < sprints.length; i++) {
		if (sprints[i].closed == false) {
			openSprintIds.push({name: sprints[i].name, id: sprints[i].id.toString()});
		}
	}
	return openSprintIds;
}

RapidBoardHandler.getJirasFromJSON = function(json) {
	var object = json;
	//There are two different APIs, handle both
	if (typeof object.contents.issueKeys !== "undefined") {
		return object.contents.issueKeys;	
	} else {
		var issues = [];
		issues = issues.concat(RapidBoardHandler.getArrayOfIssueIdsFromArrayOfIssueObjects(object.contents.completedIssues));
		issues = issues.concat(RapidBoardHandler.getArrayOfIssueIdsFromArrayOfIssueObjects(object.contents.incompletedIssues));
		issues = issues.concat(RapidBoardHandler.getArrayOfIssueIdsFromArrayOfIssueObjects(object.contents.puntedIssues));
		return issues;
	}
}

RapidBoardHandler.getArrayOfIssueIdsFromArrayOfIssueObjects = function(issueObjects) {
	var stringArray = [];
	for (var i=0; i < issueObjects.length; i++) {
		stringArray.push(issueObjects[i].key)
	}
	return stringArray;
}

},{}],8:[function(require,module,exports){
var SelectUtilities = function() {};

SelectUtilities._getBasicDropDown = function (name, callbackClass, callbackMethod) {
	var select = document.createElement("select");
	select.name = name;
	select.style.width = "300px";
	var self = callbackClass
	select.onchange = function() {self[callbackMethod](this)};
	return select;
}


SelectUtilities._createOption = function(value, display) {
	var option = document.createElement("option");
	option.setAttribute("value", value);
	option.innerHTML = display;
	return option;
}

SelectUtilities._createNoneOption = function() {
	return this._createOption("none", "None")
}

SelectUtilities._populateSelect = function(select, array, valueKey, nameKey) {
	for (var i=0; i < array.length; i++) {
		var value = array[i][valueKey];
		var name = array[i][nameKey];
		var option = this._createOption(value, name);
		select.appendChild(option);
	}
}
},{}],9:[function(require,module,exports){
var AuthenticationPanel = Object.create(HTMLElement.prototype);

var Emitr = require("./../../services/emitr");
var templateService = require("./../../services/templateService");

var AUTHENTICATION_COMPLETE = "authentication-complete";

Emitr(AuthenticationPanel);

AuthenticationPanel.createdCallback = function () {
    this.button = null;
    this.username = null;
    this.password = null;
    this.url = null;
    this.jiraOnDemand = null;
};

AuthenticationPanel.attachedCallback = function () {
    var template = templateService.getTemplate("authentication-panel");
    this.appendChild(template);

    this.button = this.querySelector(".authentication-button");
    this.username = this.querySelector(".authentication-username");
    this.password = this.querySelector(".authentication-password");
    this.url = this.querySelector(".authentication-url");
    this.jiraOnDemand = this.querySelector(".authentication-jira-on-demand");

    this.button.addEventListener("click", this.onButtonClicked.bind(this), false);
};

AuthenticationPanel.onButtonClicked = function () {
	this.trigger(AUTHENTICATION_COMPLETE, {
		username: this.username.value,
		password: this.password.value,
		url: this.url.value,
		jiraOnDemand: this.jiraOnDemand.value
	});
};

document.registerElement('jcm-authentication-panel', {prototype: AuthenticationPanel});

module.exports = AuthenticationPanel;
},{"./../../services/emitr":20,"./../../services/templateService":21}],10:[function(require,module,exports){
"use strict";

var templateService = require("./../../services/templateService");
var SelectionPage = Object.create(HTMLElement.prototype);

SelectionPage.createdCallback = function() {
	this.authenticationPanel = null;
};

SelectionPage.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("selection-page"), true);
    this.appendChild(template);
};

SelectionPage.onReleaseButtonClicked = function() {
	this.authenticationPanel.off("authentication-complete", this.connect, this);
};

document.registerElement('selection-page', {prototype: SelectionPage});

},{"./../../services/templateService":21}],11:[function(require,module,exports){
"use strict";

var SprintSelectionPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

SprintSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
};

SprintSelectionPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("sprint-selection-panel"), true);
    this.appendChild(template);
};

document.registerElement('jcm-sprint-selection-panel', {prototype: SprintSelectionPanel});

},{"./../../services/templateService":21}],12:[function(require,module,exports){
var CSVNavigator = function(jiraUrl, jiraNavigator) {
	this.jiraNavigator = jiraNavigator;
    this.jiraUrl = jiraUrl;

	this.csvJirasField = {
		value: ko.observable(),
		visible: ko.observable(false),
		change: function() {
			this.updateJiraListWithIndividualJiras();
			return
		}
	}
}

CSVNavigator.prototype.getDisplayName = function() {
	return "Comma Seperated Jiras";
}

CSVNavigator.prototype.requestTopLevelData = function() {
    this.jah = new JiraApiHandler(this.jiraUrl, this);
    this.csvJirasField.visible(true);
}

CSVNavigator.prototype.init = function() {
	ko.applyBindingsToNode(document.getElementById("csvJiras"), null, this);
}

CSVNavigator.prototype.updateJiraListWithIndividualJiras = function() {
	var jiras = this.csvJirasField.value().split(",").map(λ("_.trim()")).map(λ("_.toUpperCase()"));
	this.jiraNavigator.receiveJiraCallback(jiras);
}

CSVNavigator.prototype.hideAll = function() {
	this.csvJirasField.visible(false);
}
},{}],13:[function(require,module,exports){
var FixVersionNavigator = function(jiraUrl, jiraNavigator) {
	this.jiraNavigator = jiraNavigator;
    this.jiraUrl = jiraUrl;
	this.projectsDropDown = {
		value: ko.observable(),
		visible: ko.observable(false),
		options: ko.observableArray(),
		change: function() {
			if (this.projectsDropDown.value().value !== "none") {
				this.jah.requestFixVersions(this.projectsDropDown.value().value, function(data) {
					this.receiveFixVersionsData(data);
				}.bind(this));
			}
		}
	}
	this.sprintsDropDown = {
		value: ko.observable(),
		visible: ko.observable(false),
		options: ko.observableArray(),
		change: function() {
			if (this.sprintsDropDown.value().value !== "none") {
				this.jah.requestFixVersion(this.projectsDropDown.value().value,this.sprintsDropDown.value().value, function(data) {
					this.receiveJiraCallback(data.issues.map(λ("_.key")));
				}.bind(this));
			}
		}
	}
}

FixVersionNavigator.prototype.getDisplayName = function() {
	return "Sprint";
}

FixVersionNavigator.prototype.init = function() {
	ko.applyBindingsToNode(document.getElementById("projectsDropDown"), null, this);
	ko.applyBindingsToNode(document.getElementById("sprintsDropDown"), null, this);
}

FixVersionNavigator.prototype.hideAll = function() {
	this.projectsDropDown.visible(false);
	this.sprintsDropDown.visible(false);
}

FixVersionNavigator.prototype.requestTopLevelData = function() {
    this.jah = new JiraApiHandler(this.jiraUrl, this);
    this.jah.requestProjects(function(data) {
        this.receiveProjectData(data);
    }.bind(this));
}

FixVersionNavigator.prototype.receiveProjectData = function(views) {
	this.projectsDropDown.visible(true);
	JiraNavigator.setDropDown(this.projectsDropDown.options, views, "key", "name");
}

FixVersionNavigator.prototype.receiveFixVersionsData = function(views) {
	this.sprintsDropDown.visible(true);
	JiraNavigator.setDropDown(this.sprintsDropDown.options, views, "id", "name");
}

FixVersionNavigator.prototype.receiveJiraCallback = function(jiras) {
	this.jiraNavigator.receiveJiraCallback(jiras);
}
},{}],14:[function(require,module,exports){
_noneOption = {value: "none", text: "None"};
_noneOptionArray = [this._noneOption];

var JiraNavigator = function(jiraUrl) {
	this._noneOption = _noneOption;
	this._noneOptionArray = _noneOptionArray;

	this.navigatorMap = {};
	this.navigatorMap["fixversion"] = new FixVersionNavigator(jiraUrl, this);
	this.navigatorMap["rapidboard"] = new RapidBoardNavigator(jiraUrl, this);
    this.navigatorMap["jiras"] = new CSVNavigator(jiraUrl, this);
    this.navigatorMap["xboard"] = new XBoardNavigator(jiraUrl, this);

	this.selectionMethod = {
		value: ko.observable(),
		visible: ko.observable(true),
		options: this._noneOptionArray.concat(this.getNavigationTypes()),
		change: this.handleSelectionMethodChanged
	}
	this.jah = new JiraApiHandler(jiraUrl, this);
}

JiraNavigator.prototype.init = function() {
	ko.applyBindingsToNode(document.getElementById("selectionMethod"), null, this);
	for (var key in this.navigatorMap) {
		var navigator = this.navigatorMap[key];
		navigator.init();
	}
}

JiraNavigator.prototype.hideAllDropDown = function() {
	for (var key in this.navigatorMap) {
		var navigator = this.navigatorMap[key];
		navigator.hideAll();
	}
}

JiraNavigator.prototype.handleSelectionMethodChanged = function() {
	this.hideAllDropDown();
	var value = this.selectionMethod.value().value
	var navigator = this.navigatorMap[value];
	if (navigator !== undefined) {
		navigator.requestTopLevelData();
	}
}

JiraNavigator.prototype.getNavigationTypes = function() {
	var returnArray = [];
	for (var key in this.navigatorMap) {
		var navigator = this.navigatorMap[key];
		returnArray.push({value: key, text: navigator.getDisplayName()});
	}
	return returnArray;
}

JiraNavigator.prototype.clearJiraList = function(jiras) {
	var stageThree = document.getElementsByClassName("jira-list-panel")[0];
	stageThree.style.display = "none";
}

JiraNavigator.prototype.receiveJiraCallback = function(jiras) {
	receiveJiraCallback(jiras);
}

JiraNavigator.setDropDown = function(dropDown, views, value, text) {
	dropDown.splice(0,dropDown().length);
	dropDown.push(_noneOption);
	views.forEach(function(view) {
		dropDown.push({value: view[value], text: view[text]});
	}.bind(this));
}
},{}],15:[function(require,module,exports){
var RapidBoardNavigator = function(jiraUrl, jiraNavigator) {
	this.jiraNavigator = jiraNavigator;
    this.jiraUrl = jiraUrl;
	this.rapidBoardsDropDown = {
		value: ko.observable(),
		visible: ko.observable(false),
		options: ko.observableArray(),
		change: function() {
			if (this.rapidBoardsDropDown.value().value !== "none") {
				this.jah.requestRapidSprints(this.rapidBoardsDropDown.value().value, function(data) {
					this.receiveOpenRapidBoardSprints(data.sprints)
				}.bind(this));
			}
		}
	}
	this.rapidBoardSprintsDropDown = {
		value: ko.observable(),
		visible: ko.observable(false),
		options: ko.observableArray(),
		change: function() {
			if (this.rapidBoardSprintsDropDown.value().value !== "none") {
				this.jah.getRapidBoardSprint(this.rapidBoardsDropDown.value().value, this.rapidBoardSprintsDropDown.value().value, function(data) {
					var issues = RapidBoardHandler.getJirasFromJSON(data);
					this.receiveJiraCallback(issues);
				}.bind(this));
			}
		}
	}
}

RapidBoardNavigator.prototype.getDisplayName = function() {
	return "Rapid Board";
}

RapidBoardNavigator.prototype.requestTopLevelData = function() {
    this.jah = new JiraApiHandler(this.jiraUrl, this);
    this.jah.requestRapidViews(function(data) {
		this.receiveRapidBoardViews(data);
	}.bind(this));
}

RapidBoardNavigator.prototype.init = function() {
	ko.applyBindingsToNode(document.getElementById("rapidBoardsDropDown"), null, this);
	ko.applyBindingsToNode(document.getElementById("rapidBoardSprintsDropDown"), null, this);
}

RapidBoardNavigator.prototype.receiveRapidBoardViews = function(views) {
	this.rapidBoardsDropDown.visible(true);
	JiraNavigator.setDropDown(this.rapidBoardsDropDown.options, views.views, "id", "name");
}

RapidBoardNavigator.prototype.receiveOpenRapidBoardSprints = function(ids) {
	this.rapidBoardSprintsDropDown.visible(true);
	JiraNavigator.setDropDown(this.rapidBoardSprintsDropDown.options, ids, "id", "name")
}

RapidBoardNavigator.prototype.hideAll = function() {
	this.rapidBoardsDropDown.visible(false);
	this.rapidBoardSprintsDropDown.visible(false);
}

RapidBoardNavigator.prototype.receiveJiraCallback = function(jiras) {
	this.jiraNavigator.receiveJiraCallback(jiras);
}
},{}],16:[function(require,module,exports){
var XBoardNavigator = function(jiraUrl, jiraNavigator) {
	this.jiraNavigator = jiraNavigator;
    this.jiraUrl = jiraUrl;
	this.xBoardDropDown = {
		value: ko.observable(),
		visible: ko.observable(false),
		options: ko.observableArray(),
		change: function() {
            if (this.xBoardDropDown.value().value !== "none") {
                this.jah.requestXBoard(this.xBoardDropDown.value().value, this.receiveXBoardData.bind(this));
            }
		}
	}
	this.xBoardSprintsDropDown = {
		value: ko.observable(),
		visible: ko.observable(false),
		options: ko.observableArray(),
		change: function() {
			if (this.xBoardSprintsDropDown.value().value !== "none") {
                for (var i=0; i < this.sprints.length; i++) {
                    var sprint = this.sprints[i];
                    if (sprint.name == this.xBoardSprintsDropDown.value().value) {
                        this.jiraNavigator.receiveJiraCallback(sprint.jiras);
                    }
                }
			}
		}
	}
}

XBoardNavigator.prototype.getDisplayName = function() {
	return "XBoard";
}

XBoardNavigator.prototype.requestTopLevelData = function() {
    this.jah = new JiraApiHandler(this.jiraUrl, this);
    this.jah.requestXBoards(this.receiveXBoardList.bind(this));
}

XBoardNavigator.prototype.init = function() {
	ko.applyBindingsToNode(document.getElementById("xBoardDropDown"), null, this);
	ko.applyBindingsToNode(document.getElementById("xBoardSprints"), null, this);
}

XBoardNavigator.prototype.hideAll = function() {
	this.xBoardDropDown.visible(false);
    this.xBoardSprintsDropDown.visible(false);
}

XBoardNavigator.prototype.receiveXBoardData = function(jiraData) {
    //TODO: Cleanup this architecture, we need to pass epics data to the app nicely somehow
    epics = jiraData.epicData.epics;
    this.sprints = this.getSprints(jiraData);
    this.xBoardSprintsDropDown.visible(true);
    JiraNavigator.setDropDown(this.xBoardSprintsDropDown.options, this.sprints, "name", "name");
}

XBoardNavigator.prototype.receiveXBoardList = function(jiraData) {
    this.xBoardDropDown.visible(true);
    JiraNavigator.setDropDown(this.xBoardDropDown.options, jiraData.views, "id", "name");
}

XBoardNavigator.prototype.getSprints = function(jiraData) {
    var sprints = [];
    if (jiraData.openSprints) {
        for (var i=0; i < jiraData.openSprints.length; i++) {
            var openSprint = jiraData.openSprints[i];
            sprints.push({name: openSprint.name, jiras: this.getKeyFromIssue(openSprint.issues)});
        }
        for (var i=0; i < jiraData.markers.length; i++) {
            var marker = jiraData.markers[i];
            var sprint = {name: marker.name, jiras: []}
            sprints.push(sprint);
            while (jiraData.issues.length !== 0){
                if (marker.afterIssueKey === undefined) {
                    break;
                }
                var jira = jiraData.issues.shift();
                sprint.jiras.push(jira.key);
                if (jira.key == marker.afterIssueKey) {
                    break
                }
            }

        }
        sprints.push({name: "Backlog", jiras: this.getKeyFromIssue(jiraData.issues)});
    } else {
       var jiraMap = {};
        jiraData.issues.forEach(function(issue) {
            jiraMap[issue.id] = issue;
        })
        //var sprintIssueArray = [];
        jiraData.sprints.forEach(function(sprint) {
            var sprintIssues = [];
            sprint.issuesIds.forEach(function(issueId) {
                sprintIssues.push(jiraMap[issueId].key);
                delete jiraMap[issueId];
            })
            sprints.push({name: sprint.name, jiras: sprintIssues});
        });
        var sprintIssues = [];
        for (var key in jiraMap) {
            sprintIssues.push(jiraMap[key].key);
        }
        sprints.push({name: "Backlog", jiras: sprintIssues});

    }
    return sprints

}

XBoardNavigator.prototype.getKeyFromIssue = function(issues) {
    var returnKeys = [];
    issues.forEach(function(_) {
        returnKeys.push(_.key);
    })
    return returnKeys;
}

},{}],17:[function(require,module,exports){
var JiraApi = function(domain, json, username, password) {
    this.dataType = "jsonp"
    if (json === true) {
        this.dataType = "json";
        this.username = username;
        this.password = password;
    }
	this.domain = domain
    this.jsonApiUrl = this.domain + "/rest/api/latest/";
    this.jsonGreenhopperApiUrl = this.domain + "/rest/greenhopper/latest/";

    this.jch = new JiraCommunicationHandler(domain, username, password);
}

JiraApi.getRandomString = function() {
	return Math.random().toString().substr(2);
}

JiraApi.getRandomFunction = function(callback) {
	var randomString = this.getRandomString();
	var functionName = "cb" + randomString;
	JiraApi[functionName] = function(data) {
		delete window["JiraApi"][functionName];
		callback(data)
	};
	return "JiraApi." + functionName;
}

JiraApi.prototype.getProjects = function(callback) {
	this.getData(callback, "project")
}

JiraApi.prototype.getVersions = function(callback, project) {
	var uriSuffix = "project/" + project + "/versions";
	this.getData(callback, uriSuffix)
}

JiraApi.prototype.getVersion = function(callback, project, fixVersionId) {
	var uriSuffix = "search?jql=project=" + project + "+AND+fixversion=" + fixVersionId + "&maxResults=1000";
	this.getData(callback, uriSuffix)
}

JiraApi.prototype.getIssue = function(callback, issue) {
    var uriSuffix = "issue/" + issue;
    this.getData(callback, uriSuffix)
}

JiraApi.prototype.getGreenhopperList = function(callback) {
    var uriSuffix = "rapidviews/list";
    this.getData(callback, uriSuffix, true)
}

JiraApi.prototype.getGreenhopperSprints = function(callback, sprintId) {
    var uriSuffix = "sprints/" + sprintId;
    this.getData(callback, uriSuffix, true)
}

JiraApi.prototype.getGreenhopperSprint = function(callback, rapidViewId, sprintId) {
    var uriSuffix = "rapid/charts/sprintreport?rapidViewId=" + rapidViewId + "&sprintId=" + sprintId;
    this.getData(callback, uriSuffix, true);
}

JiraApi.prototype.getData = function(callback, type, isGreenhopper) {

    var requestUrl = this.jsonApiUrl + type;
    if (isGreenhopper === true) {
        requestUrl = this.jsonGreenhopperApiUrl + type;
    }

    this.jch.getData(callback, requestUrl);
}

},{}],18:[function(require,module,exports){
var JiraApiHandler = function(jiraUrl, listener) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    this.jiraApi = new JiraApi(jiraUrl, true, username, password);
	this.baseUrl = jiraUrl;
	this.listener = listener;
	this.jiraMap = {};

	this.requested = false;
	this.expectedCallbacks = 0;
	this.callbacksReceived = 0;
};

// Interface method - requestIssues passing in an array of issue ids.
JiraApiHandler.prototype.requestIssues = function(issueIds, callback) {
    //TODO: This will break if invoked twice quickly.
	if (!this.requested) {
        this.requestIssuesCallback = callback;
		this.requested = true;
		this.requestJiras(issueIds);
		this.chosenIssues = issueIds;
	} else {
		throw new Error("You can only request issues once.");
	}
};

JiraApiHandler.prototype.requestJiras = function(jiraIds) {
    jiraIds = _.uniq(jiraIds);
	this.expectedCallbacks = jiraIds.length;
	this.callbacksReceived = 0;
	this.requestJirasWithSQL(jiraIds, this.processCardsData.bind(this));
};

JiraApiHandler.getJirasRequestQuery = function(jiraIds) {
	if (jiraIds == null) return null;
	return jiraIds.map(λ("'key='+_")).join("+or+");
}


JiraApiHandler.prototype.isParentLoaded = function (card) {
	if (card.parentIssueId) {
		return this.jiraMap[card.parentIssueId] != null;
	} else {
		return true;
	}
};

JiraApiHandler.prototype.parentsNotLoaded = function () {
	var parentsNotLoaded = [];
	for (var index in this.jiraMap) {
		var card = this.jiraMap[index];
        if (!this.isParentLoaded(card)) {
            parentsNotLoaded.push(card.parentIssueId);
        }
        for (var i=0; i < card.subtasks.length; i++) {
            var subtaskId = card.subtasks[i];
            if (this.jiraMap[subtaskId] == null) {
                parentsNotLoaded.push(subtaskId);
                this.chosenIssues.push(subtaskId);
            }
        }
	}
	return parentsNotLoaded
};

JiraApiHandler.prototype.processCardsData = function(jiraData) {
	jiraData.issues.forEach(function(issue) {
		this.processCardData(issue);
	}.bind(this));
};

JiraApiHandler.prototype.processCardData = function(jiraData) {
this.callbacksReceived++;
	this.jiraMap[jiraData.key] = this.createCard(jiraData);
	if (this.callbacksReceived == this.expectedCallbacks) {
		this.renderCardsIfReady();
	}
};

JiraApiHandler.prototype.processJiraData = function(jiraData) {
	this.processCardData(jiraData);
};

JiraApiHandler.prototype.createCard = function (jira) {
	var componentString = "";
	var components = jira.fields.components;
	if (components.length != 0) {
		var componentsString = "";
		for (var id in components) {
			componentsString += components[id].name + ",";
		}
		componentString = componentsString.substring(0, componentsString.length - 1) + ":";
	}
	var card = new Card(jira.key,
		this.baseUrl + "/browse/" + jira.key,
		jira.fields.issuetype.name,
		jira.fields["customfield_10243"],
		jira.fields.summary,
		componentString,
		jira.fields["customfield_10151"],
        jira.fields["customfield_10261"],
        jira.fields["customfield_10870"],
		jira.fields.parent ? jira.fields.parent.key : null,
        jira.fields.subtasks.map(function(_) {return _.key})
	);
	return card;
};

JiraApiHandler.prototype.renderCardsIfReady = function () {
	var parentsNotLoaded = this.parentsNotLoaded();
		this.requestJiras(parentsNotLoaded);
	if (parentsNotLoaded.length !== 0) {
	} else {
        this.requestIssuesCallback(this.chosenIssues, this.jiraMap);
	}
};

JiraApiHandler.prototype.getRapidBoardSprint = function(viewId, sprintId, callback) {
    this.jiraApi.getGreenhopperSprint(callback, viewId, sprintId);
}

JiraApiHandler.prototype.requestRapidSprints = function(sprintId, callback) {
	//https://jira.caplin.com/rest/greenhopper/latest/sprints/11
	jiraUrl = this.baseUrl + "/rest/greenhopper/latest/sprints/" + sprintId;

	if (document.getElementById('jiraOnDemand').checked) {
		//CJB. Modified to work around recent bug in RapidBoard API
		//https://github.com/Shikaga/JiraAgileCardMaker/issues/20
		//https://jira.caplin.com/rest/greenhopper/latest/sprintquery/11?includeFutureSprints=true&includeHistoricSprints=false
		jiraUrl = this.baseUrl + "/rest/greenhopper/latest/sprintquery/" + sprintId + "?includeFutureSprints=true&includeHistoricSprints=false";
	}

	this.jiraApi.jch.getData(callback, jiraUrl);
}

JiraApiHandler.prototype.requestRapidViews = function(callback) {
	//https://jira.caplin.com/rest/greenhopper/latest/rapidviews/list
	var jiraUrl = this.baseUrl + "/rest/greenhopper/latest/rapidviews/list";
	this.jiraApi.jch.getData(callback, jiraUrl);
}

JiraApiHandler.prototype.requestXBoard = function(rapidViewId, callback) {
	//https://jira.caplin.com/rest/greenhopper/1.0/xboard/plan/backlog/data.json?rapidViewId=43
	var jiraUrl = this.baseUrl + "/rest/greenhopper/1.0/xboard/plan/backlog/data.json?rapidViewId=" + rapidViewId;
	this.jiraApi.jch.getData(callback, jiraUrl);
}

JiraApiHandler.prototype.requestXBoards = function(callback) {
	//https://jira.caplin.com/rest/greenhopper/1.0/rapidviews/viewsData.json
	var jiraUrl = this.baseUrl + "/rest/greenhopper/1.0/rapidviews/viewsData.json";
	this.jiraApi.jch.getData(callback, jiraUrl);
}

JiraApiHandler.prototype.requestProjects = function(callback) {
	//https://jira.springsource.org/rest/api/latest/project
	var jiraUrl = this.baseUrl + "/rest/api/latest/project";
	this.jiraApi.jch.getData(callback, jiraUrl);
}

JiraApiHandler.prototype.requestFixVersions = function(project, callback) {
	//https://jira.springsource.org/rest/api/latest/project/BATCH/versions
	var jiraUrl = this.baseUrl + "/rest/api/latest/project/" + project + "/versions"
	this.jiraApi.jch.getData(callback, jiraUrl);
}

JiraApiHandler.prototype.requestFixVersion = function(project, fixversion, callback) {

    jiraUrl = this.baseUrl + "/rest/api/latest/search?jql=project=" + project + "%20AND%20fixversion=" + fixversion + "&fields=key&maxResults=1000";
    this.jiraApi.jch.getData(callback, jiraUrl);
};

JiraApiHandler.prototype.requestJirasWithSQL = function(jiraIds,callback) {
	if (jiraIds.length == 0) return;
	var jiraUrl = this.baseUrl + "/rest/api/latest/search?jql=" + JiraApiHandler.getJirasRequestQuery(jiraIds) + "&maxResults=1000";
	this.jiraApi.jch.getData(callback, jiraUrl);
};

JiraApiHandler.prototype.getCallbackName = function() {
	var callbackName = "_jiraProcessData_";
	while (window[callbackName]) {
		callbackName += "X";
	}
	window[callbackName] = function(jiraData) {
		this.processJiraData(jiraData);
		delete window[callbackName];
	}.bind(this);
	return callbackName
}
},{}],19:[function(require,module,exports){
var JiraCommunicationHandler = function(domain, username, password) {
	this.domain = domain;
	this.username = username;
	this.password = password;
	this.dataTypes = {
		JSONP: 0,
		JSON: 1,
		JSONWITHAUTH: 2
	}
	this.dataType = null;
	this.detectConnectionType();
	this.queuedRequests = [];
}

JiraCommunicationHandler.prototype.getData = function(callback, requestUrl) {
	if (this.dataType === null) {
		this.queuedRequests.push({callback: callback, requestUrl: requestUrl});
	} else {
		if (this.dataType === this.dataTypes.JSONP) {
			this.getDataWithJSONP(callback, requestUrl);
		} else if (this.dataType === this.dataTypes.JSON) {
			this.getDataWithJSON(callback, requestUrl);
		}
	}
}

JiraCommunicationHandler.prototype.detectConnectionType = function() {
	this.tryJsonp();
	this.tryJson();
}

JiraCommunicationHandler.prototype.setConnectionType = function(connectionType) {
	if (this.dataType == null) {
		this.dataType = connectionType;
	}
	console.log(this.dataType);
	this.sendQueuedRequests();
}

JiraCommunicationHandler.prototype.sendQueuedRequests = function() {
	this.queuedRequests.forEach(function(queuedRequest) {
		this.getData(queuedRequest.callback, queuedRequest.requestUrl);
	}.bind(this));
	this.queuedRequests = [];
}

JiraCommunicationHandler.prototype.tryJsonp = function() {
	this.getDataWithJSONP(function(data) {
		if (data !== "failed") {
			this.setConnectionType(this.dataTypes.JSONP);
		}
	}.bind(this), this.domain + "/rest/api/latest/project");
}

JiraCommunicationHandler.prototype.tryJson = function() {
	this.getDataWithJSON(function(data) {
		if (data === 401) { //failed to authenticate
			console.log("Auth failed!")
			if (this.dataType === null) {
				alert("Wrong username or password");
			}
		} else if (data.toString() === "") {
			console.log("Auth required!")
			if (this.dataType === null) {
				alert("You need to supply authentication details");
			}
		} else {
			this.setConnectionType(this.dataTypes.JSON);
		}
	}.bind(this), this.domain + "/rest/api/latest/project");
}

JiraCommunicationHandler.prototype.getDataWithJSONP = function(callback, requestUrl) {
	var randomFunctionName = JiraApi.getRandomFunction(callback);
	if (requestUrl.indexOf("?") == -1) {
		var callbackAppend = "?jsonp-callback=" + randomFunctionName;
	} else {
		var callbackAppend = "&jsonp-callback=" + randomFunctionName;
	}
	$.ajax({
		type: "GET",
		url: requestUrl + callbackAppend,
		contentType: "application/javascript; charset=utf-8",
		dataType: "jsonp",
		success: function (data) { },
		error: function (errormessage) {
            if (errormessage.status !== 200) {
                callback("failed")
            }
        }
	});
}

JiraCommunicationHandler.prototype.getDataWithJSON = function(callback, requestUrl) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://cors-anywhere.herokuapp.com/" + requestUrl)
	if (this.username !== "") {
		this.setAuthorizationHeader(xhr);
	}
	xhr.setRequestHeader("x-requested-with", "love");
	xhr.send();
	xhr.onload = function(response) {
		if (this.status === 401) {
			callback(this.status);
		} else {
			var data = JSON.parse(response.target.response);
			callback(data);
		}
	};

}

JiraCommunicationHandler.prototype.setAuthorizationHeader = function(xhr) {
	var authHeader = "Basic "+btoa(this.username + ":" + this.password);
	xhr.setRequestHeader("Authorization", authHeader);
}
},{}],20:[function(require,module,exports){
"use strict";

module.exports = function (target) {
    var events = {}
    target = target;

    target.on = function (eventId, callback, context) {
        (events[eventId] = events[eventId] || []).push([callback, context]);
    }

    target.off = function (eventId, callback) {
        if (arguments.length === 0) {
            //clear all listeners for this object
            events = {};
        } else if (arguments.length === 1) {
            //clear all listeners for a particular eventId
            events[eventId] = [];
        } else {
            //clear a listener with specific context for a particular eventId
            var callbackList = events[eventId] || [];

            for (var i = callbackList.length - 1 ; i >= 0 ; i--) {
                if (callbackList[i][0] === callback) {
                    callbackList.splice(i, 1);
                }
            };
        }
    }

    target.trigger = function (eventId) {
        var callbackList = events[eventId] || [];
        var args = Array.prototype.slice.call(arguments, 1);

        for (var i = callbackList.length - 1 ; i >= 0 ; i--) {
            callbackList[i][0].apply(callbackList[i][1], args);
        };
    };
}

},{}],21:[function(require,module,exports){
var templateService = {};

templateService.getTemplate = function(id) {
    var link = document.querySelector('link[rel="import"][data-id="' + id + '"');
    var template = link.import.querySelector("template");
    return template.content;
};

module.exports = templateService;
},{}]},{},[1]);
