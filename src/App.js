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
