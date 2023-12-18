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