"use strict";

var JiraApiHandler = require("./services/JiraApiHandler");

var SprintSelectionPanel = Object.create(HTMLElement.prototype);

SprintSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
};

SprintSelectionPanel.attachedCallback = function() {
};

document.registerElement('jcm-ticket-selection', {prototype: SprintSelectionPanel});
