"use strict";

var JiraApiHandler = require("./services/JiraApiHandler");
var templateService = require("./services/templateService");

require("./../lib/webcomponents-lite.min.js");

require("./events.js");

require("./components/authentication-panel/authentication-panel.js");
require("./components/selection-page/selection-page.js");
require("./components/sprint-selection-panel/sprint-selection-panel.js");
require("./components/task-selection-panel/task-selection-panel.js");
require("./components/card/card.js");
require("./components/layout-panel/layout-panel.js");
require("./components/layout-options/layout-options.js");
require("./components/loading-screen/loading-screen.js");

var JiraCardMakerApp = Object.create(HTMLElement.prototype);

JiraCardMakerApp.createdCallback = function() {
	window.location.hash = "request";
};

JiraCardMakerApp.attachedCallback = function() {
	this.template = document.importNode(templateService.getTemplate("app"), true);
    this.appendChild(this.template);
};

document.registerElement('jcm-app', {prototype: JiraCardMakerApp});
