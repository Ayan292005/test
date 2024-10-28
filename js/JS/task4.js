// let arr1=[1,2,3]
// let arr2=[4,5,6]


// function myFunc(firstArr,secondArr) {
//     let res=firstArr.concat(secondArr)
//     return res
// }

// console.log(myFunc(arr1,arr2))





// function myFunc2(a,b) {
// return Array(a).fill(b); 
// }
// let res= myFunc2(6,0);
// console.log(res);





// function myFunc3(arr,a,b) {

//     let [element] = arr.splice(a, 1);
//     arr.splice(b, 0, element);
//     return arr;
// }
// let array = [1, 2, 3, 4, 5];
// let result = myFunc3(array, 2, 4);
// console.log(result);




// function myFunc4(a,b) {
//     let arr=[];
//     for (let i = a; i <=b; i++) {
//         arr.push(i)
        
//     }
//     return arr
// }
// let res=myFunc4(1,5)
// console.log(res);


// let str="5.5.5.5.5";
// let arr=str.split("");
// if(){

// }



function myFunc12(sentence) {
    let words = sentence.split(' ');
    let capitWords = [];

    for (i = 0; i < words.length; i++) {
        let word = words[i];
        let capitWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitWords.push(capitWord);
    }

    return capitWords.join(' ');
}

let sentence = "a short sentence";
let capitSentence = myFunc12(sentence);
console.log(capitSentence); 