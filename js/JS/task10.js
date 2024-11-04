let array=[32,25,85,89,45,76,7,41,2,12]

1
array.forEach(value=>value)
console.log(array);

2
let arr2=array.sort((a,b)=>b-a)
console.log(arr2[0]);

3
array.push(15)
console.log(array);
4
array.shift()
console.log(array);
5
array.sort()
console.log(array.at(-1));

6
array.splice(3,0,43)
console.log(array);

7
let arr7=array.slice(3)
console.log(arr7);


8
array.forEach(value=>value)
console.log(array);
9
let arr9=array.filter(value=>{
    return value>40
})
console.log(arr9);

