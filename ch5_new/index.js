//1.Crating an array of numbers and taking input from user to add numbers to this array.
//To input numbers i.e.,integer values in JavaScript using the prompt() method,weneed to parse the input value because the prompt() method returns the string.To parse the prompt() method's returned value,we can use the parseInt() method,it accepts a string as a parameter and return an integer value
alert("Enter 5 numbers");
let a=[];
let sum=0;
for(let i=0;i<5;i++)

{

    var msg=prompt("Enter an integer value");
    a[i]=parseInt(msg);
    sum+=a[i];
}
// console.log(a[1]);
console.log(sum);
alert("Required sum is : "+(sum));
alert(`Required sum is ${sum}`);
// const divBy10 = (e)=>
// {
//     if(e%10==0)
//     {
//         return true;
//     }
//     return false;
// }
// alert(a.filter(divBy10));