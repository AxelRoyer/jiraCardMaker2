"use strict";

var templateService = require("./../../services/templateService");
var Card = Object.create(HTMLElement.prototype);

Card.createdCallback = function () {
	this._data = null;
	this._cardLayoutConfig = null;
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
	this._cardLayoutConfig = config.layoutConfig;
	this._epicConfig = config.epicConfig;
	this._updateUI();
};

Card._getEpicConfig = function (epicId) {
	if (!epicId) {
		return false;
	}

	for (var i = 0, len = this._epicConfig.epics.length ; i < len ; i++) {
		if (this._epicConfig.epics[i].key === epicId) {
			return this._epicConfig.epics[i];
		}
	}
};

Card._updateUI = function () {
	var epicConfig = null;
	if (this._cardLayoutConfig && this._data) {

	    this._taskIdContainer.textContent = this._data.key.split("-")[1];
	    this._taskProjectContainer.textContent = this._data.key.split("-")[0];

	    if (this._data.parent) {
	    	this._parentIdContainer.textContent = this._data.parent.split("-")[1];
	    	this._parentProjectContainer.textContent = this._data.parent.split("-")[0];
	    }

	    this._priorityContainer.classList.remove(this._priority);
	    this._priority = "priority" + this._data.fields.priority.id;
	    this._priorityContainer.classList.add(this._priority);

	    this._estimateContainer.textContent = this._data.fields.customfield_10243;
	    this._summaryContainer.textContent = this._data.fields.summary;

	   	this._qrcodeContainer.src = "http://qr.kaywa.com/?s=8&d=" + "https://jira.caplin.com/browse/" + this._data.key;

	    if (this._data.parent) {
		    this._parentIdContainer.style.visibility = this._cardLayoutConfig.parent.checked === true ? "visible" : "hidden";
		    this._parentProjectContainer.style.visibility = this._cardLayoutConfig.parent.checked === true ? "visible" : "hidden";;
		}

		epicConfig = this._getEpicConfig(this._data.fields.customfield_10870);
		if (epicConfig) {
	    	this._epicContainer.textContent = epicConfig.epicLabel;
	    	this._epicContainer.style.background = epicConfig.color; 
		} else {
			this._epicContainer.style.display = "none";
		}

	    this._estimateContainer.style.visibility = this._cardLayoutConfig.estimate.checked === true ? "visible" : "hidden";;
	    this._qrcodeContainer.style.visibility = this._cardLayoutConfig.qrcode.checked === true ? "visible" : "hidden";;
	    this._epicContainer.style.visibility = this._cardLayoutConfig.epic.checked === true ? "visible" : "hidden";;
	    this._priorityContainer.style.visibility = this._cardLayoutConfig.priority.checked === true ? "visible" : "hidden";;
	}
};

document.registerElement('jcm-card', {prototype: Card});
