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
