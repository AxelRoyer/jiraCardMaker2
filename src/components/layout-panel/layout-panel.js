"use strict";

var Emitr = require("./../../services/emitr");

var LayoutPanel = Object.create(HTMLElement.prototype);
var templateService = require("./../../services/templateService");
var EVENTS = require("../../events");

Emitr(LayoutPanel);

LayoutPanel.createdCallback = function() {
    this._cardExample = null;
    this._layoutOptions = null;
    this._config = null;
};

LayoutPanel.attachedCallback = function() {
    var template = document.importNode(templateService.getTemplate("layout-panel"), true);
    this.appendChild(template);

    this._cardExample = this.querySelector("jcm-card");
    this._layoutOptions = this.querySelector("layout-options");
    this._config = {
        keys: ["color", "qrcode", "parent", "component", "epic", "priority", "version", "estimate"],
        parameters: {
            color: {
                label: "Color",
                checked: true
            },
            qrcode: {
                label: "QR Code",
                checked: true
            },
            parent: {
                label: "Parent",
                checked: true
            },
            component: {
                label: "Component",
                checked: false
            },
            epic: {
                label: "Epic",
                checked: true
            },
            priority: {
                label: "Priority",
                checked: true
            },
            version: {
                label: "Version",
                checked: false
            },
            estimate: {
                label: "Estimate task point",
                checked: true
            }
        }
    }

    this._layoutOptions.setOptionsConfiguration(this._config);

    this._layoutOptions.on(EVENTS.LAYOUT_OPTIONS.LAYOUT_OPTIONS_CHANGED, this._onLayoutOptionsChanged, this);

    this._cardExample.updateData({
      	key: "FXM-1000",
      	title: "Update login-screen",
      	epic: "web components",
      	parent: "FXM-18",
        fields: {
            priority: {
              id: "4"
            },
            summary: "Update login screen with wecomponents",
            customfield_10243: 4
        }
    });

   	this._cardExample.updateConfig(this._config.parameters);
};

LayoutPanel._onLayoutOptionsChanged = function (config) {
    this._config.parameters = config;
    this._cardExample.updateConfig(this._config.parameters);
};

document.registerElement('jcm-layout-panel', {prototype: LayoutPanel});
