"use strict";

var templateService = require("./../../services/templateService");
var Card = Object.create(HTMLElement.prototype);

Card.createdCallback = function () {
	this._data = null;
	this._cardLayoutConfig = null;
	this._priority = null;

	this._taskContainer = null;
	this._taskIdContainer = null;
    this._taskProjectContainer = null;
    this._parentIdContainer = 
    this._parentProjectContainer = null;
    this._estimateContainer = null;
    this._qrcodeContainer = null;
    this._epicContainer = null;
    this._summaryContainer = null;
    this._priorityContainer = null;
};

Card.attachedCallback = function () {
	var template = document.importNode(templateService.getTemplate("card"), true);
    this.appendChild(template);

    this._taskContainer = this.querySelector(".task-container");
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

Card.updateConfig = function (layoutConfig) {
	this._cardLayoutConfig = layoutConfig;
	this._epicConfig = layoutConfig;
	this._updateUI();
};

Card._updateUI = function () {
	if (this._cardLayoutConfig && this._data) {
		var key = this._data.getKey();
	    this._taskIdContainer.textContent = key.id;
	    this._taskProjectContainer.textContent = key.project;

	    if (this._cardLayoutConfig.color.checked) {
	    	this._taskContainer.classList.add(this._data.getType());
	    } else {
	    	this._taskContainer.classList.remove(this._data.getType());
	    }

	    var priority = this._data.getPriority();
	    this._priorityContainer.classList.add("priority" + priority.id);

	    this._estimateContainer.textContent = this._data.getEstimation();
	    this._summaryContainer.textContent = this._data.getDescription();

	   	this._qrcodeContainer.src = "http://qr.kaywa.com/?s=8&d=" + "https://jira.caplin.com/browse/" + this._data.key;

	    var parent = this._data.getParent();
	    if (parent) {
	    	this._parentIdContainer.textContent = parent.id;
	    	this._parentProjectContainer.textContent = parent.project;
	    	this._parentIdContainer.style.visibility = this._cardLayoutConfig.parent.checked === true ? "visible" : "hidden";
		    this._parentProjectContainer.style.visibility = this._cardLayoutConfig.parent.checked === true ? "visible" : "hidden";;
	    }		    

	    var epic = this._data.getEpics();
		if (epic) {
	    	this._epicContainer.textContent = epic.name;
	    	this._epicContainer.style.background = epic.color; 
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
