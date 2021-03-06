(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./components/authentication-panel/authentication-panel.js");
require("./components/selection-page/selection-page.js");
require("./components/print-page/print-page.js");
require("./components/card/card.js");
require("./components/layout-panel/layout-panel.js");
require("./components/layout-options/layout-options.js");
require("./components/loading-screen/loading-screen.js");
require("./../lib/webcomponents-lite.min.js");

var EVENTS = require("./events.js");
var templateService = require("./services/templateService");

var JiraCardMakerApp = Object.create(HTMLElement.prototype);

JiraCardMakerApp.createdCallback = function () {
	this._selectionPage = null;
	this._printPage = null;
};

JiraCardMakerApp.attachedCallback = function () {
	this.template = document.importNode(templateService.getTemplate("app"), true);
    this.appendChild(this.template);

	this._selectionPage = this.querySelector("selection-page");
	this._printPage = this.querySelector("selection-print-page");

	this._selectionPage.on(EVENTS.TASK_PANEL.TASKS_SELECTED, this._onTasksSelected, this);
};

JiraCardMakerApp._onTasksSelected = function (params) {
	this._selectionPage.hide();
	this._printPage.show(params);
};

document.registerElement('jcm-app', {prototype: JiraCardMakerApp});

},{"./../lib/webcomponents-lite.min.js":2,"./components/authentication-panel/authentication-panel.js":4,"./components/card/card.js":6,"./components/layout-options/layout-options.js":7,"./components/layout-panel/layout-panel.js":8,"./components/loading-screen/loading-screen.js":9,"./components/print-page/print-page.js":10,"./components/selection-page/selection-page.js":11,"./events.js":15,"./services/templateService":19}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
var AppConfig = {
	LAYOUT_EXAMPLE_TASK_DATA: {
		key: "FXM-1000",
      	title: "Update login-screen",
      	epic: "web components",
      	parent: "FXM-18",
        fields: {
            priority: {
              id: "4",
              name: "High"
            },
            summary: "Update login screen with wecomponents",
            customfield_10243: 4,
            issuetype: {
            	name: "Bug",
            	color: "red"
            },
            customfield_10870: "FXM-1000"
        }
	},
    LAYOUT_EXAMPLE_EPIC_DATA: {
        epics: [
            {
                key: "FXM-1000",
                epicLabel: "Technical debt",
                epicColor: "yellow"
            }
        ]
    },
	LAYOUT_CONFIG: {
        keys: ["color", "qrcode", "parent", "epic", "priority", "estimate"],
        parameters: {
            color: {
                label: "Color",
                checked: true
            },
            qrcode: {
                label: "QR Code",
                checked: true
            },
            parent: {
                label: "Parent",
                checked: true
            },
            epic: {
                label: "Epic",
                checked: true
            },
            priority: {
                label: "Priority",
                checked: true
            },
            estimate: {
                label: "Estimate task point",
                checked: true
            }
        }
	}
};

module.exports = AppConfig;
},{}],4:[function(require,module,exports){
var AuthenticationPanel = Object.create(HTMLElement.prototype);

var Emitr = require("./../../services/emitr");
var templateService = require("./../../services/templateService");

var EVENTS = require("../../events");

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

    this.button.addEventListener("click", this.onButtonClicked.bind(this), false);
};

AuthenticationPanel.onButtonClicked = function () {
	this.trigger(EVENTS.AUTHENTICATION_PANEL.AUTHENTICATION_SUBMITTED, {
		username: this.username.value,
		password: this.password.value,
		url: this.url.value
	});
};

document.registerElement('jcm-authentication-panel', {prototype: AuthenticationPanel});

module.exports = AuthenticationPanel;
},{"../../events":15,"./../../services/emitr":16,"./../../services/templateService":19}],5:[function(require,module,exports){
"use strict";

var Emitr = require("./../../services/emitr");

var BoardSelectionPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

var EVENTS = require("../../events");

Emitr(BoardSelectionPanel);

BoardSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
};

BoardSelectionPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("board-selection-panel"), true);
    this.appendChild(template);
    this.boardSelector = this.querySelector(".board-selector");
    this.boardSelectionButton = this.querySelector("button");
    this.boardSelectionButton.addEventListener("click", this.onBoardSelected.bind(this), false);
};

