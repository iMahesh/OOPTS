class Sparrow extends Bird implements Flyable {
    constructor(name: string, age: number, gender: string, weightInLbs: number) {
        super(name, age, gender, weightInLbs);
    }
    fly(): void {
        console.log("Sparrow is flying...")
    }

} 