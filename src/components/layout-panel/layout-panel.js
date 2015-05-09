"use strict";

var Emitr = require("./../../services/emitr");

var LayoutPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

Emitr(LayoutPanel);

LayoutPanel.createdCallback = function() {
	this.authenticationPanel = null;
};

LayoutPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("layout-panel"), true);
    this.appendChild(template);
};

document.registerElement('jcm-layout-panel', {prototype: LayoutPanel});
