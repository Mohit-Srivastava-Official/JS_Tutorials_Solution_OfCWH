// 1.Creating a variable of type string and adding a number to it
let m = "mohit";
m = m + 5;
console.log(m);
//2.finding its datatype
console.log(typeof m);
//3.Creating a constant object in java-script
// const s=10284;
// // s=s+2;
//  console.log(s);
const s =
{
    name: "Mohit",
    roll: "10284",
    semester:"ss"
}
// const s =
// {
//     Skill:"web"
// }
for (const key in s) {
    if (Object.hasOwnProperty.call(s, key)) {
        const element = s[key];
        console.log(key,element);

    }
}
//4.NOPE
//5.Dictionary of 5 words
// JavaScript mei object,key,value/element
let Dictionary=
{
    Wrath:"Anger",
    Wrath1:"Anger2",
    Wrath2:"Anger3",
    Wrath3:"Anger4",
    Wrath4:"Anger5"
}
for (const key in Dictionary) {
    if (Object.hasOwnProperty.call(Dictionary, key)) {
        const element = Dictionary[key];
        console.log(key,element);

    }
}



