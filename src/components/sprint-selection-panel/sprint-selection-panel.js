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
