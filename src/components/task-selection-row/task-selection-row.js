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
 	this.areDetailsDisplayed = false;
};

TaskSelectionRow.attachedCallback = function () {
	this.detailsButton.addEventListener("click", this._onDetailsButtonClicked.bind(this), false);
};

TaskSelectionRow._onDetailsButtonClicked = function () {
	var value = this.areDetailsDisplayed ? "none" : "block";
	this.detailsButton.classList.toggle("expanded");
	this.taskDetailsContainer.style.display = value;	
	this.areDetailsDisplayed = !this.areDetailsDisplayed;
};

TaskSelectionRow.toggleCheckedValue = function (value) {
	this.checkbox.checked = value;
}

TaskSelectionRow.isSelected = function () {
	if (this.checkbox.checked === true) {
		return this._data;
	}

	return false;
};

TaskSelectionRow.setData = function (data) {
	this._data = data;
	this.taskId.textContent = data.key;
	this.header.textContent = data.fields.summary;
	this.key = data.key;

 	var subtasks = data.fields.subtasks;
 	var subtaskItem = null;

 	if (subtasks && subtasks.length !== 0) {
 		this.detailsButton.style.display = "block";

 		for (var i = 0, len = subtasks.length ; i < len ; i++) {
 			subtaskItem = document.createElement("task-selection-row");
 			subtaskItem.setData(subtasks[i]);
 			this.taskSubTaskContainer.appendChild(subtaskItem);
 		}
 	}
};

document.registerElement('task-selection-row', {prototype: TaskSelectionRow});
