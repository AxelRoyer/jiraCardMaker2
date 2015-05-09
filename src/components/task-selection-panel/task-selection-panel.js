"use strict";

var Emitr = require("./../../services/emitr");

var TaskSelectionPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

Emitr(TaskSelectionPanel);

TaskSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
};

TaskSelectionPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("task-selection-panel"), true);
    this.appendChild(template);
};

document.registerElement('jcm-task-selection-panel', {prototype: TaskSelectionPanel});