BoardSelectionPanel.setBoards = function (boards) {
	this.style.display = "block";
	for (var i = 0, len = boards.length ; i < len ; i++) {
		this.boardSelector.appendChild(this._createOption(boards[i].name, boards[i].id));
	}
};

BoardSelectionPanel.onBoardSelected = function () {
	this.trigger(EVENTS.BOARD_PANEL.BOARD_SELECTED, this.boardSelector.value);
};

BoardSelectionPanel._createOption = function (label, value) {
	var optionItem = document.createElement("option");
	optionItem.value = value;
	optionItem.textContent = label;
	return optionItem;
};

document.registerElement('jcm-board-selection-panel', {prototype: BoardSelectionPanel});

},{"../../events":15,"./../../services/emitr":16,"./../../services/templateService":19}],6:[function(require,module,exports){
"use strict";

var templateService = require("./../../services/templateService");
var Card = Object.create(HTMLElement.prototype);

Card.createdCallback = function () {
	this._data = null;
	this._cardLayoutConfig = null;
	this._priority = null;

	this._taskContainer = null;
	this._taskIdContainer = null;
    this._taskProjectContainer = null;
    this._parentIdContainer = 
    this._parentProjectContainer = null;
    this._estimateContainer = null;
    this._qrcodeContainer = null;
    this._epicContainer = null;
    this._summaryContainer = null;
    this._priorityContainer = null;
};

Card.attachedCallback = function () {
	var template = document.importNode(templateService.getTemplate("card"), true);
    this.appendChild(template);

    this._taskContainer = this.querySelector(".task-container");
    this._taskIdContainer = this.querySelector(".task-id");
    this._taskProjectContainer = this.querySelector(".task-project-id");
    this._parentIdContainer = this.querySelector(".parent-id");
    this._parentProjectContainer = this.querySelector(".parent-project-id");
    this._estimateContainer = this.querySelector(".task-estimate");
    this._qrcodeContainer = this.querySelector(".task-qrcode");
    this._epicContainer = this.querySelector(".task-epic");
    this._summaryContainer = this.querySelector(".task-summary");
    this._priorityContainer = this.querySelector(".task-priority");
};

Card.updateData = function (data) {
	this._data = data;
	this._updateUI();
};

Card.updateConfig = function (layoutConfig) {
	this._cardLayoutConfig = layoutConfig;
	this._epicConfig = layoutConfig;
	this._updateUI();
};

Card._updateUI = function () {
	if (this._cardLayoutConfig && this._data) {
		var key = this._data.getKey();
	    this._taskIdContainer.textContent = key.id;
	    this._taskProjectContainer.textContent = key.project;

	    if (this._cardLayoutConfig.color.checked) {
	    	this._taskContainer.classList.add(this._data.getType());
	    } else {
	    	this._taskContainer.classList.remove(this._data.getType());
	    }

	    var priority = this._data.getPriority();
	    this._priorityContainer.classList.add("priority" + priority.id);

	    this._estimateContainer.textContent = this._data.getEstimation();
	    this._summaryContainer.textContent = this._data.getDescription();

	   	this._qrcodeContainer.src = "http://qr.kaywa.com/?s=8&d=" + "https://jira.caplin.com/browse/" + this._data.key;

	    var parent = this._data.getParent();
	    if (parent) {
	    	this._parentIdContainer.textContent = parent.id;
	    	this._parentProjectContainer.textContent = parent.project;
	    	this._parentIdContainer.style.visibility = this._cardLayoutConfig.parent.checked === true ? "visible" : "hidden";
		    this._parentProjectContainer.style.visibility = this._cardLayoutConfig.parent.checked === true ? "visible" : "hidden";;
	    }		    

	    var epic = this._data.getEpics();
		if (epic) {
	    	this._epicContainer.textContent = epic.name;
	    	this._epicContainer.style.background = epic.color; 
		} else {
			this._epicContainer.style.display = "none";
		}

	    this._estimateContainer.style.visibility = this._cardLayoutConfig.estimate.checked === true ? "visible" : "hidden";;
	    this._qrcodeContainer.style.visibility = this._cardLayoutConfig.qrcode.checked === true ? "visible" : "hidden";;
	    this._epicContainer.style.visibility = this._cardLayoutConfig.epic.checked === true ? "visible" : "hidden";;
	    this._priorityContainer.style.visibility = this._cardLayoutConfig.priority.checked === true ? "visible" : "hidden";;
	}
};

document.registerElement('jcm-card', {prototype: Card});

},{"./../../services/templateService":19}],7:[function(require,module,exports){
"use strict";

var Emitr = require("./../../services/emitr");

var LayoutOptions = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");
var EVENTS = require("../../events");

Emitr(LayoutOptions);

LayoutOptions.createdCallback = function () {
	this._config = null;
};

LayoutOptions.attachedCallback = function () {
};

LayoutOptions.setOptionsConfiguration = function (config) {
	this._config = config;

	for (var i = 0, len = this._config.keys.length ; i < len ; i++) {
		this.appendChild(this._createOptionItem(this._config.parameters[this._config.keys[i]], this._config.keys[i]));
	}
};

LayoutOptions._createOptionItem = function (params, value) {
	var parent = document.createElement("label");

	var input = document.createElement("input");
	input.type = "checkbox";
	input.checked = params.checked;
	input.dataset.value = value;
	parent.appendChild(input);

	var label = document.createElement("span");
	label.textContent = params.label;
	parent.appendChild(label);

	input.addEventListener("click", this._onValueChanged.bind(this, input), false);

	return parent;
};

LayoutOptions._onValueChanged = function (input) {
	this._config.parameters[input.dataset.value].checked = input.checked;
	this.trigger(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._config.parameters);
};

document.registerElement('layout-options', {prototype: LayoutOptions});

},{"../../events":15,"./../../services/emitr":16,"./../../services/templateService":19}],8:[function(require,module,exports){
"use strict";

var Emitr = require("./../../services/emitr");
var templateService = require("./../../services/templateService");
var EVENTS = require("./../../events");

var LayoutPanel = Object.create(HTMLElement.prototype);

Emitr(LayoutPanel);

LayoutPanel.createdCallback = function() {
    this._cardData = null;
    this._cardLayoutOptions = null;
};

LayoutPanel.attachedCallback = function() {
    var template = document.importNode(templateService.getTemplate("layout-panel"), true);
    this.appendChild(template);

    this._cardExample = this.querySelector("jcm-card");
    this._layoutOptions = this.querySelector("layout-options");
};

LayoutPanel.init = function (cardData, cardLayoutOptions) {
    this._cardLayoutOptions = cardLayoutOptions;
    this._cardData = cardData;

    this._layoutOptions.setOptionsConfiguration(this._cardLayoutOptions); 
    this._layoutOptions.on(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._onLayoutOptionsChanged, this);

    this._cardExample.updateData(this._cardData);
    this._cardExample.updateConfig(this._cardLayoutOptions.parameters);
};

LayoutPanel._onLayoutOptionsChanged = function (config) {
    this._cardLayoutOptions = config;
    this._cardExample.updateConfig(this._cardLayoutOptions);
    this.trigger(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._cardLayoutOptions);
};

document.registerElement('jcm-layout-panel', {prototype: LayoutPanel});

},{"./../../events":15,"./../../services/emitr":16,"./../../services/templateService":19}],9:[function(require,module,exports){
"use strict";

var LoadingScreen = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService")

LoadingScreen.createdCallback = function() {
	this.authenticationPanel = null;
};

LoadingScreen.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("loading-screen"), true);
    this.appendChild(template);
};

