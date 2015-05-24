var Task = function (taskData, epicData) {
	this._taskData = taskData;
	this._epicData = epicData;
	this._subTasks = [];
	
	if (this._taskData.fields.subtasks && this._taskData.fields.subtasks.length !== 0) {
		for (var i = 0, len =this._taskData.fields.subtasks.length ; i < len ;i++) {
			this._subTasks.push(new Task(this._taskData.fields.subtasks[i], this._epicData));
		}
	}
};

Task.prototype.getDescription = function () {
	return this._taskData.fields.summary;
};

Task.prototype.getKey = function () {
	return {
		key: this._taskData.key,
		id: this._taskData.key.split("-")[1],
		project: this._taskData.key.split("-")[0]
	}
};

Task.prototype.getPriority = function () {
	return {
		name: this._taskData.fields.priority.name,
		id: this._taskData.fields.priority.id
	}
};

Task.prototype.getEstimation = function () {
	return this._taskData.fields.customfield_10243;
};

Task.prototype.getStatus = function () {
	return {
		name: this._taskData.fields.status.name,
		color: this._taskData.fields.status.statusCategory.colorName
	}
};

Task.prototype.getSubTasks = function () {
	return this._subTasks;
};

Task.prototype.getEpics = function () {
	debugger;
};

Task.prototype.getType = function () {
	return this._taskData.fields.issuetype.name.replace(" ", "")
};

Task.prototype.getParent = function () {
	if (!this._taskData.parent) {
		return null;
	}

	return {
		key: this._taskData.parent,
		id: this._taskData.parent.split("-")[1],
		project: this._taskData.parent.split("-")[0]
	}
};

Task.prototype.setParent = function (parent) {
	this._taskData.parent = parent;
};

Task.prototype.getParentKey = function () {
	return this._taskData.parent;
};

module.exports = Task;
