"use strict";

var templateService = require("./../../services/templateService");
var Card = Object.create(HTMLElement.prototype);

Card.createdCallback = function () {
	this._data = null;
	this._config = null;
	this._priority = null;
};

Card.attachedCallback = function () {
	var template = document.importNode(templateService.getTemplate("card"), true);
    this.appendChild(template);

    this._taskIdContainer = this.querySelector(".task-id");
    this._taskProjectContainer = this.querySelector(".task-project-id");

    this._parentIdContainer = this.querySelector(".parent-id");
    this._parentProjectContainer = this.querySelector(".parent-project-id");

    this._estimateContainer = this.querySelector(".task-estimate");
    this._qrcodeContainer = this.querySelector(".task-qrcode");
    this._epicContainer = this.querySelector(".task-epic");
    this._summaryContainer = this.querySelector(".task-summary");

    this._priorityContainer = this.querySelector(".task-priority");
};

Card.updateData = function (data) {
	this._data = data;
	this._updateUI();
};

Card.updateConfig = function (config) {
	this._config = config;
	this._updateUI();
};

Card._updateUI = function () {
	if (this._config && this._data) {

	    this._taskIdContainer.textContent = this._data.key.split("-")[1];
	    this._taskProjectContainer.textContent = this._data.key.split("-")[0];

	    this._parentIdContainer.textContent = this._data.parent.split("-")[1];
	    this._parentProjectContainer.textContent = this._data.parent.split("-")[0];

	    this._priorityContainer.classList.remove(this._priority);
	    this._priority = "priority" + this._data.priority;
	    this._priorityContainer.classList.add(this._priority);

	    this._estimateContainer.textContent = this._data.estimate;
	    this._epicContainer.textContent = this._data.epic;
	    this._summaryContainer.textContent = this._data.summary;

	   	this._qrcodeContainer.src = "http://qr.kaywa.com/?s=8&d=" + "https://jira.caplin.com/browse/" + this._data.key;

	    this._taskIdContainer.style.visibility = this._config.key;
	    this._taskProjectContainer.style.visibility = this._config.key;

	    this._parentIdContainer.style.visibility = this._config.parent;
	    this._parentProjectContainer.style.visibility = this._config.parent;

	    this._estimateContainer.style.visibility = this._config.estimate;
	    this._qrcodeContainer.style.visibility = this._config.qrcode;
	    this._epicContainer.style.visibility = this._config.epic;
	    this._summaryContainer.style.visibility = this._config.summary;
	}
};

document.registerElement('jcm-card', {prototype: Card});
