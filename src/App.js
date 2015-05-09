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
require("./components/task-selection-panel/task-selection-panel.js");
require("./components/card/card.js");
require("./components/layout-panel/layout-panel.js");
require("./components/layout-options/layout-options.js");

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
