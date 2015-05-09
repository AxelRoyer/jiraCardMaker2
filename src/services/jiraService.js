var JiraService = function() {
	this.username = "axelrb";
	this.password = "ctdSeVDp:)";
	this.url = null;
    this.sprints = null;
};

JiraService.prototype.setAuthenticationDetails = function (params) {
    this.url = params.url;
    this.username = params.username;
    this.password = params.password;
};

JiraService.prototype.getBoards = function () {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://jira.caplin.com/rest/greenhopper/1.0/rapidviews/viewsData.json");
        xhr.setRequestHeader("Authorization", "Basic " + btoa(this.username + ":" + this.password));

        xhr.onreadystatechange = function(response) {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText).views);
                } else {
                    reject();
                }
            }
        };

        xhr.setRequestHeader("x-requested-with", "love");
        xhr.send();
    }.bind(this));
};

JiraService.prototype.getSprints = function (rapidviewId) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://jira.caplin.com/rest/greenhopper/1.0/xboard/plan/backlog/data.json?rapidViewId=80");
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

JiraService.prototype.getTasks = function (sprintId) {
    return this.sprints[sprintId].issuesIds;
};

module.exports = JiraService;