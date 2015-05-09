"use strict";

module.exports = function (target) {
    var events = {}
    target = target;

    target.on = function (eventId, callback, context) {
        (events[eventId] = events[eventId] || []).push([callback, context]);
    }

    target.off = function (eventId, callback) {
        if (arguments.length === 0) {
            //clear all listeners for this object
            events = {};
        } else if (arguments.length === 1) {
            //clear all listeners for a particular eventId
            events[eventId] = [];
        } else {
            //clear a listener with specific context for a particular eventId
            var callbackList = events[eventId] || [];

            for (var i = callbackList.length - 1 ; i >= 0 ; i--) {
                if (callbackList[i][0] === callback) {
                    callbackList.splice(i, 1);
                }
            };
        }
    }

    target.trigger = function (eventId) {
        var callbackList = events[eventId] || [];
        var args = Array.prototype.slice.call(arguments, 1);

        for (var i = callbackList.length - 1 ; i >= 0 ; i--) {
            callbackList[i][0].apply(callbackList[i][1], args);
        };
    };
}
