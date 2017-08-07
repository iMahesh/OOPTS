class Sparrow extends Bird implements Flyable {
    constructor(age: number, gender: string, weightInLbs: number) {
        super(age, gender, weightInLbs);
    }
    fly(): void {
        console.log("Sparrow is flying...")
    }

}