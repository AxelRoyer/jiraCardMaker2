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
 	this.checkbox = this.querySelector("checkbox");
 	this.areDetailsDisplayed = false;
 	this.isSelect = true;
 	this.hasChildren = null;
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

TaskSelectionRow.select = function () {
	this.isSelect = true;
	this.checkbox.value = true;
};

TaskSelectionRow.unSelect = function () {
	this.isSelect = false;
	this.checkbox.value = false;
};

TaskSelectionRow.getSelectedItems = function () {
	var returnValue = [];

	if (this.isSelect) {
		returnValue.push(this.key);
	}

	if (this.hasChildren === true) {
		for (var i = 0, len = this.taskSubTaskContainer.children.length ; i < len ; i++) {
			debugger;
		}
	}

	return returnValue;
};

TaskSelectionRow.setData = function (data) {
	this.taskId.textContent = data.key;
	this.header.textContent = data.fields.summary;
	this.key = data.key;

 	var subtasks = data.fields.subtasks;
 	var subtaskItem = null;

 	if (subtasks && subtasks.length !== 0) {
 		this.detailsButton.style.display = "block";
 		this.hasChildren = true;

 		for (var i = 0, len = subtasks.length ; i < len ; i++) {
 			subtaskItem = document.createElement("task-selection-row");
 			subtaskItem.setData(subtasks[i]);
 			this.taskSubTaskContainer.appendChild(subtaskItem);
 		}
 	}
};

document.registerElement('task-selection-row', {prototype: TaskSelectionRow});
