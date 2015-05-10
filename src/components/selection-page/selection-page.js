"use strict";

var Emitr = require("./../../services/emitr");

var templateService = require("./../../services/templateService");
var SelectionPage = Object.create(HTMLElement.prototype);
var JiraService = require("./../../services/jiraService");

var EVENTS = require("../../events");

require("./../sprint-selection-panel/sprint-selection-panel.js");
require("./../board-selection-panel/board-selection-panel.js");
require("./../task-selection-panel/task-selection-panel.js");

Emitr(SelectionPage);

SelectionPage.createdCallback = function() {
	this.authenticationPanel = null;
	this.loadingScreen = null;
	this.jiraService = new JiraService();
};

SelectionPage.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("selection-page"), true);
    this.appendChild(template);

    this.authenticationPanel = this.querySelector("jcm-authentication-panel");
    this.authenticationPanel.on(EVENTS.AUTHENTICATION_PANEL.AUTHENTICATION_SUBMITTED, this._onAuthenticationSubmitted, this);

    this.boardSelectionPanel = this.querySelector("jcm-board-selection-panel");
    this.boardSelectionPanel.on(EVENTS.BOARD_PANEL.BOARD_SELECTED, this._onBoardSelected, this);

    this.sprintSelectionPanel = this.querySelector("jcm-sprint-selection-panel");
    this.sprintSelectionPanel.on(EVENTS.SPRINT_PANEL.SPRINT_SELECTED, this._onSprintSelected, this);

    this.taskSelectionPanel = this.querySelector("jcm-task-selection-panel");
    this.taskSelectionPanel.on(EVENTS.TASK_PANEL.TASK_SELECTED, this._ontaskSelected, this);

    this.loadingScreen = this.querySelector("loading-screen");
};

SelectionPage._onAuthenticationSubmitted = function(parameters) {
	this.loadingScreen.show("loading in progress");
    this.jiraService.getBoards().then(function(boards) {
    	this.boardSelectionPanel.setBoards(boards);
    	this.loadingScreen.hide();
    }.bind(this));
};

SelectionPage._onBoardSelected = function (boardId) {
	this.loadingScreen.show("loading in progress");
    this.jiraService.getSprints(boardId).then(function(sprints) {
    	this.sprintSelectionPanel.setSprints(sprints);
    	this.loadingScreen.hide();
    }.bind(this));
};

SelectionPage._onSprintSelected = function (sprintId) {
    this.loadingScreen.show("loading in progress");
    var ticketsId = this.jiraService.getTasksIds(sprintId);
    this.jiraService.getTasksDetails(ticketsId).then(function(tasksDetails) {
        this.loadingScreen.hide();
        this.taskSelectionPanel.setTickets(tasksDetails);
    }.bind(this));
};

document.registerElement('selection-page', {prototype: SelectionPage});
