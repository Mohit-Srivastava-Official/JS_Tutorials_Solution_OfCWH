console.log("Hi, I am tutorial of chapter : 8 (Events & Other DOM Properties)");
var str="MohitSrivastava";
var geek =
{
    book:"HarryPotter",
    price:"0001"

};
var geek2=[10,20,30];
console.log(str);
console.dir(str);
console.log(geek);
console.dir(geek);
console.log("geek(log) = ",geek);
console.dir(geek2);
console.log("geek2(log = ",geek2);
//prints only string A DIR() takes  only one parameter
console.dir("geek2(dir) = ",geek2);
//https://www.geeksforgeeks.org/difference-between-console-dir-and-console-log-2/
//Node Name
let text=document.getElementById("demo").nodeName;
document.getElementById("demo").innerHTML=text;
let names=document.getElementById("demo1").tagName;
document.getElementById("demo1").innerHTML=names;
