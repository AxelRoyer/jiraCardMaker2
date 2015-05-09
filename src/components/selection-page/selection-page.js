"use strict";

var templateService = require("./../../services/templateService");
var SelectionPage = Object.create(HTMLElement.prototype);

SelectionPage.createdCallback = function() {
	this.authenticationPanel = null;
};

SelectionPage.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("selection-page"), true);
    this.appendChild(template);
};

SelectionPage.connect = function (parameters) {
	debugger;
};

SelectionPage.onReleaseButtonClicked = function() {
	this.authenticationPanel.off("authentication-complete", this.connect, this);
};

document.registerElement('selection-page', {prototype: SelectionPage});
