// let arr=[10,25,32,47,55,63,74]
// let newArr=[]
// let newArr2=[]


// 1
// for (let i = 0; i <arr.length; i++) {
//   if (arr[i]%2===0) {
//     newArr2.push(arr[i])
//  }      
// else{
//     newArr.push(arr[i])
// }
// }
// console.log(newArr2.concat(newArr));






// 2
// let arr2=arr.sort((a,b)=>a-b)
// console.log(arr2[0],arr2.at(-1));

// let arr3=arr.sort((a,b)=>a-b).slice(1,6)
// console.log(arr3);


// 2 another way
// function myFunc(arr) {
//     let max=0
//     for (let i = 0; i < arr.length; i++) {
//         if (max<arr[i]) {
       
//             max=arr[i]
//         }
      
        
//     }
// return max


// }
// let newArray2=[1,2,34,56,25]
// myFunc(newArray2);

// function myFunc2(arr) {
//     let max=myFunc(arr)
//     let min=max
//     for (let i = 0; i < arr.length; i++) {
//         if (min>arr[i]) {
       
//             min=arr[i]
//         }
      
        
//     }

// console.log(min)
// }
// let newArray22=[1,2,34,56,25]
// myFunc2(newArray22);


// 3

// function myFunc3(arr) {
//     let newArr3=[]
//    for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//         newArr3.push(arr[i]);
//     }
    
//   }
// } 
// return newArr3
// }
// let array3=[12,12,3,45,56,23,45,7,23]
// let res=myFunc3(array3)
// console.log(res);


// 4
// function myFunc4(string,char) {
//     let sum=0
//     for (let i = 0; i < string.length; i++) {
//         if (string[i]===char) {
         
//            sum+=i
//         }
//     }
//     return sum
// }
// let str="hello"
// let chr="b"
// console.log(myFunc4(str,chr));

// 5
// function myFunc5(str) {
//     let count=0
//     for (let i = 0; i < str.length; i++) {
// if (str[i]==" ") {
//     count++
// }
// }
// return count+1
// }

// let text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
// let say=myFunc5(text)
// console.log(say);

function myFunc55(str){
    let count=0
    let arr=[]
    for (let i = 0; i < str.length; i++) {
        let char=str[i]
        if (char===" " && char===".") {
        if(count>0){
            arr.push(count)
            count=0
        }
        }else{
            count++
        }
    }
    return arr
}
let text1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
let say1=myFunc55(text1)
console.log(say1);
