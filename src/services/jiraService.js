var JiraService = function() {
	this.username = "";
	this.password = "";
	this.url = null;
    this.sprints = null;
};

JiraService.prototype.setAuthenticationDetails = function (params) {
    this.url = params.url;
    this.username = params.username;
    this.password = params.password;
};

JiraService.prototype.getBoards = function () {
    var self = this;
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://cors-anywhere.herokuapp.com/" + self.url + "/rest/greenhopper/1.0/rapidviews/viewsData.json");
        xhr.setRequestHeader("Authorization", "Basic " + btoa(self.username + ":" + self.password));

        xhr.onreadystatechange = function(response) {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText).views);
                } else {
                    reject(xhr.status);
                }
            }
        };

        xhr.setRequestHeader("x-requested-with", "love");
        xhr.send();
    });
};

JiraService.prototype.getSprints = function (rapidviewId) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://cors-anywhere.herokuapp.com/" + this.url + "/rest/greenhopper/1.0/xboard/plan/backlog/data.json?rapidViewId=" + rapidviewId);
        xhr.setRequestHeader("Authorization", "Basic " + btoa(this.username + ":" + this.password));

        xhr.onreadystatechange = function(response) {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    this.sprints = JSON.parse(xhr.responseText).sprints;
                    resolve(this.sprints);
                } else {
                    reject();
                }
            }
        }.bind(this);

        xhr.setRequestHeader("x-requested-with", "love");
        xhr.send();
    }.bind(this));
};

JiraService.prototype.getTasksIds = function (sprintId) {
    for (var i = 0, len = this.sprints.length ; i < len ; i++) {
        if (this.sprints[i].id == sprintId) {
            return this.sprints[i].issuesIds;
        }
    }
};

JiraService.prototype._jiraIdToString = function (jiraIds) {
    var retunValue = "";

    for (var i = 0, len = jiraIds.length ; i < len ; i++) {
        if (i != 0) {
            retunValue = retunValue + "+or+";
        }
        retunValue = retunValue + "issue=" + jiraIds[i];
    }
    return retunValue;
};

JiraService.prototype.getTasksDetails = function (tasksId) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://cors-anywhere.herokuapp.com/" + this.url + "/rest/api/latest/search?jql=" + this._jiraIdToString(tasksId) + "&maxResults=1000");
        xhr.setRequestHeader("Authorization", "Basic " + btoa(this.username + ":" + this.password));

        xhr.onreadystatechange = function(response) {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText).issues);
                } else {
                    reject();
                }
            }
        }.bind(this);

        xhr.setRequestHeader("x-requested-with", "love");
        xhr.send();
    }.bind(this));
};

module.exports = JiraService;