"use strict";

var JiraApiHandler = require("./services/JiraApiHandler");
var templateService = require("./services/templateService");

require("./../lib/webcomponents-lite.min.js");

var EVENTS = require("./events.js");

require("./components/authentication-panel/authentication-panel.js");
require("./components/selection-page/selection-page.js");
require("./components/print-page/print-page.js");
require("./components/card/card.js");
require("./components/layout-panel/layout-panel.js");
require("./components/layout-options/layout-options.js");
require("./components/loading-screen/loading-screen.js");

var JiraCardMakerApp = Object.create(HTMLElement.prototype);

JiraCardMakerApp.createdCallback = function () {
	window.location.hash = "request";
	this.selectionPage = null;
};

JiraCardMakerApp.attachedCallback = function () {
	this.template = document.importNode(templateService.getTemplate("app"), true);
    this.appendChild(this.template);

	this.selectionPage = this.querySelector("selection-page");
	this.selectionPage.on(EVENTS.TASK_PANEL.TASKS_SELECTED, this._onTasksSelected.bind(this), false);
	this.printPage = this.querySelector("selection-print-page");
};

JiraCardMakerApp._onTasksSelected = function (params) {
	this.selectionPage.hide();
	this.printPage.show(params);
};

document.registerElement('jcm-app', {prototype: JiraCardMakerApp});
