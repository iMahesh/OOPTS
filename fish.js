"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, gender, weightInLbs) {
        var _this = _super.call(this, age, gender, weightInLbs) || this;
        _this.name = name;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log("swimming...");
    };
    //abstract method
    Fish.prototype.move = function () {
        console.log(this.name + " is swimming");
    };
    return Fish;
}(Animal));
