class Product{
    constructor(id,name,price){   
    this.id=id,
    this.name=name,
    this.price=price
}
}

class Milk extends Product{
    constructor(id,name,price,FatProcent,MadeIn){
        super(id,name,price)
        this.FatProcent=FatProcent,
        this.MadeIn=MadeIn
        
    }
}

let milk1= new Milk(1,"azersud",2,2,"azerbaijan")
let milk2= new Milk(2,"milla",3.5,3,"azerbaijan")
let milk3= new Milk(3,"USAmilk",4,4,"usa")

console.log(milk1);
