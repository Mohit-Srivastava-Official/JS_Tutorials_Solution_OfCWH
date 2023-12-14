//Functions in JavaScript
function nice(name)
{
    console.log("Hey "+name+" how are you?");
    console.log("Hey "+name+",okay");
}
nice("Mohit");
function sum(a,b,c=1)
{
    console.log(a,b,c);
    return a+b+c;
}
r1=sum(7,9);
console.log("sum is : ",r1);
//Arrow function
const func1=(x)=>
{
    console.log("I am an arrow function",x)
}
func1(45);
