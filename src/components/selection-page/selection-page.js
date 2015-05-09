"use strict";

var Emitr = require("./../../services/emitr");

var templateService = require("./../../services/templateService");
var SelectionPage = Object.create(HTMLElement.prototype);
var JiraService = require("./../../services/jiraService");

var EVENTS = require("../../events");

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

    this.sprintSelectionPanel = this.querySelector("jcm-sprint-selection-panel");

    this.loadingScreen = this.querySelector("loading-screen");
};

SelectionPage._onAuthenticationSubmitted = function(parameters) {
	this.loadingScreen.show("loading in progress");
    this.jiraService.getBoards().then(function(boards) {
    	console.log("boards", boards);
    	this.loadingScreen.hide();
    	this._onBoardSelected(80);
    }.bind(this));
};

SelectionPage._onBoardSelected = function (boardId) {
	this.loadingScreen.show("loading in progress");
    this.jiraService.getSprints(boardId).then(function(sprints) {
    	console.log("sprints", sprints);
    	this.loadingScreen.hide();
    	this._onSprintSelected(0);
    }.bind(this));
};

SelectionPage._onSprintSelected = function (sprintId) {
    console.log(this.jiraService.getTasks(sprintId));
};

document.registerElement('selection-page', {prototype: SelectionPage});
