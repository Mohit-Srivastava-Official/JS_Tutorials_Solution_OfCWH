//3.using console.error to log the error if the age entered is negative.
let age=prompt("Enter your age");
if(age>=18)
{
    alert("You can drive");
}
else if(age<0)
{
    console.error("Age entered is negative.");
}
else
{
    alert("You cannot drive");
}