LoadingScreen.show = function() {
	this.style.display = "block";
};

LoadingScreen.hide = function() {
	this.style.display = "none";
};

document.registerElement('loading-screen', {prototype: LoadingScreen});

},{"./../../services/templateService":19}],10:[function(require,module,exports){
"use strict";

var PrintPage = Object.create(HTMLElement.prototype);

PrintPage.createdCallback = function() {
};

PrintPage.attachedCallback = function() {
};

PrintPage.show = function (params) {	
    this.style.display = "block";
    
    for (var i = 0, len = params.tasks.length ; i < len ; i++) {
        var card = document.createElement("jcm-card");
        this.appendChild(card);
        card.updateData(params.tasks[i]);
        card.updateConfig(params.layoutConfig);
    }
};

document.registerElement('selection-print-page', {prototype: PrintPage});

},{}],11:[function(require,module,exports){
"use strict";

var Emitr = require("./../../services/emitr");

var templateService = require("./../../services/templateService");
var SelectionPage = Object.create(HTMLElement.prototype);
var JiraAdapter = require("./../../services/jiraAdapter");

var EVENTS = require("./../../events");
var AppConfig = require("./../../appConfig.js");
var Task = require("./../../services/task");

require("./../sprint-selection-panel/sprint-selection-panel.js");
require("./../board-selection-panel/board-selection-panel.js");
require("./../task-selection-panel/task-selection-panel.js");


Emitr(SelectionPage);

SelectionPage.createdCallback = function() {
	this.authenticationPanel = null;
	this.loadingScreen = null;
    this._sprintConfig = null;
    this._layoutConfig = AppConfig.LAYOUT_CONFIG.parameters;
	this.jiraAdapter = new JiraAdapter();
};

SelectionPage.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("selection-page"), true);
    this.appendChild(template);

    this.loadingScreen = this.querySelector("loading-screen");

    this.authenticationPanel = this.querySelector("jcm-authentication-panel");
    this.authenticationPanel.on(EVENTS.AUTHENTICATION_PANEL.AUTHENTICATION_SUBMITTED, this._onAuthenticationSubmitted, this);

    this.boardSelectionPanel = this.querySelector("jcm-board-selection-panel");
    this.boardSelectionPanel.on(EVENTS.BOARD_PANEL.BOARD_SELECTED, this._onBoardSelected, this);

    this.sprintSelectionPanel = this.querySelector("jcm-sprint-selection-panel");
    this.sprintSelectionPanel.on(EVENTS.SPRINT_PANEL.SPRINT_SELECTED, this._onSprintSelected, this);

    this.taskSelectionPanel = this.querySelector("jcm-task-selection-panel");
    this.taskSelectionPanel.on(EVENTS.TASK_PANEL.TASKS_SELECTED, this._ontaskSelected, this);

    this.layoutPanel = this.querySelector("jcm-layout-panel");
    this.layoutPanel.init(new Task(AppConfig.LAYOUT_EXAMPLE_TASK_DATA, AppConfig.LAYOUT_EXAMPLE_EPIC_DATA), AppConfig.LAYOUT_CONFIG);
    this.layoutPanel.on(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._onLayoutOptionsChanged, this);
};

