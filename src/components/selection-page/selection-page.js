"use strict";

var Emitr = require("./../../services/emitr");

var templateService = require("./../../services/templateService");
var SelectionPage = Object.create(HTMLElement.prototype);
var JiraAdapter = require("./../../services/jiraAdapter");

var EVENTS = require("./../../events");
var AppConfig = require("./../../appConfig.js");
var Task = require("./../../services/task");

require("./../sprint-selection-panel/sprint-selection-panel.js");
require("./../board-selection-panel/board-selection-panel.js");
require("./../task-selection-panel/task-selection-panel.js");


Emitr(SelectionPage);

SelectionPage.createdCallback = function() {
	this.authenticationPanel = null;
	this.loadingScreen = null;
    this._sprintConfig = null;
    this._layoutConfig = AppConfig.LAYOUT_CONFIG.parameters;
	this.jiraAdapter = new JiraAdapter();
};

SelectionPage.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("selection-page"), true);
    this.appendChild(template);

    this.loadingScreen = this.querySelector("loading-screen");

    this.authenticationPanel = this.querySelector("jcm-authentication-panel");
    this.authenticationPanel.on(EVENTS.AUTHENTICATION_PANEL.AUTHENTICATION_SUBMITTED, this._onAuthenticationSubmitted, this);

    this.boardSelectionPanel = this.querySelector("jcm-board-selection-panel");
    this.boardSelectionPanel.on(EVENTS.BOARD_PANEL.BOARD_SELECTED, this._onBoardSelected, this);

    this.sprintSelectionPanel = this.querySelector("jcm-sprint-selection-panel");
    this.sprintSelectionPanel.on(EVENTS.SPRINT_PANEL.SPRINT_SELECTED, this._onSprintSelected, this);

    this.taskSelectionPanel = this.querySelector("jcm-task-selection-panel");
    this.taskSelectionPanel.on(EVENTS.TASK_PANEL.TASKS_SELECTED, this._ontaskSelected, this);

    this.layoutPanel = this.querySelector("jcm-layout-panel");
    this.layoutPanel.init(new Task(AppConfig.LAYOUT_EXAMPLE_TASK_DATA, AppConfig.LAYOUT_EXAMPLE_EPIC_DATA), AppConfig.LAYOUT_CONFIG);
    this.layoutPanel.on(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._onLayoutOptionsChanged, this);
};

SelectionPage._onAuthenticationSubmitted = function(parameters) {
    this.jiraAdapter.setAuthenticationDetails(parameters);
	this.loadingScreen.show("loading in progress");

    var self = this;

    var callBacks = {
        success: function(boards) {
            self.boardSelectionPanel.setBoards(boards);
            self.loadingScreen.hide();
        },
        error: function(error) {
            self.loadingScreen.hide();
            alert("Authentication failed");
        }
    };

    this.jiraAdapter.getBoards().then(callBacks.success, callBacks.error);
};

SelectionPage._onBoardSelected = function (boardId) {
	this.loadingScreen.show("loading in progress");
    this.jiraAdapter.getSprints(boardId).then(function(sprintsConfig) {
        this._sprintConfig = sprintsConfig;
    	this.sprintSelectionPanel.setSprints(sprintsConfig.sprints);
    	this.loadingScreen.hide();
    }.bind(this));
};

SelectionPage._onLayoutOptionsChanged = function (params) {
    this._layoutConfig = params;
};

SelectionPage.hide = function () {
    this.style.display = "none";
};

SelectionPage._onSprintSelected = function (sprintId) {
    this.loadingScreen.show("loading in progress");
    this.jiraAdapter.getTasksDetails(sprintId).then(function(tasksDetails) {
        this.loadingScreen.hide();
        this.taskSelectionPanel.setTickets(tasksDetails);
    }.bind(this));
};

SelectionPage._ontaskSelected = function (selectedTasks) {
    this.trigger(EVENTS.TASK_PANEL.TASKS_SELECTED, {
        tasks: selectedTasks,
        layoutConfig: this._layoutConfig
    });
};

document.registerElement('selection-page', {prototype: SelectionPage});
