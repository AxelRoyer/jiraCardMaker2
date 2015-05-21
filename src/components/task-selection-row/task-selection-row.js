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
	var event = EVENTS.TASK_PANEL.TASKS_SELECTED +"_" + this.dataset.level;
	this.trigger(event, {key: this._data.key, data: this._data, selected: value});

	for (var i = 0, len = this._subtasks.length ; i < len ;i++) {
		this._subtasks[i].toggleCheckedValue(value, broadcast);
	}
};

TaskSelectionRow._onSubtaskSelection = function (subTask) {
	this.trigger(EVENTS.TASK_PANEL.TASKS_SELECTED, subTask);
};

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
 			var data = subtasks[i];
 			data.parent = this.key;
 			subtaskItem = document.createElement("task-selection-row");
 			 this._subtasks.push(subtaskItem);
 			subtaskItem.dataset.level = this.dataset.level++;
 			subtaskItem.on(EVENTS.TASK_PANEL.TASKS_SELECTED + (this.dataset.level++), this._onSubtaskSelection, this);
 			subtaskItem.setData(data);
 			this.taskSubTaskContainer.appendChild(subtaskItem);
 		}
 	}
};

document.registerElement('task-selection-row', {prototype: TaskSelectionRow});
