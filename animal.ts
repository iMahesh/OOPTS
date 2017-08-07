class Animal {
    constructor(private _age:number,
    private _gender:string,
    private _weightInLbs:number){}

    eat():void{
        console.log("eating...");
    }

    sleep():void{
        console.log("sleeping...");
    }
}
