let x=prompt("Choose B:(Blue) or R:(Red) or Y:(Yellow)")
if(x=='B' || x=='b' || x=='Blue')
{
    document.body.style.backgroundColor="blue";

}
else if(x=='R' || x=='r' || x=="Red")
{

    document.body.style.backgroundColor="red";

}
else if(x=='Y' || x=='y' || x=='Yellow')
{
    document.body.style.backgroundColor="yellow";

}
else
{
    alert("Invalid Code")
}