console.log("Hi,I am Practice set of Chapter-4");
//1.
// consolee.log("har\"".length);
//Error
//2.includes,startsWith and endsWith functions of a string
/*
The includes() method returns true if a string contains a specified string.

Otherwise it returns false.

The includes() method is case sensitive.
string.includes(searchvalue, start)
 */
let text="Hello world,welcome to te universe.";
let result=text.includes("world");
console.log(result);
let sname ="Mohit";
let ans=sname.includes("h",3);
console.log(ans);
let hero="Sunny";
let ans2=hero.startsWith("y",4);
console.log(ans2);
let hero1="Sunny";
let ans22=hero.endsWith("ny");
console.log(ans22);
//3.toLowercase
let h="HArrY";
console.log(h.toLowerCase());
