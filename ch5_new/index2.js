// alert("Enter 5 numbers");
let a= [];
let sum = 0;
let x =prompt("Enter number of elements in the array");
console.log(typeof x);
let m=parseInt(x);
console.log(typeof x);
for(let i=0;i<m;i++)
{

    var msg=prompt("Enter an integer value " );
    a[i]=parseInt(msg);
    // console.log(typeof a[i]);
    sum+=a[i];
    if(a[i]==0)
    {
        break;
    }
    
}
alert("Required sum is : " +(sum));
