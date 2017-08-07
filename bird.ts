class Bird extends Animal {
    constructor(age: number, gender: string, weightInLbs: number) {
        super(age, gender, weightInLbs);
    }
    //abstract method
    move(): void {
        console.log("Flapping wings...");
    }
}