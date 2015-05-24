"use strict";

var Emitr = require("./../../services/emitr");
var templateService = require("./../../services/templateService");
var EVENTS = require("./../../events");

var LayoutPanel = Object.create(HTMLElement.prototype);

Emitr(LayoutPanel);

LayoutPanel.createdCallback = function() {
    this._cardData = null;
    this._cardLayoutOptions = null;
};

LayoutPanel.attachedCallback = function() {
    var template = document.importNode(templateService.getTemplate("layout-panel"), true);
    this.appendChild(template);

    this._cardExample = this.querySelector("jcm-card");
    this._layoutOptions = this.querySelector("layout-options");
};

LayoutPanel.init = function (cardData, cardLayoutOptions) {
    this._cardLayoutOptions = cardLayoutOptions;
    this._cardData = cardData;

    this._layoutOptions.setOptionsConfiguration(this._cardLayoutOptions); 
    this._layoutOptions.on(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._onLayoutOptionsChanged, this);

    this._cardExample.updateData(this._cardData);
    this._cardExample.updateConfig(this._cardLayoutOptions.parameters);
};

LayoutPanel._onLayoutOptionsChanged = function (config) {
    this._cardLayoutOptions = config;
    this._cardExample.updateConfig(this._cardLayoutOptions.parameters);
    this.trigger(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._cardLayoutOptions);
};

document.registerElement('jcm-layout-panel', {prototype: LayoutPanel});