SelectionPage._onAuthenticationSubmitted = function(parameters) {
    this.jiraAdapter.setAuthenticationDetails(parameters);
	this.loadingScreen.show("loading in progress");

    var self = this;

    var callBacks = {
        success: function(boards) {
            self.boardSelectionPanel.setBoards(boards);
            self.loadingScreen.hide();
        },
        error: function(error) {
            self.loadingScreen.hide();
            alert("Authentication failed");
        }
    };

    this.jiraAdapter.getBoards().then(callBacks.success, callBacks.error);
};

SelectionPage._onBoardSelected = function (boardId) {
	this.loadingScreen.show("loading in progress");
    this.jiraAdapter.getSprints(boardId).then(function(sprintsConfig) {
        this._sprintConfig = sprintsConfig;
    	this.sprintSelectionPanel.setSprints(sprintsConfig.sprints);
    	this.loadingScreen.hide();
    }.bind(this));
};

SelectionPage._onLayoutOptionsChanged = function (params) {
    this._layoutConfig = params;
};

SelectionPage.hide = function () {
    this.style.display = "none";
};

SelectionPage._onSprintSelected = function (sprintId) {
    this.loadingScreen.show("loading in progress");
    this.jiraAdapter.getTasksDetails(sprintId).then(function(tasksDetails) {
        this.loadingScreen.hide();
        this.taskSelectionPanel.setTickets(tasksDetails);
    }.bind(this));
};

