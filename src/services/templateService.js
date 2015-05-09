var templateService = {};

templateService.getTemplate = function(id) {
    var link = document.querySelector('link[rel="import"][data-id="' + id + '"');
    var template = link.import.querySelector("template");
    return template.content;
};

module.exports = templateService;