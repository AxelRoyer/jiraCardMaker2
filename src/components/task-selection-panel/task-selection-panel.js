"use strict";

var Emitr = require("./../../services/emitr");

var TaskSelectionPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

require("./../task-selection-row/task-selection-row.js");

Emitr(TaskSelectionPanel);

TaskSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
};

TaskSelectionPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("task-selection-panel"), true);
    this.appendChild(template);
    this.taskContainer = this.querySelector("panel-body");
    this.printButton = this.querySelector(".print-tickets-button");
    this.printButton.addEventListener("click", this._onPrintButtonClicked.bind(this), false);
};

TaskSelectionPanel.setTickets = function (tickets) {
	for (var i = 0, len = tickets.length ; i < len ; i++) {
		this.taskContainer.appendChild(this._createTaskItem(tickets[i]));
	}
};

TaskSelectionPanel._onPrintButtonClicked = function () {
	//TODO Bad design, need to refactor
	var tasksItems = this.querySelectorAll("task-selection-row");

	var selectedTasks = [];

	for (var i = 0, len = tasksItems.length ; i < len ; i++) {
		var isSelectedItem = tasksItems.getSelectedItems();
		if (tasksItems.getSelectedItems().length > 0) {
			selectedTasks = selectedTasks.concat(isSelectedItem);
		}
	}

	debugger;
};

TaskSelectionPanel._createTaskItem = function (taskParams) {
	var taskItem = document.createElement("task-selection-row");
	taskItem.setData(taskParams);
	return taskItem;
};

document.registerElement('jcm-task-selection-panel', {prototype: TaskSelectionPanel});
