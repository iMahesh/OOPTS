"use strict";
var Bird = (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("flying...");
    };
    return Bird;
}());
