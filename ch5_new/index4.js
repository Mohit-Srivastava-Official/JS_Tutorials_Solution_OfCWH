// Filter for numbers divisible by 10
let a=[10,8,9,20,19,29,50];

const divBy10 =(e)=>
{
    if(e%10==0)
    {
        return true;
    }
    return false;
}
console.log(a.filter(divBy10));
alert(a.filter(divBy10));