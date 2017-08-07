"use strict";
var animal1 = new Animal(12, 'M', 12);
animal1.eat();
animal1.sleep();
var bird1 = new Bird(2, "F", 5);
// bird1.fly(); //fly() no longer available in Bird
bird1.eat();
bird1.sleep();
var fish1 = new Fish(3, "M", 2);
fish1.swim();
fish1.eat();
fish1.sleep();
var chicken1 = new Chicken(1, "M", 5);
chicken1.eat();
// chicken1.fly();//Chicken can't fly
var sparrow1 = new Sparrow(2, "F", 1);
sparrow1.fly(); //sparrow can fly. 
