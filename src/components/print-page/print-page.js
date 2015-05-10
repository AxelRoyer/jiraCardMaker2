"use strict";

var PrintPage = Object.create(HTMLElement.prototype);

PrintPage.createdCallback = function() {
};

PrintPage.attachedCallback = function() {
};

PrintPage.show = function (params) {
    this.style.display = "block";
    
    for (var i = 0, len = params.tasks.length ; i < len ; i++) {
        var card = document.createElement("jcm-card");
        this.appendChild(card);

        card.updateData(params.tasks[i]);
        card.updateConfig(params.config);
    }
};

document.registerElement('selection-print-page', {prototype: PrintPage});