SelectionPage._ontaskSelected = function (selectedTasks) {
    this.trigger(EVENTS.TASK_PANEL.TASKS_SELECTED, {
        tasks: selectedTasks,
        layoutConfig: this._layoutConfig
    });
};

document.registerElement('selection-page', {prototype: SelectionPage});

},{"./../../appConfig.js":3,"./../../events":15,"./../../services/emitr":16,"./../../services/jiraAdapter":17,"./../../services/task":18,"./../../services/templateService":19,"./../board-selection-panel/board-selection-panel.js":5,"./../sprint-selection-panel/sprint-selection-panel.js":12,"./../task-selection-panel/task-selection-panel.js":13}],12:[function(require,module,exports){
"use strict";

var Emitr = require("./../../services/emitr");

var SprintSelectionPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

var EVENTS = require("../../events");

Emitr(SprintSelectionPanel);

SprintSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
};

SprintSelectionPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("sprint-selection-panel"), true);
    this.appendChild(template);
    this.sprintSelector = this.querySelector(".sprint-selector");
    this.sprintSelectionButton = this.querySelector("button");
    this.sprintSelectionButton.addEventListener("click", this.onSprintSelected.bind(this), false);
};

SprintSelectionPanel.setSprints = function (sprints) {
	this.style.display = "block";
	for (var i = 0, len = sprints.length ; i < len ; i++) {
		this.sprintSelector.appendChild(this._createOption(sprints[i]));
	}
};

SprintSelectionPanel.onSprintSelected = function () {
	this.trigger(EVENTS.SPRINT_PANEL.SPRINT_SELECTED, this.sprintSelector.value);
};

SprintSelectionPanel._createOption = function (params) {
	var optionItem = document.createElement("option");
	optionItem.value = params.id;

	var label = params.name;

	if (params.state === "ACTIVE") {
		label = label + " (active)";
	}
	optionItem.textContent = label;
	return optionItem;
};

document.registerElement('jcm-sprint-selection-panel', {prototype: SprintSelectionPanel});

},{"../../events":15,"./../../services/emitr":16,"./../../services/templateService":19}],13:[function(require,module,exports){
"use strict";

var Emitr = require("./../../services/emitr");

var TaskSelectionPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

require("./../task-selection-row/task-selection-row.js");

var EVENTS = require("../../events");

Emitr(TaskSelectionPanel);

TaskSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
	this.printButton = null;
	this.selectAllButton = null;
	this.unSelectAllButton = null;
	this._selectedTaskItems = {};
	this._taskItems = [];
};

TaskSelectionPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("task-selection-panel"), true);
    this.appendChild(template);
    this.taskContainer = this.querySelector("panel-body");
    this.printButton = this.querySelector(".print-tickets-button");
	this.selectAllButton = this.querySelector(".select-all-button");
	this.unSelectAllButton = this.querySelector(".unselect-all-button");  
    this.printButton.addEventListener("click", this._onPrintButtonClicked.bind(this), false);
    this.selectAllButton.addEventListener("click", this._toogleTaskSelection.bind(this, true), false);
    this.unSelectAllButton.addEventListener("click", this._toogleTaskSelection.bind(this, false), false);
};

TaskSelectionPanel.setTickets = function (tickets) {
	this.style.display = "block";
	for (var i = 0, len = tickets.length ; i < len ; i++) {
		var taskItem = this._createTaskItem(tickets[i]);
		this.taskContainer.appendChild(taskItem);
		this._taskItems.push(taskItem);
	}
};

