//1.Program using prompt function to take age from user and using alert to tell him if he can drive.
let age=prompt("Enter your age");
if(age>=18)
{
    alert("You can drive");
}
else
{
    alert("You cannot drive");
}
//2.Using confirm to ask the user if he wants to see the prompt again.
if(confirm("Do you want to see the prompt again?")==true)
{
     age=prompt("Enter your age");
if(age>=18)
{
    alert("You can drive");
}
else
{
    alert("You cannot drive");
}
}
else
{
    alert("Have, a good day ");
}