"use strict";
var Animal = (function () {
    function Animal(_age, _gender, _weightInLbs) {
        this._age = _age;
        this._gender = _gender;
        this._weightInLbs = _weightInLbs;
    }
    Animal.prototype.eat = function () {
        console.log("eating...");
    };
    Animal.prototype.sleep = function () {
        console.log("sleeping...");
    };
    return Animal;
}());
