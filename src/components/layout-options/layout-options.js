"use strict";

var Emitr = require("./../../services/emitr");

var LayoutOptions = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

Emitr(LayoutOptions);

LayoutOptions.createdCallback = function() {};

LayoutOptions.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("layout-options"), true);
    this.appendChild(template);
};

document.registerElement('layout-options', {prototype: LayoutOptions});
