"use strict";

var Emitr = require("./../../services/emitr");

var BoardSelectionPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");

var EVENTS = require("../../events");

Emitr(BoardSelectionPanel);

BoardSelectionPanel.createdCallback = function() {
	this.authenticationPanel = null;
};

BoardSelectionPanel.attachedCallback = function() {
	var template = document.importNode(templateService.getTemplate("board-selection-panel"), true);
    this.appendChild(template);
    this.boardSelector = this.querySelector(".board-selector");
    this.boardSelectionButton = this.querySelector("button");
    this.boardSelectionButton.addEventListener("click", this.onBoardSelected.bind(this), false);
};

BoardSelectionPanel.setBoards = function (boards) {
	this.style.display = "block";
	for (var i = 0, len = boards.length ; i < len ; i++) {
		this.boardSelector.appendChild(this._createOption(boards[i].name, boards[i].id));
	}
};

BoardSelectionPanel.onBoardSelected = function () {
	this.trigger(EVENTS.BOARD_PANEL.BOARD_SELECTED, this.boardSelector.value);
};

BoardSelectionPanel._createOption = function (label, value) {
	var optionItem = document.createElement("option");
	optionItem.value = value;
	optionItem.textContent = label;
	return optionItem;
};

document.registerElement('jcm-board-selection-panel', {prototype: BoardSelectionPanel});
