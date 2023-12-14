//QUICK QUIZ: Writing  a sample of for loop
for(let i=1;i<105;i++)
{
    console.log(i);
}
//QUICK QUIZ:for-in loop (keys)
let Human=
{
    Name:"Mohit Srivastava",
    State:"Hard-Working"
}
for(const key in Human)
{
    console.log(key);
}
//Quick Quiz:for-of loop(values)
for(const value of "Human")
{
    console.log(value);
}
for (const key in Human) {
    if (Object.hasOwnProperty.call(Human, key)) {
        const values = Human[key];
        console.log(key,values)

    }
}
//Quick Quiz while loop
let m=0;
while(m<15)
{
    console.log(m);
    m++;
}
//Quick Quiz do-while loop
let n=10;
do
{
    console.log("Hello");
    n++;

}
while(n<9);