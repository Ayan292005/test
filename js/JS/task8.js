class Device{
    constructor(Brand,Model,Screensize,Batterylevel,Price,newPrice,Count){

        if(Price>newPrice){
            throw new Error("Maya deyeri boyuk olmamalidir")
        }
        this.Brand=Brand,
        this.Model=Model,
        this.Screensize=Screensize,
        this.Batterylevel=Batterylevel,
        this.Price=Price,
        this.newPrice=newPrice,
        this.Count=Count
    }

    CalcProfit(){
        let profit=(this.newPrice-this.Price)*this.Count
        return profit
    }

    DisplayBatteryLevel(){
        return `${this.Batterylevel}`
    }

    DisplayDetails(){
        return `${this.Screensize},${this.Model},${this.Brand}`
    }
}

class Phone extends Device{
    constructor(Brand,Model,Screensize,Batterylevel,Price,newPrice,Count,IsSmart){
        super(Brand,Model,Screensize,Batterylevel,Price,newPrice,Count)
        this.IsSmart=IsSmart
}
}

class Laptop extends Device{
    constructor(Brand,Model,Screensize,Batterylevel,Price,newPrice,Count,isRGBkeyboard){
        super(Brand,Model,Screensize,Batterylevel,Price,newPrice,Count)
        this.isRGBkeyboard=isRGBkeyboard
}
}

let smartPhone= new Phone("samsung","s24",6.2,"3880mAh",700,1100,100,true)
console.log(smartPhone);

let Comp=new Laptop("Asus","TUF gaming F15",15.6,"5800mAh",1200,2000,30,true)
console.log(Comp);


// 1
