// let animal1: Animal = new Animal(12, 'M', 12); // no longer create an instance as Animal is an abstract class
// animal1.eat();
// animal1.sleep();
console.log("==========bird1==========");
let bird1: Bird = new Bird("Bird1", 2, "F", 5);
// bird1.fly(); //fly() no longer available in Bird
bird1.eat();
bird1.sleep();

console.log("==========fish1==========");
let fish1: Fish = new Fish("fish1",3, "M", 2);
fish1.swim();
fish1.eat();
fish1.sleep();
moveAnimals(fish1);

console.log("==========chicken1==========");
let chicken1: Bird = new Chicken("chicken1", 1, "M", 5); //You can either use chicken1:Bird or chicken1:Chicken 
chicken1.eat();
// chicken1.fly();//Chicken can't fly
moveAnimals(chicken1);

console.log("==========sparrow1==========");
let sparrow1: Sparrow = new Sparrow("sparrow1", 2, "F", 1);
sparrow1.fly(); //sparrow can fly. You can't use fly() for sparrow1 if you declare its type to Bird as Bird(parent) can't inherit methods of Sparrow(child) so we have to use sparrow1:Sparrow
moveAnimals(sparrow1);

//Polymorphism
function moveAnimals(animal: Animal): void {
    animal.move();
}