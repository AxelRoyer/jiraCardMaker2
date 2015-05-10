var AuthenticationPanel = Object.create(HTMLElement.prototype);

var Emitr = require("./../../services/emitr");
var templateService = require("./../../services/templateService");

var EVENTS = require("../../events");

Emitr(AuthenticationPanel);

AuthenticationPanel.createdCallback = function () {
    this.button = null;
    this.username = null;
    this.password = null;
    this.url = null;
    this.jiraOnDemand = null;
};

AuthenticationPanel.attachedCallback = function () {
    var template = templateService.getTemplate("authentication-panel");
    this.appendChild(template);

    this.button = this.querySelector(".authentication-button");
    this.username = this.querySelector(".authentication-username");
    this.password = this.querySelector(".authentication-password");
    this.url = this.querySelector(".authentication-url");

    this.button.addEventListener("click", this.onButtonClicked.bind(this), false);
};

AuthenticationPanel.onButtonClicked = function () {
	this.trigger(EVENTS.AUTHENTICATION_PANEL.AUTHENTICATION_SUBMITTED, {
		username: this.username.value,
		password: this.password.value,
		url: this.url.value
	});
};

document.registerElement('jcm-authentication-panel', {prototype: AuthenticationPanel});

module.exports = AuthenticationPanel;