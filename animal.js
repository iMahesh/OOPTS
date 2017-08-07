"use strict";
var Animal = (function () {
    function Animal(age, gender, weightInLbs) {
        this.age = age;
        this.gender = gender;
        this.weightInLbs = weightInLbs;
    }
    Animal.prototype.eat = function () {
        console.log("eating...");
    };
    Animal.prototype.sleep = function () {
        console.log("sleeping...");
    };
    return Animal;
}());