TaskSelectionPanel._onPrintButtonClicked = function () {
	var tasksToPrint = [];

	var tasksIds = Object.keys(this._selectedTaskItems);

	if (tasksIds.length === 0 ) {
		alert("You need to select at least 1 task to print");
		return;
	}

	for (var i = 0, len = tasksIds.length ; i < len ; i++) {
		tasksToPrint.push(this._selectedTaskItems[tasksIds[i]].data);
	}

	this.trigger(EVENTS.TASK_PANEL.TASKS_SELECTED, tasksToPrint);
};

TaskSelectionPanel._toogleTaskSelection = function (value) {
	for (var i = 0, len = this._taskItems.length ; i < len ; i++) {
		this._taskItems[i].toggleCheckedValue(value, true);
	}
};

TaskSelectionPanel._onSelectionChanged = function (item) {
	if (item.selected === false) {
		delete this._selectedTaskItems[item.key];
	} else {
		this._selectedTaskItems[item.key] = item;
	}
};

TaskSelectionPanel._createTaskItem = function (taskParams) {
	var taskItem = document.createElement("task-selection-row");
	taskItem.dataset.level = 0;
	var event = EVENTS.TASK_PANEL.TASKS_SELECTED + "_" + taskItem.dataset.level;
	taskItem.on(event, this._onSelectionChanged, this);
	taskItem.setData(taskParams);
	return taskItem;
};

