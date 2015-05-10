"use strict";

var Emitr = require("./../../services/emitr");

var LayoutOptions = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");
var EVENTS = require("../../events");

Emitr(LayoutOptions);

LayoutOptions.createdCallback = function () {
	this._config = null;
};

LayoutOptions.attachedCallback = function () {
};

LayoutOptions.setOptionsConfiguration = function (config) {
	this._config = config;

	for (var i = 0, len = this._config.keys.length ; i < len ; i++) {
		this.appendChild(this._createOptionItem(this._config.parameters[this._config.keys[i]], this._config.keys[i]));
	}
};

LayoutOptions._createOptionItem = function (params, value) {
	var parent = document.createElement("label");

	var input = document.createElement("input");
	input.type = "checkbox";
	input.checked = params.checked;
	input.dataset.value = value;
	parent.appendChild(input);

	var label = document.createElement("span");
	label.textContent = params.label;
	parent.appendChild(label);

	input.addEventListener("click", this._onValueChanged.bind(this, input), false);

	return parent;
};

LayoutOptions._onValueChanged = function (input) {
	this._config.parameters[input.dataset.value].checked = input.checked;
	this.trigger(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._config.parameters);
};

document.registerElement('layout-options', {prototype: LayoutOptions});
