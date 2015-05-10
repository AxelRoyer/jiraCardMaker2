"use strict";

var Emitr = require("./../../services/emitr");

var LayoutPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

Emitr(LayoutPanel);

LayoutPanel.createdCallback = function() {
	this._cardExample = null;
};

LayoutPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("layout-panel"), true);
    this.appendChild(template);

    this._cardExample = this.querySelector("jcm-card");

    this._cardExample.updateData({
    	key: "FXM-1000",
    	title: "Update login-screen",
    	summary: "Update login screen with wecomponents",
    	epic: "web components",
    	priority: "2",
    	estimate: "4",
    	parent: "FXM-18"
    });

   	this._cardExample.updateConfig({
   		key: true,
   		title: true,
   		summary: true,
   		epic: true,
   		priority: true,
   		estimate: true,
   		parent: true
   	});
};

document.registerElement('jcm-layout-panel', {prototype: LayoutPanel});
