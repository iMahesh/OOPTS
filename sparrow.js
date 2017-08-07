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
var Sparrow = (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow(age, gender, weightInLbs) {
        return _super.call(this, age, gender, weightInLbs) || this;
    }
    Sparrow.prototype.fly = function () {
        console.log("Sparrow is flying...");
    };
    return Sparrow;
}(Bird));
