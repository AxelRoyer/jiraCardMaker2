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
};

TaskSelectionRow.attachedCallback = function () {
};

TaskSelectionRow.setData = function (data) {
	this.taskId.textContent = data.key;
	this.header.textContent = data.fields.summary;
 	this.taskDescription.textContent = data.fields.description;

 	var subtasks = data.fields.subtasks;
 	var subtaskItem = null;
 	// if (subtasks.length !== 0) {
 	// 	for (var i = 0, len = subtasks[i] ; i < len ; i++) {
 	// 		subtaskItem = document.createElement("task-selection-row");
 	// 		subtaskItem.setData(subtasks[i]);
 	// 		this.taskSubTaskContainer.appendChild(subtaskItem);
 	// 	}
 	// }
};

document.registerElement('task-selection-row', {prototype: TaskSelectionRow});
