var Task = require("./task");

var JiraAdapater = function() {
	this._username = null;
	this._password = null;
	this._url = null;

    this._sprints = null;
    this._epics = null;
    this._tasks = null;
};

JiraAdapater.prototype.setAuthenticationDetails = function (params) {
    this._url = params.url;
    this._username = params.username;
    this._password = params.password;
};

JiraAdapater.prototype.getBoards = function () {
    var self = this;

    return new Promise (function (resolve, reject) {
        var url = "https://cors-anywhere.herokuapp.com/" + self._url + "/rest/greenhopper/1.0/rapidviews/viewsData.json";

        var onSucess = function (response) {
            resolve(response.views);
        };

        var onError = function (response) {
            reject();
        };

        self._getData({url: url, requestType: "GET"}).then(onSucess, onError);
    });
};

JiraAdapater.prototype.getSprints = function (rapidviewId) {
    var self = this;

    return new Promise(function(resolve, reject) {
        var url = "https://cors-anywhere.herokuapp.com/" + self._url + "/rest/greenhopper/1.0/xboard/plan/backlog/data.json?rapidViewId=" + rapidviewId;

        var onSucess = function (response) {
            self._epics = response.epicData;
            self._sprints = response.sprints;
            resolve(response);            
        };

        var onError = function (response) {
            reject(response);
        };

        self._getData({url: url, requestType: "GET"}).then(onSucess, onError);
    });
};

JiraAdapater.prototype.getTasksDetails = function (sprintId) {
    var tasksId = this._getTasksIds(sprintId);
    var self = this;

    return new Promise(function(resolve, reject) {
        var url = "https://cors-anywhere.herokuapp.com/" + self._url + "/rest/api/latest/search?jql=" + self._jiraIdToString(tasksId) + "&maxResults=1000";

        var onSucess = function (response) {
            resolve(self._computeTasks(response.issues));            
        };

        var onError = function (response) {
            reject(response);
        };

        self._getData({url: url, requestType: "GET"}).then(onSucess, onError);
    });
};

/*********** Private methods **************/

JiraAdapater.prototype._computeTasks = function (tasksToCompute) {
    var tasks = [];

    for (var i = 0, len = tasksToCompute.length ; i < len ; i++) {
        tasks.push(new Task(tasksToCompute[i], this._epics));
    }
    return tasks;
};

JiraAdapater.prototype._getTasksIds = function (sprintId) {
    for (var i = 0, len = this._sprints.length ; i < len ; i++) {
        if (this._sprints[i].id == sprintId) {
            return this._sprints[i].issuesIds;
        }
    }
};

JiraAdapater.prototype._jiraIdToString = function (jiraIds) {
    var retunValue = "";

    for (var i = 0, len = jiraIds.length ; i < len ; i++) {
        if (i != 0) {
            retunValue = retunValue + "+or+";
        }
        retunValue = retunValue + "issue=" + jiraIds[i];
    }
    return retunValue;
};

JiraAdapater.prototype._getData = function (params) {
        return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(params.requestType, params.url);
        xhr.setRequestHeader("Authorization", "Basic " + btoa(this._username + ":" + this._password));

        xhr.onreadystatechange = function(response) {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject();
                }
            }
        }.bind(this);

        xhr.setRequestHeader("x-requested-with", "love");
        xhr.send();
    }.bind(this));
};

module.exports = JiraAdapater;