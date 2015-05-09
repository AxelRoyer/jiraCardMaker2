"use strict";

var LoadingScreen = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

LoadingScreen.createdCallback = function() {
	this.authenticationPanel = null;
};

LoadingScreen.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("loading-screen"), true);
    this.appendChild(template);
};

LoadingScreen.show = function() {
	this.style.display = "block";
};

LoadingScreen.hide = function() {
	this.style.display = "none";
};

document.registerElement('jcm-sprint-selection-panel', {prototype: LoadingScreen});
