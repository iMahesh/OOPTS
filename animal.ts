class Animal {
    age:number;
    gender:string;
    weightInLbs:number;
    constructor(age:number,gender:string,weightInLbs:number){
        this.age=age;
        this.gender=gender;
        this.weightInLbs=weightInLbs;
    }

    eat():void{
        console.log("eating...");
    }

    sleep():void{
        console.log("sleeping...");
    }
}
