"use strict";

var Emitr = require("./../../services/emitr");

var TaskSelectionPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

require("./../task-selection-row/task-selection-row.js");

var EVENTS = require("../../events");

Emitr(TaskSelectionPanel);

TaskSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
	this.printButton = null;
	this.selectAllButton = null;
	this.unSelectAllButton = null;
	this.taskItems = [];
};

TaskSelectionPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("task-selection-panel"), true);
    this.appendChild(template);
    this.taskContainer = this.querySelector("panel-body");
    this.printButton = this.querySelector(".print-tickets-button");
	this.selectAllButton = this.querySelector(".select-all-button");
	this.unSelectAllButton = this.querySelector(".unselect-all-button");  
    this.printButton.addEventListener("click", this._onPrintButtonClicked.bind(this), false);
    this.selectAllButton.addEventListener("click", this._toogleTaskSelection.bind(this, true), false);
    this.unSelectAllButton.addEventListener("click", this._toogleTaskSelection.bind(this, false), false);
};

TaskSelectionPanel.setTickets = function (tickets) {
	this.style.display = "block";
	for (var i = 0, len = tickets.length ; i < len ; i++) {
		var taskItem = this._createTaskItem(tickets[i]);
		this.taskContainer.appendChild(taskItem);
		this.taskItems.push(taskItem);
	}
};

TaskSelectionPanel._onPrintButtonClicked = function () {
	//TODO Bad design, need to refactor
	var selectedTasks = [];

	for (var i = 0, len = this.taskItems.length ; i < len ; i++) {
		var selectedItem = this.taskItems[i].isSelected();
		if (selectedItem !== false) {
			selectedTasks .push(selectedItem);
		}
	}

	this.trigger(EVENTS.TASK_PANEL.TASKS_SELECTED, selectedTasks);
};

TaskSelectionPanel._toogleTaskSelection = function (value) {
	for (var i = 0, len = this.taskItems.length ; i < len ; i++) {
		this.taskItems[i].toggleCheckedValue(value);
	}
};

TaskSelectionPanel._createTaskItem = function (taskParams) {
	var taskItem = document.createElement("task-selection-row");
	taskItem.setData(taskParams);
	return taskItem;
};

document.registerElement('jcm-task-selection-panel', {prototype: TaskSelectionPanel});