document.registerElement('jcm-task-selection-panel', {prototype: TaskSelectionPanel});

},{"../../events":15,"./../../services/emitr":16,"./../../services/templateService":19,"./../task-selection-row/task-selection-row.js":14}],14:[function(require,module,exports){
"use strict";

var Emitr = require("./../../services/emitr");

var templateService = require("./../../services/templateService");
var TaskSelectionRow = Object.create(HTMLElement.prototype);

var EVENTS = require("../../events");

Emitr(TaskSelectionRow);

TaskSelectionRow.createdCallback = function () {
	var template = document.importNode(templateService.getTemplate("task-selection-row"), true);
    this.appendChild(template);
    this.header = this.querySelector(".task-title");
    this.taskId = this.querySelector(".task-id");
    this.detailsButton = this.querySelector(".task-details-button");
 	this.taskSubTaskContainer = this.querySelector(".task-subtasks");
 	this.taskDescription = this.querySelector(".task-description");
 	this.taskDetailsContainer = this.querySelector(".task-details");
 	this.checkbox = this.querySelector("input[type='checkbox'");
 	this._taskStatus = this.querySelector(".task-status");
 	this.checkbox.checked = false;
 	this.areDetailsDisplayed = false;
 	this._isSelected = false;
 	this._data = null;
 	this._subtasks = [];
};

TaskSelectionRow.attachedCallback = function () {
	this.detailsButton.addEventListener("click", this._onDetailsButtonClicked.bind(this), false);
	this.checkbox.addEventListener("change", function(event) {this.toggleCheckedValue(event.target.checked)}.bind(this), false);
};

TaskSelectionRow._onDetailsButtonClicked = function () {
	var value = this.areDetailsDisplayed ? "none" : "block";
	this.detailsButton.classList.toggle("expanded");
	this.taskDetailsContainer.style.display = value;	
	this.areDetailsDisplayed = !this.areDetailsDisplayed;
};

TaskSelectionRow.toggleCheckedValue = function (value, broadcast) {
	this.checkbox.checked = value;
	var event = EVENTS.TASK_PANEL.TASKS_SELECTED +"_" + this._level;
	this.trigger(event, {key: this._data.getKey().key, data: this._data, selected: value});

	for (var i = 0, len = this._subtasks.length ; i < len ;i++) {
		this._subtasks[i].toggleCheckedValue(value, broadcast);
	}
};

TaskSelectionRow._onSubtaskSelection = function (subTask) {
	this.trigger(EVENTS.TASK_PANEL.TASKS_SELECTED + "_" + this._level, subTask);
};

TaskSelectionRow.isSelected = function () {
	if (this.checkbox.checked === true) {
		return this._data;
	}

	return false;
};

TaskSelectionRow.setData = function (taskData) {
	this._data = taskData;
	this._level = parseInt(this.dataset.level);
	var nextLevel = this._level + 1;
 	var subtaskItem = null;

	this.taskId.textContent = taskData.getKey().key;
	this.header.textContent = taskData.getDescription();
	
	this._taskStatus.textContent = taskData.getStatus().name;
	this._taskStatus.style.background = taskData.getStatus().color;

 	var subtasks = taskData.getSubTasks();

 	if (subtasks.length !== 0) {
 		this.detailsButton.style.display = "block";

 		for (var i = 0, len = subtasks.length ; i < len ; i++) {
 			var data = subtasks[i];
 			data.setParent(taskData.getKey().key);
 			subtaskItem = document.createElement("task-selection-row");
 			subtaskItem.dataset.level = nextLevel;
 			 this._subtasks.push(subtaskItem);
 			subtaskItem.on(EVENTS.TASK_PANEL.TASKS_SELECTED + "_" + nextLevel, this._onSubtaskSelection, this);
 			subtaskItem.setData(data);
 			this.taskSubTaskContainer.appendChild(subtaskItem);
 		}
 	}
};

document.registerElement('task-selection-row', {prototype: TaskSelectionRow});

},{"../../events":15,"./../../services/emitr":16,"./../../services/templateService":19}],15:[function(require,module,exports){
module.exports = {
	"AUTHENTICATION_PANEL": {
		"AUTHENTICATION_SUBMITTED": "authentication-subitted"
	},
	"BOARD_PANEL": {
		"BOARD_SELECTED": "board-selected"
	},
	"SPRINT_PANEL": {
		"SPRINT_SELECTED": "sprint-selected"
	},
	"TASK_PANEL": {
		"TASKS_SELECTED": "task-selected"
	},
	"LAYOUT_OPTIONS": {
		"LAYOUT_OPTIONS_CHANGED": "layout-options-changed"
	}
};
},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
var Task = require("./task");

var JiraAdapater = function() {
	this._username = null;
	this._password = null;
	this._url = null;

    this._sprints = null;
    this._epics = null;
    this._tasks = null;
};

JiraAdapater.prototype.setAuthenticationDetails = function (params) {
    this._url = params.url;
    this._username = params.username;
    this._password = params.password;
};

JiraAdapater.prototype.getBoards = function () {
    var self = this;

    return new Promise (function (resolve, reject) {
        var url = "https://cors-anywhere.herokuapp.com/" + self._url + "/rest/greenhopper/1.0/rapidviews/viewsData.json";

        var onSucess = function (response) {
            resolve(response.views);
        };

        var onError = function (response) {
            reject();
        };

        self._getData({url: url, requestType: "GET"}).then(onSucess, onError);
    });
};

JiraAdapater.prototype.getSprints = function (rapidviewId) {
    var self = this;

    return new Promise(function(resolve, reject) {
        var url = "https://cors-anywhere.herokuapp.com/" + self._url + "/rest/greenhopper/1.0/xboard/plan/backlog/data.json?rapidViewId=" + rapidviewId;

        var onSucess = function (response) {
            self._epics = response.epicData;
            self._sprints = response.sprints;
            resolve(response);            
        };

        var onError = function (response) {
            reject(response);
        };

        self._getData({url: url, requestType: "GET"}).then(onSucess, onError);
    });
};

JiraAdapater.prototype.getTasksDetails = function (sprintId) {
    var tasksId = this._getTasksIds(sprintId);
    var self = this;

    return new Promise(function(resolve, reject) {
        var url = "https://cors-anywhere.herokuapp.com/" + self._url + "/rest/api/latest/search?jql=" + self._jiraIdToString(tasksId) + "&maxResults=1000";

        var onSucess = function (response) {
            resolve(self._computeTasks(response.issues));            
        };

        var onError = function (response) {
            reject(response);
        };

        self._getData({url: url, requestType: "GET"}).then(onSucess, onError);
    });
};

/*********** Private methods **************/

JiraAdapater.prototype._computeTasks = function (tasksToCompute) {
    var tasks = [];

    for (var i = 0, len = tasksToCompute.length ; i < len ; i++) {
        tasks.push(new Task(tasksToCompute[i], this._epics));
    }
    return tasks;
};

JiraAdapater.prototype._getTasksIds = function (sprintId) {
    for (var i = 0, len = this._sprints.length ; i < len ; i++) {
        if (this._sprints[i].id == sprintId) {
            return this._sprints[i].issuesIds;
        }
    }
};

JiraAdapater.prototype._jiraIdToString = function (jiraIds) {
    var retunValue = "";

    for (var i = 0, len = jiraIds.length ; i < len ; i++) {
        if (i != 0) {
            retunValue = retunValue + "+or+";
        }
        retunValue = retunValue + "issue=" + jiraIds[i];
    }
    return retunValue;
};

JiraAdapater.prototype._getData = function (params) {
        return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(params.requestType, params.url);
        xhr.setRequestHeader("Authorization", "Basic " + btoa(this._username + ":" + this._password));

        xhr.onreadystatechange = function(response) {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject();
                }
            }
        }.bind(this);

        xhr.setRequestHeader("x-requested-with", "love");
        xhr.send();
    }.bind(this));
};

