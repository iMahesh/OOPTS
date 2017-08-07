class Fish extends Animal {
    constructor(age: number, gender: string, weightInLbs: number) {
        super(age, gender, weightInLbs);
    }
    swim(): void {
        console.log("swimming...");
    }
}