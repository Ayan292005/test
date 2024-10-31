
// 3
// function capitals(sentence) {
//     words[i]=words[i][0]+ words[i].slice(1)

// }
// let sent="ayan axundova"
// console.log(capitals(sent));



// 2
Array.prototype.Custom = function () {
    for (let i = 0; i < this.length; i++) {
    
   this[i]= i+1 + " ~ " + this[i]

    }
    return this
}
let arr2=["alma","armud","mandarin"]
let result2 = arr2.Custom();
console.log(result2);


// 1
// Array.prototype.CustomMap = function (value,index,array) {
//     let newArr=[]
// for (let i = 0; i < array.length; i++) {
//     this
    
// }
// }
// let arr=[12,23,34,45,56]
// let result = arr.CustomMap();
// console.log(result);


// 3
String.prototype.CustomCapitals = function (params) {
    for (let i = 0; i < words.length; i++) {
        words[i]=words[i][0]+ words[i].slice(1)
        
    }
}