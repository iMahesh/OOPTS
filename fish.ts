class Fish extends Animal {
    name: string;
    constructor(name: string, age: number, gender: string, weightInLbs: number) {
        super(age, gender, weightInLbs);
        this.name = name;
    }
    swim(): void {
        console.log("swimming...");
    }
    //abstract method
    move(): void {
        console.log(`${this.name} is swimming`);
    }
}