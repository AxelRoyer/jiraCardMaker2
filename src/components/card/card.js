"use strict";

var templateService = require("./../../services/templateService");
var Card = Object.create(HTMLElement.prototype);

Card.createdCallback = function() {};

Card.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("card"), true);
    this.appendChild(template);
};

Card.updateData = function(data) {
	debugger;
};

document.registerElement('jcm-card', {prototype: Card});