module.exports = JiraAdapater;
},{"./task":18}],18:[function(require,module,exports){
var Task = function (taskData, epicData) {
	this._taskData = taskData;
	this._epicData = epicData;
	this._subTasks = [];
	
	if (this._taskData.fields.subtasks && this._taskData.fields.subtasks.length !== 0) {
		for (var i = 0, len =this._taskData.fields.subtasks.length ; i < len ;i++) {
			this._subTasks.push(new Task(this._taskData.fields.subtasks[i], this._epicData));
		}
	}
};

Task.prototype.getDescription = function () {
	return this._taskData.fields.summary;
};

Task.prototype.getKey = function () {
	return {
		key: this._taskData.key,
		id: this._taskData.key.split("-")[1],
		project: this._taskData.key.split("-")[0]
	}
};

Task.prototype.getPriority = function () {
	return {
		name: this._taskData.fields.priority.name,
		id: this._taskData.fields.priority.id
	}
};

Task.prototype.getEstimation = function () {
	return this._taskData.fields.customfield_10243;
};

Task.prototype.getStatus = function () {
	return {
		name: this._taskData.fields.status.name,
		color: this._taskData.fields.status.statusCategory.colorName
	}
};

Task.prototype.getSubTasks = function () {
	return this._subTasks;
};

Task.prototype.getEpics = function () {
	var epicId = this._taskData.fields.customfield_10870;

	if (epicId) {
		for (var i = 0, len = this._epicData.epics.length ; i < len ; i++) {
			var epic = this._epicData.epics[i];
			if (epic.key === epicId) {
				return {
					name: epic.epicLabel,
					color: epic.epicColor
				}
			}
		}
	}
	return null;
};

Task.prototype.getType = function () {
	return this._taskData.fields.issuetype.name.replace(" ", "");
};

Task.prototype.getParent = function () {
	if (!this._taskData.parent) {
		return null;
	}

	return {
		key: this._taskData.parent,
		id: this._taskData.parent.split("-")[1],
		project: this._taskData.parent.split("-")[0]
	}
};

Task.prototype.setParent = function (parent) {
	this._taskData.parent = parent;
};

Task.prototype.getParentKey = function () {
	return this._taskData.parent;
};

module.exports = Task;

},{}],19:[function(require,module,exports){
var templateService = {};

templateService.getTemplate = function(id) {
    var link = document.querySelector('link[rel="import"][data-id="' + id + '"');
    var template = link.import.querySelector("template");
    return template.content;
};

module.exports = templateService;
},{}]},{},[1]);
