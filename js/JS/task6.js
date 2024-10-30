function Product(id,name,price) {
    this.id=id,
    this.name=name,
    this.price=price
}

function Milk(id,name,price,FatProcent,MadeIn) {
    Product.call(this,id,name,price)
    this.FatProcent=FatProcent,
    this.MadeIn=MadeIn
}

Object.setPrototypeOf(Milk.prototype,Product.prototype)

let milk1= new Milk(1,"azersud",2,2,"azerbaijan")
let milk2= new Milk(2,"milla",3.5,3,"azerbaijan")
let milk3= new Milk(3,"USAmilk",4,4,"usa")

let milks=[]
milks.push(milk1,milk2,milk3)
// console.log(milks);


//1
// milks.forEach(milk=>console.log(milk))

// 2
// let id=milks.find(value=>value.id=1)
// console.log(id);

// 3
// let sum=milks.reduce((total,value)=>{return total+value.FatProcent},0)
// console.log(sum/milks.length);

// 4
// let per=milks.filter(value=>value.FatProcent>=3)
// console.log(per);

// 5
// let artir=milks.map(value=>value.price*2)
// console.log(artir);

// 6
// let sum=milks.reduce((total,value)=>{return total+value.price},0)
// console.log(Math.round(sum/milks.length));

// 8
// let max=milks.toSorted((a,b)=>b.price - a.price)
// console.log(max[0].name);


// 9
// let min=milks.toSorted((a,b)=>b.price - a.price)
// console.log(min[0].price - min.at(-1).price);


// 10
// let azerb=milks.some(value=>value.MadeIn=="azerbaijan")
// console.log(azerb);