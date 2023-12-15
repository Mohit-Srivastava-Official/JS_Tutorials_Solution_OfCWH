/*4."Please give Rs 1000"extracting the amount out of this string*/
function noex()
{
    let str="Please give Rs 1000";
    console.log(str);
    //Using match with regEx
    let matches=str.match(/(\d+)/);
    //Displaying output if number //extracted
    if(matches)
    {
        console.log(matches[0]);
    }
}
//function call
noex();
//5.Changing 4th character of a given //string
let str1="Please give Rs 1000";
let str2=str1.replace("1000","thousand");
console.log(str2);
//Yes.