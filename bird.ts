class Bird extends Animal {
    name:string;
    constructor(name:string, age: number, gender: string, weightInLbs: number) {
        super(age, gender, weightInLbs);
        this.name = name;
    }
    //abstract method
    move(): void {
        console.log(`${this.name} Flapping wings...`);
    }
}