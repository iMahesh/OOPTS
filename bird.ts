class Bird extends Animal{
    constructor(age:number,gender:string,weightInLbs:number){
        super(age,gender,weightInLbs);
    }
    fly(): void {
        console.log("flying...");
    }
}