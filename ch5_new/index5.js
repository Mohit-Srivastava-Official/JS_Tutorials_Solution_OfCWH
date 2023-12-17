//4.Creating an array of sqaure of given numbers
//Approach:1:Basics
let arr = [1,13,5,7,11]
// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);

// }
// console.log(newarr);
// alert(newarr);
// Approach:2: Using map
console.log(arr.map((value,index,array)=>{
    return value*value;
}));
let newarr=arr.map((value,index,array)=>{
    return value**2;
});
console.log(newarr);