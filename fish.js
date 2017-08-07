"use strict";
var Fish = (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("swimming...");
    };
    return Fish;
}());
